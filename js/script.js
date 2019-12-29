/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By Cedric KERVADEC
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array declration
***/
var quotes = [
  {quote: 'Le premier des droits de l\'homme c\'est la liberté individuelle, la liberté de la propriété, la liberté de la pensée, la liberté du travail.', source: 'Jean Jaurès', year: 1946, document: 'Speech'},
  {quote: 'On parle souvent de sacrifier la liberté de chacun à la liberté collective. Stupidité ! Il n\'y a pas de liberté collective : il n\'y a que des libertés individuelles.', source: 'Jean-Charles Harvey', citation: 'Les paradis de sable', document: 'Book'},
  {quote: 'La liberté ne peut être que toute la liberté ; un morceau de liberté n\'est pas la liberté.', source: 'Max Stirner', citation: 'L\'unique et sa propriété', year: 2001, document: 'Book'},
  {quote: 'Nous n’avons qu’une liberté : la liberté de nous battre pour conquérir la liberté...', source: 'Henri Jeanson', citation: 'La fête à Henriette', year: 1985, document: 'Essay'},
  {quote: 'La liberté ne peut pas être une institution. La liberté n\'existe que dans le mouvement de conquête de la liberté.', source: 'Alain Robbe-Grillet', citation: 'Le voyageur', document: 'Book'},
  {quote: 'Il existe aussi une liberté vide, une liberté d\'ombres, une liberté qui ne consiste qu\'à changer de prison, faite de vains combats entretenus par l\'obscurantisme moderne et guidés par le faux jour.', source: 'Jean-Edern Hallier'},
  {quote: 'Le modernisme est un système de complaisance. La liberté est un système de déférence. La liberté est un système de courage. La liberté est la vertu du pauvre.', source: 'Charles Péguy', citation: 'L\'argent'},
  {quote: 'Ecrire liberté sur le bord d\'une plage, c\'est déjà avoir la liberté de l\'écrire. Même si la mer efface ce mot : la liberté demeure.', source: 'Etienne'},
  {quote: 'C\'est le bulletin de vote ou la balle, la liberté ou la mort, la liberté pour tous ou la liberté pour personne.', source: 'Gaetan', document: 'Poem'},
  {quote: 'Pas de liberté pour les ennemis de la liberté.', source: 'Louis Antoine de Saint-Just'},
  {quote: 'Il n\'est point de bonheur sans liberté, ni de liberté sans courage.', source: 'Périclès'},
  {quote: 'La liberté, c\'est toujours la liberté de l\'autre.', source: 'Rosa Luxembourg'},
  {quote: 'Ma seule liberté est de rêver, alors je rêve de liberté.', source: 'Benoît Granger'},
  {quote: 'Une preuve de la liberté tuerait la liberté.', source: 'Alain', citation: 'Propos'}
];

/***
 * Randomize background color
***/
function randomColor() {
  var red = Math.round(Math.random()*200);
  var green = Math.round(Math.random()*200);
  var blue = Math.round(Math.random()*200);

  document.querySelector('body').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

/***
 * Get a random quote from the quotes array
***/
function getRandomQuote(){
  var randomQuoteIndex = Math.round(Math.random()*(quotes.length - 1));
  return quotes[randomQuoteIndex];
}

/***
 * Print the quote in index.html
***/
function printQuote() {
  var randomQuote = getRandomQuote();

  var quoteHTML = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source;
  if ( randomQuote.citation ) {
    quoteHTML = quoteHTML + '<span class="citation">' + randomQuote.citation + '</span>';
  };
  if ( randomQuote.year ) {
    quoteHTML = quoteHTML + '<span class="year">' + randomQuote.year + '</span>';
  }
  if ( randomQuote.document ) {
    quoteHTML = quoteHTML + '<span class="document">' + randomQuote.document + '</span>';
  }
  quoteHTML = quoteHTML + '</p>';
  document.getElementById('quote-box').innerHTML = quoteHTML;

//Change the background color when changing quote
  randomColor();
}

/***
 * Get a random quote from the quotes array
***/

window.setInterval(printQuote, 30000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
