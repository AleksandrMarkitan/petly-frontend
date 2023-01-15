import styled from "styled-components";

export const Button = styled.button`
	padding: 8px 0;
	min-width: 180px;
	font-size: 20px;
	line-height: calc(27 / 20);
	letter-spacing: 0.04em;
	color: #FFFFFF;
	background-color: #F59256;
	border: 2px solid #F59256;
	border-radius: 40px;
	transition: color 300ms linear, background-color 300ms linear;

	:hover, :focus{
		color: #F59256;
		background-color: #fff;
	}
`