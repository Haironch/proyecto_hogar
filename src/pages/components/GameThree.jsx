import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../../App.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

import tringuloImg from "/games-images/tringulo.png";
import cuadradoImg from "/games-images/cuadrado.jpeg";
import hexagonoImg from "/games-images/hexagono.png";
import pentagonoImg from "/games-images/pentagono.jpg";
import circuloImg from "/games-images/circulo.png";

const colors = {
  primaryFont: "#fff",
};
const styleFlex = {
  //display: "flex;",
  "justify-content": "center;",
  "align-items": "center;",
};

const SelectedGameWrapper = styled.div`
  width: 100%;
  height: calc(100vh);
  background-color: #202020;
  padding: 0 20px;
  color: ${colors.primaryFont};
`;
const SelectedGameContainer = styled.div`
  ${styleFlex};
  flex-direction: column;
  height: calc(100% - 60px);
  width: 100%;
  background: #1982c4;
  display: flex;
  border: 1px solid red;
`;
const SelectedLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-bottom: 64px;
  border: 1px solid blue;

  .selected-letter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    font-size: 232px;
    border: 1px solid white;
  }
`;
const LettersGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  border: 1px solid pink;

  .letters-container {
    border: 1px solid red;
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 150px 150px;
    width: 600px;
    background-color: black;
  }
  .letter {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 160px;
    border: 1px solid white;
  }
`;
const Letter = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 160px;
  border: 1px solid white;

  background-color: ${({ state }) => (state === "true" ? "red" : "blue")};
`;

export default function GameThree() {
  const letters = ["a", "u", "i", "o", "e", "b"];
  const shownLetters = ["a", "u", "i", "o", "e", "b"];
  const [availableLetters, setAvailableLetters] = useState(letters);

  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("a");

  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);
  const [l4, setL4] = useState(false);
  const [l5, setL5] = useState(false);
  const [l6, setL6] = useState(false);

  const verifyLetter = (letter) => {
    switch (letter) {
      case "a":
        if (letter === selectedLetter) {
          setL1(true);
          removeLetter();
          // console.log("a true");
        }
        return;
      case "b":
        if (letter === selectedLetter) {
          setL2(true);
          removeLetter();
          // console.log("b true");
          // setSelectedLetters(prevItems => [...prevItems, "b"]);
          // selectedLetter("_")
        }
        return;
      case "e":
        if (letter === selectedLetter) {
          setL3(true);
          removeLetter();
          // console.log("e true");
          // setSelectedLetters(prevItems => [...prevItems, "e"]);
          // selectedLetter("_")
        }
        return;
      case "i":
        if (letter === selectedLetter) {
          setL4(true);
          removeLetter();
          // console.log("i true");
          // setSelectedLetters(prevItems => [...prevItems, "i"]);
          // selectedLetter("_")
        }
        return;
      case "o":
        if (letter === selectedLetter) {
          setL5(true);
          removeLetter();
          // console.log("o true");
          // setSelectedLetters(prevItems => [...prevItems, "o"]);
          // selectedLetter("_")
        }
        return;
      case "u":
        if (letter === selectedLetter) {
          setL6(true);
          removeLetter();
          // console.log("u true");
          // setSelectedLetters(prevItems => [...prevItems, "u"]);
          // selectedLetter("_")
        }
        return;
      default:
        return;
    }
  };

  const removeLetter = ()  => {
        // Eliminar el elemento mostrado de los disponibles
        setAvailableLetters((prevAvailableElements) =>
        prevAvailableElements.filter((element) => element !== selectedLetter)
      );
  }


  function setSelectedRandomLetter() {
    console.log(availableLetters);
    if (l1 && l2 && l3 && l4 && l5 && l6) {
      alert("usted gano el juego");
      // request to DB...
    }

    if (availableLetters.length === 0) {
      // Si no quedan elementos disponibles, no se hace nada
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableLetters.length);

    const newShownElement = availableLetters[randomIndex];

    setSelectedLetter(newShownElement);

    // // Eliminar el elemento mostrado de los disponibles
    // setAvailableLetters((prevAvailableElements) =>
    //   prevAvailableElements.filter((element) => element !== newShownElement)
    // );
  }

  useEffect(() => {
    setSelectedRandomLetter();
    // console.log("changed")
    // for (let i = componentArray.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1)); // Generar un índice aleatorio
    //   [componentArray[i], componentArray[j]] = [
    //     componentArray[j],
    //     componentArray[i],
    //   ]; // Intercambiar elementos
    // }
  }, [l1, l2, l3, l4, l5, l6]);

  const componentArray = [
    <Letter onClick={() => verifyLetter("a")} state={String(l1)} key={1}>
      a
    </Letter>,
    <Letter onClick={() => verifyLetter("e")} state={String(l2)} key={2}>
      e
    </Letter>,
    <Letter onClick={() => verifyLetter("i")} state={String(l3)} key={3}>
      i
    </Letter>,
    <Letter onClick={() => verifyLetter("o")} state={String(l4)} key={4}>
      o
    </Letter>,
    <Letter onClick={() => verifyLetter("u")} state={String(l5)} key={5}>
      u
    </Letter>,
    <Letter onClick={() => verifyLetter("b")} state={String(l6)} key={6}>
      b
    </Letter>,
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <SelectedGameWrapper>
        <div style={{}}></div>
        <SelectedGameContainer>
          <SelectedLetter>
            <div className="selected-letter">
              <span>{selectedLetter}</span>
            </div>
          </SelectedLetter>
          <LettersGroup>
            <div className="letters-container">
              {/*{componentArray.map((component) => (
                <div key={component.key}>{component}</div>
              ))}*/}
              {shownLetters.map((letter) => (
                <div
                  onClick={() => verifyLetter(letter)}
                  className="letter"
                  key={letter}
                >
                  {letter}
                </div>
              ))}
            </div>
          </LettersGroup>
        </SelectedGameContainer>
      </SelectedGameWrapper>
    </DndProvider>
  );
}
