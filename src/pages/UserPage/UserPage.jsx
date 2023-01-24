import { useState } from 'react';
import { Container } from '../../components/CommonComponents/Container/Container';
import { Section } from '../../components/CommonComponents/Section/Section';
import { UserData } from '../../components/UserData/UserData';
import { AddBtn } from '../../components/CommonButtons/AddBtn/AddBtn';
import { ModalAddPet } from '../../components/ModalAddPet/ModalAddPet';

import { useSelector } from 'react-redux';
//import { selectPets, selectUser } from "../../redux/user/userSelectors";
import {
	BoxUser,
	TitleUser,
	BoxTitleUser,
} from '../../components/UserData/UserData.styled';

//import { fetchUserPets } from "../../redux/user/userOperations";
// import { fetchCurrentUser } from "../../redux/auth/authOperations";
import { PetsData } from '../../components/PetsData/PetsData';
import { selectUser, selectUserPets } from '../../redux/auth/authSelectors';
import { AddTitle, BtnBox, BoxPet, BoxTitlePet } from './UserPage.styled';
//import { selectPets } from "../../redux/user/userSelectors";
//import { selectUserPets } from "../../redux/auth/authSelectors";

const UserPage = () => {
	const user = useSelector(selectUser);
	// console.log(user);
	// console.log(user.avatarURL);
	const pets = useSelector(selectUserPets);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return <Container>
		<Section>
			<BoxUser>
				<BoxTitleUser>
					<TitleUser>My information:</TitleUser>
				</BoxTitleUser>
				<UserData user={user} />
			</BoxUser>
			<BoxTitlePet>
				<TitleUser>My pets:</TitleUser>
				<BtnBox>
					<AddTitle>Add pet</AddTitle>
					<AddBtn closeModal={closeModal} />
				</BtnBox>
			</BoxTitlePet>
			<BoxPet>{pets && <PetsData pets={pets} />}</BoxPet>
			{isModalOpen && <ModalAddPet onClose={closeModal} />}
		</Section>
	</Container>
};

export default UserPage;
