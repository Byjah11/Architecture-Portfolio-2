import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Info from "./pages/Info";
import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: block;
  }
`;

const MobileWarning = styled.div`
  position: fixed;
  background-color: var(--text-dark);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  padding: 8px;
  @media (min-width: 700px) {
    display: none;
  }
`;

const App = () => {
  return (
    <>
      <MobileWarning>
        You should try opening this site on bigger device
      </MobileWarning>
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
