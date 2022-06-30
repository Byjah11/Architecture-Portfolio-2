import styled from "styled-components";
import {
  Gallery,
  BigGallery,
  ProjectBanner,
  Description,
  ProjectFooter,
  Navbar,
} from "../components";
import { SnapContainer, SnapSection } from "../components/ui";
import p from "../data/dubai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Desc = styled.div`
  padding: 128px 33%;
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
