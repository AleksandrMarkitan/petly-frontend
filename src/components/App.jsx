// import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { PublicRoute } from 'HOCs/PublicRoute';
// import { PrivateRoute } from 'HOCs/PrivateRoute';

import { CategoryBtn } from "./CommonButtons/CategoryBtn/CategoryBtn";

export const App = () => {
	return <>
		<CategoryBtn text="looking for/found" />
		<CategoryBtn text="see" />
	</>;
};
