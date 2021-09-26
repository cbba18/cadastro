var url = location.href;
var dominio = url.split("/");
 
if (url.indexOf("?") > 0) {
 query = url.split("?");
 param = query[1].split("&amp;");
 
 for (i=0; i < param.length; i++) {
  v = param[i].split("=");
  eval("var "+v[0]+"='"+v[1]+"';");
 }
}