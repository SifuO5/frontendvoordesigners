# README



## Wat kan je doen met de site

'Ik wil een film vinden die mij aanspreekt en meer informatie vergaren over die film.'

### Homepagina:
Dit is de plek waar de meeste gebruikers binnen zounden komen. Vanaf hier kan er genavigeerd worden door de rest van de website. Door op de knop 'see what's playing tonight' te drukken, wordt de gebruiker doorgestuurd naar een overzicht van films die te zien zijn. Voordat deze films getoond worden ziet de gebruiker een laadscherm. 

### Overzichtspagina:
Hier ziet de gebruiker een aantal films. Iedere film heeft een afbeelding, titel, korte beschrijving, release date en genre. Deze gegevens worden opgehaald uit een .json bestand via javascript.
De gebruiker kan horizontaal scrollen om alle films te zien. Dit heb ik gedaan met css: [overflow-x: scroll;].

### filmpagina
Wanneer er op een film geklikt wordt, opend de detailpagina van de film. Hier word extra informatie weergegeven. Er is nu een langere beschrijving te zien over het plot van de film. Verder kan er nu ook een trailer bekeken worden. Door op de play-knop te drukken wordt deze afgespeeld. Wanneer de gebruiker met de curser over de trailer gaat verschijnt er boven in beeld een tekstje: 'Press E to toggle cinema mode'. Wanneer er op E gedrukt wordt, word de trailer groter en verdwijnt de overige informatie tijdelijk totdat er weer op E gedrukt wordt. Dit alles gebeurd met een soepele animatie. 



## Hoe het werkt

# navigeren
De gebruiker kan op sommige elementen klikken om te navigeren door de site. Bijvoorbeeld de afbeeldingen op de overzichtspagina. Dit is gedaan met een eventlistener: 

document.getElementById("sectie").addEventListener("click", function () {
    window.location.href = "../filmPagina/evilDead.html";
});

# data ophalen uit .json en weergeven in de pagia
1. Als eerste wordt de URL van de .json gedefinieerd.
2. Er word een request gedaan. Daar volgt een response uit. Dit is de .json data.
3. Een functie wordt aangeroepen, jsonobject wordt meegeven als argument.
4. D.m.v. een loop krijgt elke film op de overzichtspagina:
  een <article> voor de img + informatie
  een <div> voor de informatie
  een <h2> voor de title
  een <p> voor de tekst
  een <img> voor de cover
  een <p> voor de release date

5. HTML elementen worden aagemaakt met document.createElement
6. .json data wordt gekoppeld aan html elementen. Bijv: myGenres.textContent = movies[i].genres;
7. Append de html elementen aan het article element.
8. append het article aan de section die al bestaat in je html


Voor meer details over elke funcionaliteit raad ik aan een kijkje te nemen in mijn javascript bestanden. Daar leg ik uit wat de code precies doet.



## UI events / bediening

### Overzichtspagina
Door over een afbeeldingen te hoveren met de cursor wordt de afbeelding iets groter en word de cursor een handje. Dit geeft aan dat de gebruiker kan klikken op de afbeelding. 
De pagina kan bediend worden door te scrollen.

### Filmpagina
Door op de play-knop te drukken wordt deze afgespeeld. Wanneer de gebruiker met de curser over de trailer gaat verschijnt er boven in beeld een tekstje: 'Press E to toggle cinema mode'. Wanneer er op E gedrukt wordt, word de trailer groter en verdwijnt de overige informatie tijdelijk totdat er weer op E gedrukt wordt. Dit alles gebeurd met een soepele animatie. 

De film kan aan favorieten toegevoegd worden door op het hartje onderaan de pagina te drukken. Dit kan ook door op 'L' te drukken. 


## UI stack

### Ideal state
In deze state wordt alle content correct weergegeven. De gebruiker kan in dit geval het meeste uit de website halen en een film vinden die hem/haar interesseert.
Voor mij diende de indeling en vormgevin van de overzichtspagina als het fundament voor de andere painga's. 

### Loading state
Als de bioscoop nieuwe films toevoegd is het handig als dit gebeurd in de .json. Daar kunnen alle details gemakkelijk ingevuld worden. Vervolgens haalt de website deze gegevens automatisch op. Zo hoeft er niks aangepast worden aan de code van de website. Dit heeft wel als gevolg dat het even kan duren voordat alle data is opgehaald. Om aan te geven dat de website bezig is met het ophalen van de gegevens is er een laadscherm te zien wanneer de gebruiker navigeert van de homepagina naar de overzichtspagina. 

### Empty state
Wanneer de gebruiker de website voor het eerst gebruikt zullen functionaliteiten zoals 'cinema mode' niet meteen duidelijk zijn. Om onboarding makklijker te maken geef ik de gebruiker tips over hoe de site makkelijk te bedienen is. In dit geval is dat een kleine tekst die vreteld dat er op 'E' gedrukt kan worden voor een andere weergave van de trailer op de filmpagina.


## design principles

### Keep users in control
Gebruikers kunnen de website naar eigen wens navigeren. De gebruiker kan altijd terug naar de vorige painga. Funcitonaliteiten worden uitgelegd en kunnen bediend worden op meerdere manieren (klikken met de muis of drukken op een knop van het toetsenbord).

### Appearance follows behavior
Op de overzichtspagina is het meest rechtse film-item deels verstopt. Dit geeft de gebruiker het idee dat er naar rechts gescrolled kan worden.
De knop op de homepagina is vormgegeven als een knop. Ook de tekst 'See what's playing tonight' duid aan dat er een functie wordt opgeroepen.

### Strong visual hierarchies work best
De pagina's zijn zo ingedeeld dat belangrijke informatie prominenter in beeld staan dan minder belangrijke informatie.

-----


Kun je een Readme schrijven waarin je uitlegt wat je met de side kan doen, hoe je dit met dier pagina’s hebt opgelost, hoe het technisch werkt en de rest van de criteria die horen bij de oplevering? (dit kun je vinden in het archief op Moodle)

Criterea: 

De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
De data wordt van een externe bron ingeladen met Javascript
In de demo maak je gebruik van meerdere verschillende UI events zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
Verschillende states van de UI stack worden opgevangen en zijn vormgegeven.
In de demo dien je rekening te houden met de interface design principles 04, 09 en 11 van Principles of User Interface Design.
Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github



-----




# beschrijvgin van Koop

# frontend voor designers - opdracht 3

Voor opdracht 3 ga je een functionaliteit ontwerpen met externe data, en testen. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Dit is een voorbeeld van het laden van data en er html mee maken:
[Code demo](https://koopreynders.github.io/frontendvoordesigners/opdracht3/XMLHttpRequest/)


## JSON
JSON van de movies data staat ook hier:
deze uri kun je gebruiken voor een van de use case voor opdracht 3.
[https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json](https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json)

De JSON data is ook los, per film of genre of actors te gebruiken. Check die [hier](https://github.com/KoopReynders/frontendvoordesigners/tree/master/opdracht3/json).

Dit is een voorbeeld van het laden van de film data:
[Code demo](https://koopreynders.github.io/frontendvoordesigners/opdracht3/v1/)
