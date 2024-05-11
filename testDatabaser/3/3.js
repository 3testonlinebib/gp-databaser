//test3.database.js
var verDatabase = "test3.database.js";
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
        name: 'Debunking Economics: The Naked Emperor Dethroned?', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 6, //kvaliteten, tal mellem 1-10
        price: 350.00, //Pris for at tilgå referencen
        date: '2011-01-01', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Steve Keen', //forfatter eller forfattere
        theme: ['Finanskrise', 'Pengeteori', 'Boligmarkedet', 'English'], // 'Økonomikritik' Hvis det bliver accepteret som emne
        description: 'Denne bog forklarer i detaljer, hvad der er galt med det meste af den økonomiske videnskab, og hvorfor de fleste økonomer ikke forudså den globale finanskrise i 2007-08. Professor i økonomi Steve Keen er kendt for at være én af de få, der på forhånd advarede om, at en økonomisk krise ville bryde ud. <i>Debunking Economics</i> forklarer alle de urealistiske antagelser og logiske og matematiske fejl, som moderne økonomisk mainstream-videnskab bygger på - i et indførende og ikke-matematisk sprog. Emnerne er komplekse, men man behøver ikke at have læst økonomi eller forstå ligninger for at kunne følge med. Mainstream-teorien om at markedet balancerer udbud og efterspørgsel og finder et prisniveau, der fører til økonomisk ligevægt og vækst, er helt forfejlet. Den kan ikke en gang give en ordentlig forklaring på økonomiske kriser. Der findes flere forskellige alternative teoriretninger, som alle kommer tættere på at beskrive den økonomiske virkelighed. Dem skitserer og vurderer Keen også, og tager det bedste fra dem hver især og at formulere et bud på hvordan realistisk økonomisk videnskab kunne se ud. Han henter indsigter hos blandt andre John Maynard Keynes, Hyman Minsky, Irving Fisher om gældens og pengeskabelsens betydning for økonomiske op- og nedture.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/debunking-economics_professor-steve-keen-steve-keen_epub_9781848139954", //link 
        image: "https://imgcdn.saxo.com/_9781848139954/0x500", //link til billede
    },
     {
        name: 'Can we avoid another financial crisis?', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 7, //kvaliteten, tal mellem 1-10
        price: 120.00, //Pris for at tilgå referencen
        date: '2016-04-07', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Steve Keen', //forfatter eller forfattere
        theme: ['Finanskrise', 'Boligmarkedet', 'Pengeskabelse', 'Pengereform', 'English'], // 'Økonomikritik' Hvis det bliver accepteret som emne
        description: 'I denne lille, letlæste bog forklarer Steve Keen hvordan den globale finanskrise 2007-08 opstod, hvordan han var i stand til at forudse og advare offentligt om den, og hvorfor de fleste andre økonomer overså den. I årene op til krisen fik de overbevist sig selv om, at deres arbejde havde udelukket muligheden for nye kriser. Ifølge den dominerende økonomiske videnskab har penge ikke reel betydning for økonomiens udvikling. Men det var netop hans opmærksomhed på pengeskabelse og gæld, der gjorde Keen i stand til at forudsige krisen. I bogen giver Keen også sine bud på, hvordan vi ville kunne undgå nye kriser blandt andet at sætte grænser for bankernes pengeskabelse.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/can-we-avoid-another-financial-crisis_steve-keen_paperback_9781509513734", //link 
        image: "https://imgcdn.saxo.com/_9781509513734/0x500", //link til billede
    },
         {
        name: 'The New Economics: A Manifesto', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 6, //kvaliteten, tal mellem 1-10
        price: 130.00, //Pris for at tilgå referencen
        date: '2021-10-15', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Steve Keen', //forfatter eller forfattere
        theme: ['Pengeteori', 'Pengeskabelse', 'Grøn omstilling', 'English'], // 'Økonomikritik' Hvis det bliver accepteret som emne
        description: 'I denne bog præsenterer Steve Keen sit bud på, hvordan en ny og mere realistisk økonomisk videnskab kunne se ud. Nutidens dominerende mainstream-økonomi antager at økonomien er et ligevægtigt, stabilt system og ignorerer betydningen af klasse, penge og energi. Dermed er den økonomiske videnskab også hæmsko for at forebygge nye økonomiske kriser og gennemføre den grønne omstilling. Keen forklarer hvordan økonomer i stedet kunne forstå økonomien som et dynamisk system med arbejdere, virksomheder og banker og som aldrig er i ligevægt. Han skitserer også hvordan sådanne systemdynamiske modeller kan bygges i hans software-pakke kaldet "Minsky".', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/the-new-economics_steve-keen_paperback_9781509545292", //link 
        image: "https://imgcdn.saxo.com/_9781509545292/0x500", //link til billede
    },
             {
        name: 'Super Imperialism. The Economic Strategy of American Empire', //navn
        type: 'Bog', //mediet, vælges imellem: 'Artikel', 'Bog', 'Film' og 'Podcast'
        rating: 6, //kvaliteten, tal mellem 1-10
        price: 130.00, //Pris for at tilgå referencen
        date: '2021-09-30', //tilblivesesdato for det man referer til, år-månded-dag
        authors: 'Michael Hudson', //forfatter eller forfattere
        theme: ['Pengepolitik', 'Økonomisk ulighed', 'Kapitalismekritik', 'Centralbanker', 'English'], // 'Økonomikritik' Hvis det bliver accepteret som emne
        description: 'Bogen er en omfattende analyse af USAs økonomiske og monetære strategi siden Første Verdenskrig med dollaren som verdens reservevaluta. Stik imod hvad de fleste af os nok forestiller sig muligt, har USA brugt sit budget- og betalingsbalanceunderskud som økonomiske våben og presset andre nationer til at finansiere de amerikanske udgifter til blandt andet dets enorme militær og krigene i Korea, Vietnam og opefter. Da Præsident Richard Nixon ophævede guldstandarden i 1971, blev det for alvor muligt at trykke penge og udstede statsobligationer, som kunne opkøbes af andre stater, der havde brug for at investere dollars tjent på de internationale markeder. Skal man tro Michael Hudson, bogens forfatter og professor i økonomi, er hans fremstilling så præcis, at den er blevet brugt i USAs statsapparat til at lære stabsfolk landets strategi.', //Beskrivelse af den specifikke Artikel, bog osv.
        link: "https://www.saxo.com/dk/super-imperialism-the-economic-strategy-of-american-empire-third-edition_michael-hudson_haeftet_9783981826081", //link 
        image: "https://imgcdn.saxo.com/_9783981826081/0x500", //link til billede
    },
];
