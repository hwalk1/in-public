import * as yup from "yup";

export const schema = yup.object().shape({
  //string prop defines value of input field (it can also be number,date etc.)
  username: yup.string().required().min(2, "Too Short").max(20, "Too Long"),
  //required method takes in message that is returned if user doesn't input anything,
  //email method takes in message that is returned if entered email is invalid
  email: yup.string().required("Email is required").email("Invalid email"),
});
