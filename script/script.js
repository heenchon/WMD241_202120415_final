// console.log('Hello World');
// let elembody = document.body;
// console.log(elembody);
// elembody.style.backgroundColor = 'oklch(0.8 0.05 0)';

// let aCard = document.querySelector('.card'); // 클래스가 card인 요소 찾아 변수 지정
// console.log(aCard);
// aCard.addEventListener('click', function () {
//   console.log('CLICK!');
//   // aCard.style.backgroundColor = "#ff0000";
//   aCard.classList.toggle('card--state-clicked');
//   console.log(aCard.classList);
// });

// document.querySelectorAll(".card");

// let category = document.querySelector('.category');
// let dp_change = document.querySelector('.display-none');

// category.addEventListener('mouseover', function () {
//   console.log('over!');
//   dp_change.computedStyleMap.diplay = 'none';
//   category.style.color = 'purple';
// });

// category.addEventListener('mouseout', function () {
//   console.log('out');
//   dp_change.computedStyleMap.diplay = 'none';
// });

let category = document.querySelectorAll('.category');
// let dp_change = document.querySelectorAll('.display-none');

// for (let i = 0; i < dp_change.length; i++) {
//   let eachDP = dp_change[i];
//   eachDP.addEventListener('mouseover', function () {
//     console.log('over');
//     eachDP.style.display = 'block';
//   });
// }

// category.addEventListener('mouseover', function () {
//   document.querySelector('.display-none').style.display = 'block';
// });

// category.addEventListener('mouseout', function () {
//   // document.getElementById('block').style.display = 'none';
//   document.querySelector('.display-none').style.display = 'none';
// });

category.forEach((eachCate) => {
  eachCate.addEventListener('mouseover', () => {
    const eachDP = eachCate.querySelector('.display-none');
    eachDP.style.display = 'block';
  });

  eachCate.addEventListener('mouseout', () => {
    const eachDP = eachCate.querySelector('.display-none');
    eachDP.style.display = 'none';
  });
});
