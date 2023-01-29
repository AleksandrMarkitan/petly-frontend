import styled from "styled-components";
import { Link } from "react-router-dom"

export const Title = styled.h3`
	font-size: 24px;
	line-height: calc(33 / 24);
	color: #111111;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 36px;
		line-height: calc(49 / 36);
	}
`

export const Text = styled.p`
	margin-top: 20px;
	font-size: 18px;
	line-height: calc(22 / 16) 22px;
	text-align: center;
	letter-spacing: -0.01em;
	color: #111111;

	@media (min-width: 768px) {
		font-size: 24px;
		line-height: calc(27 / 20);
	}
`

export const Wrap = styled.div`
	margin-top: 24px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`

export const StyledLink = styled(Link)`
	text-align: center;
	padding: 8px 0;
	width: 100%;
	font-size: 16px;
	line-height: calc(22 / 16);
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

	@media (min-width: 768px) {
		width: 180px;
	}
`

export const Button = styled.button`
	padding: 8px 0;
	width: 100%;
	font-size: 16px;
	line-height: calc(22 / 16);
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

	@media (min-width: 768px) {
		width: 180px;
	}
`