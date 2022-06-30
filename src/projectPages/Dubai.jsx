import styled from "styled-components";
import {
  Gallery,
  BigGallery,
  ProjectBanner,
  Description,
  device,
} from "../components";
import p from "../data/dubai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Desc = styled.div`
  padding: 32px;

  @media ${device.mobileM} {
    padding: 64px;
  }
  @media ${device.tablet} {
    padding: 128px 20%;
  }
  @media ${device.laptop} {
    padding: 128px 30%;
  }
`;

const Dubai = () => {
  return (
    <>
      <ProjectBanner p={p} btn />
      <BigGallery imgs={p.bigImgs} />
      <Desc>
        <Description textArr={p.desc} />
      </Desc>
      <Gallery imgs={p.imgs} />
    </>
  );
};

export default Dubai;
