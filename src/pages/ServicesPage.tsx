import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const serviceData = [
  {
    id: 'prodluzovani-vlasu',
    title: 'Prodlužování vlasů',
    description: 'Profesionální prodlužování vlasů metodou mikrokeratinu s minimální zátěží pro vaše vlasy.',
    image: '/service-hair.jpg',
    fullDescription: [
      'MIKROKERATIN je moderní metoda prodlužování vlasů, která zajišťuje minimální zátěž pro vaše vlastní vlasy. Tato technika využívá komfortní, šetrné mini spoje, které jsou téměř neviditelné a vhodné pro všechny typy vlasů.',
      'Díky mikrospojům lze prodloužit i velmi řídké vlasy, což dělá tuto metodu univerzální a přístupnou pro širokou škálu klientů. Nabízíme různé typy prodloužení včetně standardního, mikro a nano provedení.',
      'Posunutí prodloužení doporučujeme provést přibližně po 2 – 3,5 měsících. U velmi jemných vlasů doporučujeme kratší interval 2 – 2,5 měsíce, zatímco u pevnějších vlasů stačí interval 3 – 3,5 měsíce.',
      'Proces obnovy zahrnuje sundání vlasů (1 – 2,5 hod), překeratinování (1,5 – 3 hod) a nasazení spojů (2 – 5 hod). Pro zachování kvality doporučujeme 1x za 3-4 obnovy přikoupit adekvátní culík vlasů na doplnění hustoty a délky stávajících vlasů (cca 30 – 50g), jelikož vlasy se opotřebovávají žehlením, foukáním, třením o oblečení, změnou klima atd.'
    ],
    benefits: [
      'Minimální zátěž pro vaše vlasy',
      'Komfortní, šetrné mini spoje',
      'Téměř neviditelné spoje',
      'Vhodné pro všechny typy vlasů',
      'Možnost prodloužit i velmi řídké vlasy díky mikrospojům'
    ],
    price: 'Cena dle typu prodloužení a množství vlasů. Pro přesnou kalkulaci nás kontaktujte.'
  },
  {
    id: 'endosphere',
    title: 'Endosphere',
    description: 'Pokročilá neinvazivní metoda pro tvarování postavy a redukci celulitidy pomocí kompresní mikrovibrace.',
    image: '/service-endosphere.jpg',
    fullDescription: [
      'Endospheres Therapy je pokročilá neinvazivní metoda, která se zaměřuje na tvarování postavy, redukci celulitidy a zpevnění pokožky pomocí kompresní mikrovibrace. Tato technologie využívá pulzní mikrovibrace generované rotujícími válečky, které cíleně působí na podkožní tkáně.',
      'Endospheres Therapy využívá kompresní mikrovibrace, které přístroj aplikuje pomocí válečků tvořených mikro-kuličkami. Tento proces vytváří rytmický tlak na tkáně, čímž stimuluje lymfatický systém, zlepšuje cirkulaci krve a zvyšuje tonus svalů. Kompresní mikrovibrace pomáhají snížit otoky, podporují detoxikaci a přispívají k viditelnému zlepšení textury pokožky.',
      'Procedura je vhodná jak pro ženy, tak muže všech věkových kategorií, kteří hledají neinvazivní metodu ke zlepšení vzhledu pokožky a celkového vzhledu postavy. Často se doporučuje i sportovcům pro zlepšení svalového napětí a regeneraci svalů.',
      'Proces zahrnuje úvodní konzultaci, během které odborník vyhodnotí stav pokožky a vybere optimální nastavení. Během ošetření leží klient pohodlně a ošetřující aplikuje přístroj s rotujícími kuličkami na ošetřované partie. Každá procedura trvá přibližně 45–60 minut v závislosti na ošetřované oblasti. Pro dosažení viditelných výsledků se doporučuje série 6–12 ošetření s rozestupy několika dnů.'
    ],
    benefits: [
      'Redukce celulitidy',
      'Formování postavy',
      'Zpevnění pokožky a svalů',
      'Bezbolestný proces',
      'Procedura je pohodlná, neinvazivní a nevyžaduje žádnou rekonvalescenci'
    ],
    price: 'Cena za jedno ošetření od 1200 Kč. Zvýhodněné balíčky při zakoupení série procedur.'
  },
  {
    id: 'hifu',
    title: 'HIFU – Budování svalů',
    description: 'Výjimečné neinvazivní formování postavy, které spojuje účinné procesy pro stimulaci spalování tuku a rozvoj svalové hmoty.',
    image: '/service-hifu.jpg',
    fullDescription: [
      'HIFU nabízí unikátní neinvazivní tvarování těla, které spojuje dvě účinné procesy pro stimulaci spalování tuku a rozvoj svalové hmoty během pouhých 30 minut. 30 minut odpočinku zde odpovídá přibližně 5,5 hodinám intenzivního tréninku s maximální zátěží, což činí tuto metodu efektivní a časově nenáročnou volbou pro formování těla.',
      'V průběhu 30minutového procesu vaše svaly projdou více než 30 000 intenzivními supramaximálními kontrakcemi – to je úroveň aktivace, kterou běžným cvičením nelze napodobit. Tato hluboká svalová stimulace nejen posiluje svalová vlákna, ale také pomáhá redukovat tukovou vrstvu.',
      'První výsledky se objevují již po několika dnech a během dalších týdnů se efekt postupně zlepšuje, přičemž plné výsledky jsou patrné přibližně do jednoho měsíce. Pro dosažení maximálního efektu doporučujeme obvykle 6–10 návštěv.',
      'Úbytek lokalizovaného tuku je obvykle vyšší než 30% a to významně posiluje zdravou konstituci těla, zrychluje metabolismus a vytváří 25% nárůst svalové hmoty v aplikované partii. Proceduru lze aplikovat na břicho, hýždě, stehna (vnitřní i vnější), paže, lopatky a lýtka. Speciální aplikátory umožňují proces i v oblastí boků, tzv. „madel lásky."'
    ],
    benefits: [
      'Nárůst svalové hmoty',
      'Spalování tuků',
      'Změny viditelné už po 1 proceduře',
      'Vhodné pro aktivní sportovce',
      'Vhodné pro ženy po porodu, kterým se objevila diastáza',
      'Aktivace svalů bez nutnosti fitnes centra',
      'Zpevnění těla',
      'Prokrvení',
      'Zrychlení metabolismu',
      'Regenerace svalů při těžkých zátěžích'
    ],
    price: 'Cena za jedno ošetření od 1500 Kč. Zvýhodněné balíčky při zakoupení série procedur.'
  }
];

const ServicesPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="subtitle mb-2">NAŠE NABÍDKA</p>
          <h1 className="section-title">Služby</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Nabízíme širokou škálu profesionálních služeb pro vaši krásu a pohodu. Vyberte si z našich specializovaných procedur.
          </p>
        </motion.div>

        <div className="space-y-24">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="overflow-hidden bg-[#f8f3f0]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2 className="text-2xl font-light mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 font-light">{service.description}</p>
                <p className="text-gray-700 mb-8 font-light">{service.fullDescription[0]}</p>
                
                <div className="mt-8">
                  <Link to={`/sluzby/${service.id}`} className="btn-primary">
                    VÍCE INFORMACÍ
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
export { serviceData };
