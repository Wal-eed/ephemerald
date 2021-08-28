import React from 'react';
import { motion } from 'framer-motion';

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const SplashScreen = ({ brand = "Ephemerald" }) => {
    const disappearDelays = shuffle([...Array(brand.length)].map((_, i) => i));

    return (
        <motion.div
            initial={{
                opacity: 1
            }}     
            animate={{
                opacity: 0
            }}
            transition={{
                delay: 8,
                duration: 1
            }}
            style={{
                height: '100vh',
                width: '100vw',
                backgroundSize: 'cover',
                color: 'white',
                position: 'absolute',
                zIndex: 100,
            }}>
            <div style={{
                textAlign: 'center',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translateY(-50%) translateX(-50%)',
                // textShadow: '#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px',
                letterSpacing: '3px',
                height: '150px',
                width: '100%',
                background: 'black'
            }}>
                {brand.split('').map((character, i) => (
                    <motion.span
                        initial={{
                            opacity: 0,
                            fontSize: '100%'
                        }}
                        animate={{
                            opacity: 1,
                            fontSize: '600%'
                        }}
                        transition={{
                            delay: i * 0.25,
                            duration: 2
                        }}
                    >
                        <motion.span
                            animate={{
                                opacity: 0
                            }}
                            transition={{
                                delay: 4 + disappearDelays[i] * 0.15,
                                duration: 0.5
                            }}
                        >
                        {character}
                        </motion.span>
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default SplashScreen;
