import { Caption, createTikTokStyleCaptions } from "@remotion/captions";
import { useMemo } from "react";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { bodyFont, colors, SAFE_X } from "./theme";

// Spreads the words of a sentence evenly between startMs and endMs.
// "|" marks where a new caption page starts, so phrases are never split mid-idea.
export const words = (
  sentence: string,
  startMs: number,
  endMs: number,
): Caption[] => {
  const phrases = sentence.split("|").map((p) => p.trim().split(" "));
  const total = phrases.flat().length;
  const step = (endMs - startMs) / total;
  let i = 0;
  return phrases.flatMap((phrase) =>
    phrase.map((w, j) => {
      const caption: Caption = {
        text: j === 0 ? w : ` ${w}`,
        startMs: Math.round(startMs + i * step),
        endMs: Math.round(startMs + (i + 1) * step),
        timestampMs: Math.round(startMs + (i + 0.5) * step),
        confidence: null,
        pageBreakAfter: j === phrase.length - 1,
      };
      i++;
      return caption;
    }),
  );
};

const CaptionPage: React.FC<{
  tokens: { text: string; fromMs: number; toMs: number }[];
  startMs: number;
}> = ({ tokens, startMs }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const nowMs = startMs + (frame / fps) * 1000;

  const enter = spring({ frame, fps, config: { damping: 12, mass: 0.6 } });

  return (
    <div
      style={{
        position: "absolute",
        left: SAFE_X,
        right: SAFE_X,
        bottom: 380,
        textAlign: "center",
        fontFamily: bodyFont,
        fontWeight: 900,
        fontSize: 88,
        lineHeight: 1.15,
        wordSpacing: "0.12em",
        textTransform: "uppercase",
        color: colors.text,
        WebkitTextStroke: "14px #000",
        paintOrder: "stroke fill",
        transform: `scale(${0.8 + enter * 0.2}) translateY(${(1 - enter) * 40}px)`,
        overflowWrap: "break-word",
        textWrap: "balance",
      }}
    >
      {tokens.map((t) => {
        const active = nowMs >= t.fromMs && nowMs < t.toMs;
        const localFrame = Math.max(0, ((nowMs - t.fromMs) / 1000) * fps);
        const pop = active
          ? spring({ frame: localFrame, fps, config: { damping: 10 } })
          : 0;
        // Keep the space outside the scaled span so the pop never eats it.
        return (
          <span key={t.fromMs}>
            {t.text.startsWith(" ") ? " " : ""}
            <span
              style={{
                display: "inline-block",
                color: active ? colors.accent : colors.text,
                transform: `scale(${1 + pop * 0.08})`,
              }}
            >
              {t.text.trim()}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export const AnimatedCaptions: React.FC<{ captions: Caption[] }> = ({
  captions,
}) => {
  const { fps } = useVideoConfig();
  const { pages } = useMemo(
    () =>
      createTikTokStyleCaptions({
        captions,
        combineTokensWithinMilliseconds: 10000,
      }),
    [captions],
  );

  return (
    <AbsoluteFill>
      {pages.map((page, i) => {
        const next = pages[i + 1];
        const endMs = next ? next.startMs : page.startMs + page.durationMs;
        const from = Math.round((page.startMs / 1000) * fps);
        const duration = Math.max(
          1,
          Math.round((endMs / 1000) * fps) - from,
        );
        return (
          <Sequence
            key={page.startMs}
            from={from}
            durationInFrames={duration}
            layout="none"
            name={`Caption: ${page.text.trim()}`}
          >
            <CaptionPage tokens={page.tokens} startMs={page.startMs} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
