import styled from "styled-components";
import { useState } from "react";
import device from "./breakpoints";
import { motion } from "framer-motion";

const Container = styled.div`
  /* min-height: 100vh; */
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${device.tablet} {
    flex-direction: ${(p) => (p.flip ? "row-reverse" : "row")};
    gap: 0px;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-width: ${(p) => (p.equal ? "50%" : "100%")};
  transition: all 1s ease;
  cursor: pointer;
`;

const ImgContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  /* display: block; */
  /* width: ${(p) => (p.equal ? "100%" : "auto")}; */
  width: 100%;
  max-height: ${(p) => (p.sm ? "80vh" : "100vh")};
  height: ${(p) => (p.sm ? "50%" : "100%")};
  /* object-fit: ${(p) =>
    p.equal ? (p.sm ? "contain" : "cover") : "contain"}; */
  object-fit: contain;
  transition: all 1s ease;
`;

const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50%;
`;

const Split = ({ img, flip, children, sm }) => {
  const [equal, setEqual] = useState(true);

  return (
    <Container flip={flip}>
      <Left
        onClick={() => {
          setEqual(!equal);
        }}
        equal={equal}
      >
        <ImgContainer
          initial={{ opacity: 0, x: flip ? 300 : -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-200px 300px -200px 300px" }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
        >
          <Image src={`/assets/imgs/${img}`} equal={equal} sm={sm} />
        </ImgContainer>
      </Left>

      <Right
        initial={{ opacity: 0, x: flip ? -300 : 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-200px 300px -200px 300px" }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
      >
        {children}
      </Right>
    </Container>
  );
};

export default Split;
