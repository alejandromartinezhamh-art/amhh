import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { Background } from "./Background";
import {
  HookScene,
  OutroScene,
  Point1Scene,
  Point2Scene,
  Point3Scene,
} from "./Scenes";

// 15 s @ 30 fps = 450 frames: 100 + 115 + 115 + 115 + 65 - 4 * 15 (transitions)
export const NegocioParalelo: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Background />
      <TransitionSeries>
        <TransitionSeries.Sequence
          name="Gancho"
          durationInFrames={100}
          premountFor={fps}
        >
          <HookScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="Punto 1"
          durationInFrames={115}
          premountFor={fps}
        >
          <Point1Scene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="Punto 2"
          durationInFrames={115}
          premountFor={fps}
        >
          <Point2Scene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="Punto 3"
          durationInFrames={115}
          premountFor={fps}
        >
          <Point3Scene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence
          name="Cierre"
          durationInFrames={65}
          premountFor={fps}
        >
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
