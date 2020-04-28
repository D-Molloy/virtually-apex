// check if value is falsy
const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

// ensure submitted email has valid syntax
const isEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Trim any whitespace off login values
const trimObjVals = (obj) => {
  const result = {};
  for (let key in obj) {
    result[key] = obj[key].trim();
  }
  return result;
};

// compare to string to see if same
const doPasswordsMatch = (pass1, pass2) => pass1 === pass2;

const validateSignup = (data) => {
  const errors = {};
  const userData = trimObjVals(data);

  if (isEmpty(userData.name)) {
    errors.name = 'Name field required';
  }

  if (isEmpty(userData.email)) {
    errors.email = 'Email field required';
  }

  if (!isEmail(userData.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (isEmpty(userData.password)) {
    errors.password = 'Password field required';
  }

  if (isEmpty(userData.password2)) {
    errors.password2 = 'Confirm Password field required';
  }

  if (!doPasswordsMatch(userData.password, userData.password2)) {
    errors.password2 = 'Passwords must match.';
  }

  delete userData.password2;

  const isValid = isEmpty(errors);

  return {
    isValid,
    errors,
    userData: isValid ? userData : null,
  };
};

module.exports = { validateSignup, isEmpty };
