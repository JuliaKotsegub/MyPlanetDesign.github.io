// Rewiews

document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".carousel-slide");
  var arrows = document.querySelectorAll(".carousel-arrow");
  var currentSlide = 0;

  function showSlide(index) {
    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  arrows.forEach(function (arrow) {
    arrow.addEventListener("click", function () {
      if (this.classList.contains("prev")) {
        prevSlide();
      } else if (this.classList.contains("next")) {
        nextSlide();
      }
    });
  });

  showSlide(currentSlide);
});

// Team


    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        variableHeight: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      });

//  Кнопка "Подивитись ще"

// const showMore = document.querySelector('.article__link');
// const productLenght = document.querySelector('.grid-item').length;
// let items = 6;

// showMore.addEventListener('click', () =>{
//   items += 3;
// 	const array = Array.from(document.querySelector('.grid-section').children);
// 	const visItems = array.slice(0, items);

// 	visItems.forEach(el => el.classList.add('is-visible'));

// 	if (visItems.length === productsLength) {
// 		showMore.style.display = 'none';
// 	}
// });

    

// .grid-item:nth-child(n+7){
//   display: none;
// }

// .grid-item.is-visible{
//   display: block;
// }

// .grid-item{
//   display: inline-block;
// }

      
      // .none{
//   display: none;
// }

// #blocksContainer {
//   display: flex;
//   flex-wrap: wrap;
// }
// .article__link-btn {
//   grid-column: 2/3 span;
//   text-align: center;