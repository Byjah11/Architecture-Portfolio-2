import styled from "styled-components";
import { ScrollBtn, SnapSection } from "./ui";
import { motion } from "framer-motion";
import device from "./breakpoints";

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
  font-size: 3rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  @media ${device.mobileL} {
    font-size: 4rem;
  }
  @media ${device.tablet} {
    font-size: 5rem;
  }
  @media ${device.laptop} {
    font-size: 6rem;
  }
  flex-wrap: wrap;
  span {
    min-width: 14px;
    @media ${device.mobileL} {
      min-width: 18px;
    }
    @media ${device.tablet} {
      min-width: 22px;
    }
    @media ${device.laptop} {
      min-width: 25px;
    }
  }
`;

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 16px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0 16px;
  @media ${device.tablet} {
    max-width: 33vw;
  }
`;

const Entry = styled(motion.div)`
  display: flex;
`;

const Key = styled.div`
  padding: 4px 0;
  margin-right: 8px;
  min-width: 120px;
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
              {p.title && (
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
              )}
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
            {p.details && (
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
            )}
          </Wrapper>
        </Container>
        <div id="scroll" />
      </>
    </SnapSection>
  );
};

export default ProjectBanner;
