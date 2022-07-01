import styled from "styled-components";
import {
  Gallery,
  ProjectBanner,
  Description,
  Split,
  device,
} from "../components";
import p from "../data/ukraine";

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
    padding: 0 10%;
  }
  @media ${device.laptop} {
    padding: 0 20%;
  }
`;

const Ukraine = () => {
  return (
    <Container>
      <ProjectBanner p={p} btn />
      <Split img={p.split1.img} flip>
        <Desc>
          <Description textArr={p.split1.desc} />
        </Desc>
      </Split>
      <Split img={p.split2.img}>
        <Desc>
          <Description textArr={p.split2.desc} />
        </Desc>
      </Split>
      <Gallery imgs={p.imgs} />
    </Container>
  );
};

export default Ukraine;
