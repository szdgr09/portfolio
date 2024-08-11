import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Design = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          detectRetina: true,
          fpsLimit: 120,

          interactivity: {
            detectsOn: "#main-body",
            events: {
              onDiv: [
                {
                  selectors: "#repulse-div",
                  enable: true,
                  mode: "bounce",
                  type: "circle",
                },
                {
                  selectors: "#repulse-div",
                  enable: true,
                  mode: "repulse",
                  type: "circle",
                },
                {
                  selectors: "#repulse-span",
                  enable: true,
                  mode: "repulse",
                  type: "circle",
                },
                {
                  selectors: "#repulse-span",
                  enable: true,
                  mode: "bounce",
                  type: "circle",
                },
                {
                  selectors: "#togglebutton",
                  enable: true,
                  mode: "repulse",
                  type: "circle",
                },
                {
                  selectors: "#togglebutton",
                  enable: true,
                  mode: "bounce",
                  type: "circle",
                },
                {
                  selectors: "#scroller",
                  enable: true,
                  mode: "repulse",
                  type: "circle",
                },
                {
                  selectors: "#scroller",
                  enable: true,
                  mode: "bounce",
                  type: "circle",
                },
              ],

              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: true,
                  force: 350,
                  smooth: 20,
                },
              },
              resize: {
                delay: 0.5,
                enable: true,
              },
            },

            modes: {
              bounce: {
                distance: 100,
              },
              bubble: {
                distance: 100,
                duration: 0.4,
                size: 40,
                color: {
                  value: "#00DFA2",
                },
                opacity: 1,
                mix: false,
              },

              repulse: {
                distance: 200,
                factor: 200,
                speed: 1,
                maxSpeed: 10,
              },
            },
          },

          particles: {
            collisions: {
              enable: true,
              //   mode: "bounce",
            },
            color: {
              value: "#0079FF",
            },
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              direction: [
                "top-left",
                "bottom-left",
                "bottom-right",
                "top-right",
              ],
              drift: 0,
              enable: true,
              random: false,
              size: false,
              speed: 0.8,
              outMode: "bounce",
            },
            number: {
              limit: 0,
              value: 30,
            },

            opacity: {
              random: {
                enable: true,
                minimumValue: 0.4,
                maxValue: 0.6,
              },
              value: 0.6,
              animation: {
                count: 0,
                enable: true,
                speed: 0.2,
                decay: 0,
                sync: true,
                destroy: "none",
                startValue: "random",
              },
            },

            shape: {
              type: "character",
              character: [
                {
                  fill: true,
                  font: "Font Awesome 6 Brands",
                  style: "",
                  value: ["\uf13b"],
                  weight: "500",
                },
                {
                  fill: true,
                  font: "Font Awesome 6 Brands",
                  style: "",
                  value: ["\uf38b"],
                  weight: "500",
                },
                {
                  fill: true,
                  font: "Font Awesome 6 Brands",
                  style: "",
                  value: ["\uf3b9"],
                  weight: "500",
                },
                {
                  fill: true,
                  font: "Font Awesome 6 Brands",
                  style: "",
                  value: ["\uf41b"],
                  weight: "500",
                },
                {
                  fill: true,
                  font: "Font Awesome 6 Brands",
                  style: "",
                  value: ["\uf3b8"],
                  weight: "500",
                },
                {
                  fill: true,
                  font: "Font Awesome 6 Brands",
                  style: "",
                  value: ["\uf3d3"],
                  weight: "500",
                },
              ],
            },
            size: {
              random: {
                enable: true,
                minimumValue: 25,
                maxValue: 35,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 0.1,
                decay: 0,
                sync: true,
                destroy: "none",
                startValue: "random",
              },
            },

            lineLinked: {
              blink: true,
              color: {
                value: "#E3F6FF",
              },
              consent: true,
              distance: 50,
              enable: true,
              frequency: 10,
              opacity: 0.5,
              width: 1,
            },
          },

          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          smooth: true,
        }}
      />
    </div>
  );
};

export default Design;

// mode: "grab",
// grab: {
//   distance: 300,
//   line_linked: {
//     opacity: 0.5,
//   },
// },
