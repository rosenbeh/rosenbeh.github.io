function openMenu() {
  console.log("Open menu");
  var nav = document.getElementById("nav-main");
  if (nav.className === "") {
    nav.className = "allItems";
  } else {
    nav.className = "";
  }
}

////
// Replace the placeholder for the navigation element by the imported 'nav-main' element.
// The placeholder needs to have class "nav-include".
//
function includeNavigation() {
  var placeHolder = document.querySelector('.nav-include');
  if (!placeHolder)
    return;

  //'<nav class="nav-main">',
  //'</nav>'
  var html = [
    '<ul>',
    '<li><a href="index.html">Start</a></li>',
    '<li><a href="Leistungen.html">Leistungen und Preise</a></li>',
    '<li><a href="Schwerpunkte.html">Schwerpunkte</a></li>',
    '<li><a href="Praxis.html">Meine Praxis</a></li>',
    '<li><a href="UeberMich.html">Über mich</a></li>',
    '<li><a href="Kontakt.html">Kontakt</a></li>',
    '<li><a href="Informationen.html">Informationen</a></li>',
    '<li class="dropDownBtn"><a href="javascript:void(0);" onclick="openMenu()">&#9776;</a></li>',
    '</ul>'
  ].join("\n");

  var nav = document.createElement("nav");
  nav.id = "nav-main";
  nav.innerHTML = html;

  var parent = placeHolder.parentNode;
  parent.insertBefore(nav, placeHolder);
  parent.removeChild(placeHolder);

  // Set the current page "active".
  var currentPage = location.pathname;
  //console.log("currentPage=" + currentPage);
  var ul = nav.firstChild;
  var items = ul.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var link = item.getElementsByTagName("a")[0];
    var n = link.href.lastIndexOf('/');
    var url = link.href.substring(n);
    //console.log("href=" + url);

    if (url == currentPage) {
      item.id = "selected";
      break;
    }
  }

  return;
}
