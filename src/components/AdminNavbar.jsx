import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AdminNavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;

  .user {
    display: inherit;
    align-items: center;

    .fa-user-circle {
      margin-right: 12px;
    }
  }
`;

function AdminNavbar({ child, canReturn }) {
  const [user] = useState(JSON.parse(localStorage.getItem("user_data")));

  const navigate = useNavigate();
  const { childId } = useParams();

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_data");
    localStorage.removeItem("selected-child");
    navigate("/");
  };

  return (
    <AdminNavbarWrapper className=" bg-black text-white ">
      {child === null || child === undefined ? (
        <Link to="/admin/panel" className="user border border-red-400 ">
          <div>
            <i className=" text-3xl fa-solid fa-user-circle"></i>
          </div>
          <div>
            <p>
              {user.name} {user.lastname}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex items-center ">
          <div>
            <i className=" mr-2 text-3xl fa-solid fa-child "></i>
          </div>
          <div>
            <p>
              {child?.name} {child?.lastname}
            </p>
          </div>
        </div>
      )}
      <div className=" flex ">
        {canReturn ? (
          <div className=" mr-5 ">
            <Link
              to={`/admin/${childId}`}
              className=" flex justify-center items-center w-[100px] h-[48px] uppercase bg-blue-400 rounded "
            >
              <i className="fa-solid fa-"></i>
              Atras
            </Link>
          </div>
        ) : (
          <div onClick={handleLogout}>
            <i className=" text-3xl fa-solid fa-right-from-bracket"></i>
          </div>
        )}
      </div>
    </AdminNavbarWrapper>
  );
}

export default AdminNavbar;
