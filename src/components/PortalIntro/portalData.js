import portalTheme from "./portalTheme";

export function createParticles(count = 18) {
  const colors = portalTheme.particle.colors;

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    xMove: Math.random() * 80 - 40,
    yMove: -(Math.random() * 180 + 40),
    scale: Math.random() * 0.8 + 0.6,
  }));
}