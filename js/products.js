/*
  PROIZVODI — ovdje se uređuju svi proizvodi.
  -------------------------------------------------------------
  Za svaki proizvod:
    id        – kratki jedinstveni naziv bez razmaka
    name      – naziv proizvoda
    sub       – kratki podnaslov (linija / kolekcija)
    desc      – opis
    features  – popis karakteristika (može biti prazan [])
    images    – putanje do slika, npr. ["img/pergole/bio-1.jpg", "img/pergole/bio-2.jpg"]
                (ako je prazno, prikazuje se zamjensko polje)
    options   – grupe opcija koje kupac bira; svaka grupa ima "label" i "values"

  NAPOMENA: Vrtni namještaj je preuzet iz kataloga 2026. Pergole s platnom nemaju još fotografiju.
*/
// Boje: uzorak (img) ili boja (color) koja se prikazuje uz opciju
const SWATCHES = {
  "Antracit": {"img": "img/boje/wpc-antracit.jpg"},
  "Ciglasta": {"img": "img/boje/wpc-ciglasta.jpg"},
  "Tikovina": {"img": "img/boje/wpc-tikovina.jpg"},
  "Wenge": {"img": "img/boje/wpc-wenge.jpg"},
  "Crna": {"img": "img/boje/wpc-crna.jpg"},
  "Bež platno": {"img": "img/boje/screen-bez.jpg"},
  "Antracit platno": {"img": "img/boje/screen-antracit.jpg"},
  "Zelena melange": {
    "img": "img/boje/pletivo-zelena-melange.jpg"
  },
  "Plava": {
    "img": "img/boje/pletivo-plava.jpg"
  },
  "Bež": {
    "img": "img/boje/pletivo-bez.jpg"
  },
  "Tamna tirkizna": {
    "img": "img/boje/pletivo-tamna-tirkizna.jpg"
  },
  "Siva": {
    "img": "img/boje/pletivo-siva.jpg"
  },
  "Terakota": {
    "img": "img/boje/pletivo-terakota.jpg"
  },
  "Grafit": {
    "img": "img/boje/pletivo-grafit.jpg"
  },
  "Antracit siva (RAL 7016)": {
    "color": "#3A3D42"
  },
  "Kesten smeđa (RAL 8015)": {
    "color": "#53322B"
  },
  "Glinasto smeđa (RAL 8003)": {
    "color": "#774D2D"
  },
  "Bež siva (RAL 7006)": {
    "color": "#746A5E"
  },
  "Svilenkasto siva (RAL 7044)": {
    "color": "#B6B4AA"
  },
  "Krem bijela (RAL 9001)": {
    "color": "#FAF5E6"
  },
  "Antracit (RAL 7016)": {
    "color": "#3A3D42"
  }
};

const GROUPS = {
  "vrtni-namjestaj": [
    ["nova", "Nova kolekcija"], ["garniture", "Garniture"], ["stolice", "Stolice"], ["fotelje", "Fotelje"],
    ["barske", "Barske stolice"], ["stolovi", "Stolovi"], ["lezaljke", "Ležaljke"], ["ljuljacke", "Ljuljačke"]
  ]
};

const PRODUCTS = {
  pergole: [
    {
      "id": "bioklimatska",
      "name": "Bioklimatska pergola",
      "sub": "Aluminij · zakretne lamele",
      "desc": "Aluminijska pergola s pomičnim krovom od lamela. Lamele se zakreću i reguliraju svjetlo, sjenu i protok zraka, a u zatvorenom položaju krov je vodonepropustan i štiti od kiše i snijega.",
      "features": [
        "Bez varova i kutova, otporno na sol, snijeg i hrđu",
        "Motorni pogon s daljinskim upravljanjem",
        "Vodonepropusno u zatvorenom položaju",
        "Integrirana odvodnja vode",
        "Izrada po mjeri"
      ],
      "images": [
        "img/pergole/bioklimatska-1.jpg",
        "img/pergole/bioklimatska-zip.jpg"
      ],
      "options": [
        {
          "label": "Dimenzija (Š × D)",
          "values": [
            "3 × 3 m",
            "3 × 4 m",
            "4 × 4 m",
            "4 × 6 m",
            "Po mjeri"
          ]
        },
        {
          "label": "Montaža",
          "values": [
            "Samostojeća",
            "Uz zid"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit (RAL 7016)",
            "Krem bijela (RAL 9001)",
            "Po RAL karti"
          ]
        },
        {
          "label": "Dodaci (može više)",
          "multi": true,
          "values": [
            "ZIP screen zastori",
            "Zastakljenje",
            "LED rasvjeta",
            "Dekorativni paneli",
            "WPC podna obloga",
            "Grijalice"
          ]
        }
      ]
    },
    {
      "id": "tenda",
      "name": "ZIP screen",
      "sub": "Aluminij · platno · zaštita od sunca, vjetra i pogleda",
      "desc": "Aluminijska pergola s platnom i okomitim ZIP screen zastorima. Štiti od sunca, UV zračenja, kiše i vjetra, a pogled prema van ostaje otvoren. Platno klizi u bočnim aluminijskim vodilicama, pa ostaje zategnuto i na vjetru.",
      "features": [
        "Bez varova i kutova, otporno na sol, snijeg i hrđu",
        "Do 90 % zaštite od topline i UV zračenja",
        "Stabilni zip mehanizam, otporan na vjetar",
        "Privatnost bez zatvaranja prostora",
        "Platno vatrootpornosti B1",
        "Tihi motorni pogon s daljinskim upravljanjem",
        "Integrirana odvodnja vode, izrada po mjeri"
      ],
      "images": [
        "img/pergole/zip-screen-3.jpg",
        "img/pergole/zip-screen-1.jpg",
        "img/pergole/bioklimatska-zip.jpg"
      ],
      "options": [
        {
          "label": "Dimenzija (Š × D)",
          "values": [
            "3 × 4 m",
            "4 × 5 m",
            "5 × 6 m",
            "Po mjeri"
          ]
        },
        {
          "label": "Montaža",
          "values": [
            "Samostojeća",
            "Uz zid"
          ]
        },
        {
          "label": "Boja platna",
          "values": [
            "Bež platno",
            "Antracit platno"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit (RAL 7016)",
            "Krem bijela (RAL 9001)",
            "Po RAL karti"
          ]
        },
        {
          "label": "Broj strana sa zastorima",
          "values": [
            "1",
            "2",
            "3",
            "4"
          ]
        },
        {
          "label": "Dodaci (može više)",
          "multi": true,
          "values": [
            "ZIP screen zastori",
            "Zastakljenje",
            "LED rasvjeta",
            "Dekorativni paneli",
            "WPC podna obloga",
            "Grijalice"
          ]
        }
      ]
    },
    {
      "id": "dekorativna",
      "name": "Pergola s dekorativnim obrubom",
      "sub": "Aluminij · lasersko rezani paneli",
      "desc": "Pergola s obrubom od lasersko rezanih aluminijskih panela koji daju upečatljiv izgled terasama, krovovima i ugostiteljskim objektima.",
      "features": [
        "Bez varova i kutova, otporno na sol, snijeg i hrđu",
        "Uzorak panela po izboru",
        "Boja konstrukcije i panela po RAL karti"
      ],
      "images": [
        "img/pergole/pergola-1.jpg"
      ],
      "options": [
        {
          "label": "Dimenzija (Š × D)",
          "values": [
            "4 × 4 m",
            "5 × 5 m",
            "6 × 6 m",
            "Po mjeri"
          ]
        },
        {
          "label": "Montaža",
          "values": [
            "Samostojeća",
            "Uz zid"
          ]
        },
        {
          "label": "Dodaci (može više)",
          "multi": true,
          "values": [
            "ZIP screen zastori",
            "Zastakljenje",
            "LED rasvjeta",
            "Dekorativni paneli",
            "WPC podna obloga",
            "Grijalice"
          ]
        }
      ]
    },
    {
      "id": "paneli",
      "name": "Dekorativni paneli i pregrade",
      "sub": "Aluminij · lasersko rezano",
      "desc": "Lasersko rezani paneli za pregrade terasa, ugostiteljskih objekata i vrtova. Postavljaju se samostojeće ili uz pergolu i daju privatnost bez gubitka svjetla.",
      "features": [
        "Bez varova i kutova, otporno na sol, snijeg i hrđu",
        "Samostojeći stupovi s pločom za pričvršćenje",
        "Boja po RAL karti"
      ],
      "images": [
        "img/pergole/panel-listovi.jpg",
        "img/pergole/panel-krugovi.jpg",
        "img/pergole/panel-kocke.jpg",
        "img/pergole/panel-sace.jpg",
        "img/pergole/panel-sace-2.jpg",
        "img/pergole/panel-kocke-2.jpg",
        "img/pergole/panel-detalj.jpg"
      ],
      "options": [
        {
          "label": "Uzorak",
          "values": [
            "Listovi",
            "Krugovi",
            "Kocke",
            "Saće",
            "Po želji"
          ]
        },
        {
          "label": "Boja",
          "values": [
            "Antracit",
            "Srebrna",
            "Pocinčano",
            "Po RAL karti"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–3 panela",
            "4–10 panela",
            "10+ panela"
          ]
        }
      ]
    },
    {
      "id": "wpc",
      "name": "WPC podna obloga",
      "sub": "Terase, okolica bazena, pergole",
      "desc": "Podna obloga od drvo-plastičnog kompozita s izgledom prirodnog drva. Ne truli, ne puca i ne krivi se, a ne treba je lakirati ni bojati. Sigurna je i kad je mokra, pa je idealna oko bazena.",
      "features": [
        "Otporna na kišu, sunce, snijeg i vlagu",
        "Protuklizna površina, sigurna i kad je mokra",
        "Skriveni sustav pričvršćivanja",
        "Podesivi nosači visine od 21 do 202 mm, nosivost do 1.000 kg",
        "Održavanje samo povremenim pranjem vodom",
        "Izrađena od recikliranih materijala"
      ],
      "images": [
        "img/pergole/wpc-bazen.jpg",
        "img/pergole/wpc-kuca.jpg",
        "img/pergole/wpc-crna.jpg",
        "img/pergole/wpc-zalazak.jpg",
        "img/pergole/wpc-more.jpg",
        "img/pergole/wpc-svijetla.jpg",
        "img/pergole/wpc-palme.jpg",
        "img/pergole/wpc-tamna.jpg",
        "img/pergole/wpc-list.jpg",
        "img/pergole/wpc-montaza.jpg"
      ],
      "options": [
        {
          "label": "Boja",
          "values": [
            "Tikovina",
            "Wenge",
            "Antracit",
            "Crna",
            "Ciglasta"
          ]
        },
        {
          "label": "Površina",
          "values": [
            "do 20 m²",
            "20–50 m²",
            "50–100 m²",
            "100+ m²"
          ]
        },
        {
          "label": "Primjena",
          "values": [
            "Terasa",
            "Okolica bazena",
            "Ispod pergole",
            "Balkon"
          ]
        }
      ]
    }
  ],

  "vrtni-namjestaj": [
    {
      "id": "nova-avena-modularna-garnitura",
      "group": "nova",
      "name": "Avena modularna garnitura",
      "sub": "Nova kolekcija 2026",
      "desc": "AVENA je uvodni model nove kolekcije i nosilac njenog dizajnerskog koncepta. Kao prva garnitura u katalogu, postavlja standard kolekcije kroz jasno definiran sustav, preciznu konstrukciju i profinjenu modularnost.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/nova-avena-modularna-garnitura-2.jpg",
        "img/namjestaj/nova-avena-modularna-garnitura-3.jpg",
        "img/namjestaj/nova-avena-modularna-garnitura-4.jpg",
        "img/namjestaj/nova-avena-modularna-garnitura-real-1.jpg",
        "img/namjestaj/nova-avena-modularna-garnitura-1.jpg",
        "img/namjestaj/nova-avena-modularna-garnitura-5.jpg",
        "img/namjestaj/nova-avena-modularna-garnitura-real-2.jpg",
        "img/namjestaj/nova-avena-modularna-garnitura-real-3.jpg",
        "img/namjestaj/nova-avena-modularna-garnitura-real-4.jpg"
      ],
      "options": [
        {
          "label": "Konfiguracija",
          "values": [
            "Prema tlocrtu prostora",
            "Po dogovoru"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "nova-lino-stol",
      "group": "nova",
      "name": "Lino stol",
      "sub": "Nova kolekcija 2026",
      "desc": "LINO je stol svedene, precizne forme, dizajniran kroz jasnoću linija i savršeno izbalansirane proporcije. Konstrukcija je izrađena od kutnog profila, koji osigurava stabilnost, trajnost i arhitektonsku čistoću.",
      "features": [],
      "images": [
        "img/namjestaj/nova-lino-stol-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "nova-nara-set",
      "group": "nova",
      "name": "Nara set",
      "sub": "Nova kolekcija 2026",
      "desc": "NARA je set koji čine fotelja i dvosjed, oblikovan kroz apsolutnu jasnoću forme i preciznost proporcija. Dizajn je sveden do suštine, bez suvišnih elemenata, čime je svaki detalj doveden do savršenstva.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/nova-nara-set-1.jpg",
        "img/namjestaj/nova-nara-set-2.jpg",
        "img/namjestaj/nova-nara-set-3.jpg",
        "img/namjestaj/nova-nara-set-4.jpg"
      ],
      "options": [
        {
          "label": "Konfiguracija",
          "values": [
            "Prema tlocrtu prostora",
            "Po dogovoru"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "nova-daya-lezaljka",
      "group": "nova",
      "name": "Daya ležaljka",
      "sub": "Nova kolekcija 2026",
      "desc": "DAYA je ležaljka svedene, čiste forme, osmišljena da traje. Njena konstrukcija izrađena je od kutnog profila, karakterističnog za novu kolekciju, koji osigurava visoku stabilnost, otpornost i dugoročnu pouzdanost u vanjskim uslovima.",
      "features": [],
      "images": [
        "img/namjestaj/nova-daya-lezaljka-1.jpg",
        "img/namjestaj/nova-daya-lezaljka-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "nova-nest-lounge-set",
      "group": "nova",
      "name": "Nest lounge set",
      "sub": "Nova kolekcija 2026",
      "desc": "NEST je lounge set sastavljen od fotelje i taburea, oblikovan kao pleteno gnijezdo koje pruža osjećaj zaklona, udobnosti i opuštanja. Njegova forma je meka i obavijajuća, osmišljena da prirodno prihvati tijelo i pozove na zadržavanje.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/nova-nest-lounge-set-1.jpg",
        "img/namjestaj/nova-nest-lounge-set-2.jpg",
        "img/namjestaj/nova-nest-lounge-set-real-1.jpg",
        "img/namjestaj/nova-nest-lounge-set-real-2.jpg",
        "img/namjestaj/nova-nest-lounge-set-real-3.jpg",
        "img/namjestaj/nova-nest-lounge-set-real-4.jpg",
        "img/namjestaj/nova-nest-lounge-set-real-5.jpg",
        "img/namjestaj/nova-nest-lounge-set-real-6.jpg"
      ],
      "options": [
        {
          "label": "Konfiguracija",
          "values": [
            "Prema tlocrtu prostora",
            "Po dogovoru"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "nova-laguna-stolica",
      "group": "nova",
      "name": "Laguna stolica",
      "sub": "Nova kolekcija 2026",
      "desc": "LAGUNA je suvremena outdoor stolica inspirirana klasičnom tapaciranom stolicom u stilu Luja XVI, reinterpretiranoj kroz lagani, otvoreni i suvremeni dizajnerski jezik. Njene proporcije, odnos sjedišta i naslona te naglašeni rukonasloni evociraju eleganciju klasičnog sjedenja, dok materijali i konstrukcija jasno pripadaju današnjem vremenu.",
      "features": [],
      "images": [
        "img/namjestaj/nova-laguna-stolica-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "nova-silva-stolica",
      "group": "nova",
      "name": "Silva stolica",
      "sub": "Nova kolekcija 2026",
      "desc": "SILVA je dizajnirana kao stolica u stolici - koncept koji spaja jasnoću klasične, gotovo školske forme sa udobnošću i zaštitnim osjećajem fotelje. Unutrašnja struktura zadržava precizne proporcije i disciplinu osnovne stolice, dok je obavijena vanjskim naslonom koji je obgrljuje i definira njen karakter.",
      "features": [],
      "images": [
        "img/namjestaj/nova-silva-stolica-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "nova-siena-stolica",
      "group": "nova",
      "name": "Siena stolica",
      "sub": "Nova kolekcija 2026",
      "desc": "Stolica SIENA donosi suvremenu interpretaciju klasične forme, obogaćenu novom, posebno razvijenom tehnikom pletenja koja joj daje prepoznatljiv karakter. Pletenje je gušće, precizno i taktilno naglašeno, stvarajući osjećaj čvrstoće i profinjenosti, ali i vizualne mekoće.",
      "features": [],
      "images": [
        "img/namjestaj/nova-siena-stolica-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "nova-atlas-stol",
      "group": "nova",
      "name": "Atlas stol",
      "sub": "Nova kolekcija 2026",
      "desc": "ATLAS je stol jasne, arhitektonske forme, zasnovan na konstrukciji od uglovičnog profila koja osigurava stabilnost, trajnost i vizualnu čistoću. Njegove proporcije su svedene i precizne, bez suvišnih detalja, čime forma dolazi u prvi plan.",
      "features": [],
      "images": [
        "img/namjestaj/nova-atlas-stol-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "nova-rosa-stolica",
      "group": "nova",
      "name": "Rosa stolica",
      "sub": "Nova kolekcija 2026",
      "desc": "ROSA je stolica čija forma polazi od izvornih, prepoznatljivih oblika klasičnih stolica, reinterpretiranih kroz suvremeni dizajnerski izraz nove kolekcije. Njene linije su mekane, čiste i uravnotežene, stvarajući osjećaj poznatosti uz jasno suvremen karakter.",
      "features": [],
      "images": [
        "img/namjestaj/nova-rosa-stolica-1.jpg",
        "img/namjestaj/nova-rosa-stolica-real-1.jpg",
        "img/namjestaj/nova-rosa-stolica-real-2.jpg",
        "img/namjestaj/nova-rosa-stolica-real-3.jpg",
        "img/namjestaj/nova-rosa-stolica-real-4.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "nova-kira-barska-stolica",
      "group": "nova",
      "name": "Kira barska stolica",
      "sub": "Nova kolekcija 2026",
      "desc": "KIRA je barska stolica svedene forme i jasnog, arhitektonskog izraza. Dizajnirana je kroz jednostavne linije i uravnotežene proporcije, bez suvišnih elemenata.",
      "features": [],
      "images": [
        "img/namjestaj/nova-kira-barska-stolica-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-enna",
      "group": "stolice",
      "name": "Enna",
      "sub": "Stolica",
      "desc": "Stolicu ENNA karakterizira profinjeno oblikovan naslon s ritmičnim pletenim uzorkom koji stvara vizualnu dubinu i osjećaj mekoće. Lagana aluminijska konstrukcija osigurava stabilnost i trajnost, dok tapacirano sjedište u neutralnom tonu doprinosi uravnoteženom i suvremenom izgledu.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-enna-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-thea",
      "group": "stolice",
      "name": "Thea",
      "sub": "Stolica",
      "desc": "Stolica THEA odlikuje se elegantno oblikovanim naslonom s vertikalno naglašenom tekstilnom strukturom koja daje osjećaj profinjenosti i udobnosti. Aluminijska konstrukcija tankih, blago profiliranih nogu stvara lagan i suvremen izgled, dok mekano sjedište s jastukom osigurava ugodno korištenje.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-thea-1.jpg",
        "img/namjestaj/stolice-thea-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-lea",
      "group": "stolice",
      "name": "Lea",
      "sub": "Stolica",
      "desc": "Stolica se ističe obavijajućim, kružno oblikovanim naslonom s ritmično strukturiranim tekstilnim uzorkom koji naglašava osjećaj udobnosti i vizualne mekoće. Kompaktna aluminijska konstrukcija daje stabilnost i jasnoću forme, dok jastuk sjedišta osigurava ugodno i uravnoteženo sjedenje.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-lea-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-eva",
      "group": "stolice",
      "name": "Eva",
      "sub": "Stolica",
      "desc": "Stolica EVA prepoznatljiva je po obavijajućem naslonu s dinamično oblikovanim, vertikalno strukturiranim tekstilnim uzorkom koji naglašava osjećaj mekoće i udobnosti. Aluminijski okvir definira čistu i stabilnu siluetu, dok sjedište s jastukom osigurava ugodno sjedenje.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-eva-1.jpg",
        "img/namjestaj/stolice-eva-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-lena",
      "group": "stolice",
      "name": "Lena",
      "sub": "Stolica",
      "desc": "Stolica LENA ističe se bogato pletenim naslonom izraženog volumena koji stvara snažan vizualni identitet i osjećaj udobnosti. Kombinacija precizno oblikovanog aluminijskog okvira i tekstilnog pletiva naglašava suvremen karakter dizajna, dok mekano sjedište osigurava ugodno i opušteno sjedenje.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-lena-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-ema",
      "group": "stolice",
      "name": "Ema",
      "sub": "Stolica",
      "desc": "Stolica EMA donosi suvremenu interpretaciju klasičnog pletenog dizajna, s izraženim vertikalnim ritmom naslona koji stvara osjećaj lakoće i dinamike. Čvrsta aluminijska konstrukcija daje stabilnu osnovu, dok mekano sjedište osigurava udobnost u svakodnevnoj upotrebi.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-ema-1.jpg",
        "img/namjestaj/stolice-ema-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-leo",
      "group": "stolice",
      "name": "Leo",
      "sub": "Stolica",
      "desc": "Stolica LEO odlikuje se izraženim, gusto pletenim naslonom koji stvara snažan osjećaj volumena i udobnosti. Precizno oblikovan aluminijski okvir daje stabilnost i jasno definiranu formu, dok mekano sjedište osigurava ugodno sjedenje.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-leo-1.jpg",
        "img/namjestaj/stolice-leo-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-donna",
      "group": "stolice",
      "name": "Donna",
      "sub": "Stolica",
      "desc": "Stolica DONNA definirana je profinjenom, zaobljenom siluetom i ritmično isprepletenim konopom koji naslonu daje lagan, ali izražajan karakter. Oblik naslona prirodno prati tijelo, stvarajući osjećaj otvorenosti i udobnosti, dok čista linija konstrukcije naglašava suvremeni dizajn.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-donna-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-una",
      "group": "stolice",
      "name": "Una",
      "sub": "Stolica",
      "desc": "Stolica UNA odlikuje se čistom, arhitektonskom formom i elegantno oblikovanim naslonom izrađenim od fino zategnutog konopa. Lagana, otvorena struktura stvara osjećaj prozračnosti, dok precizno oblikovane linije daju dizajnu suvremen i uravnotežen karakter.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-una-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-fana",
      "group": "stolice",
      "name": "Fana",
      "sub": "Stolica",
      "desc": "Stolica FANA ističe se elegantno zakrivljenim naslonom i rukonaslonima koji se prirodno nastavljaju u laganu, ali stabilnu konstrukciju. Naslon od vertikalno postavljenog konopa daje ritam i prozračnost dizajnu, dok jasno definirane linije stvaraju suvremen i profinjen izgled.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-fana-1.jpg",
        "img/namjestaj/stolice-fana-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-dea",
      "group": "stolice",
      "name": "Dea",
      "sub": "Stolica",
      "desc": "Stolica DEA odlikuje se čisto definiranim, zaobljenim oblikom koji nježno obavija sjedište i stvara osjećaj ugode. Fino vertikalno isprepleteni konop naglašava ritam i prozračnost naslona, dok minimalistička konstrukcija daje dizajnu suvremenu lakoću.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-dea-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-stella",
      "group": "stolice",
      "name": "Stella",
      "sub": "Stolica",
      "desc": "Stolica STELLA ističe se meko zaobljenim naslonom koji u jednom potezu obuhvaća sjedište i naglašava osjećaj intime. Precizno isprepleteni vertikalni konop daje dizajnu ritam i prozračnost, dok čista konstrukcija zadržava elegantnu, suvremenu liniju.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-stella-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-lugo",
      "group": "stolice",
      "name": "Lugo",
      "sub": "Stolica",
      "desc": "Stolica LUGO spaja jasnu, arhitektonsku konstrukciju s toplinom ručno pletenog konopa. Pravilan, gotovo kubičan oblik daje dizajnu stabilnost i snagu, dok gusto postavljeni konop omekšava formu i unosi taktilni karakter.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-lugo-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-forza",
      "group": "stolice",
      "name": "Forza",
      "sub": "Stolica",
      "desc": "Stolica FORZA odlikuje se dinamičnom, otvorenom siluetom u kojoj zaobljeni naslon i rukonasloni čine jedinstvenu, kontinuiranu liniju. Vertikalno postavljen konop naglašava lakoću i ritam forme, dok čvrsta konstrukcija daje dizajnu stabilnost i jasnoću.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-forza-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-tessa",
      "group": "stolice",
      "name": "Tessa",
      "sub": "Stolica",
      "desc": "Fotelja TESSA oblikovana je kroz jasno definiranu siluetu i precizno uravnotežene proporcije, gdje se konstrukcija i pletivo stapaju u jedinstvenu, smirenu formu. Naslon je ručno pleten u konop, s naglašenim vertikalnim ritmom koji zahtijeva visoku razinu zanatske preciznosti i ujednačenu napetost u svakom segmentu pletiva.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-tessa-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-alba",
      "group": "stolice",
      "name": "Alba",
      "sub": "Stolica",
      "desc": "Stolica ALBA oblikovana je kroz jednostavnu, jasno čitljivu siluetu koja naglašava ravnotežu proporcija i suzdržanu eleganciju. Bez rukonaslona i s otvorenom konstrukcijom, ALBA djeluje lagano i nenametljivo, prilagođavajući se različitim blagovaonskim i lounge ambijentima na otvorenom.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-alba-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-hals",
      "group": "stolice",
      "name": "Hals",
      "sub": "Stolica",
      "desc": "Stolica HALS odlikuje se meko zaobljenim naslonom i izraženom strukturom od PE rattana koja stvara bogatu teksturu i vizualnu dubinu. Precizno isprepleteni uzorak naglašava volumen sjedalice i daje dizajnu profinjen, ali nenametljiv karakter.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-hals-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-degas",
      "group": "stolice",
      "name": "Degas",
      "sub": "Stolica",
      "desc": "Stolica DEGAS odlikuje se profinjenim, gusto isprepletenim pletivom izrađenim od tankog PE rattana, koje zahtijeva visoku razinu izrade i pažnju u svakom detalju. Usitnjena struktura pletiva stvara bogatu teksturu i vizualnu dubinu, dok zaobljeni naslon i mekane linije oblikuju skladnu, elegantnu siluetu.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-degas-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-alice",
      "group": "stolice",
      "name": "Alice",
      "sub": "Stolica",
      "desc": "Stolica ALICE odlikuje se profinjenom siluetom i laganim, zaobljenim oblikom koji djeluje elegantno i nenametljivo. Naslon i bočne stranice izrađeni su od tankog PE rattana u gusto isprepletenom pletivu koje naglašava preciznost izrade i daje stolici vizualnu lakoću.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-alice-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-victoria",
      "group": "stolice",
      "name": "Victoria",
      "sub": "Stolica",
      "desc": "Stolica VICTORIA ističe se toplim, zaobljenim oblikom i profinjenim pletivom koje stvara osjećaj ugode i intimnosti. Gusto isprepleteni PE rattan oblikuje mekanu, organsku strukturu naslona, dok naglašeni rubovi i precizni detalji daju stolici izražen karakter.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-victoria-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-hope",
      "group": "stolice",
      "name": "Hope",
      "sub": "Stolica",
      "desc": "Stolica HOPE oblikovana je kroz laganu, profinjenu siluetu i precizno pleten PE rattan koji unosi osjećaj prozračnosti i suzdržane elegancije. Otvorena struktura pletenja daje vizualnu lakoću, dok stabilna konstrukcija i mekano sjedište osiguravaju udobnost i ravnotežu forme.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-hope-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolice-verona",
      "group": "stolice",
      "name": "Verona",
      "sub": "Stolica",
      "desc": "Stolica DEGAS odlikuje se profinjenim, gusto isprepletenim pletivom izrađenim od tankog PE rattana, koje zahtijeva visoku razinu izrade i pažnju u svakom detalju. Usitnjena struktura pletiva stvara bogatu teksturu i vizualnu dubinu, dok zaobljeni naslon i mekane linije oblikuju skladnu, elegantnu siluetu.",
      "features": [],
      "images": [
        "img/namjestaj/stolice-verona-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "barske-mia",
      "group": "barske",
      "name": "Mia",
      "sub": "Barska stolica",
      "desc": "Barska stolica MIA odlikuje se čistim, profinjenim linijama i uravnoteženim proporcijama koje naglašavaju njenu suvremenu eleganciju. Naslon i sjedište ručno su pleteni od visokokvalitetnog PE rattan pletiva, pažljivo oblikovanog kako bi zadržao vizualnu lakoću, a istovremeno osigurao trajnost i otpornost na vanjske uticaje.",
      "features": [],
      "images": [
        "img/namjestaj/barske-mia-1.jpg",
        "img/namjestaj/barske-mia-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "barske-una",
      "group": "barske",
      "name": "Una",
      "sub": "Barska stolica",
      "desc": "Barska stolica UNA ističe se laganom, arhitektonskom siluetom i jasno definiranim linijama. Otvoreni naslon i sjedište izvedeni su od precizno isprepletenog konopa koje stvara ritmičnu, prozračnu strukturu i naglašava vizualnu lakoću dizajna.",
      "features": [],
      "images": [
        "img/namjestaj/barske-una-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "barske-enna",
      "group": "barske",
      "name": "Enna",
      "sub": "Barska stolica",
      "desc": "Barska stolica ENNA odlikuje se izraženom udobnošću i profinjenim, suvremenim dizajnom. Karakterističan naslon oblikovan je od spužvastog pletiva koje stvara mekani, reljefni ritam i pruža izuzetnu potporu pri sjedenju.",
      "features": [],
      "images": [
        "img/namjestaj/barske-enna-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "barske-fana",
      "group": "barske",
      "name": "Fana",
      "sub": "Barska stolica",
      "desc": "Barska stolica FANA odlikuje se snažnim, suvremenim karakterom i jasno definiranom siluetom. Naslon izrađen od vertikalno vođenog pletiva stvara izražen ritam i grafičku strukturu, dajući modelu prepoznatljiv vizualni identitet.",
      "features": [],
      "images": [
        "img/namjestaj/barske-fana-1.jpg",
        "img/namjestaj/barske-fana-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "barske-tiara",
      "group": "barske",
      "name": "Tiara",
      "sub": "Barska stolica",
      "desc": "Barsku stolicu TIARA karakterizira zaobljena silueta i bogato, ručno pleteno PE rattan pletivo koje obuhvaća naslon i bočne strane, stvarajući osjećaj zaštite i udobnosti. Ritam pletiva i precizno izvedeni završeci naglašavaju zanatski pristup, dok istovremeno zadržavaju vizualnu lakoću i eleganciju forme.",
      "features": [],
      "images": [
        "img/namjestaj/barske-tiara-1.jpg",
        "img/namjestaj/barske-tiara-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "fotelje-eva",
      "group": "fotelje",
      "name": "Eva",
      "sub": "Fotelja",
      "desc": "Fotelja EVA oblikovana je kao izrazito udoban, suvremen lounge komad sa naglaskom na mekoću i obavijajući oblik. Naslon i bočne strane izvedeni su od spužvastog pletiva koje stvara nježan, ritmičan volumen i daje fotelji topao, taktilan karakter.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/fotelje-eva-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "fotelje-ema",
      "group": "fotelje",
      "name": "Ema",
      "sub": "Fotelja",
      "desc": "Fotelja EMA donosi suvremeni lounge izraz kroz mekano oblikovanu siluetu i izražen ritam spužvastog pletiva. Bočne strane i naslon karakterizira vertikalna struktura pletiva koja stvara grafički akcenat i daje modelu prepoznatljiv, dinamičan izgled, dok istovremeno zadržava osjećaj mekoće i udobnosti.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/fotelje-ema-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "fotelje-enna",
      "group": "fotelje",
      "name": "Enna",
      "sub": "Fotelja",
      "desc": "Fotelja ENNA oblikovana je kao suvremeni lounge komad koji spaja izraženu udobnost i profinjenu eleganciju. Karakterističan naslon od spužvastog pletiva stvara mekani, reljefni volumen koji pruža ugodnu potporu leđima i doprinosi prepoznatljivom identitetu modela.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/fotelje-enna-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "fotelje-fana",
      "group": "fotelje",
      "name": "Fana",
      "sub": "Fotelja",
      "desc": "Fotelja FANA donosi suvremeni lounge izraz kroz jasno definiranu siluetu i profinjenu obradu detalja. Naslon je ručno pleten u konop, postavljen u pravilnom, vertikalnom ritmu koji stvara grafičku strukturu i osjećaj vizualne lakoće.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/fotelje-fana-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "fotelje-una",
      "group": "fotelje",
      "name": "Una",
      "sub": "Fotelja",
      "desc": "Fotelja UNA ističe se uravnoteženom siluetom i pažljivo izvedenim detaljima koji naglašavaju vrijednost ručnog rada. Naslon i sjedište ručno su pleteni od konopa, s precizno kontrolisanim ritmom i ujednačenom napetošću pletiva, što svjedoči o visokom nivou zanatske obrade.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/fotelje-una-1.jpg",
        "img/namjestaj/fotelje-una-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "garniture-donna",
      "group": "garniture",
      "name": "Donna",
      "sub": "Garnitura",
      "desc": "DONNA predstavljaju savršen spoj modernog dizajna, udobnosti i funkcionalnosti. Elegantna silueta, lagana metalna konstrukcija i profinjeni konop u neutralnim tonovima čine ovu garnituru idealnim izborom za terase, vrtove, hotelske lounge prostore i suvremene eksterijere.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-donna-1.jpg",
        "img/namjestaj/garniture-donna-2.jpg",
        "img/namjestaj/garniture-donna-3.jpg"
      ],
      "options": [
        {
          "label": "Izvedba",
          "values": [
            "Dvosjed",
            "Fotelja",
            "Komplet (dvosjed + 2 fotelje)"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-alto",
      "group": "garniture",
      "name": "Alto",
      "sub": "Garnitura",
      "desc": "ALTO garnitura oblikovana je kroz čistu, smirenu formu u kojoj dizajn i ručna preciznost dolaze u prvi plan. Gusto i pažljivo izvedeno pletenje od PE rattana prati linije konstrukcije, stvarajući ritam i teksturu koji podsjećaju na mediteransku tradiciju boravka na otvorenom.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-alto-1.jpg"
      ],
      "options": [
        {
          "label": "Izvedba",
          "values": [
            "Dvosjed",
            "Fotelja",
            "Komplet (dvosjed + 2 fotelje)"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-salt-sand",
      "group": "garniture",
      "name": "Salt&Sand",
      "sub": "Garnitura",
      "desc": "SALT&SAND garnitura nosi lagan, prozračan karakter mediteranskog dizajna, gdje se čista forma susreće s vještinom preciznog pletenja. Ručno oblikovano PE rattan pletivo gradi ritam otvorene strukture, stvarajući osjećaj svjetlosti, mora i prirodne jednostavnosti.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-salt-sand-1.jpg"
      ],
      "options": [
        {
          "label": "Izvedba",
          "values": [
            "Dvosjed",
            "Fotelja",
            "Komplet (dvosjed + 2 fotelje)"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-ando",
      "group": "garniture",
      "name": "Ando",
      "sub": "Garnitura",
      "desc": "ANDO garnitura definirana je jasnom geometrijskom formom i snažnim, arhitektonskim izrazom. Trakasto pletivo od umjetnih vlakana postavljeno u pravilnom ritmu naglašava strukturu i daje dizajnu dubinu, stvarajući uravnotežen odnos između punog i praznog prostora.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-ando-1.jpg",
        "img/namjestaj/garniture-ando-2.jpg",
        "img/namjestaj/garniture-ando-3.jpg"
      ],
      "options": [
        {
          "label": "Izvedba",
          "values": [
            "Dvosjed",
            "Fotelja",
            "Komplet (dvosjed + 2 fotelje)"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-thea",
      "group": "garniture",
      "name": "Thea",
      "sub": "Garnitura",
      "desc": "THEA garnitura izražava suvremeni dizajn kroz strogu geometriju i ritmičku strukturu površine. Karakteristično spužvasto pletivo formira naglašene vertikalne segmente koji obliku daju volumen, dubinu i snažan vizualni identitet.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-thea-1.jpg",
        "img/namjestaj/garniture-thea-2.jpg"
      ],
      "options": [
        {
          "label": "Izvedba",
          "values": [
            "Dvosjed",
            "Fotelja",
            "Komplet (dvosjed + 2 fotelje)"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-thea-grand",
      "group": "garniture",
      "name": "Thea Grand",
      "sub": "Garnitura",
      "desc": "Thea Grand garnitura zadržava prepoznatljivu geometrijsku formu i karakteristično spužvasto pletivo, ali uvodi izraženiji osjećaj udobnosti kroz izuzetno debelu i voluminoznu spužvu za sjedenje. Masivno sjedište postaje centralni element dizajna, naglašavajući stabilnost, dubinu i osjećaj potpune potpore.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-thea-grand-1.jpg"
      ],
      "options": [
        {
          "label": "Izvedba",
          "values": [
            "Dvosjed",
            "Fotelja",
            "Komplet (dvosjed + 2 fotelje)"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-eva-grand",
      "group": "garniture",
      "name": "Eva Grand",
      "sub": "Garnitura",
      "desc": "Eva Grand garnitura prepoznatljiva je po bogatoj teksturi spužvastog pletiva koje u pravilnom, valovitom ritmu obavija konstrukciju i daje izražen volumen cijeloj formi. Pletivo postaje dominantan vizualni element, stvarajući osjećaj mekoće, dubine i taktilnosti.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-eva-grand-1.jpg"
      ],
      "options": [
        {
          "label": "Izvedba",
          "values": [
            "Dvosjed",
            "Fotelja",
            "Komplet (dvosjed + 2 fotelje)"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-donna-modularna-garnitura",
      "group": "garniture",
      "name": "Donna modularna garnitura",
      "sub": "Garnitura",
      "desc": "Donna modularna garnitura oblikovana je kroz meku, uravnoteženu formu i izraženu teksturu konop pletiva koje prati linije konstrukcije i daje toplinu cjelokupnom dizajnu. Precizno pleteni bočni i zadnji elementi stvaraju osjećaj lakoće, dok istovremeno definišu jasnu i prepoznatljivu siluetu.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-donna-modularna-garnitura-amb-1.jpg",
        "img/namjestaj/garniture-donna-modularna-garnitura-1.jpg",
        "img/namjestaj/garniture-donna-modularna-garnitura-2.jpg"
      ],
      "options": [
        {
          "label": "Konfiguracija",
          "values": [
            "Prema tlocrtu prostora",
            "Po dogovoru"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-eva-kutna-garnitura",
      "group": "garniture",
      "name": "Eva kutna garnitura",
      "sub": "Garnitura",
      "desc": "Kutna garnitura Eva osmišljena je kao snažna, prostorno definirana kompozicija koja prirodno oblikuje zonu sjedenja. Kontinuirana kutna forma stvara osjećaj povezanosti i intime, dok spužvasto pletivo u ritmičnom, valovitom uzorku naglašava volumen i mekoću cijele strukture.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-eva-kutna-garnitura-1.jpg",
        "img/namjestaj/garniture-eva-kutna-garnitura-2.jpg",
        "img/namjestaj/garniture-eva-kutna-garnitura-amb-1.jpg",
        "img/namjestaj/garniture-eva-kutna-garnitura-amb-2.jpg",
        "img/namjestaj/garniture-eva-kutna-garnitura-amb-3.jpg"
      ],
      "options": [
        {
          "label": "Konfiguracija",
          "values": [
            "Prema tlocrtu prostora",
            "Po dogovoru"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-thea-modularna-garnitura",
      "group": "garniture",
      "name": "Thea modularna garnitura",
      "sub": "Garnitura",
      "desc": "Modularna garnitura Thea oblikovana je kroz jasnu geometriju i snažan, prepoznatljiv ritam spužvastog pletiva koje definira bočne i zadnje površine. Pletivo stvara izražen volumen i grafičku strukturu, dajući garnituri skulpturalan i suvremen karakter.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-thea-modularna-garnitura-1.jpg",
        "img/namjestaj/garniture-thea-modularna-garnitura-2.jpg",
        "img/namjestaj/garniture-thea-modularna-garnitura-3.jpg"
      ],
      "options": [
        {
          "label": "Konfiguracija",
          "values": [
            "Prema tlocrtu prostora",
            "Po dogovoru"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "garniture-donna-grand",
      "group": "garniture",
      "name": "Donna Grand",
      "sub": "Garnitura",
      "desc": "DONNA GRAND je sofisticirana modularna garnitura dizajnirana za maksimalnu udobnost i potpunu fleksibilnost. Odlikuju je debele, bogato tapacirane sjedalice i nasloni koji pružaju izuzetnu ergonomiju i osjećaj luksuza, dok pleteni nasloni unose toplinu, teksturu i prepoznatljiv dizajnerski karakter.",
      "features": [
        "Jastuci od memorijske pjene"
      ],
      "images": [
        "img/namjestaj/garniture-donna-grand-2.jpg",
        "img/namjestaj/garniture-donna-grand-1.jpg"
      ],
      "options": [
        {
          "label": "Konfiguracija",
          "values": [
            "Prema tlocrtu prostora",
            "Po dogovoru"
          ]
        },
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    },
    {
      "id": "stolovi-torino",
      "group": "stolovi",
      "name": "Torino",
      "sub": "Stol",
      "desc": "Torino stol ističe se suvremenim dizajnom i karakterističnim postoljem s koso postavljenim aluminijskim nogama koje se šire prema tlu, stvarajući stabilnu i dinamičnu siluetu. Centralni nosač diskretno povezuje konstrukciju, dok kompakt ploča naglašava čiste linije i minimalistički karakter stola.",
      "features": [
        "Visina: 75 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-torino-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-roma",
      "group": "stolovi",
      "name": "Roma",
      "sub": "Stol",
      "desc": "Roma stol odlikuje se snažnim, arhitektonskim postoljem s masivnijim aluminijskim nogama koje su blago zakošene i povezane centralnim elementom, stvarajući stabilnu i uravnoteženu formu. Kompakt ploča čistih linija naglašava suvremeni karakter stola, čineći Romu idealnim izborom za moderne interijere i terase.",
      "features": [
        "Visina: 75 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-roma-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-vigo",
      "group": "stolovi",
      "name": "Vigo",
      "sub": "Stol",
      "desc": "Vigo stol karakterizira čista, uravnotežena silueta s centralnim aluminijskim stupom i diskretnim križnim postoljem koje osigurava stabilnost bez narušavanja vizualne lakoće. Jednostavna forma i kompakt ploča naglašavaju minimalistički dizajn, čineći Vigo idealnim izborom za suvremene ugostiteljske prostore, terase i interijere.",
      "features": [
        "Visina: 75 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-vigo-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-palma",
      "group": "stolovi",
      "name": "Palma",
      "sub": "Stol",
      "desc": "Palma stol odlikuje se elegantnom, uravnoteženom formom s okruglom pločom i centralnim aluminijskim stupom koji se pri dnu razgranava u stabilno, četverokrako postolje. Čiste linije i simetrična konstrukcija stvaraju lagan, ali čvrst vizualni dojam, čineći Palmu idealnim izborom za moderne terase i ugostiteljske prostore.",
      "features": [
        "Visina: 75 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-palma-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-capri",
      "group": "stolovi",
      "name": "Capri",
      "sub": "Stol",
      "desc": "Capri stol odlikuje se jednostavnom, funkcionalnom formom s pravokutnom pločom i centralnim aluminijskim stupom koji se oslanja na stabilno križno postolje. Čiste linije i uravnoteženi proporcije naglašavaju suvremeni, nenametljiv dizajn, čineći Capri pouzdanim izborom za moderne terase i ugostiteljske prostore.",
      "features": [
        "Visina: 75 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-capri-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-bastia",
      "group": "stolovi",
      "name": "Bastia",
      "sub": "Stol",
      "desc": "BASTIA se odlikuje izrazito čistom, linearno definiranom formom s centralnim stupom i ravnom, pravokutnom bazom od čelika koja osigurava visoku stabilnost i vizualnu čvrstoću. Minimalistička konstrukcija naglašava suvremeni, arhitektonski karakter stola, dok kompakt ploča upotpunjuje elegantan i profesionalan izgled, idealan za ugostiteljske i moderne interijere.",
      "features": [
        "Visina: 75 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-bastia-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-omnia",
      "group": "stolovi",
      "name": "Omnia",
      "sub": "Stol",
      "desc": "Stol se ističe robusnom i izuzetno izdržljivom konstrukcijom koja omogućuje izradu u vrlo velikim dimenzijama. Zahvaljujući snažnom okviru, u konstrukciju se montiraju manji segmenti kompakt ploče, koji zajedno čine stabilnu i vizualno skladnu cjelinu.",
      "features": [
        "Visina: 75 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-omnia-1.jpg",
        "img/namjestaj/stolovi-omnia-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-lora",
      "group": "stolovi",
      "name": "Lora",
      "sub": "Stol",
      "desc": "Lora stol predstavlja dizajn doveden do savršenstva kroz jednostavnu, čistu formu i precizno oblikovane detalje. Uravnotežene proporcije i profinjena konstrukcija stvaraju nenametljiv, ali izrazito sofisticiran vizualni dojam.",
      "features": [
        "Visina: 75 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-lora-1.jpg",
        "img/namjestaj/stolovi-lora-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-bastia-barski-stol",
      "group": "stolovi",
      "name": "Bastia barski stol",
      "sub": "Stol",
      "desc": "Barski stol Bastia odlikuje se elegantnom, minimalističkom siluetom s centralnim čeličnim stupom i stabilnom kvadratnom bazom. Pročišćena forma i čiste linije naglašavaju suvremeni, profesionalni karakter stola, čineći Bastiu idealnim izborom za moderne barove, terase i ugostiteljske prostore.",
      "features": [
        "Visina: 110 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-bastia-barski-stol-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-nice-barski-stol",
      "group": "stolovi",
      "name": "Nice barski stol",
      "sub": "Stol",
      "desc": "Barski stol Nice karakterizira profinjena, lagana konstrukcija s aluminijskim postoljem i skladno oblikovanim nogama koje su povezane diskretnim osloncem. Čiste linije i elegantni detalji daju stolu suvremen, nenametljiv izgled, čineći Nice idealnim izborom za moderne barove, terase i ugostiteljske prostore.",
      "features": [
        "Visina: 110 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-nice-barski-stol-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-eagle-barski-stol",
      "group": "stolovi",
      "name": "Eagle barski stol",
      "sub": "Stol",
      "desc": "EAGLE se ističe laganom, ali stabilnom konstrukcijom s tankim, elegantno oblikovanim nogama povezanim donjim okvirom koji dodatno naglašava čvrstoću i ravnotežu. Pročišćena silueta i skladni proporcijski odnosi daju stolu suvremen i nenametljiv karakter, idealan za moderne terase i ugostiteljske prostore.",
      "features": [
        "Visina: 110 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-eagle-barski-stol-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "stolovi-orris-lounge-stolic",
      "group": "stolovi",
      "name": "Orris lounge stolić",
      "sub": "Stol",
      "desc": "Orris lounge stolić odlikuje se niskom, izduženom siluetom i elegantno zakošenim nogama koje mu daju suvremen i opušten karakter. Čista forma i uravnoteženi proporcije naglašavaju minimalistički dizajn, čineći Orris idealnim dodatkom lounge zonama, terasama i modernim interijerima.",
      "features": [
        "Visina: 40 cm"
      ],
      "images": [
        "img/namjestaj/stolovi-orris-lounge-stolic-1.jpg",
        "img/namjestaj/stolovi-orris-lounge-stolic-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "lezaljke-shine",
      "group": "lezaljke",
      "name": "Shine",
      "sub": "Ležaljka",
      "desc": "Ležaljka s laganom aluminijskom konstrukcijom i pletivom, osmišljena za dugotrajnu upotrebu u vanjskim i ugostiteljskim prostorima, uz podesivi naslon za dodatnu udobnost.",
      "features": [],
      "images": [
        "img/namjestaj/lezaljke-shine-1.jpg",
        "img/namjestaj/lezaljke-shine-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "lezaljke-glamour",
      "group": "lezaljke",
      "name": "Glamour",
      "sub": "Ležaljka",
      "desc": "Ležaljka s naglašenim volumenom i pletivom, osmišljena za udobno opuštanje u vanjskim i ugostiteljskim prostorima, uz stabilnu konstrukciju i podesivi naslon.",
      "features": [],
      "images": [
        "img/namjestaj/lezaljke-glamour-1.jpg",
        "img/namjestaj/lezaljke-glamour-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "lezaljke-first",
      "group": "lezaljke",
      "name": "First",
      "sub": "Ležaljka",
      "desc": "Ležaljka jednostavne forme i lagane konstrukcije, osmišljena za vanjske i ugostiteljske prostore, s pletivom i podesivim naslonom za dodatnu udobnost.",
      "features": [],
      "images": [
        "img/namjestaj/lezaljke-first-1.jpg",
        "img/namjestaj/lezaljke-first-2.jpg",
        "img/namjestaj/lezaljke-first-3.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "lezaljke-summer",
      "group": "lezaljke",
      "name": "Summer",
      "sub": "Ležaljka",
      "desc": "Ležaljka s aluminijskim postoljem i prozračnim pletivom, namijenjena svakodnevnoj upotrebi u vanjskim i ugostiteljskim prostorima. Podesivi naslon omogućuje prilagodbu položaja, dok stabilna konstrukcija osigurava dugotrajnu svakodnevnu upotrebu.",
      "features": [],
      "images": [
        "img/namjestaj/lezaljke-summer-1.jpg",
        "img/namjestaj/lezaljke-summer-2.jpg",
        "img/namjestaj/lezaljke-summer-3.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "lezaljke-donna-dvostruka-lezaljka",
      "group": "lezaljke",
      "name": "Donna dvostruka ležaljka",
      "sub": "Ležaljka",
      "desc": "Dvostruka ležaljka s aluminijskim postoljem i pletivom, dizajnirana za opuštanje u vanjskim i ugostiteljskim prostorima. Duboko sjedište i stabilna konstrukcija omogućujeju visok nivo udobnosti i dugotrajnu profesionalnu upotrebu.",
      "features": [],
      "images": [
        "img/namjestaj/lezaljke-donna-dvostruka-lezaljka-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "lezaljke-coral",
      "group": "lezaljke",
      "name": "Coral",
      "sub": "Ležaljka",
      "desc": "Ležaljka s aluminijskim postoljem i prozračnom površinom od tekstilena, dizajnirana za vanjske i ugostiteljske prostore. Jednostavna forma i podesivi naslon osiguravaju funkcionalnost i udobnost u svakodnevnoj profesionalnoj upotrebi.",
      "features": [],
      "images": [
        "img/namjestaj/lezaljke-coral-1.jpg",
        "img/namjestaj/lezaljke-coral-2.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        },
        {
          "label": "Količina",
          "values": [
            "1–4 kom",
            "5–20 kom",
            "20+ kom (ugostiteljstvo)"
          ]
        }
      ]
    },
    {
      "id": "ljuljacke-eva-viseca-ljuljacka",
      "group": "ljuljacke",
      "name": "Eva viseća ljuljačka",
      "sub": "Ljuljačka",
      "desc": "Ljuljačka dizajnirana za vanjske i ugostiteljske prostore, s naglaskom na udobnost, stabilnu konstrukciju i kvalitetne materijale otporne na vanjske uvjete. Pažljivo oblikovana forma i detalji omogućujeju opušteno sjedenje i dugotrajnu svakodnevnu upotrebu.",
      "features": [],
      "images": [
        "img/namjestaj/ljuljacke-eva-viseca-ljuljacka-1.jpg"
      ],
      "options": [
        {
          "label": "Boja konstrukcije",
          "values": [
            "Antracit siva (RAL 7016)",
            "Kesten smeđa (RAL 8015)",
            "Glinasto smeđa (RAL 8003)",
            "Bež siva (RAL 7006)",
            "Svilenkasto siva (RAL 7044)",
            "Krem bijela (RAL 9001)"
          ]
        },
        {
          "label": "Boja pletiva",
          "values": [
            "Zelena melange",
            "Plava",
            "Bež",
            "Tamna tirkizna",
            "Siva",
            "Terakota",
            "Grafit"
          ]
        }
      ]
    }
  ],

  bazeni: [
    {
      id: "modularni-bazen",
      name: "Modularni bazen",
      sub: "Novo u ponudi · AM-MOĆIĆ bazeni",
      desc: "Najmoderniji modularni bazen, dostupan svima. Postavlja se nadzemno bez kopanja, poluukopano ili ukopano, na dvorište, terasu, krov ili u unutarnji prostor. Uz bazen dolazi kompletna strojarnica. Oblik se može prilagoditi, a bazen se može izvesti i kao grijani.",
      features: [
        "Kompletna strojarnica dolazi uz bazen",
        "Nadzemna, poluukopana ili ukopana ugradnja",
        "Moguća prilagodba oblika",
        "Mogućnost grijanog bazena",
        "Za dvorište, terasu, krov ili unutarnji prostor",
        "Isporuka za 7–15 dana"
      ],
      images: ["img/bazeni/bazen-vizual-2.jpg", "img/bazeni/bazen-vizual-1.jpg", "img/bazeni/bazen-unutarnji.jpg", "img/bazeni/bazen-1.jpg", "img/bazeni/bazen-2.jpg", "img/bazeni/bazen-3.jpg", "img/bazeni/bazen-4.jpg", "img/bazeni/bazen-5.jpg", "img/bazeni/bazen-6.jpg", "img/bazeni/bazen-7.jpg", "img/bazeni/bazen-8.jpg", "img/bazeni/bazen-9.jpg", "img/bazeni/bazen-10.jpg", "img/bazeni/bazen-11.jpg"],
      options: [
        // TODO: uskladiti dimenzije s katalogom proizvođača (raspon 2 × 2 m – 6 × 2,5 m)
        { label: "Dimenzija", values: ["2 × 2 m", "3 × 2 m", "4 × 2 m", "4 × 2,5 m", "5 × 2,5 m", "6 × 2,5 m", "7 × 3 m", "Prilagođeni oblik"] },
        { label: "Ugradnja", values: ["Nadzemno (bez kopanja)", "Poluukopano", "Ukopano"] },
        { label: "Grijanje", values: ["Bez grijanja", "Grijani bazen"] },
        { label: "Mjesto postavljanja", values: ["Dvorište", "Terasa", "Krov", "Unutarnji prostor"] }
      ]
    }
  ],

  pjeskarenje: [
    {
      "id": "fasade",
      "name": "Pjeskarenje kamenih fasada i zidova",
      "sub": "Kuće, vile, hoteli, zgrade",
      "desc": "Uklanjamo naslage prljavštine, čađe, stare boje, mahovine i lišajeva s kamenih fasada i zidova. Kamen se vraća u prvobitni izgled, a struktura mu ostaje netaknuta.",
      "features": [
        "Niski tlak i fini abraziv, prilagođeni vrsti kamena",
        "Mokri postupak bez prašine za naseljena područja",
        "Probna površina prije početka radova"
      ],
      "images": [
        "img/pjeskarenje/postupak.jpg",
        "img/pjeskarenje/poslije.jpg"
      ],
      "options": [
        {
          "label": "Vrsta kamena",
          "values": [
            "Vapnenac / istarski kamen",
            "Mramor",
            "Granit",
            "Pješčenjak",
            "Ne znam"
          ]
        },
        {
          "label": "Površina",
          "values": [
            "do 20 m²",
            "20–100 m²",
            "100–500 m²",
            "500+ m²"
          ]
        },
        {
          "label": "Postupak",
          "values": [
            "Suho pjeskarenje",
            "Mokro (bez prašine)",
            "Prema procjeni"
          ]
        },
        {
          "label": "Dodatno (može više)",
          "multi": true,
          "values": [
            "Impregnacija nakon čišćenja",
            "Popravak fuga",
            "Uklanjanje grafita"
          ]
        }
      ]
    },
    {
      "id": "oplocenja",
      "name": "Kamene terase, stepenice i opločenja",
      "sub": "Ploče, staze, okućnice, okolica bazena",
      "desc": "Čišćenje i obnova kamenih ploča, stepenica, staza i obloga oko bazena. Uklanjamo mrlje, alge i tamne naslage, a površina postaje svijetla i ujednačena.",
      "features": [
        "Uklanjanje algi, mahovine i mrlja",
        "Obnova potamnjelog i istrošenog kamena",
        "Mogućnost impregnacije protiv vlage i mrlja"
      ],
      "images": [
        "img/pjeskarenje/postupak.jpg",
        "img/pjeskarenje/poslije.jpg"
      ],
      "options": [
        {
          "label": "Vrsta kamena",
          "values": [
            "Vapnenac / istarski kamen",
            "Mramor",
            "Granit",
            "Pješčenjak",
            "Ne znam"
          ]
        },
        {
          "label": "Površina",
          "values": [
            "do 20 m²",
            "20–100 m²",
            "100–500 m²",
            "500+ m²"
          ]
        },
        {
          "label": "Dodatno (može više)",
          "multi": true,
          "values": [
            "Impregnacija nakon čišćenja",
            "Popravak fuga",
            "Uklanjanje grafita"
          ]
        }
      ]
    },
    {
      "id": "elementi",
      "name": "Kameni elementi i spomenici",
      "sub": "Klupčice, ograde, stupovi, skulpture",
      "desc": "Pažljivo čišćenje manjih i osjetljivih kamenih elemenata: prozorskih klupčica, ograda, stupova, fontana i spomenika. Za mekši kamen biramo najblaži postupak.",
      "features": [
        "Najblaži postupak za osjetljiv i povijesni kamen",
        "Zaštita okolnih površina tijekom rada"
      ],
      "images": [
        "img/pjeskarenje/postupak.jpg",
        "img/pjeskarenje/poslije.jpg"
      ],
      "options": [
        {
          "label": "Vrsta kamena",
          "values": [
            "Vapnenac / istarski kamen",
            "Mramor",
            "Granit",
            "Pješčenjak",
            "Ne znam"
          ]
        },
        {
          "label": "Opseg",
          "values": [
            "Pojedinačni element",
            "Više elemenata",
            "Po dogovoru"
          ]
        },
        {
          "label": "Dodatno (može više)",
          "multi": true,
          "values": [
            "Impregnacija nakon čišćenja",
            "Popravak fuga",
            "Uklanjanje grafita"
          ]
        }
      ]
    }
  ]
};
