import styled from "styled-components";

import portraitM from "../../img/HomePage/HomepageM.webp";
import portraitM2x from "../../img/HomePage/HomepageM@2x.webp";
import portraitT from "../../img/HomePage/HomepageT.webp";
import portraitT2x from "../../img/HomePage/HomepageT@2x.webp";
import portraitD from "../../img/HomePage/HomepageD.webp";
import portraitD2x from "../../img/HomePage/HomepageD@2x.webp";
import BgM from "../../img/HomePage/BgM.png";
import BgM2x from "../../img/HomePage/BgM@2x.png";
import BgT from "../../img/HomePage/BgT.png";
import BgT2x from "../../img/HomePage/BgT@2x.png";
import BgD from "../../img/HomePage/BgD.png";
import BgD2x from "../../img/HomePage/BgD@2x.png";
import Union from "../../img/HomePage/Union.png";
import Union2x from "../../img/HomePage/Union@2x.png";

export const Title = styled.h1`
  max-width: 280px;
  font-size: 32px;
  line-height: 1.38;
  font-weight: 700;
  color: black;
  @media screen and (min-width: 768px) {
    max-width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }
`;

export const HomeSection = styled.section`
 padding-top: 60px;
  min-height: 543px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${portraitM}), url(${BgM});
  background-size: 320px 337px, 100vw 470px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${portraitM2x}), url(${BgM2x});
  }
  @media screen and (min-width: 768px) {
    min-height: 1108px;
    padding-top: 88px;
    background-image: url(${portraitT}), url(${BgT});
    background-size: 645px 715px, 100vw 1033px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitT2x}), url(${BgT2x});
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 92px;
    padding-bottom: 408px;
    min-height: calc(100vh - 64px);
    background-image: url(${portraitD}), url(${BgD}),
      url(${Union});
    background-size: 590px 640px, 100vw calc(100vw * 0.375), 92px 89px;
    background-position-x: calc(50% + 330px), center, calc(50% + 118px);
    background-position-y: bottom, bottom, calc(50% - 204px);
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitD2x}), url(${BgD2x}),
        url(${Union2x});}
		}
`
