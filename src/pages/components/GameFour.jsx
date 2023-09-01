import styled from "styled-components";
import { useEffect, useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "./style.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ImgOne from "/games-images/game4/cachorros.jpg";
import ImgTwo from "/games-images/game4/cachorros.jpg";
import ImgThree from "/games-images/game4/cachorros.jpg";
import ImgFour from "/games-images/game4/cachorros.jpg";
import ImgFive from "/games-images/game4/img5.jpeg";

const SelectedGameWrapper = styled.div`
  width: 100%;
  height: calc(100vh);
  background-color: #202020;
  padding: 0 20px;

  border: 1px solid blue;
`;
const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 1px solid blue;

  img {
    width: 100px;
    height: 100px;
  }
`;

const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 1px solid blue;
`;
const SizesCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${({ color }) => color};
  font-size: 64px;
  cursor: pointer;
`;
const CustomSize = styled.div`
  width: 150px;
  height: 150px;
`;

function GameFour() {
  const [text, setText] = useState("Seleccione las medidas.");
  const [selectedImg, setSelectedImg] = useState(ImgOne);
  const [sizex, setSizex] = useState(1);
  const [sizey, setSizey] = useState(1);
  const [inputX, setInputX] = useState("");
  const [inputY, setInputY] = useState("");

  const set = () => {
    Swal.fire({
      title: "Ganador!",
      text: "",
      icon: "success",
      confirmButtonColor: "#8338ec",
      confirmButtonText: "Cool",
    });
  };

  useEffect(() => {}, []);

  return (
    <SelectedGameWrapper>
      <Gallery>
        <div onClick={() => setSelectedImg(ImgOne)}>
          <img src={ImgOne} alt="" />
        </div>
        <div onClick={() => setSelectedImg(ImgTwo)}>
          <img src={ImgTwo} alt="" />
        </div>
        <div onClick={() => setSelectedImg(ImgThree)}>
          <img src={ImgThree} alt="" />
        </div>
        <div onClick={() => setSelectedImg(ImgFour)}>
          <img src={ImgFour} alt="" />
        </div>
        <div onClick={() => setSelectedImg(ImgFive)}>
          <img src={ImgFive} alt="" />
        </div>
      </Gallery>

      <Sizes>
        <SizesCard
          onClick={() => {
            setSizex(1);
            setSizey(2);
          }}
          color="#3a86ff"
        >
          {" "}
          1x2{" "}
        </SizesCard>
        <SizesCard
          onClick={() => {
            setSizex(2);
            setSizey(2);
          }}
          color="#ffd60a"
        >
          {" "}
          2x2{" "}
        </SizesCard>
        <SizesCard
          onClick={() => {
            setSizex(2);
            setSizey(4);
          }}
          color="#7209b7"
        >
          2x4
        </SizesCard>

        <CustomSize>
          <div>
            <div>
              <p>X</p>
              <input
                onChange={(e) => setInputX(e.target.value)}
                value={inputX}
                type="text"
              />
            </div>
            <div>
              <p>Y</p>
              <input
                onChange={(e) => setInputY(e.target.value)}
                value={inputY}
                type="text"
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setSizex(inputX);
                setSizey(inputY);
                setInputX("");
                setInputY("");
              }}
            >
              Personalizado
            </button>
          </div>
        </CustomSize>
      </Sizes>

      <h2 className="tag">{text}</h2>
      <JigsawPuzzle
        imageSrc={selectedImg}
        rows={sizex}
        columns={sizey}
        onSolved={set}
        className="jigsaw-puzzle"
      />
    </SelectedGameWrapper>
  );
}

export default GameFour;
