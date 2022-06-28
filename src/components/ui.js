import styled from "styled-components";
import { Link } from "react-router-dom";

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
