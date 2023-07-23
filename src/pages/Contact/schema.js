import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email Format"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Compose atleast a sentence"),
});
