document.getElementById("sectie").addEventListener("click", function () {
    window.location.href = "../filmPagina/evilDead.html";
});


/*---Film data ophalen uit .json*/

var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

/*
    deze functie wordt aangeroepen als de xmlhttprequest lukt
*/

request.onload = function () {
    var moviesRequest = request.response; //de response van de request is de json
    maakhtml(moviesRequest); //functie wordt aangeroepen, jsonobject meegeven als argument
}


function maakhtml(jsonObj) {
    var movies = jsonObj;
    console.log("length", movies.length, movies); //voorbeelden van content in de console, film 0
    console.log("item 1: h2 wordt", movies[0].title);
    console.log("item : de img wordt1", movies[0].cover);
    console.log("item 1: de p wordt", movies[0].simple_plot);


    for (var i = 0; i < movies.length; i++) { //loop door alle items in de json

        //elke film krijgt een <article> voor de img + informatie
        //elke film krijgt een <div> voor de informatie
        //elke film krijgt een <h2> voor de title
        //elke film krijgt een <p> voor de tekst
        //elke film krijgt een <img> voor de cover
        //elke film krijgt een <p> voor de release date


        //maak de html elementen aan
        var myList = document.createElement('ul'); //unordered list

        var myArticle = document.createElement('article'); //artiekel container
        var myDiv = document.createElement('div'); //div container

        var myimg = document.createElement('img'); //afbeelding

        var myH2 = document.createElement('h2'); //titel

        var mySimplePlotTitle = document.createElement('h3') //titel voor plot
        var mySimplePlot = document.createElement('p'); //plot tekst

        var myReleaseDateTitle = document.createElement('h3') //titel voor release date
        var myReleaseDate = document.createElement('p'); //release date tekst

        var myGenresTitle = document.createElement('h3'); //genre titel
        var myGenres = document.createElement('p'); //genre tekst

        //koppel de json data
        myimg.setAttribute('src', movies[i].cover);
        myH2.textContent = movies[i].title;
        mySimplePlotTitle.textContent = 'Plot: ';
        mySimplePlot.textContent = movies[i].simple_plot;
        myReleaseDateTitle.textContent = 'Release date: ';
        myReleaseDate.textContent = movies[i].release_date;
        myGenresTitle.textContent = 'Genre: ';
        myGenres.textContent = movies[i].genres;

        //append de html elementen aan het article element
        myArticle.appendChild(myList);
        myArticle.appendChild(myimg);

        myDiv.appendChild(myH2);
        myDiv.appendChild(mySimplePlotTitle);
        myDiv.appendChild(mySimplePlot);
        myDiv.appendChild(myReleaseDateTitle);
        myDiv.appendChild(myReleaseDate);
        myDiv.appendChild(myGenresTitle);
        myDiv.appendChild(myGenres);


        //append het article aan de section die al bestaat in je html
        section.appendChild(myArticle);
        section.appendChild(myDiv);

    }
}

