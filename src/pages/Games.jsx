import styled from "styled-components";
import ChildNavbar from "../components/ChildNavbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../App.css";
import GameOne from "./components/GameOne";
import GameTwo from "./components/GameTwo";
import GameThree from "./components/GameThree";
import GameFour from "./components/GameFour";
import Prueba from "./components/Prueba";

const colors = {
  primaryFont: "#fff",
};
const styleFlex = {
  display: "flex;",
  "justify-content": "center;",
  "align-items": "center;",
};

const SelectedGameWrapper = styled.div`
  width: 100vw;
  height: calc(100vh);
  background-color: #8AC926;
  padding: 0 80px;
  color: ${colors.primaryFont};
`;
const SelectedGameContainer = styled.div`
  ${styleFlex};
  flex-direction: column;
  height: calc(100% - 150px);
  width: 100%;
  background-color: blueviolet;
`;

function SelectedGame() {
  const [child, setChild] = useState({});
  const { gameId } = useParams();

  const showGame = () => {
    console.log(gameId)
    switch(gameId) {
      case "1":
        return <GameOne />
      case "2":
        return <GameTwo />
      case "3":
        return <GameThree />
      case "4":
        return <GameFour />
    }

  }

  useEffect(() => {
    if (localStorage.getItem("selected-child")) {
      setChild(JSON.parse(localStorage.getItem("selected-child")));
    }


  }, [setChild]);

  

  return (
    <DndProvider backend={HTML5Backend}>
      <SelectedGameWrapper>
        <ChildNavbar child={child} />
        <SelectedGameContainer>
          {showGame()}
        </SelectedGameContainer>
      </SelectedGameWrapper>
    </DndProvider>
  );
}

export default SelectedGame;
