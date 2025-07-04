export interface KosmetikaService {
  id: string;
  name: string;
  duration?: string;
  price: string;
  description: string;
  details?: string[]; // Ponechávám pro případné budoucí rozšíření
}

export const kosmetikaServicesData: KosmetikaService[] = [
  {
    id: 'klasicke-osetreni',
    name: 'Klasické ošetření pleti/Dry Skin',
    duration: '60 minut',
    price: '1150 Kč',
    description: 'Čištění pleti, tonizace, exfoliace, relaxace, výživení, maska, ochrana – dry skin, masáž obličeje, masáž rukou',
  },
  {
    id: 'kolagen-anti-age',
    name: 'Ošetření s kolagenem Anti Age',
    duration: '60 minut',
    price: '1350 Kč',
    description: 'Čištění pleti, tonizace, exfoliace, relaxace, výživení, maska, ochrana, masáž obličeje, masáž rukou',
  },
  {
    id: 'rozsirene-pory',
    name: 'Ošetření pleti s rozšířenými póry',
    duration: '60 minut',
    price: '1350 Kč',
    description: 'Čištění pleti, tonizace, exfoliace, relaxace, výživení, maska, ochrana, masáž obličeje, masáž rukou',
  },
  {
    id: 'sensitive-propolis',
    name: 'Sensitive Skin Facial with Propolis',
    duration: '70 minut',
    price: '1490 Kč',
    description: 'Čištění pleti, tonizace, exfoliace, relaxace, výživení, maska, ochrana, masáž obličeje, masáž rukou + sérum',
  },
  {
    id: 'premium-hyaluron',
    name: 'Premium ošetření s kys. hyaluronovou',
    duration: '90 minut',
    price: '1700 Kč',
    description: 'Čištění pleti, tonizace, exfoliace, relaxace, výživení, sérum, maska, ochrana, masáž obličeje, masáž rukou, obočí, řasy',
  },
  {
    id: 'dermapen',
    name: 'Dermapen',
    price: '1800 Kč',
    description: 'Ošetření podporuje tvorbu kolagenu, stimuluje přirozené procesy obnovy pleti a pomáhá aktivních sér zajistit intenzivní výživu a regeneraci pokožky',
  },
  {
    id: 'barveni',
    name: 'Barvení obočí/řas',
    price: '200 Kč',
    description: 'Profesionální barvení pro zvýraznění vašeho pohledu.',
  },
  {
    id: 'depilace-obliceje',
    name: 'Depilace obličeje',
    price: '150 Kč',
    description: 'Jemná depilace pro hladkou pleť v oblasti obličeje.',
  },
]; 