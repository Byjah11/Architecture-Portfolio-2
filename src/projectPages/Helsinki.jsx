import styled from "styled-components";
import {
  BigGallery,
  Description,
  ProjectBanner,
  Split,
  device,
} from "../components";
import p from "../data/helsinki";

const Text = styled.div`
  padding: 32px;

  @media ${device.mobileM} {
    padding: 64px;
  }
  @media ${device.tablet} {
    padding: 0 10%;
  }
  @media ${device.laptop} {
    padding: 0 20%;
  }
`;
const Helsinki = () => {
  return (
    <>
      <ProjectBanner p={p} btn />
      <Split img={p.split.img}>
        <Text>
          <Description textArr={p.split.desc} />
        </Text>
      </Split>
      <BigGallery imgs={p.bigImgs} />
    </>
  );
};

export default Helsinki;
