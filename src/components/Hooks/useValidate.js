import { useEffect, useState } from 'react';

function useValidate() {
  const [userLoginDetails, setUserLoginDetails] = useState({ username: '', email: '', password: '' });
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [validateError, setValidateError] = useState(
    {
      userNameError: 'Enter values for the username field',
      emailError: 'Enter values for the email field',
      passwordError: 'Enter values for the password field',
    },
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (validateError.userNameError || validateError.emailError || validateError.passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [validateError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'username':
        setUserNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };
  const userNameHandler = (e) => {
    setUserLoginDetails({
      ...userLoginDetails,
      [e.target.name]: e.target.value,
    });
    if (!e.target.value) {
      setValidateError({ ...validateError, userNameError: 'Enter values for the username field' });
    } else {
      setValidateError({ ...validateError, userNameError: '' });
    }
  };
  const emailHandler = (e) => {
    setUserLoginDetails({
      ...userLoginDetails,
      [e.target.name]: e.target.value,
    });
    const regularExpression = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!regularExpression.test(String(e.target.value).toLowerCase())) {
      setValidateError({ ...validateError, emailError: 'Not correct email' });
    } else {
      setValidateError({ ...validateError, emailError: '' });
    }
  };
  const passwordHandler = (e) => {
    setUserLoginDetails({
      ...userLoginDetails,
      [e.target.name]: e.target.value,
    });
    if (!e.target.value) {
      setValidateError({ ...validateError, passwordError: 'Enter values for the password field' });
    }
    if (e.target.value.length < 3) {
      setValidateError({ ...validateError, passwordError: 'Password must be longer than 3 characters' });
    } else {
      setValidateError({ ...validateError, passwordError: '' });
    }
  };
  return {
    userLoginDetails,
    setUserLoginDetails,
    userNameDirty,
    emailDirty,
    passwordDirty,
    validateError,
    formValid,
    blurHandler,
    userNameHandler,
    emailHandler,
    passwordHandler,
  };
}
export default useValidate;
