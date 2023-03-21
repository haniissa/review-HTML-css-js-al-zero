// animation in gsap

// js see just one element

// make array to add all the elements
let cards = document.querySelectorAll('section.cards .cards .card ');

// console.log(cards);
cards.forEach((card, i) => {
  let hover = gsap.to(card, {
    y: -20,
    paused: true, // do not run animation until to hover
    duration: 0.3,
    boxShadow: '3px 3px 10px 3px #e7e3e3',
  });

  card.addEventListener('mouseenter', () => hover.play());
  card.addEventListener('mouseleave', () => hover.reverse());
});

// -: gallery section:
let galleryCards2 = document.querySelectorAll(
  '.gallery .container .cards2 .card2'
);

galleryCards2.forEach((card2) => {
  let boxImg = card2.children[0].children[0];
  let img = card2.children[0].children[0].children[0];

  let hover = gsap.to(img, {
    paused: true,
    scale: 1.1,
    rotate: -5,
  });

  boxImg.addEventListener('mouseenter', () => hover.play());
  boxImg.addEventListener('mouseleave', () => hover.reverse());
});

//-: features animation
gsap.registerPlugin(CSSRulePlugin);
let infoBefore = document.querySelectorAll(
  '.features .featuresBox .feature .info'
);
// let feature = document.querySelectorAll('.features .featuresBox .feature');

// gsap.registerPlugin(CSSRulePlugin);
CSSPlugin.defaultSkewType = 'simple';
// CSSPlugin.getRule('.info::before');
// let before = CSSRulePlugin.getRule('.info::before');

const sheet = new CSSStyleSheet();

function runs() {
  // document.head.appendChild(styleSheet);
  sheet.replaceSync(`
    .features .container .featuresBox .feature .info::before{
      transform: skewY(15deg);
    }`);
  document.adoptedStyleSheets = [sheet];
}
function notRuns() {
  // document.head.appendChild(styleSheet);
  sheet.replaceSync(`
      .features .container .featuresBox .feature .info::before{
        transform: skewY(-15deg);
      }
    `);
  //applay the stylesheet to document
  document.adoptedStyleSheets = [sheet];
}

infoBefore.forEach((info) => {
  // let before = getComputedStyle(info, '::before');
  // console.log(before);
  let hover = gsap.to(info, {
    paused: true,
    skewY: 15,
  });
  // let hover2 = gsap.to(info, {
  //   paused: true,
  //   // skewY: 15,
  //   notRuns: notRuns,
  // });
  // info.parentElement.addEventListener('mouseenter', () => runs());
  // info.parentElement.addEventListener('mouseleave', () => notRuns());
  info.parentElement.addEventListener('mouseenter', () => hover.play());
  info.parentElement.addEventListener('mouseleave', () => hover.reverse());
});

// console.log(infoBefore);
