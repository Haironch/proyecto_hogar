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
  background-color: #202020;
`;
const Gallery = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const SizesCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80px;
  background-color: ${({ color }) => color};
  font-size: 64px;
  cursor: pointer;
`;
const CustomSize = styled.div`
  width: 200px;
  height: 100px;
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
    <SelectedGameWrapper className=" px-[20px] py-[40px] h-auto border-2 border-blue-500 ">
      <Gallery className=" flex min-h-[250px] [&_img]:min-w-[250px] [&_div]:mx-[20px] border-2 border-red-500 overflow-x-auto ">
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

      <Sizes className=" mt-[32px] h-[150px] border-2 border-yellow-500 ">
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
      <div className=" flex h-[800px] border-3 border-pink-500 ">
        <div className=" w-[800px] h-[800px] ">
        <JigsawPuzzle
          imageSrc={selectedImg}
          rows={sizex}
          columns={sizey}
          onSolved={set}
          className="jigsaw-puzzle border border-red-500 "
          scale={2}
          zoom={2}
        />
        </div>
      </div>
    </SelectedGameWrapper>
  );
}

export default GameFour;
