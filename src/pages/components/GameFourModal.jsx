import styled from "styled-components";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import Swal from "sweetalert2/dist/sweetalert2.js";

const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];

const colors_theme = {
  primary: "#8AC926",
  secondary: "#003566",
  primaryHover: "#0077B6",
  texto: "#0582CA",
  fontfamily: "'Chakra Petch', sans-serif",
};

const CreateUpdateChildModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${colors_theme.text};
  background-color: rgba(0, 0, 0, 0.5);
  .close-icon {
    position: absolute;
    top: 56px;
    right: 56px;
    color: red;
    font-size: 36px;
    cursor: pointer;
  }
`;

function CreateUpdateChildModal({ setShowModal, image, size }) {
  // const { getChilds, getChildByID } = useContext(GamesContext);

  const set = () => {
    Swal.fire({
      title: "Ganador!",
      text: "",
      icon: "success",
      confirmButtonColor: "#8338ec",
      confirmButtonText: "Cool",
    });
  };

  return (
    <CreateUpdateChildModalWrapper>
      <div className=" w-[800px] h-[800px] bg-[#8338ec] ">
        <div className=" flex justify-center items-center w-full h-[64px] ">
          <button onClick={() => setShowModal(false)} className=" bg-blue-400 ">
            Volver
          </button>
        </div>
        <div className=" flex justify-center items-center mx-auto w-[700px] h-[700px] ">
          <JigsawPuzzle
            imageSrc={image}
            rows={size.x}
            columns={size.y}
            onSolved={set}
            className="jigsaw-puzzle "
            scale={2}
            zoom={2}
          />
        </div>
      </div>
    </CreateUpdateChildModalWrapper>
  );
}

export default CreateUpdateChildModal;
