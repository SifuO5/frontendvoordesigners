# Wat kan je doen met de site

#### Homepagina:
Dit is de plek waar de meeste gebruikers binnen zounden komen. Vanaf hier kan er genavigeerd worden door de rest van de website. Door op de knop 'see what's playing tonight' te drukken, wordt de gebruiker doorgestuurd naar een overzicht van films die te zien zijn. Voordat deze films getoond worden ziet de gebruiker een laadscherm. 

### Overzichtspagina:
Hier ziet de gebruiker een aantal films. Iedere film heeft een afbeelding, titel, korte beschrijving, release date en genre. Deze gegevens worden opgehaald uit een .json bestand via javascript.
De gebruiker kan horizontaal scrollen om alle films te zien. Dit heb ik gedaan met css: [overflow-x: scroll;].

## filmpagina
Wanneer er op een film geklikt wordt, opend de detailpagina van de film. Hier word extra informatie weergegeven. Er is nu een langere beschrijving te zien over het plot van de film. Verder kan er nu ook een trailer bekeken worden. Door op de play-knop te drukken wordt deze afgespeeld. Wanneer de gebruiker met de curser over de trailer gaat verschijnt er boven in beeld een tekstje: 'Press E to toggle cinema mode'. Wanneer er op E gedrukt wordt, word de trailer groter en verdwijnt de overige informatie tijdelijk totdat er weer op E gedrukt wordt. Dit alles gebeurd met een soepele animatie. 

# Hoe het werkt

Links naar andere paginas
Inlanden json
Objecten maken waar data ingeladen wordt
UI events / bediening


# design principles

## Keep users in control

## Appearance follows behavior

## Strong visual hierarchies work best





Kun je een Readme schrijven waarin je uitlegt wat je met de side kan doen, hoe je dit met dier pagina’s hebt opgelost, hoe het technisch werkt en de rest van de criteria die horen bij de oplevering? (dit kun je vinden in het archief op Moodle)

Criterea: 

De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
De data wordt van een externe bron ingeladen met Javascript
In de demo maak je gebruik van meerdere verschillende UI events zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
Verschillende states van de UI stack worden opgevangen en zijn vormgegeven.
In de demo dien je rekening te houden met de interface design principles 04, 09 en 11 van Principles of User Interface Design.
Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github








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
