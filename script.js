function showPluginInfo(type){
  const intro = document.getElementById('intro');
  const plugins = document.getElementById('plugins-section');

  if(type==='pluginok'){
    intro.innerHTML = "<p>Ez a weboldal <b>zrinyiiww</b> tulajdonában áll.<br>Itt pluginokat lehet kapni, és így lehet ízelítőt nézni.</p>";
    plugins.style.display = "flex";
  } else if(type==='support'){
    intro.innerHTML = "<p>Support szerver hamarosan elérhető!<br>Ha segítség kell a pluginokhoz, itt fogod megtalálni.</p>";
    plugins.style.display = "none";
  }
}
