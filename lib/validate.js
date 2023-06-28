export default function loginValidate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "Must be greater than 8 characters and less than 20 characters";
  }else if(values.password.includes(" ")){
    errors.password="Don't include whitespaces"
  }
  return errors;
}
export function registerValidate(values){
  const errors={};
  if(!values.username){
    errors.username="Required"
  }else if(values.username.includes(" ")){
    errors.username="invalid username"
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "Must be greater than 8 characters and less than 20 characters";
  }else if(values.password.includes(" ")){
    errors.password="Don't include whitespaces"
  }
  else if (!values.cpassword) {
    errors.cpassword = "Required";
  }
  else if(values.cpassword!==values.password){
    errors.cpassword="Password not matching...!"
  }
  return errors;
}
