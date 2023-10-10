import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import CreateUpdateChildModal from "../components/CreateUpdateChildModal";
import { Button } from "@nextui-org/react";
import GamesContext from "../context/games/Context";

const colors = {
  primary: "#8AC926",
  secondary: "#003566",
  primaryHover: "#0077B6",
  fontfamily: "'Chakra Petch', sans-serif",
};

const styleFlex = {
  display: "flex;",
  "justify-content": "center;",
  "align-items": "center;",
};

const AdminWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 0 80px;
`;

const AdminSubWrapper = styled.div`
  ${styleFlex};
  flex-direction: column;
  height: calc(100% - 150px);
  width: 100%;

  .child-list-title {
    width: 80%;
    margin-bottom: 48px;
    text-align: center;
  }

  .child-list {
    width: 80%;
    padding: 32px 16px;
    max-height: 600px;
    overflow-y: auto;
    background-color: #1982c4;
    border-radius: 4px;

    a {
      display: block;
      margin-bottom: 32px;
      color: white;
      font-size: 18px;
      //border: 1px solid red;
      padding: 16px 12px;
      border-radius: 4px;
      transition: 300ms all;

      &:hover {
        background-color: ${colors.primaryHover};
      }
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
    <AdminWrapper>
      <AdminNavbar />
      <AdminSubWrapper>
        <h1 className="child-list-title">
          Seleccione un niño para ingresar a los juegos
        </h1>
        <div className="child-list">
          {childs.length > 0 ? (
            childs.map((child) => (
              <button onClick={() => handleRedirect(child.id)} key={child.id}>
                <p>
                  {child.name} {child.lastname}{" "}
                </p>{" "}
              </button>
            ))
          ) : (
            <div>
              <p>No hay niños.</p>
            </div>
          )}
        </div>
      </AdminSubWrapper>
      <Button color="primary" onClick={() => setShowModal(true)}>
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
