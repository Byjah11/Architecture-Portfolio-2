import styled from "styled-components";
import ProjectBanner from "../components/ProjectBanner";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data";
import ProjectFooter from "../components/ProjectFooter";
import BigGallery from "../components/BigGallery";
import Gallery from "../components/Gallery";

const Container = styled.div`
  color: var(--text-dark);
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Desc = styled.div`
  max-width: 30%;
  margin: 96px 0;
`;

const Paragraph = styled.p`
  text-align: justify;
  text-align-last: center;
  margin-bottom: 16px;
  font-size: 1.2rem;
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
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <Container>
      <Bg src="/assets/imgs/bg_top.png" top />
      <Bg src="/assets/imgs/bg_down.png" bot />
      {project.subProjects.map((p) => (
        <Wrapper key={p.id}>
          <ProjectBanner p={p} />
          <BigGallery imgs={p.bigImgs} />
          <Desc>
            {p.desc.map((par, i) => (
              <Paragraph
                key={i}
                dangerouslySetInnerHTML={{ __html: par }}
              ></Paragraph>
            ))}
          </Desc>
          <Gallery imgs={p.imgs} />
        </Wrapper>
      ))}
      <ProjectFooter id={id} />
    </Container>
  );
};

export default Project;
