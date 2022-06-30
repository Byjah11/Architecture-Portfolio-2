import styled from "styled-components";
import { Description, Gallery, Navbar, device } from "../components";
import { NavLink } from "../components/ui";
import { info } from "../data/info";
import { ScrollBtn } from "../components/ui";
import { motion } from "framer-motion";

const Container = styled.div`
  color: var(--text-dark);
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;

  overflow: hidden;
  width: 100%;
`;

const Bg = styled.img`
  width: 100%;
  z-index: -1;
  position: absolute;
  user-select: none;
  top: ${(p) => p.top && 0};
  bottom: ${(p) => p.bot && 0};
`;

const Banner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 128px;
  min-height: 100vh;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: row;
    padding: 0;
  }
`;
const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
  @media ${device.tablet} {
    padding: 107px 16px;
  }
`;

const Text = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Contact = styled(motion.div)`
  font-weight: 700;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const BackLink = styled.div`
  margin: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const Info = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    const yOffset = 0;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <Container>
      <Navbar />
      <Bg src="/assets/imgs/bg_top.png" top />
      <Bg src="/assets/imgs/bg_down.jpg" bot />
      <Banner>
        <ScrollBtn
          onClick={() => scrollTo("scroll")}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 1,
          }}
        />
        <Left
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 1.8,
          }}
        >
          <img src="/assets/imgs/info/Gif.gif" alt="me" />
        </Left>
        <Right>
          <Text>
            <Description textArr={info.desc} align="center" />
          </Text>
        </Right>
      </Banner>
      <div id="scroll" />
      <Contact
        initial={{ opacity: 0, scaleX: 1.3 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
      >
        agnieszkanowacka6021@gmail.com
      </Contact>
      <Gallery imgs={info.imgs} />
      <BackLink>
        <NavLink to={`/projects`} dark>
          TO PROJECTS
        </NavLink>
      </BackLink>
    </Container>
  );
};

export default Info;
