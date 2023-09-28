import styled from 'styled-components'
import { useEffect, useState } from 'react';

const ChildNavbarWrapper = styled.div`
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

function ChildNavbar({child}) {

  return (
    <ChildNavbarWrapper>
        <div className="user">
            <div>
                <i className="fa-solid fa-user-circle"></i>
            </div>
            <div>
                <p>{child.name} {child.lastname}</p>
            </div>
        </div>
        <div onClick={() => alert("Logout")}>
            <i className="fa-solid fa-right-from-bracket"></i>
        </div>
    </ChildNavbarWrapper>
  )
}

export default ChildNavbar