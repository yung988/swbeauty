export interface KosmetikaService {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  image?: string;
}

export const kosmetikaServices: KosmetikaService[] = [
  {
    id: "dry-skin",
    name: "Klasické ošetření pleti/Dry Skin",
    price: "1150 Kč",
    duration: "60 minut",
    description: "Čištění pleti, tonizace, exfoliace, relaxace, výživení, maska, ochrana – dry skin, masáž obličeje, masáž rukou",
    fullDescription: "Naše klasické ošetření pro suchou pleť je komplexní procedura navržená speciálně pro hydrataci a výživu suché pokožky. Začínáme důkladným čištěním, které odstraní nečistoty a připraví pleť na další kroky. Následuje tonizace pro obnovení pH rovnováhy a jemná exfoliace, která odstraní odumřelé kožní buňky. Relaxační fáze zahrnuje uklidňující masáž obličeje a rukou, která podporuje krevní oběh a uvolňuje napětí. Poté aplikujeme výživné sérum a speciální hydratační masku určenou pro suchou pleť. Ošetření zakončíme ochranným krémem, který vytvoří bariéru proti ztrátě vlhkosti a vnějším vlivům.",
    benefits: [
      "Intenzivní hydratace suché pleti",
      "Odstranění odumřelých kožních buněk",
      "Zlepšení textury a pružnosti pokožky",
      "Redukce pocitu napětí a šupinek",
      "Posílení ochranné bariéry pleti"
    ],
    image: "/images/kosmetika-dry-skin.jpg"
  },
  {
    id: "anti-age",
    name: "Ošetření s kolagenem Anti Age",
    price: "1350 Kč",
    duration: "60 minut",
    description: "Čištění pleti, tonizace, exfoliace, relaxace, výživení, maska, ochrana, masáž obličeje, masáž rukou",
    fullDescription: "Naše Anti Age ošetření s kolagenem je pokročilá procedura zaměřená na zpomalení procesu stárnutí pleti a redukci již existujících vrásek. Procedura začíná důkladným čištěním a tonizací, které připraví pleť na následující kroky. Pokračujeme jemnou exfoliací, která stimuluje obnovu buněk a zlepšuje vstřebávání aktivních látek. Následuje relaxační fáze s masáží obličeje a rukou, která podporuje mikrocirkulaci a lymfatický systém. Klíčovou součástí je aplikace vysoce koncentrovaného kolagenového séra, které proniká do hlubších vrstev pokožky a podporuje tvorbu vlastního kolagenu. Proceduru završuje speciální zpevňující maska a aplikace ochranného krému s SPF faktorem.",
    benefits: [
      "Viditelné vyhlazení jemných vrásek",
      "Zvýšení elasticity a pevnosti pleti",
      "Stimulace tvorby kolagenu",
      "Zlepšení kontury obličeje",
      "Dlouhodobá hydratace a ochrana"
    ],
    image: "/images/kosmetika-anti-age.jpg"
  },
  {
    id: "pores",
    name: "Ošetření pleti s rozšířenými póry",
    price: "1350 Kč",
    duration: "60 minut",
    description: "Čištění pleti, tonizace, exfoliace, relaxace, výživení, maska, ochrana, masáž obličeje, masáž rukou",
    fullDescription: "Specializované ošetření pro pleť s rozšířenými póry je zaměřeno na hloubkové čištění, regulaci produkce kožního mazu a zmenšení viditelnosti pórů. Procedura začíná důkladným dvojitým čištěním, které odstraní nečistoty a přebytečný maz z pórů. Následuje tonizace s adstringentními složkami, které pomáhají stahovat póry. Pokračujeme enzymatickou exfoliací, která jemně rozpouští odumřelé kožní buňky a nečistoty v pórech. Po relaxační fázi s lehkou masáží obličeje a rukou aplikujeme sérum s obsahem kyseliny salicylové a niacinamidu, které regulují produkci mazu a stahují póry. Proceduru završuje čistící jílová maska, která absorbuje přebytečný maz, a aplikace lehkého matujícího krému, který poskytuje hydrataci bez zatížení pleti.",
    benefits: [
      "Viditelné zmenšení pórů",
      "Regulace produkce kožního mazu",
      "Prevence vzniku komedonů a akné",
      "Zjemnění textury pleti",
      "Matný a sjednocený vzhled pokožky"
    ],
    image: "/images/kosmetika-pores.jpg"
  },
  {
    id: "sensitive-skin",
    name: "Sensitive Skin Facial with Propolis",
    price: "1490 Kč",
    duration: "70 minut",
    description: "Čištění pleti, tonizace, exfoliace, relaxace, výživení, maska, ochrana, masáž obličeje, masáž rukou + sérum",
    fullDescription: "Ošetření Sensitive Skin Facial with Propolis je speciálně vyvinuto pro citlivou a reaktivní pleť. Využívá uklidňujících a protizánětlivých vlastností propolisu, který je známý svými hojivými a antibakteriálními účinky. Procedura začíná velmi jemným čištěním s použitím produktů bez parfemace a potenciálních alergenů. Následuje šetrná tonizace a velmi jemná enzymatická exfoliace, která nenarušuje ochrannou bariéru pleti. Relaxační fáze zahrnuje uklidňující masáž obličeje a rukou s použitím chladivých technik, které zmírňují zarudnutí a podráždění. Klíčovým krokem je aplikace koncentrovaného séra s propolisem, které zklidňuje, hydratuje a posiluje přirozenou obranyschopnost pleti. Proceduru završuje chladivá gelová maska a aplikace ochranného krému s obsahem ceramidů a antioxidantů.",
    benefits: [
      "Okamžité zklidnění podrážděné pleti",
      "Posílení ochranné bariéry pokožky",
      "Redukce zarudnutí a citlivosti",
      "Hydratace bez podráždění",
      "Zvýšení odolnosti vůči vnějším vlivům"
    ],
    image: "/images/kosmetika-sensitive.jpg"
  },
  {
    id: "premium",
    name: "Premium ošetření s kys. hyaluronovou",
    price: "1700 Kč",
    duration: "90 minut",
    description: "Čištění pleti, tonizace, exfoliace, relaxace, výživení, sérum, maska, ochrana, masáž obličeje, masáž rukou, obočí, řasy",
    fullDescription: "Premium ošetření s kyselinou hyaluronovou je naše nejluxusnější a nejkomplexnější procedura, která kombinuje několik pokročilých technik pro maximální omlazující efekt. Začínáme důkladným dvojitým čištěním a tonizací, které připraví pleť na následující kroky. Pokračujeme kombinovanou exfoliací (enzymatickou a mechanickou), která efektivně odstraňuje odumřelé kožní buňky a stimuluje obnovu pleti. Následuje relaxační fáze s prodlouženou masáží obličeje, krku, dekoltu a rukou, která využívá liftingových technik pro zpevnění kontur obličeje. Klíčovou součástí je aplikace vysoce koncentrovaného séra s různými molekulovými hmotnostmi kyseliny hyaluronové, které pronikají do různých vrstev pokožky pro maximální hydrataci a vyplnění vrásek zevnitř. Procedura zahrnuje také ošetření obočí a řas pro kompletní proměnu. Završením je aplikace luxusní hydrogelové masky s peptidy a ochranného krému s SPF faktorem.",
    benefits: [
      "Intenzivní hydratace a vyplnění vrásek",
      "Viditelné zpevnění kontur obličeje",
      "Rozjasnění a sjednocení tónu pleti",
      "Komplexní péče včetně obočí a řas",
      "Dlouhotrvající omlazující efekt"
    ],
    image: "/images/kosmetika-premium.jpg"
  },
  {
    id: "dermapen",
    name: "Dermapen",
    price: "1800 Kč",
    duration: "60 minut",
    description: "Ošetření podporuje tvorbu kolagenu, stimuluje přirozené procesy obnovy pleti a pomáhá aktivních sér zajistit intenzivní výživu a regeneraci pokožky",
    fullDescription: "Dermapen je pokročilá mikrojehlová terapie, která využívá jemné mikrojehličky k vytvoření kontrolovaných mikrokanálků v pokožce. Tento proces stimuluje přirozenou produkci kolagenu a elastinu, což vede k omlazení a regeneraci pleti. Procedura začíná důkladným čištěním a aplikací lokálního anestetika pro zajištění komfortu během ošetření. Následně je pomocí přístroje Dermapen ošetřena cílená oblast, přičemž mikrojehlami jsou vytvářeny tisíce drobných kanálků. Tyto mikrokanálky umožňují hlubší průnik aktivních látek do pokožky a zároveň aktivují přirozené hojivé procesy těla. Po ošetření aplikujeme vysoce koncentrované sérum s růstovými faktory, peptidy a kyselinou hyaluronovou, které maximalizuje regenerační efekt. Procedura je zakončena aplikací zklidňující masky a ochranného faktoru.",
    benefits: [
      "Výrazné zlepšení textury a tónu pleti",
      "Redukce jizev po akné a drobných jizev",
      "Minimalizace vrásek a jemných linek",
      "Zpevnění ochablé pokožky",
      "Zmenšení pórů a celkové omlazení pleti"
    ],
    image: "/images/kosmetika-dermapen.jpg"
  },
  {
    id: "eyebrow-lash",
    name: "Barvení obočí/řas",
    price: "200 Kč",
    duration: "20 minut",
    description: "Profesionální barvení obočí nebo řas pro zvýraznění pohledu",
    fullDescription: "Profesionální barvení obočí nebo řas je rychlý a efektivní způsob, jak zvýraznit váš pohled bez nutnosti každodenního líčení. Procedura začíná konzultací, během které společně vybereme nejvhodnější odstín barvy, který bude lichotit vašemu přirozenému tónu pleti a vlasů. Před aplikací barvy důkladně očistíme oblast a aplikujeme ochranný krém kolem obočí nebo řas, abychom předešli nežádoucímu zabarvení okolní pokožky. Barva je poté precizně aplikována na obočí nebo řasy a ponechána působit po dobu 10-15 minut pro dosažení optimální intenzity. Po uplynutí této doby je barva pečlivě odstraněna a oblast je ošetřena zklidňujícím přípravkem. Výsledkem je přirozené, ale výrazné zvýraznění vašeho pohledu, které vydrží 3-4 týdny.",
    benefits: [
      "Výrazný pohled bez nutnosti každodenního líčení",
      "Trvanlivost 3-4 týdny",
      "Vhodné i pro citlivé oči a nositelky kontaktních čoček",
      "Přirozený vzhled s možností výběru intenzity",
      "Úspora času při každodenní rutině"
    ],
    image: "/images/kosmetika-eyebrow.jpg"
  },
  {
    id: "face-depilation",
    name: "Depilace obličeje",
    price: "150 Kč",
    duration: "15 minut",
    description: "Šetrná depilace obličejových partií pro hladkou pleť",
    fullDescription: "Depilace obličeje je šetrná procedura zaměřená na odstranění nežádoucích chloupků z obličejových partií, jako jsou horní ret, brada, tváře nebo oblast mezi obočím. Používáme hypoalergenní vosk s nízkou teplotou tání, který je speciálně vyvinutý pro citlivou pokožku obličeje. Procedura začíná důkladným očištěním oblasti a aplikací uklidňujícího přípravku, který připraví pokožku na depilaci. Vosk je poté aplikován v tenkých vrstvách na cílené oblasti a odstraněn speciální technikou, která minimalizuje podráždění. Po depilaci je pokožka ošetřena zklidňujícím a hydratačním přípravkem, který zabraňuje zarudnutí a podráždění. Výsledkem je dokonale hladká pleť bez chloupků, která vydrží 3-4 týdny.",
    benefits: [
      "Dokonale hladká pleť bez chloupků",
      "Trvanlivost 3-4 týdny",
      "Postupné zeslabování chloupků při pravidelné aplikaci",
      "Šetrný přístup vhodný i pro citlivou pleť",
      "Příprava pleti pro lepší aplikaci make-upu"
    ],
    image: "/images/kosmetika-depilation.jpg"
  }
];
