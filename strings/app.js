//Assign your first name to the variable firstName and your last name to lastName.

let firstName = 'Iza';
let lastName = 'Gimenez-Bon';
let role = 'developer';

// Below role, create a new variable named msg that combines the firstName lastName and role variables to create a string like "Carlos Salgado: developer".



//Finally, convert the string stored in role to uppercase letters. The final msg string should look similar to this: "Carlos Salgado: DEVELOPER".

let msg = firstName + ' ' + lastName + ': ' + role.toUpperCase();
console.log(msg);