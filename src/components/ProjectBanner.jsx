import styled from "styled-components";

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

const Entry = styled.div`
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

const ScrollBtn = styled.div`
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

const ProjectBanner = ({ p }) => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    const yOffset = 0;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Container>
      {p.id === 1 && <ScrollBtn onClick={() => scrollTo("gallery")} />}
      <Wrapper>
        <div>
          <Title>
            {p.title.split("").map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </Title>
          <Subtitle>{p.subtitle}</Subtitle>
        </div>
        <Details>
          {Object.entries(p.details).map(([key, value]) => (
            <Entry key={key}>
              <Key>{key}</Key>
              <Value>{value}</Value>
            </Entry>
          ))}
        </Details>
      </Wrapper>
    </Container>
  );
};

export default ProjectBanner;
