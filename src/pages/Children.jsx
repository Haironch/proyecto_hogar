import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChildNavbar from "../components/ChildNavbar";

const colors = {
  primaryFont: "#fff",
};
const styleFlex = {
  display: "flex;",
  "justify-content": "center;",
  "align-items": "center;",
};

const ChildrenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #7bb422;
  padding: 0 80px;
  color: ${colors.primaryFont};
`;
const GamesContainer = styled.div`
  ${styleFlex};
  height: calc(100% - 150px);
  width: 100%;
  background: #8AC926;


  .games {
    ${styleFlex};
    justify-content: space-between;
    width: 100%;

    a {
      display: block;
      border: 2px solid black;
      height: 250px;
      width: 250px;
    }
  }
`;

function Children() {
  const { childId } = useParams();

  const [child, setChild] = useState([]);

  const getchild = async () => {
    const response = await axios.get(`https://reqres.in/api/users/${childId}`);
    localStorage.setItem("selected-child", JSON.stringify(response.data.data));
    setChild(response.data.data);
  };

  useEffect(() => {
    getchild();
  }, []);

  return (
    <ChildrenWrapper>
      <ChildNavbar child={child} />
      <GamesContainer>
        <div className="games">
          <Link to="/admin/1/juego/1">
            <div>Juego 1</div>
          </Link>
          <Link to="/admin/1/juego/2">
            <div>Juego 2</div>
          </Link>
          <Link to="/admin/1/juego/3">
            <div>Juego 3</div>
          </Link>
          <Link to="/admin/1/juego/4">
            <div>Juego 4</div>
          </Link>
        </div>
      </GamesContainer>
    </ChildrenWrapper>
  );
}

export default Children;
