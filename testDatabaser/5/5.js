//test5.database.js
var verDatabase = "test5.database.js";
var database = [
    { 
        //Dette objekt bestemmer rækkefølgen af emnerne og skal være øverst.
        //Her i ligger alle de emner man kan vælge i mellem
        name: "Emene Rækkefølge bestemmer",
        theme: [
            "English",
            "Dansk",
            "Introducerende",
            
            "Pengeskabelse",
            "Betalingssystemer",
            "Pengereform",
            "EU",
            
            "Pengepolitik",
            
            "Centralbanker",
            "Banker",
            "Den finansielle sektor",
            "Skyggebanker",
            
            "Kontanter",
            "CBDC",
            "Kryptovaluta",
            "Lokalvaluta",
            
            "Pengehistorie",
            "Pengeteori",
            
            "Finanskrise",
            "Boligmarkedet",
            "Kapitalismekritik",
            "Grøn omstilling",
            "Økonomisk ulighed",
            "Demokrati"
            ]    
    },
    {
        //skabelon, kopier fra "{" linjen over denne til "}," indsæt så efter "}," for at lave en ny reference
        //udfyld derefter med info for referencen
        name: 'Skabelon for en reference', //navn
        type: 'Artikel', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 3, //kvaliteten, tal mellem 1-10
        price: 0.00, //Pris for at tilgå referencen
        date: '2021-11-29', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'forfatter', //forfatter eller forfattere
        theme: ['Demokrati', 'Pengeskabelse'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'Obejkt til kopiering', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.godepenge.dk", //link 
        image: "", //link til billede
    },
    {
        //Et eksempel
        name: "Demokratiser pengeskabelsen og indfri den grønne omstilling", //Bemærk det er skrevet mellem anførselstegnene
        type: "Artikel", //Kun et medie og skrevet med stort forbogstav
        rating: 10, //uden anførselstegn
        price: 0.00, //med 2 decimaler, uden anførselstegn
        date: "2021-11-29", //med anførselstegn
        authors: "Mads Thunestvedt, Andrea Thorup", //komma sepererer forfattere, med anførselstegn om det hele
        theme: ["Demokrati", "Grøn omstilling", "Pengeskabelse"], //om hvert emne er der anførselstegn
        description: "Banker skaber penge – mange penge: Pengemængden stiger, og det har den de sidste mange årtier gjort med cirka 70 milliarder kroner om året, sidste år med hele 140 milliarder.<br>Banker er private virksomheder, og derfor udsteder de lån – altså penge – til formål, som er profitable og sikre for banken. Som oftest faste aktiver. Cirka 75 procent af udlån i danske banker er boligrelaterede. Meget få er til regenerativt jordbrug. <br> <br> Derfor burde vi spørge os selv om private virksomheder er et smart sted at placere kernen i den samfundskritiske institution,som pengesystemet er, nemlig pengeskabelsen. Og derfor er det essentielt, at vi begynder at inkludere pengeskabelsen i debatten om mulighederne for den grønne omstilling.", 
        //kun linje skift der hvor der står "<br>"
        link: "https://klimamonitor.dk/debat/art8482256/Demokratiser-pengeskabelsen-og-indfri-den-grønne-omstilling",
        image: "https://images.squarespace-cdn.com/content/v1/587382daebbd1a717d8e9df3/7a3a4aff-519f-4d00-acd4-969b8503a575/Udklipklimademo.PNG?format=1000w",
    },
  {
        //skabelon, kopier fra "{" linjen over denne til "}," indsæt så efter "}," for at lave en ny reference
        //udfyld derefter med info for referencen
        name: 'Where does money come from? <br> A guide to the UK monetary and banking system ', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 8, //kvaliteten, tal mellem 1-10
        price: 100.00, //Pris for at tilgå referencen
        date: '2011-01-01', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Josh-Ryan Collins, Tony Greenham, Richard Werner, Andrew Jackson', //forfatter eller forfattere
        theme: ['Pengeskabelse', 'Pengeteori', 'English'], //Emnerne på denne form ['Emne1', 'Emne2', 'Emne3']. Det skal være med stort forbogstav
        description: 'En saglig introduktion til pengeskabelse på akademisk niveau. Uden normative vurderinger, men meget solid deskriptiv forklaring af pengeskabelsen. Passende til brug for bachelor eller specialeskriving om emnet ', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://neweconomics.org/2012/12/where-does-money-come-from", //link 
        image: "https://neweconomics.org/uploads/images/2012/12/WDMCF2.png", //link til billede
    },
    ];
