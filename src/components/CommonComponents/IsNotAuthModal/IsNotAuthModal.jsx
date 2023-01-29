import { ModalWindow } from "../ModalWindow/ModalWindow"
import { Text, LinkWrap, StyledLink, Title } from "./IsNotAuthModal.styled"

export const IsNotAuthModal = ({ onClose, text }) => {

	return <ModalWindow onClose={onClose} modalType={'addPet'}>
		<Title>Unauthorized</Title>
		<Text>{text}</Text>
		<LinkWrap>
			<StyledLink to="/login">Login</StyledLink>
			<StyledLink to="/register">Register</StyledLink>
		</LinkWrap>
	</ModalWindow>
}