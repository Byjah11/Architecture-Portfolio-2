import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NavLink } from "./ui.js";
import device from "./breakpoints";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 16px 16px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 300;

  @media ${device.mobileM} {
    padding: 32px 32px;
  }
  @media ${device.tablet} {
    padding: 32px 64px;
  }
`;
const Left = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavLinkProjects = styled(NavLink)`
  position: absolute;
  right: 16px;
  transform: translateX(5px);
  background-color: ${(p) =>
    p.pathname === "/" ? "var(--text-dark)" : "transparent"};

  padding: 8px 0;

  @media ${device.mobileM} {
    right: 32px;
  }

  @media ${device.tablet} {
    right: 20%;
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
  const dark = pathname.split("/")[1] === "project" || pathname === "/info";

  return (
    <Container>
      <Left>
        <NavLink to="/" dark={dark}>
          Agnieszka Nowacka
        </NavLink>
      </Left>
      <Right>
        {pathname === "/" || dark ? (
          <NavLinkProjects to="/projects" dark={dark} pathname={pathname}>
            Projects
          </NavLinkProjects>
        ) : (
          <NavLinkProjects to="/" dark={dark}>
            Close
          </NavLinkProjects>
        )}

        <NavLink to="/info" dark={dark}>
          Info
        </NavLink>
      </Right>
    </Container>
  );
};

export default Navbar;
