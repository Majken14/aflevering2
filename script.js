let content = "";
// Initialiserer en tom streng, der kan bruges til at bygge dynamisk indhold.

let heading = "Overskrift 1";
// Definerer en overskrift som en strengværdi.

const article = { "albumName":""};
// Opretter et objekt med en egenskab 'albumName', som er tom.

console.log(article);
// Logger objektet 'article' til konsollen for at kontrollere dets indhold.

let mainContentArea = document.getElementById("main-content-area");
// Finder HTML-elementet med ID'et 'main-content-area', hvor indhold skal indsættes.

let articleToInsert = "";
// Initialiserer en tom streng, der skal bruges til at bygge HTML-strukturen.

articleToInsert = 
// Bygger HTML-strukturen ved hjælp af strengsammenkædning:
"<div id='1' class='albumName'>" + 
// Opretter en div med ID '1' og klassen 'albumName'.
"<h1>" +
// Åbner en overskrift.
"<p class='albumName'>" + 
article.albumName + 
// Indsætter albummets navn.
"</p>" + 
"<p class='artist'>" +
article.artistName +
// Indsætter artistens navn.
"</p>"+
"<p class='productionYear'>" + 
article.productionYear +
// Indsætter produktionsåret
"</p>"
"<p class='website'>" + 
article.artistWebsite +
// Indsætter kunstnerens hjemmeside
"</p>" +
"</h1>" +
// Lukker overskriften
"</div>";
// Lukker div'en.
;

mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
// Tilføjer det dynamisk opbyggede HTML-indhold til 'mainContentArea' uden at overskrive eksisterende indhold.
mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
// Gentager indsættelsen to gange mere, hvilket indsætter den samme struktur flere gange.
mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
// Dette gentages, så indholdet indsættes tre gange.