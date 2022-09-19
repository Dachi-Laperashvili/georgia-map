'use strict';

const regions = {
  Abkhazia: {
    title: 'Abkhazia',
    description:
      " Abkhazia is a partially recognised state in the South Caucasus, recognised by most countries as part of Georgia, which views the region as an autonomous republic.It lies on the eastern coast of the Black Sea, south of the Greater Caucasus mountains in northwestern Georgia. It covers 8,665 square kilometres and has a population of around 245,000 Its capital and largest city is Sokhumi.The region had autonomy within Soviet Georgia at the time when the Soviet Union began to disintegrate in the late 1980s. Simmering ethnic tensions between the Abkhaz—the region's titular ethnicity—and Georgians—the largest single ethnic group at that time—culminated in the 1992–1993 War in Abkhazia, which resulted in Georgia's loss of control over most of Abkhazia and the ethnic cleansing of Georgians from Abkhazia.",
    image: 'images/abkhazia.jpg',
    image1: 'images/abkhazia-1.jpg',
  },
  Adjara: {
    title: 'Adjara',
    description:
      "Adjara or Achara, officially known as the Autonomous Republic of Adjara is a political-administrative region of Georgia. Located in the country's southwestern corner, Adjara lies on the coast of the Black Sea  near the foot of the Lesser Caucasus Mountains, north of Turkey. It is an important tourist destination and includes Georgia's second most populous city of Batumi as its capital. About 350,000 people live on its 2,880 km2 territory.Adjara has been part of Colchis and Caucasian Iberia since ancient times. Colonized by Greeks in the 5th century BC, the region fell under Rome in the 2nd century BC. It became part of the Lazica (Egrisi) before being incorporated into the Kingdom of Abkhazia in the 8th century AD, the latter led unification of Georgian monarchy in the 11th century.",
    image: 'images/adjara.jpg',
    image1: 'images/adjara-1.jpg',
  },
  Guria: {
    title: 'Guria',
    description:
      'Guria is a region in Georgia, in the western part of the country, bordered by the eastern end of the Black Sea. The region has a population of 113,000 (2016),with Ozurgeti as the regional capital.Guria is bordered by Samegrelo to the north-west, Imereti to the north, Samtskhe-Javakheti to the east, Adjara to the south, and the Black Sea to the west. The province has an area of 2,033 km2.The territory that is now Guria was part of the kingdom of Colchis, best known in the West for the tale of the Golden Fleece. Following the collapse of the Colchian Kingdom it became part of the Kingdom of Lazica (Egrisi) in the first century BC. In antiquity the area was a significant source of iron, as early as the fifth century BC, and also copper and gold.',
    image: 'images/guria.jpg',
    image1: 'images/guria-1.jpg',
  },
  Samegrelo: {
    title: 'Samegrelo-Zemo Svaneti',
    description:
      'Samegrelo-Zemo Svaneti is a region (Mkhare) in western Georgia with a population of 308,358 (2021) and a surface of 7,468 km2.The region has Zugdidi as its administrative center, while Giorgi Guguchia is governor of the region since June 2021.Samegrelo-Zemo Svaneti is compiled of the historical Georgian provinces of Samegrelo (Mingrelia) and Zemo Svaneti (i.e., Upper Svaneti).The region has one self governing city (Poti) and 8 municipalities with 143 administrative communities (temi),totalling to 531 populated settlements: eight cities,two dabas and 521 villages.',
    image: 'images/samegrelo-zemo-svaneti.jpg',
    image1: 'images/samegrelo-1.jpg',
  },
  Imereti: {
    title: 'Imereti',
    description:
      'Imereti is a region of Georgia situated in the central-western part of the republic along the middle and upper reaches of the Rioni River. Imereti is the most populous region in Georgia. It consists of 11 municipalities and the city of Kutaisi, which is the capital of the region.iddle Ages the ancient western Georgian kingdom of Egrisi existed on the territory of Imereti. Its king declared Christianity as an official religion of Egrisi in 523 AD. In 975-1466 Imereti was part of the united Georgian Kingdom. The last King of Imereti was Solomon II (1789-1810).It is also known for Prometheus Cave which is karst cave located in Tsqaltubo Municipality in Imereti region of Georgia.',
    image: 'images/imereti.jpg',
    image1: 'images/imereti-1.jpg',
  },
  Kakheti: {
    title: 'Kakheti',
    description:
      'Kakheti is a region (mkhare) formed in the 1990s in eastern Georgia from the historical province of Kakheti and the small, mountainous province of Tusheti. Telavi is its capital. The region comprises eight administrative districts: Telavi, Gurjaani, Qvareli, Sagarejo, Dedoplistsqaro, Signagi, Lagodekhi and Akhmeta. Kakheti is bordered by the Russian Federation,the country of Azerbaijan to the southeast, and with the regions of Mtskheta-Mtianeti and Kvemo Kartli to the west. Kakheti has a strong linguistic and cultural identity, since its ethnographic subgroup of Kakhetians speak the Kakhetian dialect of Georgian.The Georgian David Gareja monastery complex is partially located in this province and is subject to a border dispute between Georgian and Azerbaijani authorities.Popular tourist attractions in Kakheti include Tusheti, Gremi, Signagi, Kvetera, Bodbe, Lagodekhi Protected Areas and Alaverdi Monastery. The region produces wines in micro-regions of Telavi and Kvareli.',
    image: 'images/kakheti-1.jpg',
    image1: 'images/kakheti.jpg',
  },
  Mtskheta: {
    title: 'Mtskheta-Mtianeti',
    description:
      'Mtskheta-Mtianeti is a region (Mkhare) in eastern Georgia comprising the town of Mtskheta, which serves as a regional capital, together with its district and the adjoining mountainous areas. The western part of the region, namely the entire Akhalgori Municipality, is controlled by breakaway South Ossetia since the 2008 Russo-Georgian War.The Mtskheta-Mtianeti region officially comprises five municipalities,yet only four are effectively under Georgian authority.Mtskheta is a city in Mtskheta-Mtianeti province of Georgia. One of the oldest cities of Georgia and its former capital, it is located approximately 20 km (12 mi) north of Tbilisi, at the confluence of the Mtkvari and Aragvi rivers. Currently a small provincial capital, for nearly a millennium until the 5th century AD, Mtskheta was a large fortified city, a significant economical and political centre of the Kingdom of Iberia.',
    image: 'images/Mtskheta.jpg',
    image1: 'images/Mtskheta-1.jpg',
  },
  Racha: {
    title: 'Racha-Lechkhumi-Kvemo Svaneti',
    description:
      'Racha-Lechkhumi and Kvemo Svaneti is a region (Mkhare) in northwestern Georgia with a population of 28,500 (2021), making it the most sparsely populated region in the country. It has a nominal area of 4,954 km2 (1,913 sq mi), of which 4,600 km2 (1,800 sq mi) is de facto controlled by Georgia.The remainder is effectively under South Ossetian control.The region has Ambrolauri as its administrative center and Parmen Margvelidze is governor of the region since June 2021.Racha-Lechkhumi and Kvemo Svaneti includes the historical provinces of Racha, Lechkhumi and Kvemo Svaneti (i.e., Lower Svaneti).The population of (Georgian controlled) Racha-Lechkhumi and Kvemo Svaneti consists almost entirely of Georgians. The 2014 census counted no more than 112 inhabitants belonging to a minority group, with ethnic Russians (29) and Ossetians (28) being the most represented. Others include Armenians, Ukrainians, and Greeks.',
    image: 'images/Racha.jpg',
    image1: 'images/Racha-1.jpg',
  },
  Tbilisi: {
    title: 'Tbilisi',
    description:
      "Tbilisi is the capital and the largest city of Georgia, lying on the banks of the Kura River with a population of approximately 1.5 million people. Tbilisi was founded in the 5th century AD by Vakhtang I of Iberia, and since then has served as the capital of various Georgian kingdoms and republics. Between 1801 and 1917, then part of the Russian Empire, Tiflis was the seat of the Caucasus Viceroyalty, governing both the northern and the southern parts of the Caucasus.Because of its location on the crossroads between Europe and Asia, and its proximity to the lucrative Silk Road, throughout history Tbilisi was a point of contention among various global powers. The city's location to this day ensures its position as an important transit route for energy and trade projects. Tbilisi's history is reflected in its architecture, which is a mix of medieval, neoclassical, Beaux Arts, Art Nouveau, Stalinist and the Modern structures.",
    image: 'images/tbilisi.jpg',
    image1: 'images/tbilisi-1.jpg',
  },
  KvemoKartli: {
    title: 'Kvemo Kartli(Lower Kartli)',
    description:
      'Kvemo Kartli is a historic province and current administrative region (mkhare) in southeastern Georgia. The city of Rustavi is a regional capital.It borders Tbilisi, Shida Kartli, and Mtskheta-Mtianeti on the north; Samtskhe–Javakheti on the west; Kakheti on the east; and the countries of Armenia and Azerbaijan on the south.The region is one of the most economically developed in Georgia. After Tbilisi, the region is ranked second in industrial production. The area of the region is of 6528 km squares, which accounts for 10% of the Georgian territory; and it is the fourth largest region by area. The region is the third most populated region in Georgia with a population of 497.000. The administrative center is Rustavi. There are 353 populated areas.',
    image: 'images/kvemo-kartli.jpg',
    image1: 'images/kvemo-kartli-1.jpg',
  },
  Javakheti: {
    title: 'Samtskhe-Javakheti',
    description:
      "Samtskhe–Javakheti is a region (mkhare) in southern Georgia with a population of 151,110 (2021) and an area of 6,413 km2 (2,476 sq mi). The region has Akhaltsikhe as its administrative center, while Besik Amiranashvili is governor of the region since August 2018. Samtskhe–Javakheti is compiled of the historical Georgian provinces Meskheti, Javakheti and Tori.The Baku-Tbilisi-Ceyhan oil pipeline, the South Caucasus natural gas pipeline, and the Kars–Tbilisi–Baku railway pass through the region.The region has six municipalities with 82 administrative communities (temi) and a total of 271 populated settlements.The current division of Georgia into 'regions' (Mkhare) was introduced by the Shevardnadze government in the mid-1990s, partly as a response to the secession of Abkhazia and the South Ossetia conflict. Samtskhe–Javakheti was basically formed by combining the two traditional provinces of Meskheti (Samtskhe) and Javakheti.",
    image: 'images/samtskhe-javakheti.jpg',
    image1: 'images/samtskhe-javakheti-1.jpg',
  },
  ShidaKartli: {
    title: 'Shida Kartli(Inner Kartli)',
    description:
      "Shida Kartli is a landlocked administrative region (Mkhare) in eastern Georgia. It comprises a central part of the historical-geographic province of Shida Kartli. With an area of 5,729 square kilometres (2,212 sq mi), Shida Kartli is the 8th largest Georgian region by land area. With 284,081 inhabitants, it is Georgia's seventh-most-populous region. Shida Kartli's capital and largest city, Gori, is the 5th largest city in Georgia.The region is bordered by the Russian Federation to the north, Georgian regions of Mtskheta-Mtianeti to the east, Kvemo Kartli to the south, Samtskhe-Javakheti to the southwest, Imereti to the west, and Racha-Lechkhumi and Kvemo Svaneti to the northwest. It consists of the following municipalities: Gori, Kaspi, Kareli, Java, Khashuri.The northern part of the region, namely Java, and northern territories of Kareli and Gori municipalities (total area of 1,393 km²), have been controlled by the authorities of the self-proclaimed Republic of South Ossetia since 1992 and occupied by Russian troops since 2008 Russo-Georgian war.",
    image: 'images/shida-kartli.jpg',
    image1: 'images/shida-kartli-1.jpg',
  },
};

// selecting document object so code would only run when page is ready
$(function () {
  // selecting path elements and giving functionality to each of them
  $('path').each(function () {
    // giving functionality when selected path is being clicked on
    $(this).on('click', function () {
      // hiding map
      $('path').hide();
      
      // selecting and defining title attribute
      const titleAttr = $(this).attr('title');

      // changing text according to object of same name as region
      $('.region-title').text(regions[titleAttr].title);
      $('.description').text(regions[titleAttr].description);

      // changing image according to object of same name as region
      $('.region-image').attr('src', regions[titleAttr].image);
      $('.region-image1').attr('src', regions[titleAttr].image1);

      // showing txt and back-to-map button
      $('.content').show();
      $('#back-btn').show();
    });
  });

  // adding functionality to back button when being clicked on
  $('#back-btn').on('click', function () {
    // showing map and hiding text and back-button
    $('.content').hide();
    $('path').show();
    $(this).hide();
  });
});
