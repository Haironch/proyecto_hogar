import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../App.css";
import GameOne from "./components/GameOne";
import GameTwo from "./components/GameTwo";
import GameThree from "./components/GameThree";
import GameFour from "./components/GameFour";
import AdminNavbar from "../components/AdminNavbar";

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
  min-height: 100vh;
  background-color: #8AC926;
  padding: 0 80px;
  padding-bottom: 40px;
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
  const [child] = useState(JSON.parse(localStorage.getItem("selected-child")))
  const { gameId } = useParams();

  const showGame = () => {
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

  return (
    <DndProvider backend={HTML5Backend}>
      <SelectedGameWrapper>
        <AdminNavbar child={child} canReturn={true} />
        <SelectedGameContainer>
          {showGame()}
        </SelectedGameContainer>
      </SelectedGameWrapper>
    </DndProvider>
  );
}

export default SelectedGame;
