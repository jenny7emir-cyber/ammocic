# AM-MOĆIĆ — web stranica

Statična web stranica (HTML, CSS i JS) za AM-MOĆIĆ j.d.o.o., izrađena za objavu na **GitHubu i Netlifyju**.

## Struktura

```
index.html              početna (3 kategorije, dostava i montaža, kontakt)
pergole.html            kategorija Pergole
vrtni-namjestaj.html    kategorija Vrtni namještaj
bazeni.html             kategorija Bazeni
pjeskarenje.html        usluga Pjeskarenje kamena
hvala.html              stranica nakon poslanog upita
404.html                stranica za nepostojeći link
css/style.css           dizajn (boje su na vrhu datoteke)
js/products.js          ← SVI PROIZVODI SE UREĐUJU OVDJE
js/main.js              odabir opcija, prozor s formom
img/                    logotip, favicon i slike proizvoda
politika-privatnosti.html  GDPR / politika privatnosti
impressum.html          podaci o tvrtki i uvjeti korištenja
netlify.toml            postavke za Netlify
```

## Objava

1. Na GitHubu napravite novi repozitorij (npr. `am-mocic-web`) i učitajte sve datoteke iz ove mape.
2. Na netlify.com odaberite **Add new site → Import an existing project → GitHub** i zatim taj repozitorij.
3. Build command ostavite prazan, a za publish directory upišite `.`. Kliknite **Deploy**.
4. Domenu (npr. aemocic.hr) povežete u **Domain management → Add a domain**.

## Upiti na e-mail (Netlify Forms)

Forma „Pošalji upit” šalje upit preko Netlify Forms. Za to ne treba poseban poslužitelj.

1. Na Netlifyju otvorite **Forms → Enable form detection**, a zatim ponovno objavite stranicu (**Deploys → Trigger deploy**).
2. U popisu formi pojavit će se forma `upit`.
3. Otvorite **Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email notification**, upišite adresu (npr. `admir.mocic@aemocic.hr`) i odaberite formu `upit`.

Svaki upit stiže na mail s ovim podacima: proizvod, odabrane opcije (dimenzija, izvedba, boja…), ime, telefon, e-mail, mjesto i poruka.
Besplatni Netlify paket uključuje 100 upita mjesečno.

## Dodavanje i uređivanje proizvoda

Otvorite `js/products.js`. Svaki proizvod izgleda ovako:

```js
{
  id: "ugaona",
  name: "Ugaona lounge garnitura",
  sub: "Pleteni ratan",
  desc: "Opis proizvoda…",
  features: ["Karakteristika 1", "Karakteristika 2"],
  images: ["img/namjestaj/ugaona-1.jpg", "img/namjestaj/ugaona-2.jpg"],
  options: [
    { label: "Izvedba", values: ["Lijevi kut", "Desni kut"] },
    { label: "Boja jastuka", values: ["Bež", "Siva"] }
  ]
}
```

- **Slike** stavite u `img/` (npr. `img/pergole/`, `img/namjestaj/`, `img/bazeni/`) i upišite putanje u `images`. Prva slika je glavna, a ostale se prikazuju kao sličice ispod nje.
- **Opcije** su gumbi koje kupac bira, a njegov odabir automatski se upisuje u upit.
- Slike neka budu JPG ili WebP, širine oko 1600 px i do 300 KB.

## Fotografije na početnoj

Kartice kategorija i naslovni dio za sada imaju zamjensku pozadinu. Kad dodate fotografije, u `index.html` dodajte stil na karticu:

```html
<a href="pergole.html" class="cat-card" style="--cat-img:url('img/pergole/naslovna.jpg')">
```

i maknite oznaku `<span class="ph-label">foto uskoro</span>`.
Za naslovni dio upišite `style="--hero-img:url('img/hero.jpg')"` na `<section class="hero">`.

## Vrtni namještaj — grupe

Na stranici Vrtni namještaj proizvodi su podijeljeni u grupe (Nova kolekcija, Garniture, Stolice…).
Grupa se zadaje poljem `group` kod svakog proizvoda, a popis grupa je na vrhu `js/products.js` (`GROUPS`).
Opcije s više od 5 vrijednosti (npr. RAL boje) prikazuju se kao padajući izbornik.

## Još treba dodati

- [ ] Fotografije pergole s platnom
- [ ] Fotografije pjeskarenja (prije/poslije)
- [ ] Uskladiti dimenzije i opcije bazena s katalogom proizvođača (`js/products.js`)
