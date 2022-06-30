import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
  color: ${(p) => (p.dark ? "#464f51" : "#fff")};

  &::after {
    content: "";
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(p) => (p.dark ? "#464f51" : "#fff")};
    transition: all 250ms ease;
  }

  &:hover::after {
    width: 110%;
  }
`;

export const ScrollBtn = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  width: 30px;
  height: 60px;
  border: 2px solid var(--text-dark);
  border-radius: 25px;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    background-color: var(--text-dark);
    animation: move-down 2s infinite;
  }

  &::after {
    content: "Scroll Down";
    display: block;
    width: 200px;
    position: absolute;
    text-align: center;
    top: -10px;
    transform: translateY(-100%);
    transition: all 0.5s ease;
    color: var(--text-dark);
  }

  @keyframes move-down {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(30px);
      opacity: 0;
    }
  }
`;

export const SnapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  color: var(--text-dark);
  background-color: #ffffff;
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SnapSection = styled.div`
  width: 100%;
  height: 100vh;
  flex: none;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
