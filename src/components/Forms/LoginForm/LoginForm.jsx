import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

export const LoginForm = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Please, enter your e-mail")
      .email("Please, enter a valid e-mail")
      .required("E-mail is required"),
    password: yup
      .string("Please, enter your password")
      .min(6, "Password must consist of at least 6 symbols")
      .max(12, "Password must contain no more than 12 symbols")
      .required("Password is required"),
  });

  return <div>login</div>;
};
