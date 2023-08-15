import styled from "styled-components";
import AdminNavbar from "../components/AdminNavbar";
import { Link } from "react-router-dom";

const colors = {
  primary: "#202020",
  secondary: "#ffffff",
  fontfamily: "'Chakra Petch', sans-serif",
  red: "#ef233c",
  blue: "#52b69a",
};

const styleFlex = {
  display: "flex;",
  "justify-content": "center;",
  "align-items": "center;",
};

const AdminPanelWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 0 80px;
`;
const AdminPanelContainer = styled.div`
  ${styleFlex};
  height: calc(100% - 150px);
  width: 100%;
  background-color: blueviolet;

  .games {
    ${styleFlex};
    justify-content: space-between;
    width: 100%;

    a {
      display: block;
      border: 2px solid black;
      height: 250px;
      width: 250px;
    }
  }
`;
const Table = styled.div`
  border: 2px solid white;
  width: 700px;

  .table-row-header {
    ${styleFlex};
    justify-content: space-between;
    height: 48px;
    font-size: 24px;
    border-bottom: 2px solid white;

    div {
      text-align: center;
      width: 20%;
    }
  }
`;

function AdminPanel() {
  const children = [
    {
      id: 1,
      name: "Juan Perez",
      game1: true,
      game2: false,
      game3: true,
    },
    {
      id: 2,
      name: "John Doe",
      game1: false,
      game2: false,
      game3: true,
    },
  ];
  return (
    <AdminPanelWrapper>
      <AdminNavbar />
      <AdminPanelContainer>
        <Table>
          <div className="table-row-header">
            <div>Niño</div>
            <div>Juego 1</div>
            <div>Juego 2</div>
            <div>Juego 3</div>
            <div>Acciones</div>
          </div>
          {children.map((child) => (
            <ChildRow child={child} key={child.id} />
          ))}
        </Table>
      </AdminPanelContainer>
    </AdminPanelWrapper>
  );
}

// style sub components
const ChildRowWrapper = styled.div`
  ${styleFlex};
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;

  .table-row-name {
    text-align: start;
  }

  div {
    text-align: center;
    width: 25%;
  }
`;
const CompletedIcon = styled.i`
  color: ${colors.blue};
  font-size: 32px;
`;
const UncompletedIcon = styled.i`
  color: ${colors.red};
  font-size: 32px;
`;
const OptionsButton = styled(Link)`
  ${styleFlex};
  width: 100%;
  height: 44px;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  font-size: 12px;
  background-color: #62b6cb;
`;

function ChildRow({ child }) {
  return (
    <ChildRowWrapper>
      <div className="table-row-name">{child.name}</div>
      <div>
        {child.game1 ? (
          <CompletedIcon className="fa-solid fa-check-circle"></CompletedIcon>
        ) : (
          <UncompletedIcon className="fa-solid fa-times-circle"></UncompletedIcon>
        )}
      </div>
      <div>
        {child.game2 ? (
          <CompletedIcon className="fa-solid fa-check-circle"></CompletedIcon>
        ) : (
          <UncompletedIcon className="fa-solid fa-times-circle"></UncompletedIcon>
        )}
      </div>
      <div>
        {child.game3 ? (
          <CompletedIcon className="fa-solid fa-check-circle"></CompletedIcon>
        ) : (
          <UncompletedIcon className="fa-solid fa-times-circle"></UncompletedIcon>
        )}
      </div>
      <div>
        <OptionsButton to={`/admin/panel/${child.id}`}>
          Ver progreso
        </OptionsButton>
      </div>
    </ChildRowWrapper>
  );
}


export default AdminPanel;
