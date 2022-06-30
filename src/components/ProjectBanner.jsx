import styled from "styled-components";
import { ScrollBtn, SnapSection } from "./ui";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  span {
    min-width: 25px;
  }
`;

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 4rem;
  margin-bottom: 16px;
  text-align-last: justify;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const Entry = styled(motion.div)`
  display: flex;
`;

const Key = styled.div`
  padding: 4px 0;
  margin-right: 8px;
  min-width: 150px;
  text-align: right;
`;

const Value = styled.div`
  border-left: 2px solid var(--text-dark);
  padding: 4px 8px;
`;

const ProjectBanner = ({ p, btn }) => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    const yOffset = 0;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <SnapSection>
      <>
        <Container>
          {btn && (
            <ScrollBtn
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 1,
              }}
              onClick={() => scrollTo("scroll")}
            />
          )}
          <Wrapper>
            <div>
              <Title>
                {p.title.split("").map((l, i) => (
                  <motion.span
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeOut",
                      duration: 1,
                      delay: i * 0.1,
                    }}
                    key={i}
                  >{`${l}`}</motion.span>
                ))}
              </Title>
              <Subtitle>
                <motion.div
                  initial={{ opacity: 0, scaleX: 1.2 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeOut",
                    duration: 2,
                  }}
                >
                  {p.subtitle}
                </motion.div>
              </Subtitle>
            </div>
            <Details>
              {Object.entries(p.details).map(([key, value], i) => (
                <Entry
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeOut",
                    duration: 1,
                    delay: i * 0.3,
                  }}
                  key={key}
                >
                  <Key>{key}</Key>
                  <Value>{value}</Value>
                </Entry>
              ))}
            </Details>
          </Wrapper>
        </Container>
        <div id="scroll" />
      </>
    </SnapSection>
  );
};

export default ProjectBanner;
