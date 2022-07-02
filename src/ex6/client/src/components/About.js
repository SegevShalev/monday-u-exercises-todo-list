import React, { useState, useEffect } from "react";
import styles from "../style/About.module.css";

const MIN_ID = 1;
const MAX_ID = 898;

export default function About() {
  const [pokemonId, setPokemonId] = useState();

  const changePokemon = () => {
    let rand = parseInt(MIN_ID + Math.random() * (MAX_ID - MIN_ID));
    setPokemonId(rand);
  };

  useEffect(() => {
    changePokemon();
  }, []);

  setInterval(changePokemon, 2000);
  var min = 1;
  var max = 900;
  var rand = parseInt(min + Math.random() * (max - min));
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.div1}></div>
        <div className={styles.div2}></div>
      </div>
      <div className={styles.mid}>
        <div className={styles.div3}>
          <p>ABOUT TODO</p>
        </div>
        <div className={styles.div4}>
          <p>
            Welcome to my Todo App! a place when you can add your todos and
            catch Pokemon!
          </p>
        </div>
        <div className={styles.div5}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
            alt={`pokemon id: ${rand}`}
            height={250}
            width={250}
          ></img>
        </div>
      </div>
    </div>
  );
}
