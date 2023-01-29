import styled from "styled-components";

export const LocationWrap = styled.div`
	position: relative;
	margin-top: 32px;
`
export const InputField = styled.input`
	padding: 12px 45px 12px 14px;
	font-weight: 400;
	font-size: 14px;
	line-height: calc(19 / 14);
	color: rgba(27, 27, 27, 0.6);
	background-color: #FDF7F2;
	border: 1px solid rgba(245, 146, 86, 0.5);
	outline: none;
	transition: border-color 300ms linear;
	appearance: textfield;

	border-radius: ${p => {
		if (p.islistopen && p.cities) {
			return '20px 20px 0px 0px';
		}
		return '40px';

	}};;
  border-bottom: ${p => {
		if (p.islistopen && p.cities) {
			return 'none';
		}
		return '1px solid rgba(245, 146, 86, 0.5)';
	}};;

	:focus{
		border-color: #F59256;
	}
`

export const ClearBtn = styled.button`
	position: absolute;
	right: 10px;
	bottom: 5px;
`

export const CitiesList = styled.ul`
	position: absolute;
	left: 0;
	top: 100%;
	z-index: 5;
	border-left: 1px solid #f59256;
  border-right: 1px solid #f59256;
  border-bottom: 1px solid #f59256;
  border-radius: 0 0 20px 20px;

  width: 100%;
  height: 160px;
  padding-top: 10px;
  padding-left: 9px;
  padding-right: 3px;
  padding-bottom: 5px;

  color: rgba(27, 27, 27);
  background-color: rgb(253, 247, 242);

  overflow: auto;

  &::-webkit-scrollbar-track {
    margin-right: 20px;
    background-color: (255, 255, 255, 0.2); /*Цвет скролла*/
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px; /*Закругление ползунка*/
    background-color: #f59256; /*Цвет ползунка*/
  }
  &::-webkit-scrollbar {
    width: 6px; /*Толщина скролла*/
  }

  scrollbar-color: (255, 255, 255, 0.2) #f59256; /*Цвет скролла, цвет ползунка*/
  scrollbar-width: 6px; /*Толщина скролла thin, auto*/
`

export const CitiesItem = styled.li`
	padding: 4px;
	border-radius: 8px;
	font-size: 12px;
	transition: background-color 300ms linear;
	cursor: pointer;

	:hover, :focus{
		background-color: #f59256;
	}
`

export const NoCityAlert = styled.div`
	position: absolute;
	top: 105%;
	left: 0;
	color: red;
	font-size: 12px;
`