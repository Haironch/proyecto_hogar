import styled from "styled-components";
import { useEffect, useState } from "react";
import "./style.css";
import ImgOne from "/games-images/game4/img1.jpeg";
import ImgTwo from "/games-images/game4/cachorros.jpg";
import ImgThree from "/games-images/game4/cachorros.jpg";
import ImgFour from "/games-images/game4/cachorros.jpg";
import ImgFive from "/games-images/game4/img5.jpeg";
import ImgSix from "/games-images/game4/img5.jpeg";

import GameFourModal from "./GameFourModal";

const SelectedGameWrapper = styled.div`
  width: 100%;
  background-color: #202020;
`;
const Gallery = styled.div`
  width: 100%;
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
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("Seleccione las medidas.");
  const [selectedImg, setSelectedImg] = useState(ImgOne);
  const [size, setSize] = useState({ x: 1, y: 1 });
  const [inputX, setInputX] = useState("");
  const [inputY, setInputY] = useState("");

  useEffect(() => {}, []);

  const setSizes = (x, y) => {
    setSize({ x, y });
    setShowModal(true);
  };

  return (
    <SelectedGameWrapper className=" px-[20px] py-[40px] h-auto border-2 border-blue-500 ">
      <Gallery className=" [&_div]:mx-[20px] py-[32px] ">
        <div className=" flex [&_img]:min-w-[250px] [&_div]:cursor-pointer justify-center ">
          <div onClick={() => setSelectedImg(ImgOne)}>
            <img src={ImgOne} alt="" className=" w-[200px] " />
          </div>
          <div onClick={() => setSelectedImg(ImgTwo)}>
            <img src={ImgTwo} alt="" className=" w-[200px] " />
          </div>
          <div onClick={() => setSelectedImg(ImgThree)}>
            <img src={ImgThree} alt="" className=" w-[200px] " />
          </div>
        </div>
        <div className=" flex [&_img]:min-w-[250px] [&_div]:cursor-pointer justify-center mt-[56px] ">
          <div onClick={() => setSelectedImg(ImgFour)}>
            <img src={ImgFour} alt="" className=" w-[200px] " />
          </div>
          <div onClick={() => setSelectedImg(ImgFive)}>
            <img src={ImgFive} alt="" className=" w-[200px] " />
          </div>
          <div onClick={() => setSelectedImg(ImgSix)}>
            <img src={ImgSix} alt="" className=" w-[200px] " />
          </div>
        </div>
      </Gallery>

      <div className=" py-[32px] text-center bg-yellow-500">
        <div className=" mb-2 text-2xl ">
          <h1>Imagen seleccionada</h1>
        </div>
        <div className=" flex justify-center w-full ">
          {selectedImg ? (
            <img src={selectedImg} alt="" className=" w-[200px] rounded " />
          ) : (
            <p>Seleccione una imagen</p>
          )}
        </div>
      </div>

      <Sizes className=" mt-[32px] px-[20px] h-[150px] bg-yellow-500 ">
        <SizesCard onClick={() => setSizes(1, 2)} color="#3a86ff">
          1x2
        </SizesCard>
        <SizesCard onClick={() => setSizes(2, 2)} color="#ffd60a">
          2x2
        </SizesCard>
        <SizesCard onClick={() => setSizes(2, 4)} color="#7209b7">
          2x4
        </SizesCard>

        <CustomSize className=" ">
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
                setInputX("");
                setInputY("");
                setSizes(inputX, inputY);
              }}
            >
              Personalizado
            </button>
          </div>
        </CustomSize>
      </Sizes>

      {showModal && (
        <GameFourModal
          setShowModal={setShowModal}
          image={selectedImg}
          size={size}
        />
      )}
    </SelectedGameWrapper>
  );
}

export default GameFour;
