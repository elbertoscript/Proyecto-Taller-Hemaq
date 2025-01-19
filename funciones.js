function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('TALLER HEMAQ');
}
//aca esta función se activa al iniciar la web y hace lo que esta dentro de la función, que es buscar el archivo con nombre 'web'
//que sera el archivo con la estructura html de la página

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerClientes()
{
    let hoja = SpreadsheetApp.openById('1ltyb-txefnjLKR1OnSXOfGOyr-HL0g1mp7oI6aeaDts').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}