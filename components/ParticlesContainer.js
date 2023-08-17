import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";



const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, [])

  const particlesLoaded = useCallback(async () => { }, []);
  return <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={{
    fullScreen: { enable: false },
    background: {
      color: {
        value: '',
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          }
        }
      }
    }

  }} />
};

export default ParticlesContainer;
