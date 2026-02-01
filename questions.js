// Base de données de questions - Révision Brevet 2026
// Structure : {q: "question", o: ["opt1", "opt2", "opt3", "opt4"], c: index_correct, e: "explication"}

const QUESTIONS = {
    francais: [
        // GRAMMAIRE
        {q:"Quel est le COD dans : 'Marie mange une pomme' ?",o:["Marie","mange","une pomme","Il n'y en a pas"],c:2,e:"Le COD répond à 'quoi ?' après le verbe. Marie mange quoi ? Une pomme."},
        {q:"Identifie le COI dans : 'Paul parle à son ami'",o:["Paul","parle","à son ami","ami"],c:2,e:"Le COI répond à 'à qui/quoi ?'. Paul parle à qui ? À son ami."},
        {q:"Nature de 'rapidement' dans : 'Il court rapidement'",o:["Adjectif","Adverbe","Nom","Verbe"],c:1,e:"L'adverbe modifie le verbe."},
        {q:"Quelle proposition est correcte ?",o:["Quelque soit","Quel que soit","Quelques soit","Quelqu'soit"],c:1,e:"'Quel que soit' s'écrit en deux mots."},
        {q:"Fonction de 'très intelligent' dans : 'Cet élève très intelligent réussit'",o:["Sujet","COD","Épithète","Attribut"],c:2,e:"Épithète = adjectif lié au nom."},
        {q:"Classe grammaticale de 'dont'",o:["Conjonction","Pronom relatif","Pronom démonstratif","Adverbe"],c:1,e:"'Dont' est un pronom relatif."},
        {q:"Dans 'Je pense que tu viendras', 'que tu viendras' est :",o:["Principale","Subordonnée relative","Subordonnée conjonctive","Indépendante"],c:2,e:"Subordonnée conjonctive COD de 'pense'."},
        {q:"Sujet de : 'Dans le jardin jouent les enfants'",o:["Dans","le jardin","jouent","les enfants"],c:3,e:"'Les enfants' est le sujet inversé."},
        {q:"Nature de 'ce' dans : 'Ce livre est intéressant'",o:["Pronom démonstratif","Déterminant démonstratif","Adjectif","Pronom personnel"],c:1,e:"'Ce' détermine le nom 'livre'."},
        {q:"Phrase avec un CCL (complément de lieu)",o:["Il mange rapidement","Je vais à Paris","Tu lis un livre","Elle chante bien"],c:1,e:"'À Paris' indique le lieu."},
        
        // CONJUGAISON
        {q:"Conjugue 'avoir' au subjonctif présent (nous)",o:["Nous avons","Nous aurions","Que nous ayons","Nous aurons"],c:2,e:"Subjonctif : que nous ayons."},
        {q:"Temps : 'J'aurai fini demain'",o:["Futur simple","Futur antérieur","Conditionnel passé","Passé composé"],c:1,e:"Futur antérieur = action future terminée."},
        {q:"Conjugue 'venir' au passé simple (il)",o:["Il vint","Il venait","Il est venu","Il viendra"],c:0,e:"Passé simple : il vint."},
        {q:"Participe passé de 'résoudre'",o:["Résolu","Résout","Résoudé","Résolvé"],c:0,e:"Participe passé : résolu."},
        {q:"Conjugue 'faire' au conditionnel présent (vous)",o:["Vous feriez","Vous faisiez","Vous ferez","Vous faites"],c:0,e:"Conditionnel : vous feriez."},
        {q:"Infinitif de 'je cours'",o:["Courser","Courir","Courrir","Courre"],c:1,e:"Infinitif : courir."},
        {q:"Conjugue 'être' à l'imparfait (tu)",o:["Tu es","Tu étais","Tu seras","Tu serais"],c:1,e:"Imparfait : tu étais."},
        {q:"Conjugue 'aller' au présent (nous)",o:["Nous allons","Nous allez","Nous irons","Nous allions"],c:0,e:"Présent : nous allons."},
        {q:"Participe passé de 'peindre'",o:["Peindu","Peint","Peigné","Peindé"],c:1,e:"Participe passé : peint."},
        {q:"Mode de : 'Viens ici !'",o:["Indicatif","Subjonctif","Impératif","Conditionnel"],c:2,e:"Impératif = ordre."},
        
        // FIGURES DE STYLE
        {q:"Figure : 'La mer est un tapis de vagues'",o:["Métaphore","Comparaison","Personnification","Hyperbole"],c:0,e:"Métaphore = comparaison sans outil."},
        {q:"Figure : 'Je meurs de faim'",o:["Métaphore","Hyperbole","Euphémisme","Litote"],c:1,e:"Hyperbole = exagération."},
        {q:"Figure : 'Le soleil sourit aux enfants'",o:["Personnification","Métaphore","Comparaison","Allégorie"],c:0,e:"Personnification = caractéristiques humaines."},
        {q:"Dans 'blanc comme neige', figure ?",o:["Métaphore","Comparaison","Personnification","Anaphore"],c:1,e:"Comparaison avec 'comme'."},
        {q:"Qu'est-ce qu'une anaphore ?",o:["Exagération","Répétition début vers","Comparaison","Euphémisme"],c:1,e:"Anaphore = répétition en début."},
        {q:"Qu'est-ce qu'un alexandrin ?",o:["10 syllabes","12 syllabes","8 syllabes","14 vers"],c:1,e:"Alexandrin = 12 syllabes."},
        {q:"Strophe de 4 vers",o:["Tercet","Quatrain","Quintil","Sizain"],c:1,e:"Quatrain = 4 vers."},
        {q:"Qu'est-ce qu'un sonnet ?",o:["10 vers","14 vers","16 vers","Poème libre"],c:1,e:"Sonnet = 14 vers."},
        {q:"Point de vue interne",o:["Narrateur omniscient","Narrateur externe","Narrateur personnage","Pas de narrateur"],c:2,e:"Point de vue interne = narrateur est personnage."},
        {q:"Type de texte pour convaincre",o:["Narratif","Descriptif","Argumentatif","Explicatif"],c:2,e:"Texte argumentatif = convaincre."},
        
        // VOCABULAIRE
        {q:"Synonyme de 'audacieux'",o:["Prudent","Téméraire","Timide","Calme"],c:1,e:"Téméraire = audacieux."},
        {q:"Antonyme d'éphémère'",o:["Temporaire","Durable","Court","Bref"],c:1,e:"Éphémère ≠ durable."},
        {q:"Que signifie 'éluder' ?",o:["Répondre","Éviter","Poser","Approfondir"],c:1,e:"Éluder = éviter."},
        {q:"Qu'est-ce qu'un euphémisme ?",o:["Exagération","Atténuation","Répétition","Négation"],c:1,e:"Euphémisme = atténuation."},
        {q:"Préfixe 'contre'",o:["Pré-","Anti-","Pro-","Sub-"],c:1,e:"Anti- = contre."},
        {q:"Orthographe correcte",o:["Apeller","Appeler","Appeller","Apeler"],c:1,e:"Appeler."},
        {q:"Pluriel de 'cheval'",o:["Chevals","Chevaux","Chevaus","Chevales"],c:1,e:"Chevaux (-al → -aux)."},
        {q:"Féminin de 'directeur'",o:["Directeuse","Directrice","Directoresse","Directeure"],c:1,e:"Directrice."},
        {q:"Homonyme de 'mer'",o:["Mère","Maire","Les deux","Aucun"],c:2,e:"Mer, mère, maire."},
        {q:"Synonyme de 'perspicace'",o:["Stupide","Clairvoyant","Lent","Gentil"],c:1,e:"Perspicace = clairvoyant."}
    ],

    maths: [
        // CALCUL
        {q:"√64 = ?",o:["6","7","8","9"],c:2,e:"√64 = 8 car 8×8 = 64"},
        {q:"3/4 + 1/2 = ?",o:["4/6","5/4","1/4","1"],c:1,e:"3/4 + 2/4 = 5/4"},
        {q:"-5 + 8 = ?",o:["-13","-3","3","13"],c:2,e:"-5 + 8 = 3"},
        {q:"2³ = ?",o:["6","8","9","12"],c:1,e:"2³ = 2×2×2 = 8"},
        {q:"Simplifie : 24/36",o:["2/3","3/4","1/2","4/6"],c:0,e:"24/36 = 2/3 (÷12)"},
        {q:"15% de 80",o:["10","12","15","20"],c:1,e:"15% de 80 = 12"},
        {q:"Inverse de 4",o:["-4","1/4","4","0,4"],c:1,e:"L'inverse de 4 = 1/4"},
        {q:"(-3) × (-5) = ?",o:["-15","15","-8","8"],c:1,e:"Moins × moins = plus"},
        {q:"√100 = ?",o:["5","10","50","25"],c:1,e:"√100 = 10"},
        {q:"5² = ?",o:["10","15","25","50"],c:2,e:"5² = 25"},
        
        // GÉOMÉTRIE
        {q:"Formule Pythagore",o:["a+b=c","a²+b²=c²","a×b=c","a²=b²+c²"],c:1,e:"Triangle rectangle : a²+b²=c²"},
        {q:"Aire cercle rayon 5 (π≈3,14)",o:["15,7","31,4","78,5","157"],c:2,e:"Aire = πr² = 78,5"},
        {q:"Arêtes d'un cube",o:["6","8","12","24"],c:2,e:"Un cube a 12 arêtes"},
        {q:"Somme angles triangle",o:["90°","180°","270°","360°"],c:1,e:"180° dans un triangle"},
        {q:"Volume pavé L×l×h. Si L=3,l=2,h=4",o:["9","24","10","12"],c:1,e:"3×2×4 = 24"},
        {q:"Périmètre rectangle L=8,l=5",o:["13","26","40","80"],c:1,e:"2(L+l) = 26"},
        {q:"Angles complémentaires",o:["45°","90°","180°","360°"],c:1,e:"Complémentaires = 90°"},
        {q:"Aire triangle base 6, hauteur 4",o:["10","12","24","48"],c:1,e:"(b×h)/2 = 12"},
        {q:"Faces d'un cube",o:["4","6","8","12"],c:1,e:"6 faces"},
        {q:"Somme angles quadrilatère",o:["180°","270°","360°","540°"],c:2,e:"360° dans un quadrilatère"},
        
        // ALGÈBRE
        {q:"Résous : 2x + 5 = 15",o:["x=5","x=10","x=7,5","x=20"],c:0,e:"2x = 10, x = 5"},
        {q:"Développe : 3(x+2)",o:["3x+2","3x+6","x+6","3x+5"],c:1,e:"3×x + 3×2 = 3x+6"},
        {q:"Factorise : 5x + 10",o:["5(x+2)","x(5+10)","5x(1+2)","15x"],c:0,e:"5×x + 5×2 = 5(x+2)"},
        {q:"Ordonnée à l'origine y=2x+3",o:["2","3","5","0"],c:1,e:"Dans y=ax+b, b=3"},
        {q:"Résous : x/2 = 6",o:["x=3","x=8","x=12","x=4"],c:2,e:"x = 6×2 = 12"},
        {q:"Développe : (x+2)(x+3)",o:["x²+5x+6","x²+6","2x+5","x²+5"],c:0,e:"x² + 3x + 2x + 6"},
        {q:"Si y=3x et x=4, y=?",o:["7","12","1","3"],c:1,e:"y = 3×4 = 12"},
        {q:"Résous : 3x = 21",o:["x=7","x=18","x=24","x=6"],c:0,e:"x = 21/3 = 7"},
        {q:"Coefficient directeur y=-2x+5",o:["5","-2","2","0"],c:1,e:"Coefficient = -2"},
        {q:"Factorise : x²-4",o:["(x-2)(x+2)","(x-4)(x+1)","x(x-4)","(x-2)²"],c:0,e:"a²-b² = (a-b)(a+b)"},
        
        // PROBABILITÉS
        {q:"Probabilité obtenir 6 (dé)",o:["1/2","1/3","1/6","1/12"],c:2,e:"1 sur 6 = 1/6"},
        {q:"Médiane : 3,5,7,9,11",o:["5","7","9","35"],c:1,e:"Valeur centrale = 7"},
        {q:"Moyenne : 10,15,20",o:["12,5","15","17,5","45"],c:1,e:"(10+15+20)/3 = 15"},
        {q:"3 rouges, 2 bleues. Prob rouge?",o:["2/5","3/5","1/2","3/2"],c:1,e:"3 sur 5 = 3/5"},
        {q:"Étendue : 5,8,12,15",o:["5","10","15","40"],c:1,e:"max-min = 15-5 = 10"},
        {q:"Moyenne : 8,10,12",o:["9","10","11","30"],c:1,e:"(8+10+12)/3 = 10"},
        {q:"Prob as dans 52 cartes",o:["1/13","1/52","4/52","1/4"],c:0,e:"4/52 = 1/13"},
        {q:"Médiane : 2,4,6,8",o:["4","5","6","20"],c:1,e:"(4+6)/2 = 5"},
        {q:"Fréquence 12/60",o:["0,2","0,12","12","5"],c:0,e:"12/60 = 0,2"},
        {q:"Pile ou face prob pile",o:["1/4","1/3","1/2","1"],c:2,e:"1 sur 2 = 1/2"}
    ],

    'histoire-geo': [
        // RÉVOLUTION & EMPIRE
        {q:"Année Révolution française",o:["1789","1799","1804","1815"],c:0,e:"Révolution en 1789"},
        {q:"Qui dirigeait la Terreur ?",o:["Napoléon","Louis XVI","Robespierre","De Gaulle"],c:2,e:"Robespierre"},
        {q:"Napoléon empereur en",o:["1789","1799","1804","1815"],c:2,e:"Sacré en 1804"},
        {q:"Bataille fin Empire",o:["Austerlitz","Waterloo","Valmy","Marengo"],c:1,e:"Waterloo 1815"},
        {q:"Date prise Bastille",o:["14 juillet 1789","14 juillet 1790","21 sept 1792","5 mai 1789"],c:0,e:"14 juillet 1789"},
        {q:"Déclaration Droits Homme",o:["1789","1791","1793","1804"],c:0,e:"Août 1789"},
        {q:"Fin Monarchie",o:["1789","1791","1792","1804"],c:2,e:"21 septembre 1792"},
        {q:"Coup État 18 Brumaire",o:["1789","1792","1799","1804"],c:2,e:"9 novembre 1799"},
        {q:"Victoire Napoléon 1805",o:["Waterloo","Austerlitz","Iéna","Wagram"],c:1,e:"Austerlitz"},
        {q:"Code civil promulgué",o:["1789","1799","1804","1815"],c:2,e:"Code Napoléon 1804"},
        
        // XIXe SIÈCLE
        {q:"Abolition esclavage France",o:["1794","1848","1865","1905"],c:1,e:"1848 définitive"},
        {q:"École gratuite par",o:["Jules Ferry","Gambetta","Clemenceau","De Gaulle"],c:0,e:"Jules Ferry 1881-82"},
        {q:"IIIe République proclamée",o:["1848","1870","1875","1905"],c:1,e:"4 septembre 1870"},
        {q:"Guerre franco-prussienne",o:["1850-51","1870-71","1914-18","1939-45"],c:1,e:"1870-1871"},
        {q:"Commune de Paris",o:["1848","1871","1905","1914"],c:1,e:"Mars-mai 1871"},
        {q:"Lois scolaires Ferry",o:["1870-71","1881-82","1905","1914"],c:1,e:"1881-1882"},
        {q:"Affaire divisant France",o:["Fillon","Dreyfus","Stavisky","Cahuzac"],c:1,e:"Affaire Dreyfus"},
        {q:"Séparation Églises-État",o:["1789","1881","1905","1946"],c:2,e:"Loi 1905"},
        {q:"Conquête Algérie",o:["1789","1830","1870","1905"],c:1,e:"Débute 1830"},
        {q:"Tour Eiffel construite",o:["1867","1889","1900","1905"],c:1,e:"Expo 1889"},
        
        // XXe SIÈCLE
        {q:"Années 1ère GM",o:["1914-18","1939-45","1870-71","1789-99"],c:0,e:"1914-1918"},
        {q:"Déclenchement 1ère GM",o:["Invasion Pologne","Assassinat archiduc","Verdun","Versailles"],c:1,e:"Archiduc 28 juin 1914"},
        {q:"Hitler au pouvoir",o:["1918","1933","1939","1945"],c:1,e:"Chancelier 1933"},
        {q:"Années 2nde GM",o:["1914-18","1939-45","1940-44","1941-45"],c:1,e:"1939-1945"},
        {q:"Appel 18 juin 1940",o:["Pétain","De Gaulle","Churchill","Roosevelt"],c:1,e:"Général de Gaulle"},
        {q:"Débarquement Normandie",o:["6 juin 1940","6 juin 1944","8 mai 1945","11 nov 1918"],c:1,e:"D-Day 6 juin 1944"},
        {q:"Qu'est-ce que la Shoah ?",o:["Bataille","Génocide Juifs","Traité","Révolution"],c:1,e:"Génocide 6 millions"},
        {q:"Fin 2nde GM Europe",o:["6 juin 1944","8 mai 1945","2 sept 1945","11 nov 1918"],c:1,e:"8 mai 1945"},
        {q:"Chute mur Berlin",o:["1961","1975","1989","1991"],c:2,e:"9 novembre 1989"},
        {q:"Traité Versailles",o:["1914","1918","1919","1945"],c:2,e:"28 juin 1919"},
        
        // GÉOGRAPHIE
        {q:"Plus long fleuve France",o:["Seine","Rhône","Garonne","Loire"],c:3,e:"Loire 1012 km"},
        {q:"Régions France métropole",o:["12","13","22","27"],c:1,e:"13 depuis 2016"},
        {q:"Capitale Bretagne",o:["Nantes","Rennes","Brest","Quimper"],c:1,e:"Rennes"},
        {q:"Massif France-Espagne",o:["Alpes","Jura","Pyrénées","Vosges"],c:2,e:"Pyrénées"},
        {q:"Point culminant France",o:["Mont Blanc","Mont Ventoux","Pic Midi","Puy Dôme"],c:0,e:"Mont Blanc 4808m"},
        {q:"Nombre continents",o:["5","6","7","8"],c:1,e:"6 continents habités"},
        {q:"Plus grand océan",o:["Atlantique","Indien","Pacifique","Arctique"],c:2,e:"Océan Pacifique"},
        {q:"Capitale Allemagne",o:["Munich","Berlin","Hambourg","Francfort"],c:1,e:"Berlin"},
        {q:"Continent Brésil",o:["Afrique","Asie","Amérique Nord","Amérique Sud"],c:3,e:"Amérique du Sud"},
        {q:"Pays plus peuplé 2023",o:["Inde","Chine","États-Unis","Indonésie"],c:0,e:"Inde (dépassé Chine)"}
    ],

    sciences: [
        // SVT
        {q:"Chromosomes cellule humaine",o:["23","46","92","48"],c:1,e:"46 chromosomes (23 paires)"},
        {q:"Fabrication nourriture plantes",o:["Respiration","Photosynthèse","Digestion","Fermentation"],c:1,e:"La photosynthèse"},
        {q:"Unité base vivant",o:["Atome","Molécule","Cellule","Organe"],c:2,e:"La cellule"},
        {q:"Nombre os adulte",o:["156","186","206","256"],c:2,e:"206 os"},
        {q:"Organe insuline",o:["Foie","Pancréas","Estomac","Reins"],c:1,e:"Le pancréas"},
        {q:"Support info génétique",o:["ARN","ADN","ATP","ADP"],c:1,e:"L'ADN"},
        {q:"Durée gestation humaine",o:["7 mois","8 mois","9 mois","10 mois"],c:2,e:"9 mois (39 sem)"},
        {q:"Plaques en mouvement",o:["Terrestres","Tectoniques","Géologiques","Sismiques"],c:1,e:"Plaques tectoniques"},
        {q:"Qu'est-ce qu'un séisme ?",o:["Éruption","Tremblement terre","Glissement","Tempête"],c:1,e:"Tremblement de terre"},
        {q:"Échelle séismes",o:["Beaufort","Richter","Mohs","Celsius"],c:1,e:"Échelle Richter"},
        
        // PHYSIQUE-CHIMIE
        {q:"Formule eau",o:["H2O","CO2","O2","H2O2"],c:0,e:"H2O = 2H + 1O"},
        {q:"Formule CO2",o:["CO","CO2","O2","C2O"],c:1,e:"Dioxyde carbone CO2"},
        {q:"Liquide à gaz",o:["Fusion","Solidification","Vaporisation","Sublimation"],c:2,e:"La vaporisation"},
        {q:"Ébullition eau",o:["0°C","50°C","100°C","150°C"],c:2,e:"100°C pression normale"},
        {q:"Gaz respiration",o:["Azote","Oxygène","CO2","Hydrogène"],c:1,e:"L'oxygène O2"},
        {q:"Qu'est-ce qu'un atome ?",o:["Molécule","Plus petite partie élément","Ion","Électron"],c:1,e:"Atome = plus petite partie"},
        {q:"Voltmètre mesure",o:["Intensité","Tension","Résistance","Puissance"],c:1,e:"Mesure tension"},
        {q:"Unité intensité",o:["Volt","Ampère","Watt","Ohm"],c:1,e:"Ampère (A)"},
        {q:"Propagation son",o:["Dans vide","Par ondes EM","Par vibrations","Par rayonnement"],c:2,e:"Vibrations matière"},
        {q:"Vitesse lumière",o:["300 km/s","3000 km/s","30000 km/s","300000 km/s"],c:3,e:"300 000 km/s"},
        
        // TECHNOLOGIE
        {q:"Qu'est-ce algorithme ?",o:["Langage","Suite instructions","Logiciel","Ordinateur"],c:1,e:"Suite instructions"},
        {q:"CPU signifie",o:["Computer Personal Unit","Central Processing Unit","Central Program Unit","Computer Program Unit"],c:1,e:"Central Processing Unit"},
        {q:"Bon conducteur",o:["Bois","Plastique","Cuivre","Verre"],c:2,e:"Le cuivre"},
        {q:"Énergie renouvelable",o:["Pétrole","Charbon","Solaire","Gaz"],c:2,e:"Énergie solaire"},
        {q:"RAM signifie",o:["Read Access","Random Access","Rapid Access","Real Access"],c:1,e:"Random Access Memory"},
        {q:"Réseau local",o:["WAN","LAN","MAN","PAN"],c:1,e:"LAN = Local Area Network"},
        {q:"Langage web",o:["Python","Java","HTML","C++"],c:2,e:"HTML pour le web"},
        {q:"Unité stockage",o:["Hz","W","Go","A"],c:2,e:"Go = Gigaoctet"},
        {q:"Protocole web",o:["FTP","SMTP","HTTP","SSH"],c:2,e:"HTTP/HTTPS"},
        {q:"Extension image",o:[".txt",".pdf",".jpg",".mp3"],c:2,e:".jpg pour image"},
        
        // COMPLÉMENTS
        {q:"Nombre vertèbres",o:["24","33","45","50"],c:1,e:"33 vertèbres"},
        {q:"Organe filtrant sang",o:["Foie","Reins","Rate","Cœur"],c:1,e:"Les reins"},
        {q:"Composant air majoritaire",o:["Oxygène","Azote","CO2","Argon"],c:1,e:"Azote 78%"},
        {q:"pH neutre",o:["0","7","14","10"],c:1,e:"pH 7 = neutre"},
        {q:"Planète plus proche Soleil",o:["Vénus","Mercure","Terre","Mars"],c:1,e:"Mercure"},
        {q:"Satellite naturel Terre",o:["Mars","Lune","Soleil","ISS"],c:1,e:"La Lune"},
        {q:"Durée rotation Terre",o:["12h","24h","365j","30j"],c:1,e:"24 heures"},
        {q:"Couche protégeant UV",o:["Atmosphère","Ozone","Ionosphère","Stratosphère"],c:1,e:"Couche d'ozone"},
        {q:"Changement état solide-liquide",o:["Fusion","Vaporisation","Sublimation","Condensation"],c:0,e:"La fusion"},
        {q:"Force attraction Terre",o:["Magnétisme","Gravité","Électricité","Friction"],c:1,e:"La gravité"}
    ],

    anglais: [
        // VOCABULAIRE
        {q:"Comment dit-on 'bonjour' ?",o:["Goodbye","Hello","Please","Thank you"],c:1,e:"Hello = bonjour"},
        {q:"Que signifie 'apple' ?",o:["Orange","Banane","Pomme","Poire"],c:2,e:"Apple = pomme"},
        {q:"Comment dit-on 'au revoir' ?",o:["Hello","Goodbye","Sorry","Welcome"],c:1,e:"Goodbye"},
        {q:"Que signifie 'book' ?",o:["Stylo","Cahier","Livre","Table"],c:2,e:"Book = livre"},
        {q:"Comment dit-on 'merci' ?",o:["Please","Thank you","Sorry","Welcome"],c:1,e:"Thank you"},
        {q:"Que signifie 'house' ?",o:["Maison","Appartement","Chambre","Jardin"],c:0,e:"House = maison"},
        {q:"S'il vous plaît",o:["Sorry","Please","Thank you","Excuse me"],c:1,e:"Please"},
        {q:"'Water' signifie",o:["Air","Eau","Feu","Terre"],c:1,e:"Water = eau"},
        {q:"'Dog' signifie",o:["Chat","Chien","Oiseau","Poisson"],c:1,e:"Dog = chien"},
        {q:"'School' signifie",o:["Maison","École","Magasin","Parc"],c:1,e:"School = école"},
        
        // GRAMMAIRE
        {q:"Preterit 'go'",o:["Goed","Went","Gone","Going"],c:1,e:"Go → went"},
        {q:"'To be' 3e pers sing",o:["Is","Are","Am","Be"],c:0,e:"He/she/it is"},
        {q:"Participe passé 'eat'",o:["Ate","Eaten","Eated","Eating"],c:1,e:"Eat → eaten"},
        {q:"Présent progressif",o:["To be + V","To be + ing","To have + pp","V + ed"],c:1,e:"To be + V-ing"},
        {q:"Pluriel 'child'",o:["Childs","Children","Childes","Childrens"],c:1,e:"Child → children"},
        {q:"'Je n'ai pas'",o:["I not have","I don't have","I haven't","I no have"],c:1,e:"I don't have"},
        {q:"Comparatif 'good'",o:["Gooder","More good","Better","Best"],c:2,e:"Good → better"},
        {q:"'Il y a'",o:["It has","There is/are","It is","Here is"],c:1,e:"There is/are"},
        {q:"Preterit 'see'",o:["Seed","Saw","Seen","Seeing"],c:1,e:"See → saw"},
        {q:"Préposition heure",o:["In","On","At","To"],c:2,e:"At 3 o'clock"},
        
        // COMPRÉHENSION
        {q:"'I am 14 years old'",o:["J'ai 14 ans","Né en 14","Il est 14h","14 personnes"],c:0,e:"I am X years old"},
        {q:"'What's your name?'",o:["Quel âge?","Comment t'appelles-tu?","Où habites-tu?","Que fais-tu?"],c:1,e:"Ton nom?"},
        {q:"Réponse 'How are you?'",o:["I am 15","I am fine","I am French","I am at school"],c:1,e:"I am fine"},
        {q:"'Where do you live?'",o:["Qui es-tu?","Que fais-tu?","Où habites-tu?","Quand pars-tu?"],c:2,e:"Où habites-tu?"},
        {q:"Réponse 'Do you like music?'",o:["Yes, I do","Yes, I am","Yes, I like","Yes, I music"],c:0,e:"Yes, I do"},
        {q:"'My brother is tall'",o:["Frère petit","Frère grand","Sœur grande","Cousin grand"],c:1,e:"Brother = frère, tall = grand"},
        {q:"'Cat' signifie",o:["Chien","Chat","Oiseau","Souris"],c:1,e:"Cat = chat"},
        {q:"'Big' signifie",o:["Petit","Grand","Moyen","Mince"],c:1,e:"Big = grand"},
        {q:"'Happy' signifie",o:["Triste","Heureux","En colère","Fatigué"],c:1,e:"Happy = heureux"},
        {q:"Pluriel 'man'",o:["Mans","Men","Mens","Manes"],c:1,e:"Man → men"},
        
        // TEMPS & NOMBRES
        {q:"'Monday' signifie",o:["Mardi","Lundi","Mercredi","Jeudi"],c:1,e:"Monday = lundi"},
        {q:"'January' signifie",o:["Juin","Janvier","Juillet","Mars"],c:1,e:"January = janvier"},
        {q:"'Ten' signifie",o:["5","10","15","20"],c:1,e:"Ten = 10"},
        {q:"'Twenty' signifie",o:["12","15","20","30"],c:2,e:"Twenty = 20"},
        {q:"'Blue' signifie",o:["Rouge","Vert","Bleu","Jaune"],c:2,e:"Blue = bleu"},
        {q:"'Red' signifie",o:["Rouge","Vert","Bleu","Jaune"],c:0,e:"Red = rouge"},
        {q:"'Small' signifie",o:["Grand","Petit","Moyen","Gros"],c:1,e:"Small = petit"},
        {q:"'Fast' signifie",o:["Lent","Rapide","Moyen","Fort"],c:1,e:"Fast = rapide"},
        {q:"'Cold' signifie",o:["Chaud","Froid","Tiède","Doux"],c:1,e:"Cold = froid"},
        {q:"'Nice' signifie",o:["Méchant","Gentil","Triste","En colère"],c:1,e:"Nice = gentil"}
    ],

    emc: [
        // RÉPUBLIQUE
        {q:"Devise France",o:["Travail Famille Patrie","Liberté Égalité Fraternité","Honneur Patrie","Justice Vérité"],c:1,e:"Liberté Égalité Fraternité"},
        {q:"Couleurs drapeau",o:["2","3","4","5"],c:1,e:"Bleu blanc rouge"},
        {q:"Hymne national",o:["La Marseillaise","Chant Partisans","Carmagnole","Ça ira"],c:0,e:"La Marseillaise"},
        {q:"Qu'est-ce laïcité ?",o:["Religion obligatoire","Interdiction religions","Séparation État/religions","Religion État"],c:2,e:"Séparation État religions"},
        {q:"Loi séparation 1905",o:["1789","1881","1905","1946"],c:2,e:"Loi 1905"},
        {q:"Symbole République",o:["Coq","Marianne","Tour Eiffel","Fleur de lys"],c:1,e:"Marianne"},
        {q:"14 juillet commémore",o:["Victoire 1918","Prise Bastille","Armistice","Libération"],c:1,e:"Prise Bastille 1789"},
        {q:"8 mai commémore",o:["Armistice 1918","Victoire 1945","Libération Paris","Prise Bastille"],c:1,e:"Victoire 1945"},
        {q:"11 novembre commémore",o:["Armistice 1918","Victoire 1945","Révolution","Libération"],c:0,e:"Armistice 1918"},
        {q:"Devise gravée pièces",o:["Honneur","Liberté Égalité Fraternité","Justice","République"],c:1,e:"Liberté Égalité Fraternité"},
        
        // CITOYENNETÉ
        {q:"Âge vote France",o:["16 ans","17 ans","18 ans","21 ans"],c:2,e:"18 ans depuis 1974"},
        {q:"Durée mandat président",o:["3 ans","5 ans","7 ans","10 ans"],c:1,e:"5 ans (quinquennat)"},
        {q:"Rôle Parlement",o:["Juger","Voter lois","Exécuter","Représenter"],c:1,e:"Vote les lois"},
        {q:"Candidat présidentiel",o:["Tout citoyen","23 ans + 500 parrainages","18 ans","Tout résident"],c:1,e:"23 ans + 500 parrainages"},
        {q:"Suffrage universel",o:["Vote hommes","Vote tous majeurs","Vote députés","Vote sénateurs"],c:1,e:"Tous citoyens majeurs"},
        {q:"Scrutin présidentiel",o:["1 tour","2 tours","3 tours","Proportionnel"],c:1,e:"2 tours"},
        {q:"Assemblée Nationale élue",o:["3 ans","5 ans","7 ans","10 ans"],c:1,e:"5 ans"},
        {q:"Sénat élu par",o:["Citoyens","Grands électeurs","Députés","Président"],c:1,e:"Grands électeurs"},
        {q:"Qui promulgue lois ?",o:["Parlement","Président","1er ministre","Conseil"},c:1,e:"Le Président"},
        {q:"Vote obligatoire France ?",o:["Oui","Non","Parfois","Selon âge"],c:1,e:"Non, c'est un droit"},
        
        // DROITS & DEVOIRS
        {q:"DDHC date",o:["1789","1791","1793","1804"],c:0,e:"DDHC 1789"},
        {q:"Liberté expression",o:["Tout dire","Respect loi","Public seul","Journaux"],c:1,e:"Limitée par loi"},
        {q:"Devoir citoyen",o:["Voter","Payer impôts","Manifester","Critiquer"],c:1,e:"Payer impôts = obligation"},
        {q:"Solidarité nationale",o:["Entraide citoyens/État","Armée","Service militaire","Partis"],c:0,e:"Entraide sociale"},
        {q:"Défenseur droits",o:["Sénat","Défenseur droits","Conseil État","Cour cassation"],c:1,e:"Autorité indépendante"},
        {q:"Majorité civile",o:["16 ans","17 ans","18 ans","21 ans"],c:2,e:"18 ans"},
        {q:"Droit grève",o:["Interdit","Autorisé","Parfois","Selon métier"],c:1,e:"Droit constitutionnel"},
        {q:"Liberté association",o:["Interdite","Autorisée","Déclaration","Autorisation"],c:2,e:"Déclaration préfecture"},
        {q:"Égalité devant loi",o:["Principe","Parfois","Non","Selon revenu"],c:0,e:"Principe fondamental"},
        {q:"Présomption innocence",o:["Coupable prouvé","Innocent prouvé","Non","Parfois"],c:0,e:"Innocent jusqu'à preuve"},
        
        // EUROPE & MONDE
        {q:"Pays UE",o:["25","27","28","30"],c:1,e:"27 depuis Brexit"},
        {q:"Monnaie européenne",o:["Franc","Euro","Livre","Dollar"],c:1,e:"L'euro"},
        {q:"Organisation paix mondiale",o:["ONU","OTAN","UE","FMI"],c:0,e:"ONU"},
        {q:"DUDH date",o:["1789","1945","1948","1950"],c:2,e:"10 décembre 1948"},
        {q:"Parlement européen",o:["Paris","Bruxelles","Strasbourg","Luxembourg"],c:2,e:"Strasbourg"},
        {q:"Traité UE",o:["Rome","Maastricht","Paris","Berlin"],c:1,e:"Traité Maastricht 1992"},
        {q:"Libre circulation UE",o:["Schengen","Dublin","Rome","Nice"],c:0,e:"Espace Schengen"},
        {q:"Siège ONU",o:["Paris","Londres","New York","Genève"],c:2,e:"New York"},
        {q:"Conseil sécurité",o:["5 membres","10 membres","15 membres","20 membres"],c:2,e:"15 membres (5 permanents)"},
        {q:"Droit humanitaire",o:["Croix Rouge","ONU","UE","OTAN"],c:0,e:"Conventions Genève"},
        
        // ÉGALITÉ & DISCRIMINATION
        {q:"Discrimination",o:["Traiter différemment injustement","Opinions différentes","Respecter","Voter"],c:0,e:"Traitement injuste"},
        {q:"Femmes vote France",o:["1789","1848","1944","1974"],c:2,e:"1944"},
        {q:"Parité",o:["Égalité H/F","Vote égalité","Mixité","Salaires"],c:0,e:"Égale représentation"},
        {q:"Loi contre racisme",o:["Opinions","Propos/actes racistes","Différences","Débats"],c:1,e:"Punit propos/actes"},
        {q:"Harcèlement",o:["Dispute","Violences répétées","Punition","Désaccord"],c:1,e:"Violence répétée"},
        {q:"Handicap accès",o:["Lois","Parfois","Non","Payant"],c:0,e:"Lois accessibilité"},
        {q:"Égalité salariale",o:["Acquise","Loi mais inégalités","Non","Parfois"],c:1,e:"Principe mais inégalités"},
        {q:"Lutte discriminations",o:["Défenseur droits","Police","Mairie","Préfet"],c:0,e:"Défenseur droits"},
        {q:"Mariage pour tous",o:["2000","2013","2015","2020"],c:1,e:"Loi 2013"},
        {q:"Principe laïcité école",o:["Neutralité","Religion","Interdit","Obligatoire"],c:0,e:"Neutralité religieuse"}
    ]
};
