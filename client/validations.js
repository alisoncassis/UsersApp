$.validator.addMethod('uniqueEmail', (email) => {
  let exists = Usuarios.findOne({email: email});
  return exists ? false : true;
});
