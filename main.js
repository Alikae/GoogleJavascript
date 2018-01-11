function functio()
{
  document.getElementById('milieu').style.display='block';
  document.getElementById('butid').style.display='none';

}
function funsear()
{
  var textSearch = document.getElementById("searbar").value;
  var textPlus = textSearch.replace(/ /g, "+");
  var url = "https://www.google.fr/#q=" + textPlus;
  window.location = url;
  

}
function popUp()
{
  alert("yo");
}
