# Struktura webu SW Beauty s.r.o. - Analýza a doporučení

## Současný stav webu

### Analýza současné struktury
Současný web SW Beauty (https://swbeauty.vercel.app) je jednostránková aplikace s následující strukturou:

**Současné sekce:**
- Hero section s mottem "Vstupte do světa zdravého sebevědomí a krásy"
- Naše služby (omezené na 3 hlavní služby)
- Kosmetika (částečná nabídka - pouze 8 služeb)
- Reference klientů
- Kontakt
- Nefunkční navigace (#social, #career, #shop)

### Kritické problémy současného webu

1. **Neúplná nabídka služeb**: Web zobrazuje pouze 11 z 38 skutečných služeb (29% pokrytí)
2. **Chybějící kategorie**: Kompletně chybí 5 hlavních kategorií služeb
3. **Nefunkční navigace**: Odkazy v menu nikam nevedou
4. **Chybí rezervační systém**: Není možné online rezervovat
5. **Neúplný ceník**: Chybí ceny u většiny služeb
6. **Chybí základní stránky**: O nás, Galerie, FAQ

### Porovnání služeb

| Kategorie | Současný web | Skutečná nabídka | Rozdíl |
|-----------|--------------|------------------|--------|
| Kosmetika | 8 služeb | 14 služeb | -6 služeb |
| HIFU Facelift | 0 služeb | 6 služeb | -6 služeb |
| Endos-roller | 0 služeb | 7 služeb | -7 služeb |
| Kavitace | 0 služeb | 5 služeb | -5 služeb |
| Budování svalů | 0 služeb | 3 služby | -3 služby |
| Balíčky | 0 služeb | 3 služby | -3 služby |
| **CELKEM** | **8 služeb** | **38 služeb** | **-30 služeb** |

## Navrhovaná optimální struktura webu

### Hlavní navigace
```
DOMŮ | SLUŽBY | O NÁS | GALERIE | CENÍK | KONTAKT
```

### 1. Homepage (Domů)
**URL**: `/`

**Sekce:**
- Hero section s hlavním mottem
- Přehled hlavních služeb (6 kategorií)
- Proč si vybrat SW Beauty
- Rychlá rezervace (CTA tlačítko)
- Testimonials klientů
- Instagram feed
- Kontaktní informace

### 2. Služby
**URL**: `/sluzby`

**Struktura podstránek:**

#### 2.1 Kosmetika
**URL**: `/sluzby/kosmetika`
- Základní ošetření pro suchou pleť (45 min) - 1 150 Kč
- Ošetření s collagenem nebo pro rozšířené póry (50 min) - 1 350 Kč
- Ošetření problematické pleti (60 min) - 1 490 Kč
- Luxusní ošetření (75 min) - 1 700 Kč
- Mikrojehlování - 1 800 Kč
- Dermapen obličej - 800 Kč
- Dermapen krk - 500 Kč
- Dermapen dekolt - 750 Kč
- Dermapen rty - 700 Kč
- Laminace řas - 1 000 Kč
- Laminace obočí - 600 Kč
- Laminace řas + obočí - 1 000 Kč
- Kosmetické ošetření pro muže (60 min) - 1 250 Kč
- Mikrojehlování bez kosmetického ošetření - 1 500 Kč

#### 2.2 HIFU Facelift
**URL**: `/sluzby/hifu-facelift`

**Popis**: Neinvazivní facelift pomocí fokusovaného ultrazvuku
- HIFU facelift celý obličej (60 min) - 5 500 Kč
- HIFU facelift celý obličej + krk (90 min) - 6 500 Kč
- HIFU facelift spodní část obličeje (45 min) - 3 900 Kč
- HIFU facelift oční okolí (30 min) - 2 900 Kč
- HIFU facelift horní část obličeje (45 min) - 4 500 Kč
- HIFU facelift krk (30 min) - 2 000 Kč

#### 2.3 Endos-roller
**URL**: `/sluzby/endos-roller`

**Popis**: Pokročilá technologie kompresní mikrovibrace
- Endos-roller 1 partie (30 min) - 850 Kč
- Endos-roller 2 partie (45 min) - 1 050 Kč
- Endos-roller 3 partie (60 min) - 1 050 Kč
- Endos-roller 4 partie (75 min) - 1 050 Kč
- Endos-roller - celý zadek a nohy - 1 500 Kč
- Endos-roller - celé tělo - 1 900 Kč
- Endos-roller - paže - 600 Kč

#### 2.4 Kavitace
**URL**: `/sluzby/kavitace`

**Popis**: Bezbolestné ošetření pomocí nízkofrekvenčního ultrazvuku
- Kavitace 1 partie (30 min) - 900 Kč
- Kavitace 2 partie (45 min) - 1 100 Kč
- Kavitace 3 partie (60 min) - 1 100 Kč
- Kavitace 4 partie (75 min) - 1 100 Kč
- Kavitace - celé tělo - 1 700 Kč

#### 2.5 Budování svalů
**URL**: `/sluzby/budovani-svalu`

**Popis**: Elektrická stimulace svalů - 30 000 stahů za 30 minut
- Budování svalů 1 partie (30 min) - 900 Kč
- Budování svalů 2 partie (45 min) - 1 300 Kč
- Budování svalů 3 partie (60 min) - 2 100 Kč

#### 2.6 Balíčky
**URL**: `/sluzby/balicky`
- Balíček: 3x procedura endos 2 partie + 1x HIFU budování svalů zdarma - 4 500 Kč
- Balíček 2 - 2 700 Kč
- Balíček 3 - 7 200 Kč

### 3. O nás
**URL**: `/o-nas`

**Obsah:**
- Historie salonu (založen 2024)
- Naše filosofie a mise
- Tým a specialisté
- Certifikace a vzdělání
- Technologie a vybavení
- Proč si vybrat SW Beauty

### 4. Galerie
**URL**: `/galerie`

**Sekce:**
- Before & After fotky
- Interiér salonu
- Technologie a vybavení
- Instagram feed
- Video testimonials

### 5. Ceník
**URL**: `/cenik`

**Struktura:**
- Kompletní ceník všech služeb
- Balíčky a speciální nabídky
- Možnosti platby
- Storno podmínky

### 6. Kontakt
**URL**: `/kontakt`

**Obsah:**
- Kontaktní formulář
- Online rezervace
- Adresa a mapa
- Otevírací doba
- Parkovací možnosti
- FAQ
- Dopravní dostupnost

## Dodatečné stránky

### Blog/Články
**URL**: `/blog`
- Péče o pleť
- Novinky v estetické medicíně
- Před a po ošetření
- Sezónní tipy

### Rezervace
**URL**: `/rezervace`
- Online rezervační systém
- Výběr služby a termínu
- Potvrzení rezervace
- Možnost změny/zrušení

### FAQ
**URL**: `/faq`
- O procedurách
- Rezervace a platby
- Příprava na ošetření
- Po ošetření

## Implementační doporučení

### Priorita 1 (Kritická - implementovat ihned)
1. **Rozšířit sekci služeb** o všechny chybějící kategorie
2. **Implementovat online rezervační systém**
3. **Přidat kompletní ceník** se všemi cenami

### Priorita 2 (Vysoká - implementovat do 4 týdnů)
4. **Vytvořit stránku "O nás"** s informacemi o týmu
5. **Přidat galerii** s before/after fotografiemi
6. **Implementovat blog** pro SEO a vzdělávání klientů

### Priorita 3 (Střední - implementovat do 8 týdnů)
7. **Přidat FAQ sekci** s častými dotazy
8. **Vytvořit právní stránky** (ochrana údajů, obchodní podmínky)

### Kontinuální optimalizace
9. **Optimalizace pro mobilní zařízení**
10. **SEO optimalizace** pro vyhledávače

## Technické specifikace

### Header (Hlavička)
- Logo SW Beauty s.r.o.
- Kontakt v hlavičce: +420 773 577 899
- CTA tlačítko: "REZERVOVAT"
- Responzivní navigační menu

### Footer (Patička)
- Kontaktní údaje
- Rychlé odkazy
- Sociální sítě (Instagram, Facebook)
- Právní informace (IČO: 21237611)

## Očekávané výsledky

Po implementaci navrhované struktury očekáváme:

1. **Zvýšení konverzí** o 25-40% díky kompletní nabídce služeb
2. **Lepší SEO výsledky** díky strukturovanému obsahu
3. **Snížení počtu telefonních dotazů** díky úplným informacím
4. **Zvýšení online rezervací** díky rezervačnímu systému
5. **Lepší uživatelskou zkušenost** díky intuitivní navigaci

## Časový harmonogram implementace

| Týden | Aktivita |
|-------|----------|
| 1-2 | Rozšíření služeb, přidání ceníku |
| 3 | Implementace rezervačního systému |
| 4-5 | Vytvoření stránky O nás, kontakt |
| 6-7 | Galerie a blog |
| 8 | FAQ, právní stránky, finální testování |

**Celková doba implementace: 8 týdnů**

---

*Dokument vytvořen na základě analýzy současného webu SW Beauty s.r.o. a osvědčených postupů pro weby kosmetických salonů.*