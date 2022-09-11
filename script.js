"use strict";

const regions = {
  Abkhazia: {
    title: "Abkhazia",
    description:
      " Abkhazia is a partially recognised state in the South Caucasus, recognised by most countries as part of Georgia, which views the region as an autonomous republic.It lies on the eastern coast of the Black Sea, south of the Greater Caucasus mountains in northwestern Georgia. It covers 8,665 square kilometres and has a population of around 245,000 Its capital and largest city is Sokhumi.The region had autonomy within Soviet Georgia at the time when the Soviet Union began to disintegrate in the late 1980s. Simmering ethnic tensions between the Abkhaz—the region's titular ethnicity—and Georgians—the largest single ethnic group at that time—culminated in the 1992–1993 War in Abkhazia, which resulted in Georgia's loss of control over most of Abkhazia and the ethnic cleansing of Georgians from Abkhazia.",
    image: "images/abkhazia.jpg",
    image1: "images/abkhazia-1.jpg",
  },
  Adjara: {
    title: "Adjara",
    description:
      "Adjara or Achara, officially known as the Autonomous Republic of Adjara is a political-administrative region of Georgia. Located in the country's southwestern corner, Adjara lies on the coast of the Black Sea  near the foot of the Lesser Caucasus Mountains, north of Turkey. It is an important tourist destination and includes Georgia's second most populous city of Batumi as its capital. About 350,000 people live on its 2,880 km2 territory.",
  },
  Guria: {
    title: "Guria",
    description:
      "Guria is a region in Georgia, in the western part of the country, bordered by the eastern end of the Black Sea. The region has a population of 113,000 (2016),with Ozurgeti as the regional capital.Guria is bordered by Samegrelo to the north-west, Imereti to the north, Samtskhe-Javakheti to the east, Adjara to the south, and the Black Sea to the west. The province has an area of 2,033 km2.",
  },
};
const path = document.querySelectorAll("path");
const text = document.querySelector(".content");
const titleEl = document.querySelector(".region-title");
const image = document.querySelector(".region-image");
const image1 = document.querySelector(".region-image1");
const descrEl = document.querySelector(".description");

for (let i = 0; i < path.length; i++) {
  path[i].addEventListener("click", function () {
    for (let j = 0; j < path.length; j++) {
      path[j].classList.add("hidden");
      const attr = path[i].getAttribute("title");

      titleEl.textContent = regions[attr].title;
      descrEl.textContent = regions[attr].description;

      image.src = regions[attr].image;
      image1.src = regions[attr].image1;
      image.alt = regions[attr].title;
      image1.alt = regions[attr].title;
    }
    path[i].classList.add("hidden");
    text.classList.remove("hidden");
  });
}
