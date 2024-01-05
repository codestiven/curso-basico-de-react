import React, { useState } from 'react';

export const Primercomponente = () => {

    // let nombre = "Stive";
    let web = "https://google.com";

    let cursos = ["React", "Angular", "Vue", "Svelte"];

    const [nombre, setNombre] = useState("Stive");

    function lolo() {
        setNombre("cosa boladora");
    }
  return (
    <div>
      <h1>saludos {nombre}</h1>
      <p>Este es el primer componente</p>

      <input type="text" onChange={(e) => setNombre(e.target.value)} />

      <button onClick={lolo}>cosas locas</button>
      <ul>
        {cursos.map((cursos) => (
          <li>{cursos}</li>
        ))}
      </ul>
    </div>
  );
}
