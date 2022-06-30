import styled from "styled-components";
import {
  BigGallery,
  Description,
  ProjectBanner,
  Split,
  ProjectFooter,
} from "../components";
import p from "../data/helsinki";

const Text = styled.div`
  padding: 0 20%;
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
