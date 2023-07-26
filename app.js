
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');



console.log(argv)

crearArchivo(argv.b,argv.l, argv.h)
    .then(nombreArchivo =>console.log(nombreArchivo, 'Se ha creado exitosamente'))
    .catch(e => console.log(e))
