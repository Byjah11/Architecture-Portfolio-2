import styled from "styled-components";
import GalleryCard from "./GalleryCard";

const Container = styled.div`
  padding: 0 64px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 64px;
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
