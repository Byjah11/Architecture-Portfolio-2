import styled from "styled-components";
import { useState } from "react";
import Lightbox from "./Lightbox";
import { AnimatePresence, motion } from "framer-motion";
import device from "./breakpoints";

const Wrapper = styled(motion.div)`
  flex: 1;
  min-width: 100%;
  /* max-height: calc(50vh - 32px); */

  @media ${device.tablet} {
    min-width: calc((100% - 16px) / 2);
    aspect-ratio: 3/2;
  }

  @media ${device.laptop} {
    min-width: calc((100% - 32px) / 3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 2rem;
  opacity: 0;
  transition: all 250ms ease;
`;

const ImgContainer = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const GalleryCard = ({ imgs, img, index, delay }) => {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <Wrapper
        whileHover={{ scale: 0.98 }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut", delay },
        }}
        viewport={{ once: true }}
      >
        <ImgContainer onClick={() => setLightbox(true)}>
          <Image
            key={index}
            src={`/assets/imgs/${img.src}`}
            alt={`img${index}`}
          />
          <Overlay>{img.title}</Overlay>
        </ImgContainer>
      </Wrapper>
      <AnimatePresence>
        {lightbox && (
          <Lightbox setShow={setLightbox} imgs={imgs} index={index} />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryCard;
