import "./AnimatedBackground.css";
import { floatingParticles, floatingShapes } from "./backgroundData";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="animated-bg__base" />
      <div className="animated-bg__glow animated-bg__glow--left" />
      <div className="animated-bg__glow animated-bg__glow--right" />
      <div className="animated-bg__glow animated-bg__glow--bottom" />
      <div className="animated-bg__grid" />

      <div className="animated-bg__shapes">
        {floatingShapes.map((shape) => (
          <span
            key={shape.id}
            className={`animated-bg__shape animated-bg__shape--${shape.type}`}
            style={{
              left: shape.left,
              top: shape.top,
              width: shape.size,
              height: shape.size,
              animationDelay: shape.delay,
              animationDuration: shape.duration,
              transform: `rotate(${shape.rotate})`,
            }}
          />
        ))}
      </div>

      <div className="animated-bg__particles">
        {floatingParticles.map((particle) => (
          <span
            key={particle.id}
            className="animated-bg__particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}