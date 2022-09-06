import styled from "styled-components";
import {
  Gallery,
  BigGallery,
  ProjectBanner,
  Description,
  device,
  Split,
} from "../components";
import p from "../data/dubai";

const ImgCaption = styled.div`
  text-align: justify;
  text-align-last: center;
  font-size: 1rem;
  padding: 0 32px;

  @media ${device.mobileM} {
    padding: 0 64px;
  }
  @media ${device.tablet} {
    padding: 0 20%;
  }
  @media ${device.laptop} {
    padding: 0 30%;
  }
`;

const GalleryCaption = styled.div`
  text-align: justify;
  text-align-last: center;
  font-size: 1rem;
  padding: 0 32px;
  margin-top: 128px;

  @media ${device.mobileM} {
    padding: 0 64px;
  }
  @media ${device.tablet} {
    padding: 0 20%;
  }
  @media ${device.laptop} {
    padding: 0 30%;
  }
`;

const Desc = styled.div`
  padding: 32px;

  @media ${device.mobileM} {
    padding: 64px;
  }
  @media ${device.tablet} {
    padding: 64px 20%;
  }
  @media ${device.laptop} {
    padding: 64px 30%;
  }
`;

const SplitImgBig = styled.img`
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  padding: 32px;
`;

const Dubai = () => {
  return (
    <>
      <ProjectBanner p={p} btn />
      <BigGallery imgs={p.bigImgs[0]} maxW="1024px" />
      <ImgCaption>
        The project was inspired by the homeland of the authors. The graphic
        above represents various ideas, later used in the design.
      </ImgCaption>
      <Desc>
        <Description textArr={p.desc} />
        <BigGallery imgs={p.bigImgs[1]} />
      </Desc>
      <BigGallery imgs={p.bigImgs[2]} />
      <Split img={p.splits[0].img} flip>
        <SplitImgBig src={`/assets/imgs/${p.splits[0].imgSm}`} />
      </Split>
      <Split img={p.splits[1].img} flip>
        <SplitImgBig src={`/assets/imgs/${p.splits[1].imgSm}`} />
      </Split>
      <Split img={p.splits[2].img} flip>
        <SplitImgBig src={`/assets/imgs/${p.splits[2].imgSm}`} />
      </Split>
      <GalleryCaption>Other visualisations</GalleryCaption>
      <Gallery imgs={p.imgs[0]} />
      <GalleryCaption>Photos from the site</GalleryCaption>
      <Gallery imgs={p.imgs[1]} />
    </>
  );
};

export default Dubai;
