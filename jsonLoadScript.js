let mainContentArea = document.getElementById("main-content-area");
// Finder elementet med ID'et 'main-content-area', hvor indholdet vil blive tilføjet.

fetchData("data.json").then((data) => {
    // Henter data fra 'data.json' og venter på, at det bliver færdigt.
    console.log(data);
    // Logger data i konsollen til fejlfinding og kontrol.

    for (let i = 0; i < data.length; i++) {
        // Itererer gennem hvert element i den hentede data-array.
        let articleToInsert =
        // Dynamisk opbygning af HTML-struktur baseret på data:
        "<div class='albumName'><img src='images/"+ data[i].id +".jpg' /></div>" +
        // Tilføjer et billede baseret på 'id' fra data.
        "<div id='" +
        data[i].id +
        "' class='albumName'>" +
        // Opretter en container for albummet med et unikt ID og CSS-klasse.
        "<h1>" +
        data[i].albumName +
        "</h1>" +
        // Viser albummets navn.
        "<p class='artist'>" +
        data[i].artistName +
        // Viser kunstnerens navn.
        "</p>"+
        "<p class='productionYear'>" +
        data[i].productionYear +
        // Viser produktionsåret.
        "</p>" +
        "<p class='website'><a href='" +
        data[i].artistWebsite +
        "'>"+data[i].artistWebsite+"</a></p>" +
        // Tilføjer et link til kunstnerens hjemmeside.
        "</div>";

        mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert; 
        // Tilføjer det oprettede HTML-indhold til 'mainContentArea' uden at overskrive eksisterende indhold.
    }
});

//Magi af Thomas med noter
async function fetchData(url) {
    // Asynkron funktion til at hente JSON-data fra en given URL.
    let request = await fetch(url);
    // Sender en HTTP GET-anmodning til URL'en.
    let json = await request.json();
    // Konverterer svaret til JSON-format.
    return json;
    // Returnerer den parsed JSON-data.
  }