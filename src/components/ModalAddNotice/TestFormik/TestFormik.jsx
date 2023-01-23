import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import { useState, useEffect } from "react";
import { getCities } from "../../../serveсes/getCities";

import { Div } from "./TestFormik.styled";

export const TestFormik = () => {
	const [birthdate, setBirthdate] = useState("");
	const [city, setCity] = useState('');
	const [cities, setCities] = useState([]);
	const [showCitiesList, setShowCitiesList] = useState(false);
	const [location, setLocation] = useState('');
	const [category, setCategory] = useState("sell");

	const radioBtnHandlder = e => {
		switch (e.target.name) {
			case "category":
				setCategory(e.target.value);
				break;
			default: return;
		}
	}

	const birthdateHandler = e => {
		setBirthdate(e.format("DD.MM.YYYY"))
	}

	const showListHandler = () => {
		setShowCitiesList(!showCitiesList)
	}

	const textInputHandler = e => {
		console.log(e.target.value);

		switch (e.target.name) {
			// case "title":
			// 	setTitle(e.target.value);
			// 	break;
			// case "name":
			// 	setName(e.target.value);
			// 	break;
			// case "breed":
			// 	setBreed(e.target.value);
			// 	break;
			case "city":
				setCity(e.target.value);
				break;
			// case "comment":
			// 	setComment(e.target.value);
			// 	break;
			// case "price":
			// 	setPrice(e.target.value);
			// 	break;
			default: return;
		}
	}

	const locationHandler = e => {
		if (e.target.nodeName === "LI") {
			setLocation(e.target.textContent);
			setCity(e.target.textContent);
			setShowCitiesList(!showCitiesList);
		}
	}

	useEffect(() => {
		const query = city.toLowerCase();

		async function fetch() {
			try {
				const response = await getCities();

				if (response.length === 0) {
					throw new Error();
				}

				const foundCities = response.filter(city => city.city.toLowerCase().includes(query))

				setCities(foundCities)

			}
			catch (error) {
				console.log(error);
			}
		}
		fetch()
	}, [city])

	const initialValues = {
		category: "sell",
		title: "",
		name: "",
		breed: "",
		sex: "",
		comments: "",
		price: 0,
	}

	const schema = Yup.object().shape({
		title: Yup.string()
			.min(2, 'Too Short!')
			.max(48, 'Too Long!')
			.required('Required'),
		name: Yup.string()
			.min(2, 'Too Short!')
			.max(16, 'Too Long!'),
		breed: Yup.string()
			.min(2, 'Too Short!')
			.max(24, 'Too Long!'),
		price: Yup.number()
			.min(1, "Price has to be more than 0")
			.nullable(false)
			.required('Required'),
		comments: Yup.string()
			.min(8, 'Too Short!')
			.max(120, 'Too Long!')
			.required('Required'),
	})

	const submitForm = (values) => {
		console.log(values);
	}

	return <Div> <Formik initialValues={initialValues} validationSchema={schema} onSubmit={values => submitForm(values)}>
		{({ touched, errors }) => (
			<Form>
				<label>
					<Field type="radio" name="category" value="in good hands" onChange={radioBtnHandlder} />
					in good hands
				</label>
				<label>
					<Field type="radio" name="category" value="lost-found" onChange={radioBtnHandlder} />
					lost-found
				</label>
				<label>
					<Field type="radio" name="category" value="sell" onChange={radioBtnHandlder} />
					sell
				</label>

				<label>
					title
					<Field type="text" name="title" />
					{touched.title && errors.title && <div>{errors.title}</div>}
				</label>


				<label>
					name
					<Field type="text" name="name" />
					{touched.name && errors.name && <div>{errors.name}</div>}
				</label>

				<label>
					birthdate
					<Datetime value={birthdate} onChange={birthdateHandler} inputProps={{ readOnly: true, id: "birth", placeholder: "Choose date" }} timeFormat={false} closeOnSelect={true} dateFormat="DD.MM.YYYY" />
				</label>

				<label>
					breed
					<Field type="text" name="breed" />
					{touched.breed && errors.breed && <div>{errors.breed}</div>}
				</label>


				<label>
					<Field type="radio" name="sex" value="male" />
					male
				</label>
				<label>
					<Field type="radio" name="sex" value="female" />
					female
				</label>


				<label>
					location
					<input type="text" name="city" onClick={showListHandler} value={city} onChange={textInputHandler} />
					{showCitiesList && <ul onClick={locationHandler}>{cities.map(({ _id, city, admin_name }) => {
						return <li key={_id}>{city}, {admin_name}</li>
					})}</ul>}
				</label>

				{category === "sell" && <label>
					price
					<Field type="text" name="price" />
					{touched.price && errors.price && <div>{errors.price}</div>}
				</label>
				}
				<label>
					comments
					<Field as="textarea" type="text" name="comments" />
					{touched.comments && errors.comments && <div>{errors.comments}</div>}
				</label>

				<button type="submit">Done</button>
			</Form>
		)
		}

	</Formik>
	</Div>
}