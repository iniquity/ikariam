var DEBUT = new Date();

var langs = { // Indexed on ISO 639-1 language ids (since country != language)

en: { // English language strings maintained by myself. :-)
    language: "English", // The name of the translation language; not English!
    finished: " Finished ", // Building / resource upgrades, unit construction
    execTime: "Time of execution", // Shown in tooltip for the language choice
 researching: "Researching", // Start of the "currently being researched" link
    showLoot: "Show loot table", // For the military advisor view's loot table
       shown: "Shown",  // These two are buttons in Library view's page title
      hidden: "Hidden", //
       empty: "empty: ", // Typically your wine stash, if replenish rate < 0
        full: "full: ", // Hover the population indicator to see, for instance
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", // For all that won't
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],// be completed today
 startExpand: "; start expanding before ", // For (growing) town hall tooltip
     enqueue: "Enqueue", // When busy building, and you place a new building
  prependToQ: "Shift click to put at the head of the queue",
  leftByThen: "Resources left ", // gets followed by build queue end date/time
shoppingList: "Shopping list: click a resource icon to buy that in your port",
 unavailable: "Resources unavailable by build time (and replenish time)",
   popupInfo: "Click for building info, use scroll wheel to browse levels",
 notShownNow: "Note: not presently shown in the main view below.",
},

fr: { // French strings not maintained by anyone! It's bad, too! The horror! :)
    language: "Français",
    finished: " Fini à ",
    execTime: "Temps d'exécution",
 researching: "Recherches",
       shown: "Visible",
      hidden: "Invisible",
       empty: "vide: ",
        full: "plein: ",
      months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun",
               "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
 startExpand: "; commencer avant que ",
     enqueue: "Enqueue",
  prependToQ: "Shift-clique, peut-être?",
  leftByThen: "Même available après ",
shoppingList: "Acheter ça, s'il vous plaît",
 unavailable: "Il faut attendre pour ces ressources",
   popupInfo: "Clique pour bàtiment information",
},

de: { // German version maintained by pusteblume:
    language: "Deutsch",
    finished: " Beendet ",
    execTime: "benötigte Zeit zum Ausführen",
 researching: "Aktuelle Forschung",
    showLoot: "Raubgut anzeigen",
       shown: "Sichtbar",
      hidden: "Versteckt",
       empty: "leer: ",
        full: "voll: ",
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
               "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
 startExpand: "; beginne den Ausbau vor ",
     enqueue: "Einreihen",
  prependToQ: "Shift Klick um es an den Anfang der Warteschleife zu platzieren",
  leftByThen: "verbliebene Ressourcen ",
shoppingList: "Einkaufsliste",
 unavailable: "Ressourcen nicht erreichbar während der Bauzeit "+
                "(und Regenerieungszeit)",
   popupInfo: "Klicken um Gebäudeinfo zu erhalten, benutze das Mausrad um die "+
                "Stufen zu sehen",
 notShownNow: "Notiz: wird zur Zeit nicht in der Hauptansicht angezeigt.",
},

sv: { // Swedish strings also maintained by myself:
    language: "Svenska",
    finished: " Färdigt ",
    execTime: "Exekveringstid",
 researching: "Forskning",
    showLoot: "Visa stöldgods",
       shown: "Visas",
      hidden: "Gömda",
       empty: "tomt: ",
        full: "fullt: ",
      months: ["jan", "feb", "mar", "apr", "maj", "jun",
               "jul", "aug", "sep", "okt", "nov", "dec"],
 startExpand: "; börja bygg ut före ",
     enqueue: "Köa upp",
  prependToQ: "Shift-klicka för att lägga först i kön",
  leftByThen: "Resurser kvar efter ",
shoppingList: "Inköpslista",
 unavailable: "Resurser som kommer saknas vid byggstart, och inskaffningstid",
   popupInfo: "Klicka för att se byggnaden i ikipedia; använd scrollhjulet "+
                "för att se kostnader för andra expansionsnivåer",
 notShownNow: "OBS! Visas inte i huvudvyn nedan för närvarande.",
},

cs: { // Czech translation maintained by Sisel:
    language: "Czech",
    finished: " Dokončeno ",
    execTime: "Čas dokončení",
 researching: "Vynalézáme",
    showLoot: "Drancovací tabulka",
       shown: "Zobrazit",
      hidden: "Skrýt",
       empty: "Prázdno: ",
        full: "Plno: ",
      months: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer",
               "Čec", "Srp", "Zař", "Říj", "Lis", "Pro"],
 startExpand: "; rozšířovovat nejpozdějí: ",
     enqueue: "Do fronty",
  prependToQ: "Shift+kliknuti pro přidání na začátek fronty",
  leftByThen: "Zbylé suroviny ",
shoppingList: "Nákupní seznam: klikni na surovinu pro nakup v portu",
 unavailable: "Nedostatek surovin ve stavebním čase (i obnovovacím čase)",
   popupInfo: "Klikni pro info o budově, scroluj pro prohlížení levelů",
 notShownNow: "Notiz: wird zur Zeit nicht in der Hauptansicht angezeigt.",
},

pl: { // Polish translation maintained by drivex:
    language: "Polski",
    finished: "Koniec o: ",
    execTime: "Czas wykonania",
 researching: "Aktualne badanie",
       shown: "Pokaż",
      hidden: "Ukryty",
       empty: "pusty: ",
        full: "pełny: ",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
 startExpand: "; zacznij kolonizować przed ",
     enqueue: "Dodaj do kolejki",
  prependToQ: "Shift+Klik na budynku aby dodać go na samym początku",
  leftByThen: "Surowce niedostępne ",
shoppingList: "Pozostanie surowców",
 unavailable: "Surowce, które należy kupić by natychmiast rozpocząć budowe",
   popupInfo: "Kliknij aby dowiedzieć się więcej lub zacznij kręcić rolką "+
                "aby dowiedzieć się o kosztach następnych poziomów",
},

ro: { // Romanian translation maintained by n00bster:
    language: "Romana",
    finished: " > ",
    execTime: "Timp",
 researching: "Cercetam",
    showLoot: "Arata capturi",
       shown: "Arata",
      hidden: "Ascund",
       empty: "gol: ",
        full: "Plin: ",
    months: ["Ian", "Feb", "Mar", "Apr", "Mai", "Jun",
             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
 startExpand: "; Incepe expansunea inainte de: ",
     enqueue: "Pune la rand",
  prependToQ: "Shift click pentru a pune in fata sirului",
  leftByThen: "Resurse ramase ",
shoppingList: "Resurse necesare pentru a indeplini constructia",
 unavailable: "Resurse indisponibile la timpul construictiei",
   popupInfo: "Click pentru informatiile cladiri, foloseste scroolul sa "+
                "cauti levelele",
 notShownNow:"Nota: nu se arata in vederea generala jos.",
},

// Need updating by natives:
es: { language: "Espagnol" },
pt: { language: "Portuguès" },
da: { language: "Dansk" },

};

GM_registerMenuCommand("Ikariam Kronos Tools: Your language", promptLanguage);

function promptLanguage() {
  var help = [];
  for (var id in langs)
    help.push(id +": "+ langs[id].language);
  while (!langs.hasOwnProperty(newLanguage)) {
    var newLanguage = prompt("Ikariam Kronos Tools: " +
                             "Which language do you prefer?\n(" +
                             help.join(", ") + ")", getLanguage());
    if (!newLanguage) return;
    if (langs.hasOwnProperty(newLanguage)) {
      config.set("language", newLanguage);
      saveConfig();
    }
  }
  location.reload();
}

function getLanguage() {
  function guess() {
    var guess = navigator.language.replace(/-.*/,"");
    return langs.hasOwnProperty(guess) ? guess : "en";
  }
  if (config.get("language") == "sp") config.set("language", "es");
  var id = config.get("language", guess());
  var lang = langs[id], lack = {}, eng = langs.en, incomplete = 0;
  for (var str in eng)
    if (!lang.hasOwnProperty(str) || !lang[str]) {
      lack[str] = eng[str];
      incomplete++;
    }
  if (incomplete) {
    prompt("Sorry -- translation "+ lang.language +" is out of date, as it " +
           "is missing "+ (incomplete == 1 ? "this text" : "these texts") +
           "; falling back to English until fixed:", uneval(lack).slice(2, -2));
    id = config.set("language", "en");
    saveConfig();
  }
  return id;
}
