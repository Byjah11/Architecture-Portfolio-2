import styled from "styled-components";
import { Gallery, BigGallery, ProjectBanner, Description } from "../components";
import p from "../data/interior";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Interior = () => {
  return (
    <Container>
      <ProjectBanner p={p} />
      <BigGallery imgs={p.bigImgs} />
      <Description textArr={p.desc} />
      <Gallery imgs={p.imgs} />
    </Container>
  );
};

export default Interior;
