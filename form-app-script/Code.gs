/// Google Apps Script (Code.gs)
/// Pega este archivo en Extensions → Apps Script desde tu Google Sheets
///
/// Recuerda: para desplegar -> Deploy -> New deployment -> Select 'Web app'
/// Ejecutar como: tu cuenta
/// Quién tiene acceso: Anyone (even anonymous)
///

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; // usa la primera hoja o cambia por getSheetByName('Hoja 1')
    var content = e.postData.contents;
    var data = JSON.parse(content);
    sheet.appendRow([
      new Date(),
      data.nombre || '',
      data.acompanantes || '',
      data.alergias || '',
      data.confirmado || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', message: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
