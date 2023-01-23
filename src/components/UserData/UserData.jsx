import { useState } from "react";
import { WrapperDataUser } from "./UserPage.styled";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/user/userSelectors";

import { UserDataItem } from "../UserDataItem/UserDataItem";

// import axios from "axios";
//import { fetchUserPets } from "../../redux/user/userOperations";
// axios.defaults.baseURL = "http://localhost:4000/api/v1";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzg0MjNiMzMwNTdmZTc5ZTZkYzNkNyIsImlhdCI6MTY3NDA2ODU3MCwiZXhwIjoxNjc0MTUxMzcwfQ.zJ573neN-3HKihDENOlTXTjDDiipaxkVCGZD6fJVIbM";
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const UserData = ({ user }) => {
	console.log(user.pets);
	const [inputValue, setInputValue] = useState();

	const handleChange = (evt) => {
		setInputValue(evt.target.value);
		console.log(inputValue);
	};

	const { name, email, birthday, phone, city, avatarURL } = user;
	return (
		<>
			<WrapperDataUser>
				<label>
					<input type="file" name="avatar" onChange={handleChange} />
					<input
						type="image"
						src={avatarURL}
						alt="avatar"
					// src="https://res.cloudinary.com/dgne23at6/image/upload/v1674052318/f64cacccea6511bba2ae40b5383e3e47_ajipj3.jpg"
					/>
				</label>
				{name && (
					<UserDataItem valueLabel="Name:" nameInput="name" value={name} />
				)}
				{email && (
					<UserDataItem valueLabel="Email:" nameInput="email" value={email} />
				)}
				{birthday && (
					<UserDataItem
						valueLabel="Birthday:"
						nameInput="birthday"
						value={birthday}
					/>
				)}
				{phone && (
					<UserDataItem valueLabel="Phone:" nameInput="phone" value={phone} />
				)}
				{city && (
					<UserDataItem valueLabel="City:" nameInput="city" value={city} />
				)}
				{/* <LogOut /> */}
				{/* <form>
        <input />
      </form> */}
			</WrapperDataUser>
		</>
	);
};
