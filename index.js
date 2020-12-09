/* Versión -> convertir PDF a word y word a texto con servicios web
const fs = require('fs');

const datos = fs.readFileSync('Horarios2020A.txt','latin1');
datos = datos.replace(/\n|\r/g, "");

console.log(datos);
fs.writeFileSync("NuevoHorario2020A.txt", datos, 'latin1');
*/

var pdfUtil = require('pdf-to-text');
var pdf_path = "HorariosAnexos/Horarios2020A.pdf";

const fs = require('fs');

 
pdfUtil.info(pdf_path, function(err, info) {
    if (err) throw(err);
    console.log(info);
});
//Omit option to extract all text from the pdf file
pdfUtil.pdfToText(pdf_path, function(err, data) {
    if (err) throw(err);
    fs.writeFileSync("SegundoHorarios2020A.txt", data);
    
  });

    var toJSON = require('plain-text-data-to-json');
   
    var doc = fs.readFileSync('SegundoHorarios2020A.txt');
    console.log(doc)
    var data = doc.toJSON();
  

    var buf =JSON.stringify(data, null, 2) + '\n'
    //var temp = JSON.parse(buf.toString());
    fs.writeFileSync('output.json', buf.toString() );

/*
function UnidadAprendizaje(){
    const UnidadAprendizaje = {
        turno:
        semestre:
        clave:
        nombre:
        profesor:
        creditos:
        horasT:
        horasP:
        dias:
    };
}*/