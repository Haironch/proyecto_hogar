import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;
  background-color: transparent;

  .user {
    display: inherit;
    align-items: center;

    .fa-user-circle {
      margin-right: 12px;
    }
  }
  i {
    font-size: 36px;
  }
`;

function AdminNavbar() {
  const admin = {
    first_name: "Hairon",
    last_name: "Chávez",
  };

  return (
    <AdminNavbarWrapper>
      <Link to="/admin/panel" className="user">
        <div>
          <i className="fa-solid fa-user-circle"></i>
        </div>
        <div>
          <p>
            {admin.first_name} {admin.last_name}
          </p>
        </div>
      </Link>
      <div onClick={() => alert("Logout")}>
        <i className="fa-solid fa-right-from-bracket"></i>
      </div>
    </AdminNavbarWrapper>
  );
}

export default AdminNavbar;
