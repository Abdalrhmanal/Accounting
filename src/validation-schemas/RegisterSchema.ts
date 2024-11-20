import * as Yup from "yup";

export default Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required."),
  //phone
  phone: Yup.string()
    .matches(/^[1-9]\d{1,14}$/, "Invalid phone number format")
    .required("Phone number is required."),
});
