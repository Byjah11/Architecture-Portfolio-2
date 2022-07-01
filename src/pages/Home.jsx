import styled from "styled-components";
import { device } from "../components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background-image: url("/assets/imgs/bg_home.jpg");
  background-position: top;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const Title = styled(Link)`
  position: absolute;
  color: #fff;
  text-decoration: none;
  top: 50%;
  right: 32px;
  font-size: 2.5rem;
  font-weight: 300;

  @media ${device.mobileM} {
    right: 48px;
    font-size: 3rem;
  }
  @media ${device.tablet} {
    right: 20%;
    font-size: 4rem;
  }

  span {
    position: relative;

    &::before {
      content: "";
      height: 50vh;
      width: 3px;
      position: absolute;
      background-color: #fff;
      top: -8px;
      left: 50%;
      transform: translate(-50%, -100%);
      animation: extend50 2s ease-in-out;
    }

    &::after {
      content: "";
      height: 50vh;
      width: 3px;
      position: absolute;
      background-color: #fff;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      animation: extend50 2s ease-in-out;
    }
  }
  @keyframes extend50 {
    from {
      height: 0;
    }
    to {
      height: 50vh;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <Title to="/projects">
        PORTFOL<span>I</span>O
      </Title>
    </Container>
  );
};

export default Home;
