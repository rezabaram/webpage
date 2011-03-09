
function print_page(){
home_link=(arguments[0]=="home")?"Home":"<a href=\"index.html\"> Home </a>";
research_link=(arguments[0]=="research")?"Research":"<a href=\"research.html\"> Research</a>";

document.write(' <div class="page"> <title>Reza M. Baram</title> <table class="menu"> <tr> <td>'+home_link+'</td> <td>' + research_link+' </td> <td> </td> </tr></table> <div style="background:rgb(200,200,200); height:2px;"> </div> <table class="header" > <tr> <td valign="left" > <img src="_Media/cftc-logo.png" height=75px /> </td> <td width="760px"> <div class="header"> Reza M. Baram <div class="aff"> Center for Theoretical and Computational Physics </div> <div class="aff">University of Lisbon </div> </div> </td> <td valign="right" > <img src="_Media/ul-logo.png" height=75px /> </td> </tr> </table> </div> ');
}
