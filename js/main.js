

var swiper = new Swiper('.team__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
    on: {
      slideChange: function() {
        var activeSlide = this.slides[this.activeIndex];
        activeSlide.classList.add('active');
        setTimeout(function() {
          activeSlide.classList.remove('active');
        }, 3000);
      }
    }
  });


 // TABS


const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItem = document.querySelectorAll(".tabs__item");

//приховує таби та прибирає active в кнопок

function hideTabs(){
    tabsItem.forEach(item=>item.classList.add("hide"));    
    tabsBtns.forEach(item => item.classList.remove("active"));
}

//показує переданий номер таба и робить відповідну йому кнопку активною

function showTab(index){
    tabsItem[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index)=> btn.addEventListener("click", ()=>{
    hideTabs();
    showTab(index);
}));


// Form

function submitForm() {
  var form = document.getElementById('contact__form');
  form.submit();
}

document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.button__contact');
  let selectedCategory = null;

  categoryButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      categoryButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });

      button.classList.add('active');
      selectedCategory = button.textContent;
    });
  });

  const form = document.querySelector('.contact__form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('.contact__form-input[placeholder="Name *"]').value;
    const email = document.querySelector('.contact__form-input[placeholder="Email *"]').value;
    const phone = document.querySelector('.contact__form-input[placeholder="Phone *"]').value;
    const company = document.querySelector('.contact__form-input[placeholder="Company"]').value;
    const message = document.querySelector('.contact__form-area').value;

    if (selectedCategory) {
      console.log('Category:', selectedCategory);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Company:', company);
      console.log('Message:', message);

      // Виконати додаткові дії для відправки форми разом з вибраною категорією
      // Наприклад, ви можете відправити дані на сервер або виконати AJAX-запит
    } else {
      console.log('Виберіть категорію');
    }
  });
});





// Video 

$(document).ready(function() {
  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 0
    }
  });
});



// Slider Carousel

document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.carousel-slide');
  var arrows = document.querySelectorAll('.carousel-arrow');
  var currentSlide = 0;

  function showSlide(index) {
    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
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

  arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function() {
      if (this.classList.contains('prev')) {
        prevSlide();
      } else if (this.classList.contains('next')) {
        nextSlide();
      }
    });
  });

  showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function() {
      const tabButtonsContainer = document.querySelector('.tab-buttons-container');
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContent = document.querySelector('.tab-content');

      let currentPosition = 0;

      tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          const buttonIndex = Array.from(tabButtons).indexOf(button);
          const buttonWidth = button.offsetWidth;
          const containerWidth = tabButtonsContainer.offsetWidth;

          if (buttonIndex >= 0 && buttonIndex < tabButtons.length) {
            const maxPosition = containerWidth - tabButtonsContainer.scrollWidth;
            currentPosition = Math.min(0, Math.max(maxPosition, -buttonIndex * buttonWidth));

            tabButtonsContainer.style.transform = `translateX(${currentPosition}px)`;

            const tabId = button.getAttribute('data-tab');
            const tabItems = tabContent.querySelectorAll('.tab-item');

            tabItems.forEach(function(item) {
              item.classList.remove('active');
              if (item.getAttribute('id') === tabId) {
                item.classList.add('active');
              }
            });
          }
        });
      });
    });


    // Team

    $('.carousel__inner').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });      


    