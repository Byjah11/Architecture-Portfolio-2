import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Info from "./pages/Info";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  @media (min-width: 700px) {
    display: block;
  }
`;

const MobileWarning = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  padding: 8px;
  @media (min-width: 700px) {
    display: none;
  }
`;

const App = () => {
  return (
    <>
      <MobileWarning>PS looks better on a bigger screen</MobileWarning>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
