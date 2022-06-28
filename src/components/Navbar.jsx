import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NavLink } from "./ui.js";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 64px 64px 0 64px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 300;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavLinkProjects = styled(NavLink)`
  position: absolute;
  bottom: 0;
  right: 20%;
  transform: translateX(5px);

  span {
    position: relative;

    &::before {
      content: "";
      height: 0;
      width: 3px;
      position: absolute;
      background-color: #fff;
      border-radius: 2px;
      top: -12px;
      left: 50%;
      transform: translate(-50%, -100%);
      animation: extend 1s linear 1s both;
    }

    /* &::after {
      content: "";
      height: 8vh;
      width: 3px;
      position: absolute;
      background-color: #fff;
      border-radius: 3px;
      bottom: -6px;
      left: 50%;
      transform: translate(-50%, 100%);
    } */
  }

  @keyframes extend {
    from {
      height: 0;
    }
    to {
      height: 38vh;
    }
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();
  const isProject = pathname.split("/")[1] === "project";

  return (
    <Container>
      <Left>
        <NavLink to="/" dark={isProject}>
          Agnieszka Nowacka
        </NavLink>
      </Left>
      <Right>
        {pathname === "/" ? (
          <NavLinkProjects to="/projects" dark={isProject}>
            Pro<span>j</span>ects
          </NavLinkProjects>
        ) : isProject ? (
          <NavLinkProjects to="/projects" dark={isProject}>
            Projects
          </NavLinkProjects>
        ) : (
          <NavLinkProjects to="/" dark={isProject}>
            Close
          </NavLinkProjects>
        )}

        <NavLink to="/info" dark={isProject}>
          Info
        </NavLink>
      </Right>
    </Container>
  );
};

export default Navbar;
