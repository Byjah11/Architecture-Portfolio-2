import styled from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { projects } from "../data/data";
import { ProjectFooter, Footer } from "../components";

import {
  Dubai,
  Helsinki,
  Computational,
  Hotels,
  Publications,
  Ukraine,
} from "../projectPages";

const Container = styled.div`
  color: var(--text-dark);
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

const Bg = styled.img`
  width: 100%;
  z-index: -1;
  position: absolute;
  user-select: none;
  top: ${(p) => p.top && 0};
  bottom: ${(p) => p.bot && 0};
`;

const Project = () => {
  const { pathname } = useLocation();
  const id = Number(pathname.split("/")[2]);
  // const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  const renderProject = (id) => {
    switch (id) {
      case 1:
        return <Dubai />;
      case 2:
        return <Helsinki />;
      case 3:
        return <Computational />;
      case 4:
        return <Hotels />;
      // case 5:
      //   return <Interior />;
      case 5:
        return <Publications />;
      case 6:
        return <Ukraine />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Bg src="/assets/imgs/bg_top.png" top />
      {id !== 3 && <Bg src="/assets/imgs/bg_down.jpg" bot />}
      {renderProject(id)}
      <ProjectFooter id={id} />
      <Footer />
    </Container>
  );
};

export default Project;
