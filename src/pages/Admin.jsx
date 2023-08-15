import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import CreateUpdateChildModal from "../components/CreateUpdateChildModal";

const colors = {
  primary: "#202020",
  secondary: "#ffffff",
  primaryHover: "black",
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
    background-color: gray;
    border-radius: 4px;
    
    a {
      display: block;
      margin-bottom: 32px;
      color: white;
      font-size: 18px;
      border: 1px solid red;
      padding: 16px 12px;
      border-radius: 4px;
      transition: 300ms all;


      &:hover {
        background-color: ${colors.primaryHover};
      }
    }
  }
`;

const AddChildButton = styled.button`
  position: absolute;
  bottom: 56px;
  right: 56px;
  border: none;
  box-shadow: 0 5px 10px 0px green;
  
  ${styleFlex};
  padding: 8px 18px;
  width: auto;
  height: 44px;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;

  i {
    margin-right: 8px;
    font-size: 24px;
  }
`;

function Admin() {
  const [chilldren, setChilldren] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getchildren = async () => {
    const response = await axios.get("https://reqres.in/api/users/");
    console.log(response.data.data);
    setChilldren(response.data.data);
  };

  useEffect(() => {
    getchildren();
  }, []);

  return (
    <AdminWrapper>
    <AdminNavbar />
      <AdminSubWrapper>
      <h1 className="child-list-title">Seleccione un niño para ingresar a los juegos</h1>
        <div className="child-list">
          {chilldren.map((chill) => (
            <Link to={`/admin/${chill.id}`} key={chill.id}>
              {" "}
              <p>
                {chill.first_name} {chill.last_name}{" "}
              </p>{" "}
            </Link>
          ))}
        </div>
      </AdminSubWrapper>
      <AddChildButton onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-user-plus"></i>
            Agregar niño
      </AddChildButton>
      {showModal && <CreateUpdateChildModal setShowModal={setShowModal} />}
    </AdminWrapper>
  );
}

export default Admin;
