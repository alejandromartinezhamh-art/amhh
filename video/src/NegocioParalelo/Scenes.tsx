import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AnimatedCaptions, words } from "./AnimatedCaptions";
import { bodyFont, colors, headlineFont, SAFE_X } from "./theme";

const useEnter = (delay = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - delay, fps, config: { damping: 14 } });
};

// Slow continuous zoom so the text block keeps moving while it is on screen.
const useDrift = () => {
  const frame = useCurrentFrame();
  return interpolate(frame, [0, 120], [1, 1.06]);
};

const Headline: React.FC<{
  children: React.ReactNode;
  size?: number;
  color?: string;
}> = ({ children, size = 130, color = colors.text }) => (
  <div
    style={{
      fontFamily: headlineFont,
      fontSize: size,
      lineHeight: 1.02,
      color,
      textTransform: "uppercase",
      textAlign: "center",
      textShadow: "0 12px 40px rgba(0,0,0,0.5)",
    }}
  >
    {children}
  </div>
);

const Sub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      fontFamily: bodyFont,
      fontWeight: 800,
      fontSize: 62,
      lineHeight: 1.2,
      color: "rgba(255,255,255,0.85)",
      textAlign: "center",
      marginTop: 36,
      textWrap: "balance",
    }}
  >
    {children}
  </div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      paddingLeft: SAFE_X,
      paddingRight: SAFE_X,
      paddingTop: 260,
      alignItems: "center",
      justifyContent: "flex-start",
    }}
  >
    {children}
  </AbsoluteFill>
);

export const HookScene: React.FC = () => {
  // Negative delays: the hook is already readable on frame 1 (the thumbnail).
  const a = useEnter(-12);
  const b = useEnter(-4);
  const drift = useDrift();
  return (
    <AbsoluteFill>
      <Layout>
        <div style={{ transform: `scale(${drift})`, marginTop: 120 }}>
          <div
            style={{
              opacity: a,
              transform: `translateY(${(1 - a) * 80}px)`,
            }}
          >
            <Headline size={150}>¿Por qué monto</Headline>
            <Headline size={150}>un negocio</Headline>
          </div>
          <div style={{ transform: `scale(${b})`, marginTop: 20 }}>
            <div
              style={{
                background: colors.accent,
                padding: "10px 40px",
                transform: "rotate(-3deg)",
              }}
            >
              <Headline size={170} color="#000">
                paralelo?
              </Headline>
            </div>
          </div>
        </div>
      </Layout>
      <AnimatedCaptions
        captions={words("Te cuento | por qué monto | un negocio paralelo", 0, 2900)}
      />
    </AbsoluteFill>
  );
};

const PointScene: React.FC<{
  n: number;
  title: string[];
  sub: string;
  caption: string;
  accent: string;
}> = ({ n, title, sub, caption, accent }) => {
  const numberIn = useEnter(0);
  const titleIn = useEnter(6);
  const subIn = useEnter(14);
  const drift = useDrift();
  return (
    <AbsoluteFill>
      <Layout>
        <div style={{ transform: `scale(${drift})` }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              transform: `scale(${numberIn}) rotate(${(1 - numberIn) * -40}deg)`,
            }}
          >
            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                background: accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 80px ${accent}`,
              }}
            >
              <Headline size={190} color="#000">
                {n}
              </Headline>
            </div>
          </div>
          <div
            style={{
              marginTop: 60,
              opacity: titleIn,
              transform: `translateX(${(1 - titleIn) * -200}px)`,
            }}
          >
            {title.map((line) => (
              <Headline key={line}>{line}</Headline>
            ))}
          </div>
          <div
            style={{
              opacity: subIn,
              transform: `translateY(${(1 - subIn) * 40}px)`,
            }}
          >
            <Sub>{sub}</Sub>
          </div>
        </div>
      </Layout>
      <AnimatedCaptions captions={words(caption, 450, 3400)} />
    </AbsoluteFill>
  );
};

export const Point1Scene: React.FC = () => (
  <PointScene
    n={1}
    title={["Comisiones", "altas"]}
    sub="Cada venta suma de verdad"
    caption="Primero: | las comisiones son altas | y cada venta cuenta"
    accent={colors.accent}
  />
);

export const Point2Scene: React.FC = () => (
  <PointScene
    n={2}
    title={["Más de un", "ingreso"]}
    sub="No dependo de un solo sueldo"
    caption="Segundo: | no quiero depender | de un solo sueldo"
    accent={colors.accent2}
  />
);

export const Point3Scene: React.FC = () => (
  <PointScene
    n={3}
    title={["A mi", "ritmo"]}
    sub="En mis horas libres"
    caption="Tercero: | lo hago a mi ritmo, | en mis horas libres"
    accent="#3a86ff"
  />
);

export const OutroScene: React.FC = () => {
  const a = useEnter(0);
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 4) * 0.04;
  return (
    <AbsoluteFill>
      <Layout>
        <div
          style={{
            marginTop: 220,
            opacity: a,
            transform: `scale(${(0.6 + a * 0.4) * pulse})`,
          }}
        >
          <Headline size={150}>¿Te apuntas?</Headline>
          <div
            style={{
              marginTop: 40,
              background: colors.accent,
              padding: "14px 50px",
              borderRadius: 24,
            }}
          >
            <Headline size={110} color="#000">
              Sígueme
            </Headline>
          </div>
        </div>
      </Layout>
      <AnimatedCaptions
        captions={words("Sígueme | y te enseño el proceso", 450, 2150)}
      />
    </AbsoluteFill>
  );
};
