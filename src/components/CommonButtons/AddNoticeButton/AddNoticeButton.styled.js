import styled from "styled-components";

export const AddBtnMobile = styled.button`
	position: fixed;
	right: 20px;
	bottom: 80px;
	width: 80px;
	height: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5px;
	background-color: #F59256;
	box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
	border-radius: 50%;
	color: #fff;
	font-size: 12px;
	line-height: calc(16 / 12);
	transition: transform 300ms linear;
	z-index: 1;

	svg{
		width: 21px;
		height: 21px;
	}

	:hover, :focus{
		transform: scale(1.1);
	}
`

export const AddBtn = styled.button`
	display: flex;
	flex-shrink: 0;
	gap: 12px;
	padding: 0;
	width: 129px;
	align-items: center;
	font-size: 20px;


	span{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 44px;
		height: 44px;
		background: #F59256;
		border-radius: 50%;
		transition: transform 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);
		
		:hover {
		  transform: scale(1.15);
		}
		
		svg{
			fill: #fff;
			width: 16px;
			height: 16px;
    }
 }
`