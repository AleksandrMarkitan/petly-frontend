import styled from "styled-components";

export const Button = styled.button`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.6);
	backdrop-filter: blur(2px);
	transition: transform 300ms linear;
	
	:hover, :focus{
		transform: scale(1.2);
	}

	svg{
		fill: ${p => p.isFavorite ? '#F59256' : 'none'};
	}
`