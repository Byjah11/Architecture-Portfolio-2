import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  a {
    color: inherit;
  }
`;

const Footer = () => {
  return (
    <Container>
      <div>agnieszkanowacka6021@gmail.com</div>
      <div>
        Site by{" "}
        <a href="https://barteknowacki.netlify.app/" target="blank">
          b.n
        </a>
      </div>
    </Container>
  );
};

export default Footer;
