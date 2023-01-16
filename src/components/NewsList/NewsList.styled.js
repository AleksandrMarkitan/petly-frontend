import styled from "styled-components";

export const List = styled.ul`
	margin: 40px 0 0;
	display: flex;
	flex-direction: column;
	gap: 48px;

	@media (min-width: 768px) {
		margin: 72px 0 0;
		flex-direction: row;
		flex-wrap: wrap;
		row-gap: 72px;
		column-gap: 32px;
	}
`
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`

export const ListItem = styled.li`
	position: relative;

	@media (min-width: 768px) {
		width: 330px;
	}

	@media (min-width: 1280px) {
		width: 394px;
	}

	::before{
		content: "";
		position: absolute;
		top: -4px;
		left: 0;
		width: 85%;
		height: 4px;
		background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
		border-radius: 40px;
	}
`

export const NewsTitle = styled.h3`
	font-weight: 700;
	font-size: 24px;
	line-height: calc(33 / 24);
	letter-spacing: -0.01em;
	color: #111111;
`

export const Description = styled.p`
	margin: 16px 0 0 ;
	font-weight: 400;
	font-size: 16px;
	line-height: calc(22 / 16);
	color: #111321;
	max-height: 154px;
	overflow: hidden;

	@media (min-width: 768px) {
		max-height: 132px;
	}
`

export const AdditionalInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	@media (min-width: 768px) {
		margin-top: 40px;
	}
`

export const Date = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: calc(22 / 16);
	color: rgba(17, 17, 17, 0.6);
`

export const Link = styled.a`
	position: relative;
	font-size: 16px;
	line-height: calc(22 / 16);
	color: #F59256;

	::after{
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 1px;
		background-color: #F59256;
		transition: width 300ms linear;
	}

	:hover::after{
		width: 100%;
	}
`