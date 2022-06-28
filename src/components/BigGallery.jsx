import styled from "styled-components";

const Container = styled.div`
  padding: 0 64px;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: contain;
`;

const BigGallery = ({ imgs }) => {
  return (
    <Container id="gallery">
      {imgs.map((img, index) => (
        <Image key={index} src={`/assets/imgs/${img}`} alt={`img${index}`} />
      ))}
    </Container>
  );
};

export default BigGallery;
