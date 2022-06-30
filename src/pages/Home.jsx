import styled from "styled-components";
import { Navbar } from "../components";

const Container = styled.div`
  height: 100vh;
  background-image: url("/assets/imgs/bg_home.jpg");
  background-position: top;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  /* transform: translate(-50%, -50%); */
  font-size: 4rem;
  font-weight: 300;

  span {
    position: relative;

    &::before {
      content: "";
      height: 38vh;
      width: 3px;
      position: absolute;
      background-color: #fff;
      border-radius: 3px;
      top: -8px;
      left: 50%;
      transform: translate(-50%, -100%);
      animation: extend38 1s linear;
    }

    &::after {
      content: "";
      height: 50vh;
      width: 3px;
      position: absolute;
      background-color: #fff;
      border-radius: 3px;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      animation: extend50 1s linear;
    }
  }

  @keyframes extend38 {
    from {
      height: 0;
    }
    to {
      height: 38vh;
    }
  }
  @keyframes extend50 {
    from {
      height: 0;
    }
    to {
      height: 39vh;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>
        PORTFOL<span>I</span>O
      </Title>
    </Container>
  );
};

export default Home;
