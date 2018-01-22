// array =============================================

var pokedex = ["Abra", "Aerodactyl", "Alakazam", "Arbok", "Arcanine", "Articuno", "Beedrill", "Bellsprout",
	"Blastoise", "Bulbasaur", "Butterfree", "Caterpie", "Chansey", "Charizard", "Charmander", "Charmaeleon",
	"Clefable", "Clefairy", "Cloyster", "Cubone", "Dewgong", "Diglett", "Ditto", "Dodrio", "Doduo", "Dragonaire",
	"Dragonite", "Dratini", "Drowzee", "Dugtrio", "Eevee", "Ekans", "Electabuzz", "Electrode", "Exeggcute",
	"Exeggutor", "Farfetchd", "Fearow", "Flareon", "Gastly", "Gengar", "Geodude", "Gloom", "Golbat", "Goldeen",
	"Golduck", "Golem", "Graveler", "Grimer", "Growlithe", "Gyarados", "Haunter", "Hitmonchan", "Hitmonlee",
	"Horsea", "Hypno", "Ivysaur", "Jigglypuff", "Jolteon", "Jynx", "Kabuto", "Kabutops", "Kadabra", "Kakuna",
	"Kangaskhan", "Kingler", "Koffing", "Krabby", "Lapras", "Lickitung", "Machamp", "Machoke", "Machop",
	"Magikarp", "Magmar", "Magnemite",  "Magneton", "Mankey", "Marowak", "Meowth", "Metapod", "Mew", "Mewtwo",
	"Moltres", "MrMime", "Muk", "Nidoking", "Nidoqueen", "Nidoran", "Nidorino", "Nidorina", "Ninetales",
	"Oddish", "Omanyte", "Omastar", "Onix", "Paras", "Parasect", "Persian", "Pidgeot", "Pidgeotto", "Pidgey",
	"Pikachu", "Pinsir", "Poliwag", "Poliwhirl", "Poliwrath", "Ponyta", "Porygon", "Primeape", "Psyduck",
	"Raichu", "Rapidash", "Raticate", "Rattata", "Rhydon", "Rhyhorn", "Sandshrew", "Sandslash", "Scyther",
	"Seadra", "Seaking", "Seel", "Shellder", "Slowbro", "Slowpoke", "Snorlax", "Spearow", "Squirtle", "Starmie",
	"Staryu", "Tangela", "Taurus", "Tentacool", "Tentacruel", "Vaporeon", "Venomoth", "Venonat", "Venusaur",
	"Victreebel", "Vileplume", "Voltorb", "Vulpix", "Wartortle", "Weedle", "Weepinbell", "Weezing", "Wigglytuff",
	"Zapdos", "Zubat"]

// randomly selects a character ============================================
var pokemonJ = pokedex[Math.floor(Math.random() * pokedex.length)];
var underscores = [];
	
	for (var i = 0; i < pokemonJ.length; i++) {
		underscores[i] = "_";
	}
	document.getElementById("pokemonH").textContent = underscores.join(" ");	// appearance on screen

// user input ==================================================
var userGuessJ = [];

document.onkeyup = function(event) {
	userGuessJ  = event.key;
	if (pokemonJ.indexOf(userGuessJ) > -1) {
		for (var i = 0; i < pokemonJ.length; i++) {
			
		}
	}
	else {

	}
}

// log letters guessed  ============================================
var lettersGuessedJ = [];

// set number of guesses left =============================================
var guessesLeftJ = 10;

document.getElementById("guessesLeftH").textContent = guessesLeftJ;


// correct letter will appear on screen / incorrect letters deduct life

