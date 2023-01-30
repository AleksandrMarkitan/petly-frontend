import styled from "styled-components";
import { HiTrash } from "react-icons/hi2";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 248px;
	padding: 8px 0;
	font-size: ${p => p.theme.fontSize.fs16};
	line-height: calc(22 / 16);
	letter-spacing: 0.04em;
	background-color: #FFFFFF;
	border: 2px solid ${p => p.theme.colors.accent};
	border-radius: ${p => p.theme.borderRadius.br40};
	color: ${p => p.theme.colors.accent};
	transition: color ${p => p.theme.transition.first}, background-color ${p => p.theme.transition.first}, fill ${p => p.theme.transition.first};

	:hover, 
	:focus {
		color: #FFFFFF;
		background-color: ${p => p.theme.colors.accent};
	}

	&:hover svg,
	&:focus svg {
    fill: #FFFFFF;
	}
`;

export const DeleteIcon = styled(HiTrash)`
	margin-left: 13px;
  width: 20px;
  height: 20px;
	fill: ${p => p.theme.colors.accent};
	transition: fill ${p => p.theme.transition.first};
`;
