import styled from "styled-components";
import { ProjectBanner, Split, Description, BigGallery } from "../components";
import { h1, h2 } from "../data/hotels";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SplitContent = styled.div`
  padding: 0 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SplitImg = styled.img`
  max-height: 50%;
  width: 100%;
  /* height: 100%; */
  object-fit: contain;
`;

const SplitImgBig = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Hotels = () => {
  return (
    <Container>
      <ProjectBanner p={h1} btn />
      <Split img={h1.splits[0].img}>
        <SplitContent>
          <Description textArr={h1.splits[0].desc} align="center" />
        </SplitContent>
      </Split>
      <Split img={h1.splits[1].img} flip>
        <SplitContent>
          <Description textArr={h1.splits[1].desc} align="center" />
          <SplitImg src={`/assets/imgs/${h1.splits[1].imgSm}`} />
        </SplitContent>
      </Split>
      <Split img={h1.splits[2].img}>
        <SplitContent>
          <SplitImg src={`/assets/imgs/${h1.splits[2].imgSm}`} />
          <Description textArr={h1.splits[2].desc} align="center" />
        </SplitContent>
      </Split>
      <Split img={h1.splits[3].img} flip>
        <SplitImgBig src={`/assets/imgs/${h1.splits[3].imgSm}`} />
      </Split>
      <Split img={h1.splits[4].img} flip>
        <SplitImgBig src={`/assets/imgs/${h1.splits[4].imgSm}`} />
      </Split>
      {/* Hotel 2 */}
      <ProjectBanner p={h2} />
      <Split img={h2.splits[0].img}>
        <SplitContent>
          <img src={`/assets/imgs/${h2.splits[0].imgSm}`} alt="legend" />
          <Description textArr={h2.splits[0].desc} align="center" />
        </SplitContent>
      </Split>
      <BigGallery imgs={h2.bigImgs} />
    </Container>
  );
};

export default Hotels;
