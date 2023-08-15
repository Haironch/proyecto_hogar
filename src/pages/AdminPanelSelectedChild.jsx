import styled from "styled-components";
import AdminNavbar from "../components/AdminNavbar";
import { useParams } from "react-router-dom";

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
  flex-direction: column;
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
const AdminPanelContent = styled.div`
  width: 80%;

`;
const Table = styled.table`
  border: 2px solid white;
  width: 100%;

  .table-row-header {
    ${styleFlex};
    justify-content: space-between;
    height: 48px;
    font-size: 24px;
    border-bottom: 2px solid white;

    div {
      text-align: center;
      width: calc(70% / 3);
    }
    div:nth-of-type(4) {
      width: 30%;
    }
  }
`;

function AdminPanel() {
  const params = useParams();

  const games = [
    {
      name: "Habilidad numerica",
      level: "Juego 1",
      time: "3.6",
      approved: true,
    },
    {
      name: "Habilidad geometrica",
      level: "Juego 2",
      time: "4.9",
      approved: false,
    },
    {
      name: "Habilidad Gramatical",
      level: "Juego 3",
      time: "9.6",
      approved: true,
    },
  ];

  return (
    <AdminPanelWrapper>
      <AdminNavbar />
      <AdminPanelContainer>
        <AdminPanelContent>
          <ChildHeader />
          <Table>
            <div className="table-row-header">
              <div>Juego</div>
              <div>Times</div>
              <div>Aprobado</div>
              <div>Habilidad Nueva</div>
            </div>
            {games.map((game) => (
              <ChildRow game={game} />
            ))}
          </Table>
        </AdminPanelContent>
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

function ChildRow({ game }) {
  return (
    <ChildRowWrapper>
      <div className="table-row-name">{game.level}</div>
      <div>{game.time}</div>
      <div>
        {game.approved ? (
          <CompletedIcon className="fa-solid fa-check-circle"></CompletedIcon>
        ) : (
          <UncompletedIcon className="fa-solid fa-times-circle"></UncompletedIcon>
        )}
      </div>
      <div>
        {game.approved ? (
          <p style={{ color: "#34a0a4" }}>
            {game.level} aprobado: {game.name} obtenida
          </p>
        ) : (
          <p style={{ color: "#e63946" }}>
            {game.level} {game.name} pendiente
          </p>
        )}
      </div>
    </ChildRowWrapper>
  );
}

// child header
const ChildHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  width: 100%;
  border: 1px solid blue;

  .child {
    display: flex;
    align-items: center;

    .fa-user-circle {
      margin-right: 12px;
    }
    i {
      font-size: 36px;
    }
  }

  .actions {
    display: flex;
  justify-content: space-between;
  }
`;
const Button = styled.button`
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
const ButtonUpdate = styled(Button)`

  background-color: #62b6cb;
`;
const ButtonDelete = styled(Button)`
  margin-left: 24px;
  background-color: ${colors.red};
`;

function ChildHeader() {
  return (
    <ChildHeaderWrapper>
      <div className="child">
        <div>
          <i className="fa-solid fa-user-circle"></i>
        </div>
        <div>
          <p>Pedrito Lopez</p>
        </div>
      </div>
      <div className="actions">
        <ButtonUpdate>
        <i className="fa-solid fa-pen-to-square"></i>
        Modificar datos</ButtonUpdate>
        <ButtonDelete>
          <i className="fa-solid fa-times-circle"></i>
          Eliminar
        </ButtonDelete>
      </div>
    </ChildHeaderWrapper>
  );
}

export default AdminPanel;
