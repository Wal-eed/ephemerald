import React from "react";
import { motion } from "framer-motion";
import icon from "src/assets/logo.png";

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const SplashScreen = ({ brand = "EPHEMERALD" }) => {
  const disappearDelays = shuffle([...Array(brand.length)].map((_, i) => i));

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        delay: 3,
        duration: 1,
      }}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        color: "white",
        position: "absolute",
        zIndex: 100,
        background: "#68d391",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          left: "50%",
          top: "40%",
          transform: "translateY(-40%) translateX(-50%)",
          // textShadow: '#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px',
          letterSpacing: "2px",
          height: "150px",
          width: "100%",
          color: "white",
          fontWeight: "bold",
          fontSize: "250%",
          // background: '#222222'
        }}
      >
        <motion.img
          animate={{
            opacity: 0,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          src={icon}
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: 200,
          }}
        ></motion.img>
        {brand.split("").map((character, i) => (
          <motion.span
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: 1.25 + disappearDelays[i] * 0.125,
              duration: 0.5,
            }}
          >
            {character}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
