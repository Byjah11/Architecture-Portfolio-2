import styled from "styled-components";
import { useState } from "react";
import { SnapSection } from "./ui";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: ${(p) => (p.flip ? "row-reverse" : "row")};
  /* padding: 64px; */
`;

const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${(p) => (p.equal ? "50%" : "100%")};
  overflow: hidden;
  transition: all 1s ease;
  cursor: pointer;
`;

const ImgContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  /* width: ${(p) => (p.equal ? "100%" : "auto")}; */
  /* width: 100%; */
  height: ${(p) => (p.sm ? "50%" : "100%")};
  object-fit: ${(p) => (p.sm ? "scale-down" : "cover")};
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
    <SnapSection>
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
            viewport={{ once: true, margin: "-200px" }}
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
          viewport={{ once: true, margin: "-200px" }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
        >
          {children}
        </Right>
      </Container>
    </SnapSection>
  );
};

export default Split;
