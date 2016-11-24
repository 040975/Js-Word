

//var mot = prompt("saisir un mot");
function number() {


var mot = document.getElementById("nombre").value;

var len = mot.length;
var i=0;

var mot1 = document.getElementById('mot');
 mot1.innerHTML = mot;

var motgras =document.getElementById('gras');
motgras.innerHTML = mot;
motgras.style.fontWeight ="bold";
motgras.style.color ="red";
//motgras.style.colorhover ="blue";

var motmin =document.getElementById('minuscule');
motmin.innerHTML = mot;
motmin.style.fontSize ="small";

var motmaj =document.getElementById('majuscule');
motmaj.innerHTML = mot;
motmaj.style.textTransform ="uppercase";


var motvoy =document.getElementById('voyelle');
motvoy.innerHTML = mot.match(/[^eaiouy]/g).length + ' consonnes/';
motvoy.innerHTML += mot.match(/[eaiouy]/g).length + 'voyelles';


var motInverser = mot.split("").reverse().join("");
var motreverce = document.getElementById("inverser");
motreverce.innerHTML= motInverser;

var palindrome1 = document.getElementById('palindrome');
palindrome1.innerHTML = (motInverser.toLowerCase() == mot.toLowerCase()) ? 'Palindrome' : 'Pas palindrome';
}
