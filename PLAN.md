# Plan – Portfolio (Martina Caspersson)

Responsiv one-page-portfolio i HTML och vanlig CSS (plus en liten JS-fil) byggd efter Figma-designen
[🤘🏼 Start page](https://www.figma.com/design/OkrUzPEME64u6CxnN9MJkc/Martina-Caspersson---Portfolio?node-id=48-384).

## Beslut

| Fråga | Beslut |
|---|---|
| Typsnitt | **Safiro** Medium (rubriker) från egna filer i `assets/fonts/`, **Satoshi Variable** (brödtext, länkar, kursiv för Close) från egna filer i `assets/fonts/` |
| Omfattning | Bara startsidan (one-page) |
| E-post | "Send me an email" länkar till `mailto:martina@caspersson.biz` |
| Innehåll | Desktopversionens text används på alla skärmstorlekar. Platshållare ("Title", lorem ipsum) ligger kvar tills de byts ut |
| Interaktion | Lite JavaScript: pilarna bläddrar i projektkarusellen, Menu-knappen öppnar/stänger mobilmenyn |
| Repo | Lokalt git-repo, commit efter varje steg |
| Mobilmeny | Enligt komponenten *Navigation / Mobile, Open=True*: "Close" uppe till höger, länkarna Case / About / Contact i 40px under |
| Länkar | Case / About / Contact är ankarlänkar till sektioner på samma sida (Case → projekt, About → About me, Contact → footer) |
| Responsivitet | Mobile first. Grid 6 kolumner / 16px marginal under 768px, 12 kolumner / 24px från 768px. Textstorlekar skalar flytande med `clamp()` så de blir exakt Figmas värden vid 375px och 1440px |

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

Mobil (375px): grid 6 kolumner, marginal 16px, gap 16px, hörnradie 2px, Heading 40px, Subheading 28px,
Body 16px, Link S 16px, Link L 40px (öppen meny).

## Sidans sektioner (ordning)

| # | Desktop (1440) | Mobil (375) |
|---|---|---|
| 1 | Navigation – namn + Case / About / Contact | Navigation – namn + Menu |
| 2 | Header – "Digital designer based in Gothenburg" | Samma, radbryts annorlunda |
| 3 | Text section – Rubrik + ingress i två kolumner | Rubrik ovanför ingress |
| 4 | Hero – stor bild | Mindre bild |
| 5 | Project preview – Title + pilar, karusell med bilder | Title, karusell utan pilar |
| 6 | About me – rubrik, text, två bilder (blommor + porträtt) | En kolumn, två bilder bredvid varandra under texten |
| 7 | Competences – What I know: Tools, Experience, Education, Hobbies | 2×2-rutnät |
| 8 | Image section – två bilder | Två mindre bilder |
| 9 | Footer – Case / About / Contact, "Get in touch →", "Send me an email"-knapp, © + Portfolio | Samma innehåll, mindre text |

Uppdaterat 2026-11-23: About me ligger före Competences i både mobil och desktop i nuvarande Figma, så ingen omflyttning behövs. Footer har tillkommit.

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

- [x] **Steg 0 – Plan och repo**: den här planen, `git init`, första commit.
- [x] **Steg 1 – Grund**: filstruktur, `index.html`-skelett med semantiska sektioner, CSS-reset,
  CSS-variabler för tokens, `@font-face` för Safiro och Satoshi, grid-system
  (mobile first, brytpunkt för desktop), exportera alla bilder från Figma till `assets/images/`.
- [x] **Steg 2 – Navigation**: desktopmeny med länkar, mobil Menu/Close-knapp som öppnar/stänger menyn (JS).
- [x] **Steg 3 – Header och text section**: stor rubrik, Rubrik + ingress.
- [x] **Steg 4 – Hero**: hero-bilden med rätt proportioner och hörnradie.
- [x] **Steg 5 – Project preview**: rubrik, pilar, horisontell karusell med scroll-snap och JS för pilarna.
- [x] **Steg 6 – About me**: text och två bilder (blommor + porträtt).
- [ ] **Steg 7 – Competences**: "What I know" med fyra listor, olika rutnät för mobil/desktop.
- [ ] **Steg 8 – Image section**: de två avslutande bilderna.
- [ ] **Steg 9 – Footer**: länkar, "Get in touch →", "Send me an email" (mailto:martina@caspersson.biz), copyright.
- [ ] **Steg 10 – Finputs**: kontroll på mellanbredder (768, 1024, 1280), tillgänglighet (alt-texter,
  fokusmarkering, tangentbord), HTML-validering, sista jämförelse mot Figma.

## Öppna frågor

- "Read more" (mobil, projektsektionen) får sin länk senare – just nu `href="#"`.
- `about-flowers.jpg` och `about-portrait.jpg` är tillfälliga 1x-renderingar från Figma. Ersätt med Media Card-lagren exporterade som JPG i 2x (samma filnamn) för skarpa bilder på retinaskärmar. `portrait.png` används inte längre.
- Projektbilderna har Unsplash+-vattenstämplar – licensierade versioner behövs innan sajten publiceras.
- Hur ser designen ut mellan 375 och 1440? Figma har bara de två ramarna, så mellanläget tolkar jag
  (se Responsivitet ovan) och vi stämmer av i steg 10.
