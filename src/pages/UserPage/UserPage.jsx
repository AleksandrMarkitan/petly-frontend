import { useSelector } from 'react-redux';
import {
	BoxUser,
	TitleUser,
	BoxTitleUser,
} from '../../components/UserData/UserData.styled';
import { UserPageContainer } from '../../components/UserData/UserData.styled';
import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData/PetsData';
import { selectUser, selectUserPets } from '../../redux/auth/authSelectors';
// import { ModalAddPet } from '../../components/ModalAddPet/ModalAddPet';
// import { AddBtn } from '../../components/CommonButtons/AddBtn/AddBtn';
// import { useState } from 'react';
import { AddTitle, BtnBox, BoxPet, BoxTitlePet } from './UserPage.styled';

const UserPage = () => {
	const user = useSelector(selectUser);
	const pets = useSelector(selectUserPets);

	return (
		<UserPageContainer>
			<BoxUser>
				<BoxTitleUser>
					<TitleUser>My information:</TitleUser>
				</BoxTitleUser>
				{/* <BoxTitlePet>
          <TitleUser>My pets:</TitleUser>
          <BtnBox>
            <AddTitle>Add pet</AddTitle>
            <AddBtn closeModal={closeModal} />
          </BtnBox>
        </BoxTitlePet> */}
				<UserData user={user} />
			</BoxUser>
			<BoxPet>{pets && <PetsData pets={pets} />}</BoxPet>
			{/* {isModalOpen && <ModalAddPet onClose={closeModal} />} */}
		</UserPageContainer>
	);
};

export default UserPage;
