export interface Benefit {
  title: string;
  description?: string;
}

export interface Contraindication {
  title: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Procedure {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: Benefit[];
  contraindications: Contraindication[];
  duration: string;
  results: string;
  faqs: FAQ[];
  packages: {
    name: string;
    price: string;
    description: string;
    sessions: number;
  }[];
  comparison?: {
    title: string;
    competitors: {
      name: string;
      features: {
        title: string;
        value: string;
      }[];
    }[];
  };
}

export const procedures: Procedure[] = [
  {
    id: 'kosmetika',
    name: 'KOSMETIKA',
    shortDescription: 'Kompletní péče o pleť a specializované kosmetické procedury',
    fullDescription: 'Nabízíme komplexní kosmetické služby včetně základního ošetření pleti, mikrojehlování, dermapenu a laminace řas a obočí. Naše procedury jsou navrženy tak, aby poskytly vaší pleti maximální péči, hydrataci a omlazení. Používáme pouze prémiové produkty a nejmodernější technologie pro dosažení viditelných a dlouhotrvajících výsledků.',
    image: '/images/service-hair.jpg',
    benefits: [
      { title: 'Individuální přístup', description: 'Každé ošetření je přizpůsobeno vašemu typu pleti a specifickým potřebám' },
      { title: 'Prémiové produkty', description: 'Používáme pouze kvalitní kosmetické přípravky s prokázanými účinky' },
      { title: 'Pokročilé technologie', description: 'Využíváme nejmodernější metody jako mikrojehlování a dermapen' },
      { title: 'Viditelné výsledky', description: 'Efekt našich procedur je viditelný již po prvním ošetření' },
      { title: 'Komplexní péče', description: 'Zaměřujeme se na všechny aspekty krásy - od pleti až po řasy a obočí' }
    ],
    contraindications: [
      { title: 'Akutní kožní onemocnění', description: 'Akné, ekzémy nebo jiné aktivní záněty v místě aplikace' },
      { title: 'Těhotenství', description: 'Některé procedury nejsou vhodné pro těhotné ženy' },
      { title: 'Onkologická onemocnění', description: 'Před ošetřením je nutná konzultace s lékařem' },
      { title: 'Diabetes', description: 'U některých procedur je potřeba zvláštní opatrnost' },
      { title: 'Užívání některých léků', description: 'Například isotretinoin (Accutane) nebo antikoagulancia' }
    ],
    duration: 'Dle typu procedury od 30 minut do 90 minut',
    results: 'Výsledky jsou viditelné ihned po procedurách jako je laminace řas a obočí, u jiných procedur (mikrojehlování, kosmetické ošetření) se projeví během několika dnů až týdnů.',
    faqs: [
      {
        question: 'Jak často bych měl/a absolvovat kosmetické ošetření?',
        answer: 'Doporučujeme základní kosmetické ošetření každých 4-6 týdnů. Frekvence může být vyšší u problematické pleti nebo nižší u bezproblémové pleti. Přesný plán vám doporučíme při první návštěvě.'
      },
      {
        question: 'Je mikrojehlování bolestivé?',
        answer: 'Před procedurou aplikujeme znecitlivující krém, který minimalizuje nepříjemné pocity. Většina klientů popisuje mikrojehlování jako mírně nepříjemný pocit, nikoliv jako bolest.'
      },
      {
        question: 'Jak dlouho vydrží efekt laminace řas a obočí?',
        answer: 'Efekt laminace řas a obočí vydrží přibližně 4-6 týdnů v závislosti na individuálním růstovém cyklu a péči.'
      },
      {
        question: 'Jak se mám připravit na kosmetické ošetření?',
        answer: 'Na kosmetické ošetření přicházejte s odlíčenou pletí. Vyhněte se opalování a aplikaci samoopalovacích přípravků 24 hodin před ošetřením. Také informujte kosmetičku o všech produktech, které na pleť používáte, a o případných zdravotních problémech.'
      }
    ],
    packages: [
      {
        name: 'Základní ošetření pro suchou pleť (45 minut)',
        price: '1 150 Kč',
        description: 'Kompletní kosmetické ošetření zahrnující čištění pleti, tonizaci, exfoliaci, relaxaci a vyživení. Speciálně navrženo pro suchou pleť.',
        sessions: 1
      },
      {
        name: 'Ošetření s collagenem nebo pro rozšířené póry (50 minut)',
        price: '1 350 Kč',
        description: 'Specializované ošetření s aplikací kolagenu nebo zaměřené na redukci rozšířených pórů. Zahrnuje všechny kroky klasického ošetření.',
        sessions: 1
      },
      {
        name: 'Ošetření problematické pleti (60 minut)',
        price: '1 490 Kč',
        description: 'Komplexní péče pro problematickou pleť s akcentem na čištění a zklidnění pleti. Ideální pro klienty s akné nebo záněty.',
        sessions: 1
      },
      {
        name: 'Luxusní ošetření (75 minut)',
        price: '1 700 Kč',
        description: 'Prémiové kosmetické ošetření s prodlouženou dobou relaxace a extra vyživením pleti. Nejvyšší stupeň pečující kosmetiky.',
        sessions: 1
      },
      {
        name: 'Mikrojehlování',
        price: '1 800 Kč',
        description: 'Pokročilé ošetření pomocí mikrojehlicování. Efektivně řeší pigmentové skvrny, jizvy po akné a stimuluje produkci kolagenu.',
        sessions: 1
      },
      {
        name: 'Dermapen obličej',
        price: '800 Kč',
        description: 'Aplikace dermapenu na obličej v kombinaci s kosmetickým ošetřením. Stimuluje regeneraci a omlazení pleti.',
        sessions: 1
      },
      {
        name: 'Dermapen krk',
        price: '500 Kč',
        description: 'Cílené ošetření krku pomocí dermapenu v kombinaci s kosmetickým ošetřením. Zpevňuje a omladuje pokožku krku.',
        sessions: 1
      },
      {
        name: 'Dermapen dekolt',
        price: '750 Kč',
        description: 'Ošetření dekoltu dermapenem v kombinaci s kosmetickým ošetřením. Zlepšuje texturu a vzhled pokožky v oblasti dekoltu.',
        sessions: 1
      },
      {
        name: 'Laminace řas',
        price: '1 000 Kč',
        description: 'Moderní technika natáčení a fixace řas do požadovaného tvaru. Vytváří efekt delších a hustších řas na 4-6 týdnů.',
        sessions: 1
      },
      {
        name: 'Laminace obočí',
        price: '600 Kč',
        description: 'Úprava a styling obočí s dlouhodobou fixací chloupků. Vytváří plnější a upraveného vzhled obočí.',
        sessions: 1
      },
      {
        name: 'Laminace řas + obočí',
        price: '1 000 Kč',
        description: 'Kombinované ošetření řas a obočí v jednom sezení. Úspora času a peněz oproti samostatným procedurám.',
        sessions: 1
      },
      {
        name: 'Kosmetické ošetření pro muže (60 minut)',
        price: '1 250 Kč',
        description: 'Speciálně navržené kosmetické ošetření pro mužskou pleť s přizpůsobenými produkty a technikami.',
        sessions: 1
      },
      {
        name: 'Dermapen rty',
        price: '700 Kč',
        description: 'Hydratace a omlazení rtů pomocí dermapenu. Zlepšuje texturu a plnost rtů.',
        sessions: 1
      },
      {
        name: 'Mikrojehlování bez kosmetického ošetření',
        price: '1 500 Kč',
        description: 'Samostatné mikrojehlování bez dodatečného kosmetického ošetření pro klienty, kteří preferují pouze tuto techniku.',
        sessions: 1
      }
    ]
  },
  {
    id: 'budovani-svalu',
    name: 'BUDOVÁNÍ SVALŮ',
    shortDescription: 'Revoluční technologie pro stimulaci svalů a tvarování těla',
    fullDescription: 'Revoluční technologie kombinující dvě energie pro stimulaci svalů, odbourávání tuků a budování svalové hmoty. Nahrazuje až 5 hodin posilovny (30 000 stahů svalů za 30 minut). Pomáhá regeneraci svalů při velké zátěži. Procedura je neinvazivní, bezbolestná a s okamžitě viditelnými výsledky.',
    image: '/images/service-hifu.jpg',
    benefits: [
      { title: 'Náhrada posilovny', description: '30 minut našeho ošetření nahradí až 5 hodin intenzivního tréninku' },
      { title: 'Odbourávání tuku', description: 'Současné spalování tukových buněk a budování svalové hmoty' },
      { title: 'Rychlé výsledky', description: 'Viditelné zlepšení již po prvním ošetření' },
      { title: 'Cílené zaměření', description: 'Možnost zaměřit se na konkrétní problémové partie' },
      { title: 'Regenerace svalů', description: 'Ideální pro aktivní sportovce nebo po náročném tréninku' }
    ],
    contraindications: [
      { title: 'Těhotenství a kojení' },
      { title: 'Kardiostimulátor nebo jiné elektronické implantáty' },
      { title: 'Onkologická onemocnění' },
      { title: 'Epilepsie' },
      { title: 'Kožní onemocnění v místě aplikace' },
      { title: 'Závažná srdeční onemocnění' }
    ],
    duration: '30 minut odpočinku odpovídá přibližně 5,5 hodinám intenzivního tréninku s maximální zátěží',
    results: 'První výsledky jsou viditelné již po prvním ošetření. Pro optimální efekt doporučujeme sérii 6-10 ošetření s frekvencí 2x týdně.',
    faqs: [
      {
        question: 'Jak procedura probíhá?',
        answer: 'Procedura probíhá vleže na lehátku. Na problémovou partii jsou umístěny speciální aplikátory, které vyvolávají intenzivní svalové kontrakce. Během 30 minut dojde až k 30 000 svalovým kontrakcím, což odpovídá několika hodinám intenzivního tréninku.'
      },
      {
        question: 'Je procedura bolestivá?',
        answer: 'Procedura není bolestivá. Klienti popisují pocit intenzivního cvičení nebo vibrace, ale ne bolest. Intenzitu lze regulovat podle individuální tolerance.'
      },
      {
        question: 'Pro koho je procedura vhodná?',
        answer: 'Procedura je vhodná pro ženy i muže, kteří chtějí zpevnit postavu, zlepšit svalový tonus nebo redukovat tuk. Je ideální pro ty, kteří nemají čas na pravidelné cvičení, nebo jako doplněk ke cvičení pro rychlejší výsledky.'
      },
      {
        question: 'Jak často je potřeba proceduru opakovat?',
        answer: 'Pro optimální výsledky doporučujeme absolvovat 2 ošetření týdně po dobu 3-5 týdnů. Následně je vhodné pokračovat udržovacími ošetřeními jednou za 2-4 týdny.'
      }
    ],
    packages: [
      {
        name: 'Budování svalů 1 partie (30 minut)',
        price: '900 Kč',
        description: 'Základní ošetření jedné tělesné partie. Ideální pro začátečníky nebo cílené posilování konkrétní oblasti.',
        sessions: 1
      },
      {
        name: 'Budování svalů 2 partie (45 minut)',
        price: '1 300 Kč',
        description: 'Kombinace dvou partií (břicho + zadek, nohy + zadek, břicho + paže). Komplexnější trénink pro lepší výsledky.',
        sessions: 1
      },
      {
        name: 'Budování svalů 3 partie (60 minut)',
        price: '2 100 Kč',
        description: 'Extrémní výsledky díky zatížení více svalových skupin naráz. Pro maximální efekt a rychlé výsledky.',
        sessions: 1
      }
    ]
  },
  {
    id: 'hifu',
    name: 'HIFU FACELIFT',
    shortDescription: 'Neinvazivní lifting a zpevnění pokožky pomocí fokusovaného ultrazvuku',
    fullDescription: 'HIFU (High-Intensity Focused Ultrasound) je neinvazivní facelift obličeje pomocí vysoce fokusovaného ultrazvuku. Vypíná a zvedá obličej, redukuje tuk a stimuluje tvorbu kolagenu. Jde o bezbolestnou proceduru s dlouhodobými výsledky, která je alternativou chirurgického liftingu.',
    image: '/images/service-hifu.jpg',
    benefits: [
      { title: 'Neinvazivní lifting', description: 'Bezbolestná alternativa k chirurgickému faceliftu' },
      { title: 'Stimulace kolagenu', description: 'Přirozená obnova kolagenu pro dlouhodobý efekt' },
      { title: 'Bez rekonvalescence', description: 'Okamžitý návrat k běžným aktivitám po proceduře' },
      { title: 'Cílené zaměření', description: 'Možnost ošetření specifických problémových partií' },
      { title: 'Dlouhodobé výsledky', description: 'Efekt vydrží až 2 roky při správné péči' }
    ],
    contraindications: [
      { title: 'Těhotenství a kojení' },
      { title: 'Kožní onemocnění v místě aplikace' },
      { title: 'Onkologická onemocnění' },
      { title: 'Kovové implantáty v obličeji' },
      { title: 'Otevřené rány nebo infekce' }
    ],
    duration: 'Dle rozsahu ošetření od 30 do 90 minut',
    results: 'První výsledky jsou viditelné ihned po ošetření, plný efekt se rozvíjí postupně během 2-3 měsíců. Výsledky mohou přetrvávat 1-2 roky.',
    faqs: [
      {
        question: 'Je HIFU facelift bolestivý?',
        answer: 'HIFU facelift je většinou vnímán jako mírně nepříjemný, nikoliv bolestivý. Někteří klienti mohou pociťovat teplo nebo mírné brnění během procedury. Intenzitu lze přizpůsobit podle individuální tolerance.'
      },
      {
        question: 'Jak dlouho trvá rekonvalescence po HIFU?',
        answer: 'Po HIFU faceliftu není nutná žádná doba rekonvalescence. Můžete se ihned vrátit ke svým běžným aktivitám. Některé klienti mohou pociťovat mírné zarudnutí nebo otok, který obvykle odezní během několika hodin.'
      },
      {
        question: 'Kolik ošetření je potřeba pro optimální výsledky?',
        answer: 'Pro většinu klientů stačí jedno ošetření HIFU faceliftem. V závislosti na stavu pokožky a požadovaných výsledcích může být doporučeno opakování procedury po 6-12 měsících pro udržení efektu.'
      },
      {
        question: 'Pro koho je HIFU facelift vhodný?',
        answer: 'HIFU facelift je vhodný pro ženy i muže, kteří pozorují známky stárnutí pleti, jako je ochablost, vrásky nebo ztráta kontur. Je ideální pro ty, kteří hledají neinvazivní alternativu chirurgického liftingu.'
      }
    ],
    packages: [
      {
        name: 'HIFU facelift celý obličej (60 minut)',
        price: '5 500 Kč',
        description: 'Kompletní ošetření celého obličeje pro komplexní omlazení a vypnutí pleti.',
        sessions: 1
      },
      {
        name: 'HIFU facelift celý obličej + krk (90 minut)',
        price: '6 500 Kč',
        description: 'Nejkomplexnější ošetření zahrnující obličej i krk pro maximální anti-aging efekt.',
        sessions: 1
      },
      {
        name: 'HIFU facelift spodní část obličeje (45 minut)',
        price: '3 900 Kč',
        description: 'Cílené ošetření spodní části obličeje, ideální pro řešení povolené kůže v oblasti brady a krku.',
        sessions: 1
      },
      {
        name: 'HIFU facelift oční okolí (30 minut)',
        price: '2 900 Kč',
        description: 'Jemné ošetření očního okolí pro redukci vrásek a zpevnění víček.',
        sessions: 1
      },
      {
        name: 'HIFU facelift horní část obličeje (45 minut)',
        price: '4 500 Kč',
        description: 'Zaměření na čelo, oči a horní část tváří pro zvednutí obočí a vyhlazeni vrásek.',
        sessions: 1
      },
      {
        name: 'HIFU facelift krk (30 minut)',
        price: '2 000 Kč',
        description: 'Samostatné ošetření krku pro zpevnění a vytvarování kontur.',
        sessions: 1
      }
    ]
  },
  {
    id: 'endosphere',
    name: 'ENDOS-ROLLER',
    shortDescription: 'Pokročilá technologie kompresní mikrovibrace pro redukci celulitidy',
    fullDescription: 'Pokročilá technologie kompresní mikrovibrace pomáhající v redukci celulitidy a podporující lymfatický systém. Zlepšuje krevní oběh a formuje postavu. Endos-roller je neinvazivní metoda, která kombinuje tlakovou masáž s mikrovibrací pro účinné tvarování těla a redukci celulitidy.',
    image: '/images/service-endosphere.jpg',
    benefits: [
      { title: 'Redukce celulitidy', description: 'Efektivní boj proti pomerančové kůži' },
      { title: 'Zpevnění pokožky', description: 'Viditelné zpevnění a vyhlazení pokožky' },
      { title: 'Lymfatická drenáž', description: 'Podpora lymfatického systému a odvod toxinů' },
      { title: 'Zlepšení krevního oběhu', description: 'Lepší prokrvení tkání a okysličení buněk' },
      { title: 'Tvarování postavy', description: 'Celkové formování problémových partií' }
    ],
    contraindications: [
      { title: 'Těhotenství a kojení' },
      { title: 'Onkologická onemocnění' },
      { title: 'Akutní zánětlivá onemocnění' },
      { title: 'Křečové žíly a trombóza' },
      { title: 'Kožní onemocnění v místě aplikace' }
    ],
    duration: 'Dle ošetřované partie od 30 do 75 minut',
    results: 'První výsledky jsou viditelné již po prvním ošetření. Pro optimální výsledky je doporučeno absolvovat sérii 8-10 ošetření s frekvencí 1-2x týdně.',
    faqs: [
      {
        question: 'Jak endos-roller funguje?',
        answer: 'Endos-roller využívá speciální válečky s mikroválečky, které vytvářejí kompresní mikrovibrační efekt. Tyto vibrace stimulují tkáně, podporují lymfatický systém a zlepšují krevní oběh. Výsledkem je redukce celulitidy, zpevnění pokožky a tvarování postavy.'
      },
      {
        question: 'Je procedura bolestivá?',
        answer: 'Procedura není bolestivá. Většina klientů ji popisuje jako příjemnou masáž s pocitem uvolnění. Intenzitu lze přizpůsobit podle individuální tolerance a potřeb klienta.'
      },
      {
        question: 'Jak často je potřeba proceduru opakovat?',
        answer: 'Pro optimální výsledky doporučujeme absolvovat 8-10 ošetření s frekvencí 1-2x týdně. Následně je vhodné pokračovat udržovacími ošetřeními jednou za 3-4 týdny.'
      },
      {
        question: 'Pro koho je procedura vhodná?',
        answer: 'Procedura je vhodná pro ženy i muže, kteří chtějí redukovat celulitidu, zpevnit pokožku nebo tvarovat postavu. Je ideální pro ty, kteří mají problémy s otoky, zadržováním vody nebo špatným krevním oběhem.'
      }
    ],
    packages: [
      {
        name: 'Endos-roller 1 partie (30 minut)',
        price: '850 Kč',
        description: 'Základní ošetření jedné problematické partie těla.',
        sessions: 1
      },
      {
        name: 'Endos-roller 2 partie (45 minut)',
        price: '1 050 Kč',
        description: 'Ošetření dvou partií pro komplexnější péči o tělo.',
        sessions: 1
      },
      {
        name: 'Endos-roller 3 partie (60 minut)',
        price: '1 050 Kč',
        description: 'Tři partie v jednom sezení pro rozsáhlejší ošetření.',
        sessions: 1
      },
      {
        name: 'Endos-roller 4 partie (75 minut)',
        price: '1 050 Kč',
        description: 'Nejrozsáhlejší časové ošetření čtyř partií těla.',
        sessions: 1
      },
      {
        name: 'Endos-roller - celý zadek a nohy',
        price: '1 500 Kč',
        description: 'Specializované ošetření spodní části těla, ideální pro boj s celulitidou.',
        sessions: 1
      },
      {
        name: 'Endos-roller - celé tělo',
        price: '1 900 Kč',
        description: 'Kompletní ošetření celého těla pro maximální efekt.',
        sessions: 1
      },
      {
        name: 'Endos-roller - paže',
        price: '600 Kč',
        description: 'Cílené ošetření paží pro zpevnění a redukci celulitidy.',
        sessions: 1
      }
    ]
  },
  {
    id: 'kavitace',
    name: 'KAVITACE',
    shortDescription: 'Bezbolestné ošetření ultrazukem rozbíjející tukové buňky',
    fullDescription: 'Bezbolestné ošetření pomocí ultrazvuku rozbíjející tukové buňky. Tuk se přirozeně odvádí lymfatickým systémem z těla. Výsledkem je zpevnění a zeštíhlení problematických partií. Kavitace je ideální metoda pro lokální hubnutí a tvarování postavy bez nutnosti chirurgického zákroku.',
    image: '/images/service-endosphere.jpg',
    benefits: [
      { title: 'Bezbolestná liposukce', description: 'Neinvazivní alternativa chirurgické liposukce' },
      { title: 'Cílená redukce tuku', description: 'Možnost zaměřit se na konkrétní problémové partie' },
      { title: 'Žádná rekonvalescence', description: 'Okamžitý návrat k běžným aktivitám po proceduře' },
      { title: 'Zpevnění pokožky', description: 'Kromě redukce tuku dochází i ke zpevnění pokožky' },
      { title: 'Dlouhodobé výsledky', description: 'Při správném životním stylu jsou výsledky trvalé' }
    ],
    contraindications: [
      { title: 'Těhotenství a kojení' },
      { title: 'Onkologická onemocnění' },
      { title: 'Kardiostimulátor nebo jiné elektronické implantáty' },
      { title: 'Akutní zánětlivá onemocnění' },
      { title: 'Kožní onemocnění v místě aplikace' }
    ],
    duration: 'Dle ošetřované partie od 30 do 75 minut',
    results: 'První výsledky jsou viditelné již po prvním ošetření. Pro optimální výsledky je doporučeno absolvovat sérii 6-10 ošetření s frekvencí 1x týdně.',
    faqs: [
      {
        question: 'Jak kavitace funguje?',
        answer: 'Kavitace využívá nízkofrekvenční ultrazvukové vlny, které rozbíjejí membrány tukových buněk. Uvolněný tuk je poté přirozeně odveden z těla pomocí lymfatického systému a metabolických procesů. Tímto způsobem dochází k trvalému odstranění tukových buněk z ošetřované oblasti.'
      },
      {
        question: 'Je kavitace bolestivá?',
        answer: 'Kavitace je bezbolestná procedura. Klienti obvykle pociťují pouze mírné teplo a jemné brnění v ošetřované oblasti. Někdy mohou být slyšet vysokofrekvenční zvuky, které jsou způsobeny ultrazvukovými vlnami.'
      },
      {
        question: 'Jak rychle budou vidět výsledky?',
        answer: 'První výsledky jsou viditelné již po prvním ošetření, kdy může dojít ke zmenšení obvodu o 1-3 cm. Plný efekt se rozvíjí postupně během 1-2 týdnů po ošetření, kdy tělo odbourává uvolněný tuk.'
      },
      {
        question: 'Co se doporučuje po kavitaci?',
        answer: 'Po kavitaci doporučujeme zvýšit příjem tekutin (minimálně 2-3 litry denně), dodržovat lehkou stravu bohatou na bílkoviny a vlákninu, omezit příjem jednoduchých cukrů a tuků, a ideálně zařadit lehkou fyzickou aktivitu pro podporu lymfatického systému.'
      }
    ],
    packages: [
      {
        name: 'Kavitace 1 partie (30 minut)',
        price: '900 Kč',
        description: 'Základní ultrazvuková kavitace jedné partie těla.',
        sessions: 1
      },
      {
        name: 'Kavitace 2 partie (45 minut)',
        price: '1 100 Kč',
        description: 'Ošetření dvou partií pro lepší výsledky hubnutí.',
        sessions: 1
      },
      {
        name: 'Kavitace 3 partie (60 minut)',
        price: '1 100 Kč',
        description: 'Rozsáhlejší ošetření tří partií těla.',
        sessions: 1
      },
      {
        name: 'Kavitace 4 partie (75 minut)',
        price: '1 100 Kč',
        description: 'Nejdelší sezení kavitace pro maximální efekt.',
        sessions: 1
      },
      {
        name: 'Kavitace - celé tělo',
        price: '1 700 Kč',
        description: 'Kompletní kavitace celého těla pro celkové formování postavy.',
        sessions: 1
      }
    ]
  },
  {
    id: 'ostatni-sluzby',
    name: 'OSTATNÍ SLUŽBY',
    shortDescription: 'Speciální balíčky procedur pro komplexní péči za výhodné ceny',
    fullDescription: 'Nabízíme speciální kombinované balíčky našich procedur za výhodné ceny. Tyto balíčky jsou navrženy tak, aby poskytly komplexní péči o vaše tělo a maximalizovaly výsledky jednotlivých procedur. Vyberte si balíček, který nejlépe odpovídá vašim potřebám a cílům.',
    image: '/images/service-hifu.jpg',
    benefits: [
      { title: 'Finanční úspora', description: 'Výhodnější cena oproti jednotlivým procedurám' },
      { title: 'Kombinovaný efekt', description: 'Synergický účinek různých procedur pro lepší výsledky' },
      { title: 'Komplexní přístup', description: 'Řešení více problémů najednou' },
      { title: 'Časová efektivita', description: 'Možnost absolvovat více procedur během jedné návštěvy' },
      { title: 'Individuální přístup', description: 'Balíčky lze přizpůsobit vašim konkrétním potřebám' }
    ],
    contraindications: [
      { title: 'Těhotenství a kojení' },
      { title: 'Onkologická onemocnění' },
      { title: 'Závažná srdeční onemocnění' },
      { title: 'Akutní zánětlivá onemocnění' },
      { title: 'Specifické kontraindikace jednotlivých procedur' }
    ],
    duration: 'Závisí na konkrétním balíčku a kombinaci procedur',
    results: 'Výsledky jsou viditelné již po první návštěvě a zlepšují se s každým dalším ošetřením. Pro maximální efekt doporučujeme dokončit celou sérii procedur dle doporučení terapeuta.',
    faqs: [
      {
        question: 'Jak fungují speciální balíčky?',
        answer: 'Speciální balíčky kombinují různé procedury, které se vzájemně doplňují a zesilují svůj účinek. Například kombinace kavitace a endos-rolleru poskytuje jak redukci tuku, tak zpevnění pokožky, což vede k lepším výsledkům než každá procedura samostatně.'
      },
      {
        question: 'Mohu balíček sdílet s jinou osobou?',
        answer: 'Balíčky jsou personalizované a nelze je sdílet mezi více osobami. Každý balíček je navržen jako série procedur pro jednoho klienta, aby bylo dosaženo optimálních výsledků.'
      },
      {
        question: 'Jak dlouho jsou balíčky platné?',
        answer: 'Balíčky mají standardní platnost 6 měsíců od zakoupení. Pro dosažení nejlepších výsledků však doporučujeme absolvovat procedury v pravidelných intervalech dle doporučení terapeuta, obvykle během 2-3 měsíců.'
      },
      {
        question: 'Mohu si vytvořit vlastní balíček?',
        answer: 'Ano, nabízíme možnost vytvoření individuálního balíčku na míru podle vašich konkrétních potřeb a cílů. Kontaktujte nás pro konzultaci a návrh personalizovaného balíčku.'
      }
    ],
    packages: [
      {
        name: 'Balíček: 3x procedura endos 2 partie + 1x HIFU budování svalů zdarma',
        price: '4 500 Kč',
        description: 'Výhodný balíček kombinující endos-roller s HIFU technologií pro komplexní péči o tělo.',
        sessions: 4
      },
      {
        name: 'Balíček 2',
        price: '2 700 Kč',
        description: 'Speciální balíček služeb s výhodnou cenou.',
        sessions: 1
      },
      {
        name: 'Balíček 3',
        price: '7 200 Kč',
        description: 'Prémiový balíček služeb pro náročné klienty.',
        sessions: 1
      }
    ]
  }
];
