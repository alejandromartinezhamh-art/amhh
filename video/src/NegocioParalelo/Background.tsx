import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors } from "./theme";

// Continuously moving gradient blobs so no frame of the video is ever static.
export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / 30;

  const blob = (
    color: string,
    size: number,
    x: number,
    y: number,
    speed: number,
    phase: number,
  ) => (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: "blur(140px)",
        opacity: 0.55,
        left: x + Math.sin(t * speed + phase) * 180,
        top: y + Math.cos(t * speed * 0.8 + phase) * 240,
      }}
    />
  );

  const gridOffset = interpolate(frame, [0, 450], [0, 240]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${colors.bg1} 0%, ${colors.bg2} 100%)`,
        overflow: "hidden",
      }}
    >
      {blob(colors.accent2, 900, -250, 200, 0.6, 0)}
      {blob("#3a86ff", 800, 500, 1100, 0.5, 2)}
      {blob(colors.accent, 500, 450, -100, 0.7, 4)}
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.05) 2px, transparent 2px)",
          backgroundSize: "120px 120px",
          backgroundPosition: `0px ${gridOffset}px`,
        }}
      />
    </AbsoluteFill>
  );
};
