import styled from "styled-components";
import GalleryCard from "./GalleryCard";

const Container = styled.div`
  padding: 0 64px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;
`;

const Gallery = ({ imgs }) => {
  return (
    <Container>
      {imgs.map((img, index) => (
        <GalleryCard
          key={index}
          imgs={imgs}
          img={img}
          index={index}
          delay={index / 10}
        />
      ))}
    </Container>
  );
};

export default Gallery;
