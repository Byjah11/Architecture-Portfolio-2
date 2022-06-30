import styled from "styled-components";
import { NavLink } from "./ui.js";
import { links } from "../data/links";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import device from "./breakpoints.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
  padding: 32px 16px;
  gap: 16px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const Left = styled.div`
  @media ${device.tablet} {
    left: 32px;
    position: absolute;
  }
  @media ${device.laptop} {
    left: 64px;
  }
`;
const Right = styled.div`
  @media ${device.tablet} {
    right: 32px;
    position: absolute;
  }
  @media ${device.laptop} {
    right: 64px;
  }
`;
const Center = styled.div`
  display: flexs;
`;

const Arrow = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  text-decoration: none;
  width: 50px;
  height: 50px;
  position: relative;
  transition: all 250ms ease;
  border-radius: 50%;

  div {
    position: absolute;
    left: ${(p) => p.prev && 0};
    right: ${(p) => !p.prev && 0};
    transform: ${(p) => (p.prev ? "translateX(-200%)" : "translateX(200%)")};
    padding: 8px;
    white-space: nowrap;
    pointer-events: none;
    font-size: 1.2rem;
    opacity: 0;
    transition: all 250ms ease;
  }

  &:hover {
    background-color: #ccc;
  }

  &:hover div {
    opacity: 1;
    transform: ${(p) => (p.prev ? "translateX(-100%)" : "translateX(100%)")};
  }
`;

const ProjectFooter = ({ id }) => {
  const prevId = () => {
    if (id <= 1) {
      return links.length;
    } else {
      return id - 1;
    }
  };

  const nextId = () => {
    if (id >= links.length) {
      return 1;
    } else {
      return id + 1;
    }
  };

  return (
    <Container>
      <Left>
        <NavLink to={`/`} dark>
          AGNIESZKA NOWACKA
        </NavLink>
      </Left>
      <Center>
        <IconContext.Provider
          value={{ size: "3rem", style: { verticalAlign: "middle" } }}
        >
          <Arrow to={`/project/${prevId()}`} prev>
            <TiChevronLeft />
            <div>Previous Project</div>
          </Arrow>
          <Arrow to={`/project/${nextId()}`}>
            <TiChevronRight />
            <div>Next Project</div>
          </Arrow>
        </IconContext.Provider>
      </Center>
      <Right>
        <NavLink to="/projects" dark>
          BACK TO PROJECTS
        </NavLink>
      </Right>
    </Container>
  );
};

export default ProjectFooter;
