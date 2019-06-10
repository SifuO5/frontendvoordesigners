//event listener aan hartje bij mouse click

var heartIconSVG = document.querySelector('.heartIconSVG');

heartIconSVG.addEventListener('click', function () {
    console.log('joehoeeSVG');
    heartIconSVG.classList.toggle("red");
});


// E maakt de video groter, L maakt het hartje rood

var video = document.querySelector('.video');
var overlay = document.querySelector('.overlay');
var body = document.querySelector('.body');
var sectie = document.querySelector('section');

document.onkeydown = function (event) {
    if (event.keyCode === 69) {
        console.log('expand button');
        video.classList.toggle("expand");
        body.classList.toggle("darkMode");
        sectie.classList.toggle("darkModeSectie");
    } else if (event.keyCode === 76) {
        console.log('like button');
        heartIconSVG.classList.toggle("red");
    }
}


//Overlay teskt als je hovert over de video

video.addEventListener("mouseenter", function (event) {
    overlay.classList.add("zichtbaar");
}, false);


video.addEventListener("mouseout", function (event) {
    overlay.classList.remove("zichtbaar");
}, false);


// .json code-------------------------



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
    console.log("length", movies.length, movies);
    console.log("item 1: h2 wordt", movies[0].title); //selecteer de titel van het 0ste item
    console.log("item : de img wordt", movies[0].cover);
    console.log("item 1: de p wordt", movies[0].plot);


    //geen loop want ik wil alleen de 0e film - Evil dead
    //loop is alleen nodig voor meerdere films


    //de film heeft een <article> nodig
    //een <h2> voor de title
    //een <p> voor de tekst
    //en een <img> voor de cover
    //een <p> voor de release date


    //maak de html elementen aan
    var myList = document.createElement('ul'); //list

    var myArticle = document.createElement('article'); //article container
    var myDiv = document.createElement('div'); //div container





    //titel
    var myH1 = document.createElement('h1');

    //plaatje
    var myimg = document.createElement('img');

    //plot
    var myPlotTitle = document.createElement('h2') //titel voor plot
    var myPlot = document.createElement('p');

    //release datum
    var myReleaseDateTitle = document.createElement('h2'); //titel voor release date
    var myReleaseDate = document.createElement('p');

    //genre
    var myGenresTitle = document.createElement('h2');
    var myGenres = document.createElement('p');



    //koppel de json data van de 0ste film
    myH1.textContent = movies[0].title;
    myimg.setAttribute('src', movies[0].cover);
    myPlotTitle.textContent = 'Plot: ';
    myPlot.textContent = movies[0].plot;
    myReleaseDateTitle.textContent = 'Release date: ';
    myReleaseDate.textContent = movies[0].release_date;
    myGenresTitle.textContent = 'Genre: ';
    myGenres.textContent = movies[0].genres;

    //append de html elementen aan het article element
    myArticle.appendChild(myList);
    myArticle.appendChild(myimg);

    myDiv.appendChild(myH1);
    myDiv.appendChild(myPlotTitle);
    myDiv.appendChild(myPlot);
    myDiv.appendChild(myReleaseDateTitle);
    myDiv.appendChild(myReleaseDate);
    myDiv.appendChild(myGenresTitle);
    myDiv.appendChild(myGenres);

    //append het article aan de section die al bestaat in je html
    section.appendChild(myArticle);
    section.appendChild(myDiv);
}
