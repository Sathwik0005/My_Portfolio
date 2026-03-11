import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./PortalIntro.css";
import { createParticles } from "./portalData";
import portalTheme from "./portalTheme";

export default function PortalIntro() {
  const particles = useMemo(() => createParticles(18), []);

  return (
    <div className="portal">
      <div
        className="portal__background"
        style={{ background: portalTheme.background.gradient }}
      />
      <div
        className="portal__radial"
        style={{ background: portalTheme.background.radial }}
      />
      <div
        className="portal__grid"
        style={{
          backgroundImage: `
            linear-gradient(${portalTheme.background.gridLine} 1px, transparent 1px),
            linear-gradient(90deg, ${portalTheme.background.gridLine} 1px, transparent 1px)
          `,
        }}
      />

      <div className="portal__particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="portal__particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              background: particle.color,
              boxShadow: `0 0 12px ${particle.color}`,
            }}
            animate={{
              x: [0, particle.xMove, 0],
              y: [0, particle.yMove, 0],
              opacity: [0, 1, 0],
              scale: [0.6, particle.scale, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        className="portal__glow"
        style={{ background: portalTheme.glow.center }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="portal__content">
        <div className="portal__text-block">
          <div className="portal__circle-wrapper">
            <motion.div
              className="portal__circle"
              style={{ borderColor: portalTheme.border.main }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="portal__rotating-ring"
                style={{ borderColor: portalTheme.glow.rotatingRing }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="portal__wave-ring portal__wave-ring--one"
                style={{ borderColor: portalTheme.glow.outerRing }}
                animate={{ scale: [1, 2.4], opacity: [0.65, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />

              <motion.div
                className="portal__wave-ring portal__wave-ring--two"
                style={{ borderColor: portalTheme.glow.outerRing }}
                animate={{ scale: [1, 2], opacity: [0.55, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.8,
                }}
              />

              <motion.div
                className="portal__inner-ring"
                style={{
                  background: `linear-gradient(
                    to right,
                    ${portalTheme.glow.innerRingStart},
                    ${portalTheme.glow.innerRingMid},
                    ${portalTheme.glow.innerRingEnd}
                  )`,
                }}
                animate={{ scale: [1, 0.92, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="portal__core"
                style={{
                  background: `linear-gradient(
                    to right,
                    ${portalTheme.glow.coreStart},
                    ${portalTheme.glow.coreEnd}
                  )`,
                }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="portal__symbol"
                  style={{ color: portalTheme.text.symbol }}
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ⟡
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.h1
            className="portal__title"
            style={{
              color: portalTheme.text.title,
              textShadow: portalTheme.shadow.title,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Reality is overrated.
          </motion.h1>

          <motion.h2
            className="portal__subtitle"
            style={{ color: portalTheme.text.subtitle }}
            animate={{ scale: [1, 1.02, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Click anywhere to enter the Parallel Universe
          </motion.h2>

          <motion.p
            className="portal__description"
            style={{ color: portalTheme.text.description }}
            animate={{ y: [0, -4, 0], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            ✦ Your journey beyond the screen awaits ✦
          </motion.p>
        </div>
      </div>

      <motion.div
        className="portal__hint"
        style={{ color: portalTheme.text.hint }}
        animate={{ y: [0, 8, 0], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="portal__hint-text">Click anywhere to continue</div>
        <div className="portal__hint-arrow">↓</div>
      </motion.div>
    </div>
  );
}