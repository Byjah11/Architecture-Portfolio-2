import styled from "styled-components";
import {
  Gallery,
  BigGallery,
  ProjectBanner,
  Description,
  Split,
} from "../components";
import { p1, p2 } from "../data/publications";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SplitRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
  padding: 0 20%;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Desc = styled.div`
  padding: 0 30%;
`;

const Publication = () => {
  return (
    <Container>
      <ProjectBanner p={p1} btn />
      <Split img={p1.split.imgBig} alt="p1">
        <SplitRight>
          <img src={`/assets/imgs/${p1.split.imgSm}`} alt="p2" />
          <Description textArr={p1.split.desc} align="center" />
        </SplitRight>
      </Split>
      <ProjectBanner p={p2} />
      <Desc>
        <Description textArr={p2.desc} />
      </Desc>
    </Container>
  );
};

export default Publication;
