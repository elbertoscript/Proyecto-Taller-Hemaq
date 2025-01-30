const HOJA = SpreadsheetApp.openById('1ltyb-txefnjLKR1OnSXOfGOyr-HL0g1mp7oI6aeaDts').getActiveSheet();



function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('TALLER HEMAQ');
}
//aca esta función se activa al iniciar la web y hace lo que esta dentro de la función, que es buscar el archivo con nombre 'web'
//que sera el archivo con la estructura html de la página


function doPost(datos) {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('TALLER HEMAQ');
}


function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}


//OBTENIENDO DATOS DE CADA HOJA
function obtenerClientes() {
    return HOJA.getDataRange().getValues();
}

//INSERTANDO DATOS A CADA HOJA
function insertarClientes(Tienda, Fecha, Servicio, Cliente, RUT) {
    HOJA.appendRow([Tienda, Fecha, Servicio, Cliente, RUT]);
}

