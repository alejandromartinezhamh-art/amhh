import { Composition } from "remotion";
import { NegocioParalelo } from "./NegocioParalelo/NegocioParalelo";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="NegocioParalelo"
      component={NegocioParalelo}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
