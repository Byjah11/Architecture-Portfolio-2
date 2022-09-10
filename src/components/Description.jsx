import styled from "styled-components";
import { motion } from "framer-motion";

const Desc = styled.div`
  width: 100%;
`;

const Paragraph = styled(motion.p)`
  text-align: ${(p) => p.align};
  text-align-last: ${(p) => (p.align === "justify" ? "center" : p.align)};
  margin-bottom: 16px;
  font-size: 1.2rem;

  a {
    color: var(--text-dark);
  }
`;

const Description = ({ textArr, align = "justify" }) => {
  return (
    <Desc>
      {textArr.map((par, i) => (
        <Paragraph
          key={i}
          dangerouslySetInnerHTML={{ __html: par }}
          align={align}
          // initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true, margin: "0px 300px 0px 300px" }}
          // transition={{
          //   ease: "easeOut",
          //   duration: 1,
          // }}
        />
      ))}
    </Desc>
  );
};

export default Description;
