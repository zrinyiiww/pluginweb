function support(){
  alert("Support szerver hamarosan!");
}

function showPluginInfo(type){
  const intro = document.getElementById('intro');
  const plugins = document.getElementById('plugins-section');

  if(type==='pluginok'){
    intro.innerHTML = "<p>Ez a weboldal <b>zrinyiiww</b> tulajdonában áll.<br>Itt pluginokat lehet kapni, és így lehet ízelítőt nézni.</p><p id='paid-info'></p>";
    plugins.style.display = "flex";
  } else if(type==='support'){
    intro.innerHTML = "<p>Support szerver hamarosan elérhető!<br>Ha segítség kell a pluginokhoz, itt fogod megtalálni.</p>";
    plugins.style.display = "none";
  }
}

// Fizetős plugin hover
function showPaidInfo(pluginName){
  const paidInfo = document.getElementById('paid-info');
  if(paidInfo){
    paidInfo.innerHTML = `<b>${pluginName}</b> - Fizetős plugin`;
  }
}

function clearPaidInfo(){
  const paidInfo = document.getElementById('paid-info');
  if(paidInfo){
    paidInfo.innerHTML = '';
  }
}