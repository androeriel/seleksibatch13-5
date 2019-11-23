function usernameValidation(username)
{
  var usernameRules = /^[a-z]{3,5}$/;
  var validationResult = usernameRules.test(username);
  return validationResult;
}
function passwordValidation(password)
{
  var passwordRules = /^[0-9]{3}-[0-9]{3}[A-Z]{4}$/;
  var validationResult = passwordRules.test(password);
  return validationResult;
}
console.log('Username Validation',usernameValidation('bud'));
console.log('Password Validation',passwordValidation('987-654Oliv'));