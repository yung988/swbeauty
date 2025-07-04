import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h3 className="text-2xl font-serif mb-4">O SWBEAUTY</h3>
          <p className="text-gray-700 mb-4 font-light">
            Vítejte v SWBeauty, vašem luxusním beauty salonu, kde se snoubí nejmodernější technologie s péčí o vaši krásu a zdraví. Naše studio bylo založeno s vizí poskytovat ty nejkvalitnější služby v oblasti péče o tělo a vlasy v příjemném a elegantním prostředí.
          </p>
          <p className="text-gray-700 mb-4 font-light">
            Specializujeme se na inovativní procedury jako Endosphere, HIFU a profesionální prodlužování vlasů. Všechny naše služby jsou prováděny certifikovanými odborníky s mnohaletými zkušenostmi, kteří neustále sledují nejnovější trendy a technologie v beauty průmyslu.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-serif mb-4">NAŠE FILOZOFIE</h3>
          <p className="text-gray-700 mb-4 font-light">
            V SWBeauty věříme, že každý klient je jedinečný, a proto přistupujeme ke každému individuálně. Naším cílem je nejen zlepšit váš vzhled, ale také posílit vaše sebevědomí a celkovou pohodu. Používáme pouze prémiové produkty a nejmodernější technologie, abychom zajistili ty nejlepší výsledky.
          </p>
          <p className="text-gray-700 mb-4 font-light">
            Klademe důraz na profesionalitu, diskrétnost a vytváření příjemné atmosféry, kde se budete cítit uvolněně a v péči odborníků, kterým můžete důvěřovat.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-serif mb-4">NÁŠ TÝM</h3>
          <p className="text-gray-700 mb-4 font-light">
            Náš tým tvoří zkušení profesionálové s vášní pro krásu a wellness. Každý člen našeho týmu prochází pravidelným školením, aby byl vždy obeznámen s nejnovějšími technikami a trendy v oboru. Jsme hrdí na to, že můžeme nabídnout služby na nejvyšší úrovni a personalizovaný přístup ke každému klientovi.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif mb-4">PROČ SI VYBRAT SWBEAUTY</h3>
          <ul className="list-disc pl-5 text-gray-700 font-light space-y-2">
            <li>Luxusní prostředí a profesionální péče</li>
            <li>Nejmodernější technologie a prémiové produkty</li>
            <li>Individuální přístup ke každému klientovi</li>
            <li>Certifikovaní odborníci s mnohaletými zkušenostmi</li>
            <li>Komplexní služby pod jednou střechou</li>
            <li>Diskrétnost a příjemná atmosféra</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
