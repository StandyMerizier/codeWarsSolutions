//You need to write regex that will validate a password to make sure it meets the following criteria:
//
//At least six characters long
//contains a lowercase letter
//contains an uppercase letter
//contains a number
//Valid passwords will only be alphanumeric characters.


//solution
function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password)
}

