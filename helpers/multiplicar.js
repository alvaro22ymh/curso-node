const fs = require('fs');


const crearArchivo = async (base = 5, l, h)=>{

    try{
let salida = '';
for (let i = 1; i <=h; i++) {
    salida += `${base}x${i}=${base*i}\n`;
}
        if(l) console.log(salida);
    

      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
      return `tabla-${base}.txt`
    }catch(err){
        throw err;
    }
}




module.exports = {
    crearArchivo
}