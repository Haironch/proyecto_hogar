import styled from "styled-components";
import ChildNavbar from "../components/ChildNavbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const colors = {
  primaryFont: "#fff",
};
const styleFlex = {
  display: "flex;",
  "justify-content": "center;",
  "align-items": "center;",
};

const SelectedGameWrapper = styled.div`
  width: 100%;
  height: calc(100vh);
  background-color: #202020;
  padding: 0 80px;
  color: ${colors.primaryFont};
`;
const SelectedGameContainer = styled.div`
  ${styleFlex};
  height: calc(100% - 150px);
  width: 100%;
  background-color: blueviolet;

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

function SelectedGame() {
  const [child, setChild] = useState({});
  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("selected-child")) {
      setChild(JSON.parse(localStorage.getItem("selected-child")));
    }
  }, [setChild]);

  const [isDrawing, setIsDrawing] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  const handleDivMouseDown = (event) => {
    setIsDrawing(true);
    const rect = event.target.getBoundingClientRect();
    setStartPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleDivMouseMove = (event) => {
    if (!isDrawing) return;
    const rect = event.target.getBoundingClientRect();
    setEndPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleDivMouseUp = () => {
    setIsDrawing(false);
    setStartPosition({ x: 0, y: 0 });
    setEndPosition({ x: 0, y: 0 });
  };

  return (
    <SelectedGameWrapper>
      <ChildNavbar child={child} />
      <SelectedGameContainer>
        <div
          className="div-container"
          onMouseDown={handleDivMouseDown}
          onMouseMove={handleDivMouseMove}
          onMouseUp={handleDivMouseUp}
          style={{border: "1px solid white", width: "300px", height: "300px"}}
        >
          {/* Your first div */}
          hola mundo
        </div>
        <div className="line-container" style={{border: "1px solid white"}}>
          <svg width="100%" height="100%">
            <line
              x1={startPosition.x}
              y1={startPosition.y}
              x2={endPosition.x}
              y2={endPosition.y}
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="div-container">{/* Your second div */}</div>
      </SelectedGameContainer>
    </SelectedGameWrapper>
  );
}

export default SelectedGame;
