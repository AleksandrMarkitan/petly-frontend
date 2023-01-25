import styled from "styled-components";

export const Button = styled.button`
  width: 248px;
	padding: 8px 0;
	font-size: 16px;
	line-height: calc(22 / 16);
	letter-spacing: 0.04em;
	background-color: #FFFFFF;
	border: 2px solid #F59256;
	border-radius: 40px;
	color: #F59256;
	transition:  color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25), background-color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

	:hover, 
	:focus{
		color: #FFFFFF;
		background-color: #F59256;
	}

  span{
		/* display: flex;
		justify-content: center;
		align-items: center; */
		margin-left: 13px;
		width: 20px;
		height: 20px;
		/* background: #F59256; */

		svg{
			margin-left: 13px;
		  width: 20px;
		  height: 20px;
      fill: #F59256;
      fill-opacity: 0.6;
		}
		
		:hover,
		:focus {
			svg {
				fill: #FFFFFF;
			}
		}
	}
`;

export const Text = styled.span`
/* font-size: 16px;
line-height: calc(22 / 16); */
/* align-items: center; */
color: #FF6101;
`;
