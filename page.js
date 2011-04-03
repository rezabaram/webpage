

function print_head(){
document.write(' <div class="page"> <title>Reza M. Baram</title>   <table class="header" > <tr> <td valign="left" > <img src="_Media/cftc-logo.png" height=75px /> </td> <td width="760px"> <div class="header"> Reza M. Baram <div class="aff"> Center for Theoretical and Computational Physics </div> <div class="aff">University of Lisbon </div> </div> </td> <td valign="right" > <img src="_Media/ul-logo.png" height=75px /> </td> </tr> </table> </div> <div class="separator"> </div><div class="table"> ');
}


function print_menu(){
home_link=(arguments[0]=="home")?"Home":"<a href=\"index.html\"> Home </a>";
research_link=(arguments[0]=="research")?"Research":"<a href=\"research.html\"> Research</a>";
publications_link=(arguments[0]=="publications")?"Publications":"<a href=\"publications.html\"> Publications</a>";
document.write('<table class="menu"> <tr> <td>'+home_link+'</td> <td>' + research_link+' </td> <td>' + publications_link+' </td> <td> </td> </tr></table></div> <br/><br/>');
}
