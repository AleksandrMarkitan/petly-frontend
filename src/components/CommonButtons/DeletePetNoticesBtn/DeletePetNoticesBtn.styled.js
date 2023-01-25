import styled from "styled-components";
import { HiTrash } from "react-icons/hi2";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 248px;
	padding: 8px 0;
	font-size: 16px;
	line-height: calc(22 / 16);
	letter-spacing: 0.04em;
	background-color: #FFFFFF;
	border: 2px solid #F59256;
	border-radius: 40px;
	color: #F59256;
	transition: color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25), background-color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

	:hover, 
	:focus{
		color: #FFFFFF;
		background-color: #F59256;
	}
`;

export const DeleteIcon = styled(HiTrash)`
	margin-left: 13px;
  width: 20px;
  height: 20px;
	fill: #f59256;
	transition: fill 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25); 
	  
	:hover,
  :focus {
		fill: #FFFFFF;
  }
`;
