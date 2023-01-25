import styled from "styled-components";
import Datetime from 'react-datetime';
import { Form, Field } from 'formik';


export const DateInput = styled(Datetime)`
	position: relative;
	font-size: 16px;
	line-height: calc(22 / 16);
	max-width: 100%;

	input{
		width: 100%;
		padding: 12px 20px 12px 14px;
		font-weight: 400;
		font-size: 14px;
		line-height: calc(19 / 14);
		color: rgba(27, 27, 27, 0.6);
		background-color: #FDF7F2;
		border: 1px solid rgba(245, 146, 86, 0.5);
		border-radius: 40px;
		outline: none;
		transition: border-color 300ms linear;
		

		:focus{
			border-color: #F59256;
		}
	}
`

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

export const Subtitle = styled.p`
	margin-top: 20px;
	font-size: 16px;
	line-height: calc(22 / 16) 22px;
	text-align: center;
	letter-spacing: -0.01em;
	color: #111111;

	@media (min-width: 768px) {
		font-size: 20px;
		line-height: calc(27 / 20);
	}
`

export const FormStyled = styled(Form)`
	margin-top: 20px;

	@media (min-width: 768px) {
		margin-top: 28px;
	}
`

export const RadioBtnWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 12px;
	row-gap: 8px;
	
`

export const LabelRadioBtn = styled.label`
	position: relative;
	display: block;
	padding: 8px 28px;
	border: 2px solid #F59256;
	border-radius: 40px;
	font-size: 14px;
	line-height: calc(19 / 14);
	letter-spacing: 0.04em;
	color: ${p => {
		if (p.category === p.value) {
			return "#ffffff"
		}

		return "#000"
	}};

	background-color: ${p => {
		if (p.category === p.value) {
			return "#F59256"
		}

		return "fff"
	}};;
	
	transition: all 300ms linear;
	cursor: pointer;

	:hover, :focus{
		color: #fff;
		background-color: #F59256;
	}
`

export const InputRadio = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
`

export const InputFieldWrap = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 768px) {
		gap: 28px;
	}
`

export const Label = styled.label`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 8px;
	font-size: 18px;
	line-height:calc(26 / 18);
	color: #111111;

	span{
		color: #F59256;
	}

	@media (min-width: 768px) {
		font-size: 24px;
		line-height: calc(26 / 24) ;
		gap: 12px;
	}


`

export const InputField = styled(Field)`
	padding: 12px 20px 12px 14px;
	font-weight: 400;
	font-size: 14px;
	line-height: calc(19 / 14);
	color: rgba(27, 27, 27, 0.6);
	background-color: #FDF7F2;
	border: 1px solid rgba(245, 146, 86, 0.5);
	outline: none;
	transition: border-color 300ms linear;

	border-radius: ${p => {
		if (p.isListOpen) {
			return '20px 20px 0px 0px';
		}
		return '40px';

	}};;
  border-bottom: ${p => {
		if (p.isListOpen) {
			return 'none';
		}
		return '1px solid rgba(245, 146, 86, 0.5)';
	}};;

	:focus{
		border-color: #F59256;
	}
`

export const BtnWrapper = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	gap: 12px;

	@media (min-width: 768px) {
		flex-direction: row-reverse;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`

export const SexRadioWrap = styled.div`
	margin-top: 16px;
	display: flex;
	gap: 40px;

	@media (min-width: 768px) {
		margin-top: 28px;
		gap: 80px;
	}
`

export const RadioSexLabel = styled.label`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 12px;
	cursor: pointer;

	color: ${p => {
		if (p.sex === p.value) {
			return "#F59256"
		}

		return "#000"
	}};
	
	svg{
		transition: transform 250ms linear;
	}
	
	:hover svg, :focus svg{
		transform: scale(1.2);
	}
	
	@media (min-width: 768px) {
		svg{
			width: 60px;
			height: 60px;
		}
	}
`

export const LocationWrap = styled.div`
	position: relative;
	margin-top: 32px;
`

export const CitiesList = styled.ul`
	position: absolute;
	left: 0;
	top: 100%;
	z-index: 5;
	border-left: 1px solid #f59256;
  border-right: 1px solid #f59256;
  border-radius: 0 0 20px 20px;
  border-bottom: 1px solid #f59256;

  width: 100%;
  height: 160px;
  padding-top: 10px;
  padding-left: 9px;
  padding-right: 3px;
  padding-bottom: 5px;

  color: rgba(27, 27, 27, 0.8);
  background-color: rgba(253, 247, 242, 0.2);
  backdrop-filter: blur(10px);

  overflow: auto;

  &::-webkit-scrollbar-track, &::-moz-scrollbar-track {
    margin-right: 20px;
    background-color: (255, 255, 255, 0.2); /*Цвет скролла*/
  }
  &::-webkit-scrollbar-thumb, &::-moz-scrollbar-track {
    border-radius: 5px; /*Закругление ползунка*/
    background-color: #f59256; /*Цвет ползунка*/
  }
  &::-webkit-scrollbar, &::-moz-scrollbar-track {
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

	:hover, :focus{
		background-color: #f59256;
	}
`

export const InputFileWrap = styled.div`
	position: relative;
	margin-top: 20px;

	label{
		display: inline-block;
	}

	label span{
		content: "";
		width: 116px;
		height: 116px;
		background: #FDF7F2;
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (min-width: 768px) {
		width: 140px;
		height: 140px;
		}

		svg{
			width: 43px;
			height: 43px;
			fill: rgba(17, 17, 17, 0.6);
		}
	}

	label img {
		width: 116px;
		height: 116px;
		border-radius: 20px;

		@media (min-width: 768px) {
			width: 140px;
			height: 140px;
		}
	}
`

export const InputFile = styled.input`
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0;
`

export const CommentWrap = styled.div`
	margin-top: 20px;
`

export const Textarea = styled(Field)`
	padding: 12px 20px 12px 14px;
	height: max-content;
	font-weight: 400;
	font-size: 14px;
	line-height: calc(19 / 14);
	color: rgba(27, 27, 27, 0.6);
	background-color: #FDF7F2;
	border: 1px solid rgba(245, 146, 86, 0.5);
	border-radius: 20px;
	outline: none;
	transition: border-color 300ms linear;
	resize: none;

	:focus{
		border-color: #F59256;
	}
`

export const PriceWrap = styled.div`
	margin-top: 16px;

	@media (min-width: 768px) {
		margin-top: 28px;
	}
`

export const Error = styled.div`
	position: absolute;
	left: 0;
	bottom: -20%;
	color: red;
	font-size: 12px;
`

export const SubmitBtn = styled.button`
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

export const ClearBtn = styled.button`
	position: absolute;
	right: 10px;
	bottom: 5px;
`