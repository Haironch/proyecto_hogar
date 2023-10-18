import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import "../../App.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

import { formatTime } from "../../utils/helpers";

import tringuloImg from "/games-images/game2/tringulo.png";
import cuadradoImg from "/games-images/game2/cuadrado.jpeg";
import hexagonoImg from "/games-images/game2/hexagono.png";
import pentagonoImg from "/games-images/game2/pentagono.jpg";
import circuloImg from "/games-images/game2/circulo.png";

const styleFlex = styled.div`
  //display: "flex;",
  justify-content: center;
  align-items: center;
`;

const SelectedGameWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;
const SelectedGameContainer = styled.div`
  ${styleFlex};
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OptionGameContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: ${(props) =>
    props.flexend === "true" ? "flex-end" : "space-between"};
  align-items: center;
  margin-bottom: 5px;
  width: 650px;
  height: 420px;
`;

export default function GameTow() {
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

      // request to db...
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

  const isMobile = window.navigator.userAgent.match(
    /(Android|iPhone|iPad|iPod)/i
  );

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <SelectedGameWrapper className=" bg-bg ">
        <div className=" mt-2 w-full ">
          <p className=" flex justify-center items-center w-[100px] bg-primary text-white text-lg h-[44px] rounded ">
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </p>
        </div>
        <SelectedGameContainer>
          <OptionGameContainer flexend={n1.toString()}>
            {!n1 && <DraggableElement value="1" imgUrl={tringuloImg} />}
            <DropTarget
              onDrop={handleDropOne}
              //expectedValue={droppedValue}
              expectedValue="1"
              items="1"
              bg="red"
            />
          </OptionGameContainer>
          <OptionGameContainer flexend={n2.toString()}>
            {!n2 && <DraggableElement value="2" imgUrl={cuadradoImg} />}
            <DropTarget
              onDrop={handleDropTwo}
              //expectedValue={droppedValue}
              expectedValue="2"
              items="2"
              bg="green"
            />
          </OptionGameContainer>
          <OptionGameContainer flexend={n3.toString()}>
            {!n3 && <DraggableElement value="3" imgUrl={hexagonoImg} />}
            <DropTarget
              onDrop={handleDropThree}
              //expectedValue={droppedValue}
              expectedValue="3"
              items={[1, 2, 3]}
            />
          </OptionGameContainer>
          <OptionGameContainer flexend={n4.toString()}>
            {!n4 && <DraggableElement value="4" imgUrl={pentagonoImg} />}
            <DropTarget
              onDrop={handleDropFour}
              //expectedValue={droppedValue}
              expectedValue="4"
              items={[1, 2, 3, 4]}
            />
          </OptionGameContainer>
          <OptionGameContainer flexend={n5.toString()}>
            {!n5 && <DraggableElement value="5" imgUrl={circuloImg} />}
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

  // <p className=" w-[80px] h-[80px] text-3xl bg-black "></p>
  return (
    <div ref={ref} className="draggable-element">
      <img
        src={imgUrl}
        alt=""
        width={100}
        height={100}
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

  const getImage = () => {
    switch (expectedValue) {
      case "1":
        return <img src={tringuloImg} width={100} height={100} />;
      case "2":
        return <img src={cuadradoImg} width={100} height={100} />;
      case "3":
        return <img src={hexagonoImg} width={100} height={100} />;
      case "4":
        return <img src={pentagonoImg} width={100} height={100} />;
      case "5":
        return <img src={circuloImg} width={100} height={100} />;
    }
  };

  const backgroundColor = isOver && canDrop ? bg : "transparent";

  return (
    <DropTargetWrapper ref={drop} style={{ backgroundColor }}>
      {getImage()}
    </DropTargetWrapper>
  );
};
