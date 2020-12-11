const validateName = (name: string) => {
  const nameRegex = /^(?=.*[\\" \\"])/;
  return nameRegex.test(name);
};

const validateEmailAddress = (email: string) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/;
  return passwordRegex.test(password);
};

export { validateName, validateEmailAddress, validatePassword };
