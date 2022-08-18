export const APP_ACTIONS = {
  showSignInForm: "SHOW_SIGN_IN_FORM",
  showSignUpForm: "SHOW_SIGN_UP_FORM",
  onSignInEmailChange: "ON_SIGN_IN_EMAIL_CHANGE",
  onSignInPasswordChange: "ON_SIGN_IN_PASSWORD_CHANGE",
  onSignUpEmailChange: "ON_SIGN_UP_EMAIL_CHANGE",
  onSignUPPasswordChange: "ON_SIGN_UP_PASSWORD_CHANGE",
  openForgetPasswordForm: "OPEN_FORGET_PASSWORD_FORM",
  sentForgetPassword: "SENT_FORGET_PASSWORD",
};

export const showSignInForm = () => {
  return {
    type: APP_ACTIONS.showSignInForm,
  };
};

export const showSignUpForm = () => {
  return {
    type: APP_ACTIONS.showSignUpForm,
  };
};

export const onSignInEmailChange = (event) => {
  return {
    type: APP_ACTIONS.onSignInEmailChange,
    payload: event.target.value,
  };
};

export const onSignInPasswordChange = (event) => {
  return {
    type: APP_ACTIONS.onSignInPasswordChange,
    payload: event.target.value,
  };
};

export const onSignUpEmailChange = (event) => {
  return {
    type: APP_ACTIONS.onSignUpEmailChange,
    payload: event.target.value,
  };
};

export const onSignUpPasswordChange = (event) => {
  return {
    type: APP_ACTIONS.onSignUPPasswordChange,
    payload: event.target.value,
  };
};

export const openForgetPasswordForm = () => {
  return {
    type: APP_ACTIONS.openForgetPasswordForm,
  };
};

export const sentForgetPassword = () => {
  return {
    type: APP_ACTIONS.sentForgetPassword,
  };
};
