import fs from "fs";
import { htmlSync as html } from "lit-ntml";
const colors = {
  sky: "#e8f0ff",
  tan: "#f2e2ce",
  beard: "#8c5c51",
  truckBedBlue: "#304d73",
  wall: "#fff5e8",
  sky: "#e8f0ff",
};

const color = ([k, v]) => `
.${k} {color: ${v};}
.bg-${k}{background-color: ${v}; } `;
const style = `<style>
  .fit-cover {
    object-fit: cover;
  }
  .fit-fill {
    object-fit: fill;
  }
  .mh-100 {
    max-height: 100%;
  }

  .Tools {
    background-image: url(Tools.png);
    background-position: center center;
  }
  .chopping {
    background-image: url(chopping.jpg);
  }
  .truckBed {
    background-image: url(truckBed.jpg);
  }
  .roof {
    background-image: url(roof.jpg);
  }

  ${Object.entries(colors).map(color).join("\n")}
</style>`;

const head = html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Berkeley Builder</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
      />
      ${style}
    </head>
  </html> `;

const nav = (sections) => html`<div
  class="bg-yellow white pa0 f3 fw1 truckBedBlue w-100 fixed avenir"
>
  <div class="pointer dib pa3">
    <div class="link">
      <a class="pl3 link hover-pink truckBedBlue fl" href="#home"
        ><h4 class="dib avenir tc ma0 fw5">The Berkeley Builder</h4></a
      >
    </div>
  </div>
  ${sections.map(
    (sect) => html`<div class="hover-bg-pink pointer dib pa3 fr">
      <div class="link">
        <a class="link" href="#${sect.title.toLowerCase()}"> ${sect.title}</a>
      </div>
    </div>`
  )}
</div>`;
const hero = html`<div class="vh-100 Tools cover">
  <h1 class="avenir tc mt0 pt4 f-headline fw7 truckBedBlue">
    The Berkeley Builder
  </h1>
</div>`;

const requests = [
  {
    title: "Chopping Trees",
    image: "chopping",
  },
  {
    title: "fixing roofs",
    image: "roof",
  },
  {
    title: "putting up fences",
    image: "truckBed",
  },
  { title: "pruning", image: "pruning" },
  { title: "windows & doors", image: "windows" },
  { title: "finish carpentry", image: "finish" },
  { title: "water damage repai", image: "water" },
];
const reviews = [
  {
    text: "He's really quite something",
    client: " Aging Neighbor",
  },
  {
    text: "And he saved my little dog too",
    client: " Dorothea",
  },
  {
    text: "I wish there were more men in the world like John A. Young",
    client: "Distraught Governor Seeking Re-election",
  },
];

const card = ({ title, image, text }) => html`
  <div class="tc w5 min-h-100 ma2 bg-near-white ba br2 dib bg-wall">
    <p class="ma1 avenir fw1 f3 ttc pv2">${title || text}</p>
    <div class="${image} cover w-100 h5 br3 br--bottom"></div>
  </div>
`;

const section = ({ title, cards, Class, id }) => html`<div
  id=${id ?? title.toLowerCase()}
  class="h-100 tc center pt4 pb4 ${Class || "bg-light-yellow"}"
>
  <h3 class="f2 fw3 avenir mt0 truckBedBlue">${title}</h3>
  <div class="flex flex-wrap items-center w-75 tc center justify-center">
    ${cards.map(card)}
  </div>
</div>`;

const sections = [{ title: "Services", cards: [...requests, ...requests] }];

const page = html`${head}<body>
    ${nav(sections)}
    <div
    id="home"
      class="min-h-10 bg-yellow yellow tc pa2 f3 fw1 truckBedBlue w-100 avenir"
    >
        a
    </div>
    ${hero}
    ${sections.map(section)}
    <div class="bg-near-white">
      <div class="w-50 f2 fl avenir pl4 mt0"><h2>Testimonials</h2></div>
      <div class="w-50 fl avenir mt6">${reviews.map(
        (review) =>
          html`<p>${review.text}</p>
            <p>-- ${review.client}</p>`
      )}</div>
    </div>
    <div class="bg-truckBedBlue yellow pa4 avenir f2 fw6 fl w-100">
      <div class="db">
          <p>Phone: <a class="link dim pink" href="tel:+1 650 690-2474"> ‭‬(650) 690-2474</a></p>
        </div>
        <div class="db">
          <p>Email: <a class="link dim pink" href="mailto:john@workinghomes.net">john@workinghomes.net</a></p>
        </div>
        <div class="db">
          <p>Location: Berkeley, California</p>
        </div>
      </div>
  </body>
</html>`;

fs.writeFileSync("index.html", page);
