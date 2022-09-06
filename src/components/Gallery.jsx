import styled from "styled-components";
import device from "./breakpoints";
import GalleryCard from "./GalleryCard";

const Container = styled.div`
  padding: 0 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
  margin: 32px 0;
  @media ${device.mobileM} {
    padding: 0 16px;
  }
  @media ${device.tablet} {
    gap: 16px;
    padding: 0 32px;
  }
  @media ${device.laptop} {
    padding: 0 64px;
  }
`;

const getDelay = (i) => {
  if (i % 3 === 0) {
    return 0;
  } else if (i % 3 === 1) {
    return 0.1;
  } else if (i % 3 === 2) {
    return 0.2;
  }
};

const Gallery = ({ imgs }) => {
  return (
    <Container>
      {imgs.map((img, index) => (
        <GalleryCard
          key={index}
          imgs={imgs}
          img={img}
          index={index}
          delay={getDelay(index)}
        />
      ))}
    </Container>
  );
};

export default Gallery;
