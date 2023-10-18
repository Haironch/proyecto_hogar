import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import CreateUpdateChildModal from "../components/CreateUpdateChildModal";
import { Button } from "@nextui-org/react";
import GamesContext from "../context/games/Context";

const styleFlex = {
  display: "flex;",
  "justify-content": "center;",
  "align-items": "center;",
};

const AdminWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const AdminSubWrapper = styled.div`
  height: calc(100% - 150px);
  width: 100%;

  .child-list {
    max-height: 600px;
    overflow-y: auto;
    border-radius: 4px;

    a {
      display: block;
      margin-bottom: 32px;
      color: white;
      font-size: 18px;
      padding: 16px 12px;
      border-radius: 4px;
      transition: 300ms all;
    }
  }
`;

function Admin() {
  const [showModal, setShowModal] = useState(false);
  const { childs, getChilds } = useContext(GamesContext);

  const navigate = useNavigate();

  useEffect(() => {
    getChilds();
  }, []);

  const handleRedirect = async (childId) => {
    const { data } = await axios.get(`/api/child/${childId}`);
    localStorage.setItem("selected-child", JSON.stringify(data));
    navigate(`/admin/${childId}`);
  };

  return (
    <AdminWrapper className=" bg-bg ">
      <AdminNavbar />
      <AdminSubWrapper className=" mt-8 px-[40px] ">
        <div className=" flex justify-center items-center mb-[32px] w-full h-[75px] text-3xl ">
          <h1 className=" text-primary ">
            Seleccione un niño para ingresar a los juegos
          </h1>
        </div>
        <div className="child-list w-full min-h-[400px] h-[450px] overflow-y-auto ">
          {childs.length > 0 ? (
            childs.map((child) => (
              <button className=" mb-4 px-2 w-full h-[49px] text-start border-y border-dark hover:bg-primary hover:duration-300 " onClick={() => handleRedirect(child.id)} key={child.id}>
                <p>
                  {child.name} {child.lastname}{" "}
                </p>{" "}
              </button>
            ))
          ) : (
            <div className=" flex justify-center items-center text-red-500 w-full min-h-[400px] ">
              <p>No hay niños.</p>
            </div>
          )}
        </div>
      </AdminSubWrapper>
      <Button color="primary" className=" absolute bottom-[50px] left-[40px] h-[48px] text-lg " onClick={() => setShowModal(true)}>
        Agregar Niño
        <i className="fa-solid fa-plus"></i>
      </Button>
      {showModal && (
        <CreateUpdateChildModal state="CREATE" setShowModal={setShowModal} />
      )}
    </AdminWrapper>
  );
}

export default Admin;
