import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

import ImgOne from "/games-images/game4/img1.jpg";
import ImgTwo from "/games-images/game4/img2.jpg";
import ImgThree from "/games-images/game4/img3.jpg";
import ImgFour from "/games-images/game4/img4.jpg";
import ImgFive from "/games-images/game4/img5.jpg";
import ImgSix from "/games-images/game4/img6.jpg";

import GameFourModal from "./GameFourModal";

const SelectedGameWrapper = styled.div`
  width: 100%;
`;
const Gallery = styled.div`
  width: 100%;
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
  font-size: 64px;
  cursor: pointer;
`;
const CustomSize = styled.div`
  width: 200px;
`;

function GameFour() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("Seleccione las medidas.");
  const [selectedImg, setSelectedImg] = useState(ImgOne);
  const [size, setSize] = useState({ x: 1, y: 1 });
  const [inputX, setInputX] = useState("");
  const [inputY, setInputY] = useState("");

  const ref = useRef(null);

  useEffect(() => {}, []);

  const setSizes = (x, y) => {
    setSize({ x, y });
    setShowModal(true);
  };

  const setSelectedImage = (img) => {
    setSelectedImg(img);
    const element = ref.current;

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SelectedGameWrapper className=" pb-[56px] h-auto bg-bg ">
      <Gallery className=" h-auto [&_div]:mx-[20px] py-[32px] ">
        <div className=" flex [&_img]:min-w-[250px] [&_div]:cursor-pointer [&_img]:rounded-[10px] justify-center ">
          <div onClick={() => setSelectedImage(ImgOne)}>
            <img src={ImgOne} alt="" className=" w-[200px] " />
          </div>
          <div onClick={() => setSelectedImage(ImgTwo)}>
            <img src={ImgTwo} alt="" className=" w-[200px] " />
          </div>
          <div onClick={() => setSelectedImage(ImgThree)}>
            <img src={ImgThree} alt="" className=" w-[200px] " />
          </div>
        </div>
        <div className=" flex [&_img]:min-w-[250px] [&_div]:cursor-pointer [&_img]:rounded-[10px] justify-center mt-[56px] ">
          <div onClick={() => setSelectedImage(ImgFour)}>
            <img src={ImgFour} alt="" className=" w-[200px] " />
          </div>
          <div onClick={() => setSelectedImage(ImgFive)}>
            <img src={ImgFive} alt="" className=" w-[200px] " />
          </div>
          <div onClick={() => setSelectedImage(ImgSix)}>
            <img src={ImgSix} alt="" className=" w-[200px] " />
          </div>
        </div>
      </Gallery>

      <div className=" py-[32px] text-center bg-navbar ">
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

      <Sizes className=" mt-[32px] px-[20px] h-[200px] bg-navbar ">
        <div className=" flex justify-between h-full w-[calc(100%-300px)] py-[25px] ">
          <SizesCard
            onClick={() => setSizes(1, 2)}
            className=" h-full bg-[#3a86ff] rounded-[10px] text-white "
          >
            1x2
          </SizesCard>
          <SizesCard
            onClick={() => setSizes(2, 2)}
            className=" h-full bg-[#aeb8fe] rounded-[10px] "
          >
            2x2
          </SizesCard>
          <SizesCard
            onClick={() => setSizes(2, 4)}
            className=" h-full bg-[#7209b7] rounded-[10px] text-white "
          >
            2x4
          </SizesCard>
        </div>

        <CustomSize ref={ref} className=" flex flex-col justify-center items-center p-2 w-[calc(100%/5)] h-full ">
          <div className=" w-full ">
            <div className=" w-full mb-4 ">
              <input
                onChange={(e) => setInputX(e.target.value)}
                value={inputX}
                type="text"
                placeholder="Filas"
                className=" w-full h-[36px] rounded text-sm indent-2 "
              />
            </div>
            <div>
              <input
                onChange={(e) => setInputY(e.target.value)}
                value={inputY}
                type="text"
                placeholder="Columnas"
                className=" w-full h-[36px] rounded text-sm indent-2 "
              />
            </div>
          </div>
          <div className=" mt-4 w-full ">
            <button
              onClick={() => {
                setInputX("");
                setInputY("");
                setSizes(inputX, inputY);
              }}
              className=" bg-primary text-white w-full h-[40px] rounded "
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
