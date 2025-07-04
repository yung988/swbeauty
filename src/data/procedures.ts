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
    id: 'hifu',
    name: 'Hifu – Budování svalů',
    shortDescription: 'Neinvazivní lifting a zpevnění pokožky pomocí fokusovaného ultrazvuku',
    fullDescription: 'HIFU (High-Intensity Focused Ultrasound) je pokročilá technologie pro neinvazivní lifting a zpevnění pokožky. Kombinuje dvě energie pro stimulaci, odbourávání tuků a budování svalů, nahrazuje posilovnu a to až 5h (30 000 stahů svalů za 30min). Procedura využívá fokusované ultrazvukové vlny, které pronikají hluboko do tkání a stimulují tvorbu kolagenu. Výsledkem je přirozený lifting obličeje, krku nebo dekoltu bez nutnosti chirurgického zákroku.',
    image: '/images/service-hifu.jpg',
    benefits: [
      { title: 'Nárůst svalové hmoty' },
      { title: 'Spalování tuků' },
      { title: 'Změny viditelné už po 1 proceduře' },
      { title: 'Vhodné pro aktivní sportovce' },
      { title: 'Vhodné pro ženy po porodu, kterým se objevila diastáza' },
      { title: 'Aktivace svalů bez nutnosti fitness centra' },
      { title: 'Zpevnění těla' },
      { title: 'Prokrvení' },
      { title: 'Zrychlení metabolismu' },
      { title: 'Regenerace svalů při těžkých zátěžích' }
    ],
    contraindications: [
      { title: 'Infekce' },
      { title: 'Rakovina' },
      { title: 'Záněty' },
      { title: 'Onemocnění krve' },
      { title: 'Léky na ředění krve' },
      { title: 'Těhotenství, kojení' },
      { title: 'U problémů se srdcem - poradit se s vaším lékařem' }
    ],
    duration: '30 minut odpočinku odpovídá přibližně 5,5 hodinám intenzivního tréninku s maximální zátěží',
    results: 'První výsledky se objevují již po několika dnech a během dalších cyklů se efekt postupně zlepšuje, přičemž plné výsledky jsou patrné přibližně do jednoho měsíce. Pro dosažení maximálního efektu doporučujeme obvykle 6-10 návštěv. Optimální počet návštěv vám navrhne náš tým odborníků na základě konzultace a vašich konkrétních cílů a potřeb.',
    faqs: [
      {
        question: 'Jak probíhá procedura?',
        answer: 'HIFU je jednoduchá a komfortní, nevyžaduje žádnou zvláštní přípravu. Při procesu budete pohodlně ležet, zatímco na aktivní oblast budou přiloženy aplikátory, které po dobu 30 minut vyvolávají svalové kontrakce. Tyto intenzivní kontrakce jsou doprovázeny pocitem zahřívání, které zasahuje jak podkožní, tak viscerální tukovou vrstvu.'
      },
      {
        question: 'Pro koho je procedura vhodná?',
        answer: 'HIFU je vhodný pro ženy i muže. U žen pomáhá s redukcí váhy a snižováním celulitidy, zatímco sportovcům nabízí možnost zlepšení výkonnosti a svalové definice. Je ideální i pro všechny, kteří chtějí rychleji dosáhnout lepšího vzhledu postavy, včetně maminek po porodu, které usilují o zpevnění střední části těla nebo řešení diastázy.'
      },
      {
        question: 'Kdy uvidíte výsledky?',
        answer: 'Pro dosažení optimálních výsledků je doporučeno 6-10 procedur, každá po 30 minutách. Výsledky jsou individuální a záleží na stavu a kondici těla, takže je nejlepší domluvit se na počtu procedur při konzultaci se specialistou v salonu.'
      },
      {
        question: 'Co se děje s odstraněným tukem?',
        answer: 'Po proceduře jsou tukové buňky, které byly rozloženy, přirozeně vyloučeny tělem prostřednictvím metabolických procesů.'
      },
      {
        question: 'Doporučení po proceduře',
        answer: 'Po proceduře se můžete ihned vrátit ke svým běžným aktivitám. Pro dosažení co nejlepších výsledků doporučujeme dodržovat zdravou stravu, udržovat správnou hydrataci a celkově zdravý životní styl.'
      }
    ],
    packages: [
      {
        name: '1 partie',
        price: '990 Kč',
        description: 'Jedna partie dle výběru (břicho, stehna, hýždě, nohy, paže)',
        sessions: 1
      },
      {
        name: '2 partie',
        price: '1300 Kč',
        description: 'Dvě partie dle výběru (břicho + hýždě, nohy + hýždě, paže + břicho)',
        sessions: 1
      },
      {
        name: 'Kombo 5 ošetření',
        price: '4700 Kč',
        description: '5 ošetření se slevou 5%',
        sessions: 5
      },
      {
        name: 'Kombo 10 ošetření',
        price: '8900 Kč',
        description: '10 ošetření se slevou 10%',
        sessions: 10
      }
    ],
    comparison: {
      title: 'Srovnání EMSculpt a revoluční novinky HIFU',
      competitors: [
        {
          name: 'Workout',
          features: [
            { title: 'Technologie', value: 'Elektromagnetická stimulace svalů' },
            { title: 'Intenzita', value: 'Střední (omezená kontrola)' },
            { title: 'Výsledky', value: 'Zlepšení svalového tónu, s méně efektivní redukcí tuků' },
            { title: 'Délka procesu', value: '30 minut' },
            { title: 'Počet při procesu', value: 'Nižší aktivní cvičení, ale bez bolesti' }
          ]
        },
        {
          name: 'EMSculpt',
          features: [
            { title: 'Technologie', value: 'Elektromagnetická stimulace svalů' },
            { title: 'Intenzita', value: 'Vyšší (omezená kontrola)' },
            { title: 'Výsledky', value: 'Zlepšení svalového tónu, s méně efektivní redukcí tuků' },
            { title: 'Délka procesu', value: '30 minut' },
            { title: 'Počet při procesu', value: 'Nižší aktivní cvičení, ale bez bolesti' }
          ]
        },
        {
          name: 'HIFU+EMSW',
          features: [
            { title: 'Technologie', value: 'Vysoce intenzivní elektromagnetická pulzní s ultrazvukem' },
            { title: 'Intenzita', value: 'Vyšší intenzita, lepší zaměření na cílové tkáně' },
            { title: 'Výsledky', value: 'Výraznější redukce tuků a kvalitní svalové zpevnění' },
            { title: 'Délka procesu', value: '30 minut' },
            { title: 'Počet při procesu', value: 'Intenzivnější pocit, který více působí na hloubkové svaly' }
          ]
        }
      ]
    }
  },
  {
    id: 'endosphere',
    name: 'Endosphere',
    shortDescription: 'Revoluční neinvazivní terapie pro tvarování těla a redukci celulitidy',
    fullDescription: 'Endosphere je inovativní neinvazivní terapie, která využívá kompresní mikrovibrační technologii pro efektivní tvarování těla, redukci celulitidy a zpevnění pokožky. Tato procedura stimuluje lymfatický systém, zlepšuje krevní oběh a podporuje přirozené detoxikační procesy těla. Výsledkem je viditelnější kontura těla, hladší pokožka a celkové zpevnění problémových partií.',
    image: '/images/service-endosphere.jpg',
    benefits: [
      { title: 'Redukce celulitidy' },
      { title: 'Zpevnění pokožky' },
      { title: 'Tvarování postavy' },
      { title: 'Zlepšení lymfatického systému' },
      { title: 'Detoxikace organismu' },
      { title: 'Zlepšení krevního oběhu' },
      { title: 'Redukce otoků' },
      { title: 'Zmírnění bolesti svalů' },
      { title: 'Podpora metabolismu' }
    ],
    contraindications: [
      { title: 'Těhotenství' },
      { title: 'Akutní zánětlivá onemocnění' },
      { title: 'Onkologická onemocnění' },
      { title: 'Kardiostimulátor' },
      { title: 'Trombóza' },
      { title: 'Kožní onemocnění v místě aplikace' }
    ],
    duration: 'Ošetření trvá 45-90 minut v závislosti na ošetřované oblasti',
    results: 'Výsledky jsou viditelné již po prvním ošetření, ale pro optimální a dlouhodobé výsledky je doporučeno absolvovat sérii 6-10 ošetření. Přesný počet ošetření závisí na individuálních potřebách a cílech klienta.',
    faqs: [
      {
        question: 'Jak probíhá ošetření Endosphere?',
        answer: 'Ošetření začíná konzultací, během které určíme vaše cíle a problémové partie. Poté terapeut aplikuje speciální válečky s mikroválečky na cílové oblasti. Tyto válečky vytvářejí kompresní mikrovibrační efekt, který stimuluje tkáně a podporuje lymfatický systém. Celý proces je bezbolestný a většina klientů ho popisuje jako příjemnou masáž.'
      },
      {
        question: 'Je ošetření bolestivé?',
        answer: 'Ne, ošetření Endosphere není bolestivé. Většina klientů ho popisuje jako příjemnou masáž s pocitem uvolnění a lehkého brnění. Intenzitu ošetření lze přizpůsobit individuálním potřebám a komfortu klienta.'
      },
      {
        question: 'Jak dlouho trvají výsledky?',
        answer: 'Výsledky ošetření Endosphere mohou trvat několik měsíců, zejména pokud je dodržován zdravý životní styl včetně vyvážené stravy a pravidelného pohybu. Pro udržení optimálních výsledků doporučujeme udržovací ošetření jednou za 1-2 měsíce.'
      },
      {
        question: 'Jaká je doporučená frekvence ošetření?',
        answer: 'Pro optimální výsledky doporučujeme absolvovat ošetření 1-2x týdně po dobu 6-10 týdnů. Přesný plán ošetření bude navržen na základě vašich individuálních potřeb a cílů během úvodní konzultace.'
      }
    ],
    packages: [
      {
        name: 'Ruce',
        price: '850 Kč',
        description: 'Ošetření rukou pro zpevnění pokožky a redukci celulitidy',
        sessions: 1
      },
      {
        name: 'Břicho',
        price: '1050 Kč',
        description: 'Ošetření břicha pro zpevnění a tvarování',
        sessions: 1
      },
      {
        name: 'Hýždě',
        price: '1050 Kč',
        description: 'Ošetření hýždí pro zpevnění a redukci celulitidy',
        sessions: 1
      },
      {
        name: 'Nohy',
        price: '1050 Kč',
        description: 'Ošetření nohou pro zpevnění a redukci celulitidy',
        sessions: 1
      },
      {
        name: 'Balíček 5 ošetření',
        price: '3825 Kč',
        description: '5 ošetření se slevou 10% (běžná cena 4250 Kč)',
        sessions: 5
      },
      {
        name: 'Balíček 10 ošetření',
        price: '7225 Kč',
        description: '10 ošetření se slevou 15% (běžná cena 8500 Kč)',
        sessions: 10
      },
      {
        name: '2 partie - Břicho + Hýždě',
        price: '1850 Kč',
        description: 'Kombinované ošetření břicha a hýždí (80 minut)',
        sessions: 1
      },
      {
        name: '2 partie - Nohy + Hýždě',
        price: '1850 Kč',
        description: 'Kombinované ošetření nohou a hýždí (80 minut)',
        sessions: 1
      },
      {
        name: 'Celotělové ošetření',
        price: '1900 Kč',
        description: 'Kompletní ošetření celého těla (90 minut)',
        sessions: 1
      },
      {
        name: 'Celotělový balíček 6 ošetření',
        price: '10260 Kč',
        description: '6 celotělových ošetření se slevou 10% (běžná cena 11400 Kč)',
        sessions: 6
      },
      {
        name: 'Celotělový balíček 10 ošetření',
        price: '16150 Kč',
        description: '10 celotělových ošetření se slevou 15% (běžná cena 19000 Kč)',
        sessions: 10
      }
    ]
  },
  {
    id: 'hair-extensions',
    name: 'Prodlužování vlasů',
    shortDescription: 'Luxusní prodlužování vlasů metodou microkeratin pro přirozený vzhled',
    fullDescription: 'Naše luxusní prodlužování vlasů metodou microkeratin využívá nejkvalitnější evropské vlasy pro přirozený a elegantní výsledek. Každý pramen je pečlivě aplikován našimi experty pro dokonalý vzhled a dlouhotrvající efekt. Procedura je šetrná k vašim vlastním vlasům a výsledek je naprosto přirozený.',
    image: '/images/service-hair.jpg',
    benefits: [
      { title: 'Přirozený vzhled' },
      { title: 'Kvalitní evropské vlasy' },
      { title: 'Dlouhotrvající efekt' },
      { title: 'Šetrná aplikace' },
      { title: 'Možnost stylingu jako u vlastních vlasů' },
      { title: 'Okamžitá proměna' }
    ],
    contraindications: [
      { title: 'Velmi slabé nebo poškozené vlasy' },
      { title: 'Některá kožní onemocnění pokožky hlavy' },
      { title: 'Alergie na keratin nebo jiné složky používané při aplikaci' }
    ],
    duration: 'Aplikace trvá 2-4 hodiny v závislosti na množství a délce prodlužovaných vlasů',
    results: 'Výsledek je okamžitý a vydrží 3-5 měsíců, poté je potřeba provést posunutí nebo novou aplikaci.',
    faqs: [
      {
        question: 'Jak se starat o prodloužené vlasy?',
        answer: 'Prodloužené vlasy vyžadují speciální péči. Doporučujeme používat kvalitní šampony a kondicionéry bez sulfátů, vlasy rozčesávat speciálním kartáčem od konečků směrem ke kořínkům, vyhnout se spánku s mokrými vlasy a omezit používání tepelných stylingových nástrojů. Podrobné instrukce dostanete po aplikaci.'
      },
      {
        question: 'Jak dlouho vydrží prodloužené vlasy?',
        answer: 'Při správné péči vydrží prodloužené vlasy 3-5 měsíců, poté je potřeba provést posunutí nebo novou aplikaci. Životnost prodloužení závisí na rychlosti růstu vašich vlastních vlasů a na tom, jak o ně pečujete.'
      },
      {
        question: 'Poškodí prodlužování moje vlastní vlasy?',
        answer: 'Při správné aplikaci a péči by prodlužování nemělo poškodit vaše vlastní vlasy. Naše metoda microkeratin je velmi šetrná a aplikace je prováděna zkušenými profesionály. Je však důležité dodržovat doporučenou péči a pravidelně navštěvovat salon pro kontrolu a údržbu.'
      },
      {
        question: 'Mohu si prodloužené vlasy barvit nebo žehlit?',
        answer: 'Ano, prodloužené vlasy lze barvit, žehlit i kulmovat, ale doporučujeme tyto úkony svěřit profesionálům. Při domácím stylingu je důležité používat tepelnou ochranu a vyhnout se aplikaci barvy nebo tepla přímo na spoje.'
      }
    ],
    packages: [
      {
        name: 'Nové nasazení do 200 pramenů',
        price: '25 Kč/ks',
        description: 'Nová aplikace prodloužených vlasů do 200 pramenů',
        sessions: 1
      },
      {
        name: 'Nové nasazení nad 200 pramenů',
        price: '23 Kč/ks',
        description: 'Nová aplikace prodloužených vlasů nad 200 pramenů',
        sessions: 1
      },
      {
        name: 'Posunutí do 200 pramenů',
        price: '30 Kč/ks',
        description: 'Posunutí stávajících prodloužených vlasů do 200 pramenů',
        sessions: 1
      },
      {
        name: 'Posunutí nad 200 pramenů',
        price: '28 Kč/ks',
        description: 'Posunutí stávajících prodloužených vlasů nad 200 pramenů',
        sessions: 1
      },
      {
        name: 'Rozčesávání dredů',
        price: '300 Kč/30 min.',
        description: 'Profesionální rozčesávání zacuchaných vlasů a dredů',
        sessions: 1
      }
    ]
  }
];
