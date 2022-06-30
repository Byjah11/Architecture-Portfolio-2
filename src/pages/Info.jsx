import styled from "styled-components";
import { Description, Gallery, Navbar } from "../components";
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
  padding-bottom: 64px;
  overflow: hidden;
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
  min-height: 100vh;
  width: 100%;
`;
const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: 400px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  width: 100%;
  max-width: 600px;
  padding-top: 128px;
`;

const Contact = styled(motion.div)`
  font-weight: 700;
  font-size: 1.5rem;
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
      <Bg src="/assets/imgs/bg_down.png" bot />
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
        </Right>
      </Banner>
      <div id="scroll" />
      <Gallery imgs={info.imgs} />
    </Container>
  );
};

export default Info;
