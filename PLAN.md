# Plan – Portfolio (Martina Caspersson)

Responsiv one-page-portfolio i HTML och vanlig CSS (plus en liten JS-fil) byggd efter Figma-designen
[🤘🏼 Start page](https://www.figma.com/design/OkrUzPEME64u6CxnN9MJkc/Martina-Caspersson---Portfolio?node-id=48-384).

## Beslut

| Fråga | Beslut |
|---|---|
| Typsnitt | **Safiro** Medium (rubriker) från egna filer i `assets/fonts/`, **Satoshi** Regular (brödtext) via Fontshare |
| Innehåll | Desktopversionens text används på alla skärmstorlekar. Platshållare ("Title", lorem ipsum) ligger kvar tills de byts ut |
| Interaktion | Lite JavaScript: pilarna bläddrar i projektkarusellen, Menu-knappen öppnar/stänger mobilmenyn |
| Repo | Lokalt git-repo, commit efter varje steg |

## Designtokens från Figma

| Token | Värde |
|---|---|
| `text/primary` | `#000000` |
| `text/tertiary` | `#989898` |
| `background/primary` | `#ffffff` |
| `background/secondary` | `#bbbbc0` |
| `corner/radius` | `4px` |
| Grid (desktop 1440) | 12 kolumner, marginal 24px, gap 24px |
| Heading | Safiro Medium 80px, line-height 1.05 |
| Subheading | Safiro Medium 32px, line-height 1.05 |
| Body | Satoshi Regular 20px |
| Link S | Satoshi Regular 20px, line-height 1 |

Mobilmåtten (375px-ramen) hämtas sektion för sektion från Figma när vi bygger respektive del.

## Sidans sektioner (ordning)

| # | Desktop (1440) | Mobil (375) |
|---|---|---|
| 1 | Navigation – namn + Case / About / Contact | Navigation – namn + Menu |
| 2 | Header – "Digital designer based in Gothenburg" | Samma, radbryts annorlunda |
| 3 | Text section – Rubrik + ingress i två kolumner | Rubrik ovanför ingress |
| 4 | Hero – stor bild | Mindre bild |
| 5 | Project preview – Title + pilar, karusell med bilder | Title, karusell utan pilar |
| 6 | About me – rubrik, tre textkolumner, porträtt | **Kommer efter Competences**, en kolumn, porträtt till höger |
| 7 | Competences – What I know: Tools, Experience, Education, Hobbies | 2×2-rutnät |
| 8 | Image section – två bilder | Två mindre bilder |

Obs: About me och Competences byter plats mellan mobil och desktop – det löses med CSS (`order` i grid/flex) så att HTML:en bara finns en gång.

## Filstruktur

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── fonts/      (Safiro-filer från dig)
│   └── images/     (exporterade från Figma)
└── PLAN.md
```

## Arbetsgång – steg för steg

Varje steg avslutas med att jag jämför mot Figma i webbläsaren (375px och 1440px) och gör en commit.

- [ ] **Steg 0 – Plan och repo**: den här planen, `git init`, första commit.
- [ ] **Steg 1 – Grund**: filstruktur, `index.html`-skelett med semantiska sektioner, CSS-reset,
  CSS-variabler för tokens, `@font-face` för Safiro, Satoshi via Fontshare, grid-system
  (mobile first, brytpunkt för desktop), exportera alla bilder från Figma till `assets/images/`.
  *Behöver: Safiro-filerna från dig.*
- [ ] **Steg 2 – Navigation**: desktopmeny med länkar, mobil Menu-knapp som öppnar/stänger menyn (JS),
  ankarlänkar till sektionerna.
- [ ] **Steg 3 – Header och text section**: stor rubrik, Rubrik + ingress.
- [ ] **Steg 4 – Hero**: hero-bilden med rätt proportioner och hörnradie.
- [ ] **Steg 5 – Project preview**: rubrik, pilar, horisontell karusell med scroll-snap och JS för pilarna.
- [ ] **Steg 6 – About me**: textkolumner och porträtt.
- [ ] **Steg 7 – Competences**: "What I know" med fyra listor, olika rutnät för mobil/desktop,
  samt bytt ordning mot About me på mobil.
- [ ] **Steg 8 – Image section**: de två avslutande bilderna.
- [ ] **Steg 9 – Finputs**: kontroll på mellanbredder (768, 1024, 1280), tillgänglighet (alt-texter,
  fokusmarkering, tangentbord), HTML-validering, sista jämförelse mot Figma.

## Öppna frågor

- Finns en design för den öppnade mobilmenyn? Annars föreslår jag en enkel helskärmsmeny i samma stil.
- Vart ska Case / About / Contact leda? Förslag: ankarlänkar till Project preview, About me och en
  kontaktsektion/mejllänk.
- Hur ser designen ut mellan 375 och 1440? Figma har bara de två ramarna, så mellanläget tolkar jag.
