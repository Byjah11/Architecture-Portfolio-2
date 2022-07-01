import styled from "styled-components";
import {
  ProjectBanner,
  Split,
  Description,
  BigGallery,
  device,
} from "../components";
import { h1, h2 } from "../data/hotels";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  max-width: 100%;
`;

const SplitContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px 32px;

  @media ${device.mobileM} {
    padding: 32px 64px;
  }
  @media ${device.tablet} {
    padding: 32px 10%;
  }
  @media ${device.laptop} {
    padding: 32px 20%;
  }
`;

const SplitImg = styled.img`
  /* max-height: 30%; */
  width: ${(p) => (p.sm ? "60%" : "100%")};
  max-height: 50vh;
  margin-bottom: 32px;
  /* height: 100%; */
  object-fit: contain;
  @media ${device.laptopL} {
    width: ${(p) => (p.sm ? "40%" : "100%")};
  }
`;

const SplitImgBig = styled.img`
  height: 100%;
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

const Hotels = () => {
  return (
    <Container>
      <ProjectBanner p={h1} btn />
      <Split img={h1.splits[0].img}>
        <SplitContent>
          <Description textArr={h1.splits[0].desc} />
        </SplitContent>
      </Split>
      <Split img={h1.splits[1].img} flip>
        <SplitContent>
          <Description textArr={h1.splits[1].desc} />
          <SplitImg src={`/assets/imgs/${h1.splits[1].imgSm}`} />
        </SplitContent>
      </Split>
      <Split img={h1.splits[2].img}>
        <SplitContent>
          <SplitImg src={`/assets/imgs/${h1.splits[2].imgSm}`} sm />
          <Description textArr={h1.splits[2].desc} />
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
          <Description textArr={h2.splits[0].desc} />
        </SplitContent>
      </Split>
      <BigGallery imgs={h2.bigImgs} />
    </Container>
  );
};

export default Hotels;
