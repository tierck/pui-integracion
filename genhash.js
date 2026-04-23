const bcrypt = require('bcryptjs');
const password = 'MiClave123456';  // ← CAMBIA ESTA CLAVE
bcrypt.hash(password, 10, (err, hash) => {
  console.log('NUEVA_CLAVE=' + password);
  console.log('HASH=' + hash);
});
