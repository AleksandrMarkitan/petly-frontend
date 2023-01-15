import styled from "styled-components";

export const Button = styled.button`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.6);
	backdrop-filter: blur(2px);

	svg{
		fill: #111111;
		fill-opacity: 0.6;
		transition: fill 300ms linear;
	}
	
	:hover, :focus{
		svg{
			fill: #F59256;
		}
	}
`