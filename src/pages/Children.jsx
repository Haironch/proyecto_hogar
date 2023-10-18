import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

import figuras from "/public/games-icons/figuras.png"
import numeros from "/public/games-icons/numeros.png"
import puzzle from "/public/games-icons/puzzle.png"
import vocales from "/public/games-icons/vocales.png"

const styleFlex = {
  display: "flex;",
  "justify-content": "center;",
  "align-items": "center;",
};

const ChildrenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const GamesContainer = styled.div`
  ${styleFlex};
  height: calc(100% - 150px);
  width: 100%;


  .games {
    ${styleFlex};
    justify-content: space-between;
    width: 100%;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      width: 250px;
      background-color: #118AB2;
      border-radius: 10px;
      transition: 300ms transform;

      &:hover {
        transform: translateY(-10px);

      }
    }
  }
`;

function Children() {
  const [child ] = useState(JSON.parse(localStorage.getItem("selected-child")))

  return (
    <ChildrenWrapper className=" bg-bg ">
      <AdminNavbar child={child} canReturn={false} />
      <GamesContainer className=" px-[40px] ">
        <div className="games">
          <Link to="/admin/1/juego/1">
            <img src={numeros} alt="Juego de números" />
          </Link>
          <Link to="/admin/1/juego/2" className=" ">
            <img src={figuras} alt="Juego de figuras geométricas" />
          </Link>
          <Link to="/admin/1/juego/3">
            <img src={vocales} alt="Juego de vocales" />
          </Link>
          <Link to="/admin/1/juego/4">
            <img src={puzzle} alt="Juego de rompecabezas" />
          </Link>
        </div>
      </GamesContainer>
    </ChildrenWrapper>
  );
}

export default Children;
