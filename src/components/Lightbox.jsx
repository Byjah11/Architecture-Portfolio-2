import React, { useState } from "react";
import styled from "styled-components";
// import { Arrow, ArrowTooltip } from "./ProjectBanner";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { CgClose } from "react-icons/cg";

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  vertical-align: top;
`;

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  max-height: calc(100% - 32px);
  max-width: calc(100% - 32px);
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  z-index: 151;
`;

const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: zoom-out;
`;

const CurrentImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  color: var(--text-dark);
  font-weight: 500;
  background-color: #fff;
  text-transform: uppercase;
`;

const Button = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  letter-spacing: 0;
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 250ms ease;

  cursor: pointer;
  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

const Arrow = styled(Button)`
  top: auto;
  right: ${(p) => (p.left ? "auto" : 0)};
  left: ${(p) => (p.left ? 0 : "auto")};
  z-index: 152;
`;

const Lightbox = ({ setShow, imgs, index }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const lastIndex = imgs.length - 1;

  const changeImg = (dir) => {
    switch (dir) {
      case "next":
        if (currentIndex < lastIndex) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
        break;
      case "prev":
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(lastIndex);
        }
        break;

      default:
        break;
    }
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Blur onClick={() => setShow(false)} />
      <Wrapper
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <CurrentImg>
          {`${currentIndex + 1} / ${lastIndex + 1}`} {imgs[currentIndex].title}
        </CurrentImg>

        <Image src={`/assets/imgs/${imgs[currentIndex].src}`} />
        <IconContext.Provider
          value={{ size: "3rem", style: { verticalAlign: "middle" } }}
        >
          <Button onClick={() => setShow(false)}>
            <CgClose />
          </Button>
          <Arrow left onClick={() => changeImg("prev")}>
            <TiChevronLeft />
          </Arrow>
          <Arrow right onClick={() => changeImg("next")}>
            <TiChevronRight />
          </Arrow>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Lightbox;
