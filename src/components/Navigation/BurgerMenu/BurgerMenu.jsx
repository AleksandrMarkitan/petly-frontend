import { useEffect } from 'react';
import { Logo } from '../../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav';
import { Nav } from '../Nav/Nav';
import { UserNav } from '../UserNav/UserNav';
import { NavStyled, Div1, Div2, CloseIcon } from './BurgerMenu.styled';

const body = document.querySelector('body');

export const BurgerMenu = ({ token, onClose, isDesctop, isMobile }) => {
	if (isDesctop) {
		onClose();
	}

	useEffect(() => {
		body.style.overflow = "hidden";

		return () => {
			body.style.overflow = "auto";
		};
	});

	return (
		<NavStyled>
			<Div1>
				<Logo />
				<button type="button" onClick={onClose}>
					<CloseIcon />
				</button>
			</Div1>
			<Div2>
				{isMobile && token && <UserNav onClose={onClose} />}
				{isMobile && !token && <AuthNav onClose={onClose} />}

				{!isDesctop && <Nav onClose={onClose} />}
			</Div2>
		</NavStyled>
	);
};
