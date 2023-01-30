import styled from "styled-components";
import { HiChevronUp } from 'react-icons/hi2';

export const Button = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  background-color: transparent;
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 20;
  background-color: rgba(255,255,255,0.7);
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.accent};
  transition: box-shadow ${p => p.theme.transition.first};
  
	@media screen and(min-width: 768px) {
  	bottom: 15px;
  }

  @media screen and(min-width: 1280px) {
   	bottom: 20px;
  }

  svg {
  	position: absolute;
  	fill: ${p => p.theme.colors.accent};
  	width: 30px;
  	height: 30px;
  	top: 50%;
  	right: 50%;
  	transform: translate(50%, -50%);

 	  @media screen and(min-width: 768px) {
   		width: 40px;
   		height: 40px;
   	}

   	@media screen and(min-width: 1280px) {
   		width: 50px;
   		height: 50px;
   	}
  }

  :hover {
 	  box-shadow: 0px 0px 15px 5px ${p => p.theme.colors.accent};
	}
`
export const ChevronUp = styled(HiChevronUp)`
  width: 22px;
  height: 22px;
  fill: rgba(17, 17, 17, 0.6);

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;