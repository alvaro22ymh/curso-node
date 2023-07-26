
const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check((argv, options)=>{
                if( isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }else{
                    return true;
                }
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                describe: 'Lista la tabla en consola',
                default: false
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                describe: 'limite de la multiplicacion',
                default: 10
            })
            .check((argv, options)=>{
                if( isNaN(argv.h)){
                    throw 'el limite tiene que ser un numero'
                }else{
                    return true;
                }
            })
            .argv;

module.exports= argv;