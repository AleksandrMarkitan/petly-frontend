import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
	top: 12px;
	right: 12px;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.6);
	backdrop-filter: blur(2px);
	transition: transform 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);
	
	:hover {
		transform: scale(1.2);
	}

	span{
		display: flex;
		justify-content: center;
		align-items: center;
		
		svg{
  		fill: ${p => p.isFavorite ? '#F59256' : 'none'};
		}
	}
`