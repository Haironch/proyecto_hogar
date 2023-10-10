import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../../App.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { toast } from "react-toastify";

import { formatTime } from "../../utils/helpers";

const colors = {
  primaryFont: "#fff",
};
const styleFlex = styled.div`
  //display: "flex;",
  justify-content: center;
  align-items: center;
`;

const SelectedGameWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #006494;
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
  justify-content: center;
  align-items: center;
`;
const OptionGameContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.flexend === "true" ? "flex-end" : "space-between"};
  align-items: center;
  margin-bottom: 0px;
  width: 650px;
  height: 100px;
`;
const Buttons = styled.button`
  width: 100px;
  height: 36px;
`;

function SelectedGame() {
  const [child, setChild] = useState({});
  const [startedGame, setStartedGame] = useState(false);
  const [n1, setN1] = useState(false);
  const [n2, setN2] = useState(false);
  const [n3, setN3] = useState(false);
  const [n4, setN4] = useState(false);
  const [n5, setN5] = useState(false);

  const [totalSeconds, setTotalSeconds] = useState(0);

  // manage game time
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("selected-child")) {
      setChild(JSON.parse(localStorage.getItem("selected-child")));
    }
  }, [setChild]);

  const handleDropOne = (value) => {
    if (value === "1") {
      setN1(true);
    } else {
      setN1(false);
    }
    setStartedGame(true);
  };

  const handleDropTwo = (value) => {
    if (value === "2") {
      setN2(true);
    } else {
      setN2(false);
    }
    setStartedGame(true);
  };

  const handleDropThree = (value) => {
    if (value === "3") {
      setN3(true);
    } else {
      setN3(false);
    }
    setStartedGame(true);
  };

  const handleDropFour = (value) => {
    if (value === "4") {
      setN4(true);
    } else {
      setN4(false);
    }
    setStartedGame(true);
  };

  const handleDropFive = (value) => {
    if (value === "5") {
      setN5(true);
    } else {
      setN5(false);
    }
    setStartedGame(true);
  };

  const { gameId } = useParams();

  const setScores = async () => {
    const child_data = {
      time: formatTime(hours, minutes, seconds),
      id_game: gameId,
      id_child: JSON.parse(localStorage.getItem("selected-child")).id,
    };

    const { data } = await axios.post("/api/scores", child_data);
    if (data.status_code === 200) {
      Swal.fire({
        title: "Ganador!",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonColor: "#202020",
        confirmButtonText: "Cool",
      });
    } else {
      toast.error(
        "Ha habido un error en el servidor. Intente nuevamente por favor."
      );
    }
  };

  useEffect(() => {
    if (n1 && n2 && n3 && n4 && n5) {
      setStartedGame(false);
      setN1(false);
      setN2(false);
      setN3(false);
      setN4(false);
      setN5(false);

      // sent data to the api
      setScores();
    }

    if (startedGame) {
      const interval = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
      }, 1000); // Update every 1000 milliseconds (1 second)

      return () => {
        clearInterval(interval); // Cleanup the interval on component unmount
      };
    }
  }, [n1, n2, n3, n4, n5, startedGame]);

  useEffect(() => {
    setHours(Math.floor(totalSeconds / 3600));
    setMinutes(Math.floor((totalSeconds % 3600) / 60));
    setSeconds(totalSeconds % 60);
  }, [totalSeconds]);

  return (
    <DndProvider backend={HTML5Backend}>
      <SelectedGameWrapper>
        <div>
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>
        <SelectedGameContainer>
          <OptionGameContainer flexend={n1.toString()}>
            {!n1 && (
              <DraggableElement
                value="1"
                imgUrl="https://w7.pngwing.com/pngs/526/395/png-transparent-number-graphy-1-miscellaneous-computer-network-angle.png"
              />
            )}
            <DropTarget
              onDrop={handleDropOne}
              //expectedValue={droppedValue}
              expectedValue="1"
              items={[1]}
              bg="red"
            />
          </OptionGameContainer>
          <OptionGameContainer flexend={n2.toString()}>
            {!n2 && (
              <DraggableElement
                value="2"
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/4/4b/2green.png"
              />
            )}
            <DropTarget
              onDrop={handleDropTwo}
              //expectedValue={droppedValue}
              expectedValue="2"
              items={[1, 2]}
              bg="green"
            />
          </OptionGameContainer>
          <OptionGameContainer flexend={n3.toString()}>
            {!n3 && (
              <DraggableElement
                value="3"
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Eo_circle_blue_white_number-3.svg/2048px-Eo_circle_blue_white_number-3.svg.png"
              />
            )}
            <DropTarget
              onDrop={handleDropThree}
              //expectedValue={droppedValue}
              expectedValue="3"
              items={[1, 2, 3]}
            />
          </OptionGameContainer>
          <OptionGameContainer flexend={n4.toString()}>
            {!n4 && (
              <DraggableElement
                value="4"
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Eo_circle_red_number-4.svg/2048px-Eo_circle_red_number-4.svg.png"
              />
            )}
            <DropTarget
              onDrop={handleDropFour}
              //expectedValue={droppedValue}
              expectedValue="4"
              items={[1, 2, 3, 4]}
            />
          </OptionGameContainer>
          <OptionGameContainer flexend={n5.toString()}>
            {!n5 && (
              <DraggableElement
                value="5"
                imgUrl="https://cdn-icons-png.flaticon.com/512/3593/3593510.png"
              />
            )}
            <DropTarget
              onDrop={handleDropFive}
              //expectedValue={droppedValue}
              expectedValue="5"
              items={[1, 2, 3, 4, 5]}
            />
          </OptionGameContainer>
        </SelectedGameContainer>
      </SelectedGameWrapper>
    </DndProvider>
  );
}

const DraggableElement = ({ value, imgUrl }) => {
  const [, ref] = useDrag({
    type: "ELEMENT",
    item: { value },
  });

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div ref={ref} className="draggable-element">
      <img
        src={imgUrl}
        alt=""
        width={50}
        height={50}
        onContextMenu={handleContextMenu}
      />
    </div>
  );
};

// drop target
const DropTargetWrapper = styled.div`
  width: 150px;
  min-height: 90px;
  background-color: transparent;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  .circle {
    margin: 8px;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: white;
  }
`;

const DropTarget = ({ onDrop, expectedValue, items, bg = "white" }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "ELEMENT",
    drop: (item) => onDrop(item.value),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const backgroundColor = isOver && canDrop ? bg : "transparent";

  return (
    <DropTargetWrapper ref={drop} style={{ backgroundColor }}>
      {items.map((value, index) => (
        <div className="circle" key={index} />
      ))}
    </DropTargetWrapper>
  );
};

export default SelectedGame;
