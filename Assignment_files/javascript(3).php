document.addEventListener('DOMContentLoaded',function(){if(document.getElementsByClassName('navbar-toolbar-right')[0]){var widthfix=document.getElementsByClassName('navbar-toolbar-right')[0].offsetWidth;var navbar_width=document.getElementsByClassName('navbar-container')[0].offsetWidth-100;var available_width=navbar_width-widthfix;var robj=document.getElementsByClassName('navbar-toolbar')[0];alignMenu(robj)}
if(document.getElementsByClassName('navbar-toolbar-right')[0]){window.addEventListener('resize',function(event){widthfix=document.getElementsByClassName('navbar-toolbar-right')[0].offsetWidth;navbar_width=document.getElementsByClassName('navbar-container')[0].offsetWidth-100;available_width=navbar_width-widthfix;robj.innerHTML=robj.innerHTML+document.getElementsByClassName("hideshow-ul")[0].innerHTML;var items=robj.children;for(var i=0;i<items.length;i++){if(items[i].classList.contains('dropdown-submenu')){items[i].classList.toggle('dropdown');items[i].classList.toggle('dropdown-submenu')}}
document.getElementsByClassName("hideshow-ul")[0].innerHTML='';alignMenu(robj)})};function alignMenu(obj){var current_menuwidth=0;var max_menuwidth=available_width;var extra_lis=Array();var items=obj.children;for(var i=0;i<items.length;i++){if(items[i].className!='hideshow nav-item dropdown'){current_menuwidth+=items[i].offsetWidth;if(max_menuwidth<current_menuwidth){extra_lis.push(items[i])}}}
document.getElementsByClassName("hideshow-ul")[0].innerHTML='';for(var i=0;i<extra_lis.length;i++){if(extra_lis[i].classList.contains('dropdown')){extra_lis[i].classList.toggle('dropdown');extra_lis[i].classList.toggle('dropdown-submenu')}
document.getElementsByClassName("hideshow-ul")[0].appendChild(extra_lis[i])}
if(max_menuwidth<current_menuwidth){document.getElementsByClassName("hideshow")[0].style.visibility="visible"}else{document.getElementsByClassName("hideshow")[0].style.visibility="hidden"}
document.getElementsByClassName("navbar-toolbar")[0].appendChild(document.getElementsByClassName("hideshow")[0])}
if(document.getElementById('quiz-timer')){var quiztimer=document.querySelector('#quiz-timer');var breadcrumb=document.querySelector("#region-main");if(quiztimer){breadcrumb.parentNode.insertBefore(quiztimer,breadcrumb)}}},!1)