function atualizarAlertasValidade() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ultimaLinha = planilha.getLastRow();
  
  if (ultimaLinha < 2) return; 
  
  var dataHoje = new Date();
  
  for (var i = 2; i <= ultimaLinha; i++) {
    var dataValidadeRaiz = planilha.getRange(i, 4).getValue(); 
    
    if (dataValidadeRaiz instanceof Date) {
      var dataValidade = new Date(dataValidadeRaiz);
      
      var diferencaTempo = dataValidade.getTime() - dataHoje.getTime();
      var diasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
      
      planilha.getRange(i, 5).setValue(diasRestantes);
      
      var célulaStatus = planilha.getRange(i, 6); 
      
      if (diasRestantes <= 0) {
        célulaStatus.setValue("PRODUTO VENCIDO");
        célulaStatus.setBackground("#FFFFFF").setFontColor("#FF0000").setFontWeight("bold");
      } 
      else if (diasRestantes <= 15) {
        célulaStatus.setValue("CRÍTICO - RECOLHER");
        célulaStatus.setBackground("#FFC7CE").setFontColor("#9C0006").setFontWeight("bold");
      } 
      else if (diasRestantes <= 30) {
        célulaStatus.setValue("ALERTA - PROMOVER");
        célulaStatus.setBackground("#FFEB9C").setFontColor("#9C6500").setFontWeight("bold");
      } 
      else if (diasRestantes <= 90) { 
        célulaStatus.setValue("ATENÇÃO - MONITORAR");
        célulaStatus.setBackground("#C6EFCE").setFontColor("#006100").setFontWeight("bold");
      } 
      else {
        célulaStatus.setValue("CONFORME");
        célulaStatus.setBackground("#FFFFFF").setFontColor("#000000").setFontWeight("normal");
      }
    }
  }
}
