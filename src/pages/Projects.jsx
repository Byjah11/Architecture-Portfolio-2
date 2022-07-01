import styled from "styled-components";
import { links } from "../data/links";
import { NavLink } from "../components/ui";
import { device } from "../components";

const Container = styled.div`
  height: 100vh;
  background-image: url("/assets/imgs/bg_home.jpg");
  background-position: top;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 64px;
  padding-top: 43px;
`;

const LinkItem = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 300;
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const Info = styled.div`
  position: absolute;
  display: none;
  opacity: 0;
  transition: all 250ms ease;
  font-size: 1.5rem;
  z-index: 2;
  @media ${device.tablet} {
    display: block;
  }
`;

const Year = styled(Info)`
  left: 0;
  transform: translateX(-100%);
`;

const Type = styled(Info)`
  right: 0;
  transform: translateX(100%);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(p) => p.img});
  background-position: bottom;
  background-size: cover;
  /* background-repeat: no-repeat; */
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
`;

const ProjectLink = styled(NavLink)`
  z-index: 2;
  position: relative;
  padding: 16px 0;
  margin: 16px 0;
  animation: reveal 0.5s ease;
  animation-delay: ${(p) => `${p.delay}ms`};
  animation-fill-mode: both;

  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover ~ ${Year}, &:hover ~ ${Type} {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover ~ ${Overlay} {
    opacity: 1;
  }
`;

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        {links.map((p, i) => (
          <LinkItem key={p.id}>
            <ProjectLink to={`/project/${p.id}`} delay={i * 250}>
              {p.link}
            </ProjectLink>
            <Year>{p.year}</Year>
            <Type>
              {p.type}
              {p.realized && " | realized"}
            </Type>
            <Overlay img={`/assets/imgs/${p.img}`} />
          </LinkItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Projects;
