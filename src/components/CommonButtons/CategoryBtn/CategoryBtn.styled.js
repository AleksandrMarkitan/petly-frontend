import styled from "styled-components";

export const Button = styled.button`
	padding: 8px 28px;
	background-color: #FFFFFF;
	border: 2px solid #F59256;
	border-radius: 40px;
	font-size: 14px;
	line-height: calc(19 / 14);
	letter-spacing: 0.04em;
	color: #111111;
	transition: color 300ms linear, background-color 300ms linear;

	:hover, :focus{
		background-color: #F59256;
		color: #fff;
	}
`