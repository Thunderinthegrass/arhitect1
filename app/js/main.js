//слайдера
const heroSwiper = new Swiper(".hero__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// const advantages = () => {
//   let width = document.documentElement.clientWidth;
//   let slider = document.querySelector('.advantages__slider');
  

//   if (width <= 1200) {
//     slider.classList.add('advantages__slider1');
//   }
//   else{
//     slider.classList.remove('advantages__slider1');
//   }
// }
// advantages();

const advantagesSwiper = new Swiper(".advantages__slider", {
    slidesPerView: 0,
    spaceBetween: 30,
});

const productsSwiperAll = new Swiper(".products__slider-all", {
  slidesPerView: 'auto',
  spaceBetween: 15,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".product-swiper-button-next",
    prevEl: ".product-swiper-button-prev",
  },
  pagination: {
    el: ".products-swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {// настройки для разных разрешений
    1480: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

const productsSwiperPanels = new Swiper(".products__slider-panels", {
  slidesPerView: 'auto',
  spaceBetween: 15,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".product-swiper-button-next",
    prevEl: ".product-swiper-button-prev",
  },
  pagination: {
    el: ".products-swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {// настройки для разных разрешений
    1480: {
      slidesPerView: '3',
      spaceBetween: 30,
    },
  }
});

const productsSwiperArchitectural = new Swiper(".products__slider-architectural", {
  slidesPerView: 'auto',
  spaceBetween: 15,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".product-swiper-button-next",
    prevEl: ".product-swiper-button-prev",
  },
  pagination: {
    el: ".products-swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {// настройки для разных разрешений
    1480: {
      slidesPerView: '3',
      spaceBetween: 30,
    },
  }
});

const productsSwiperTorrazzo = new Swiper(".products__slider-torrazzo", {
  slidesPerView: 'auto',
  spaceBetween: 15,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".product-swiper-button-next",
    prevEl: ".product-swiper-button-prev",
  },
  pagination: {
    el: ".products-swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {// настройки для разных разрешений
    1480: {
      slidesPerView: '3',
      spaceBetween: 30,
    },
  }
});

const catalogSliderThumbs = new Swiper(".catalog__slider-thumbs", {
  spaceBetween: 0,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {// настройки для разных разрешений
    767: {
      spaceBetween: 12,
    },
  }
});
const catalogSliderTop = new Swiper(".catalog__slider-top", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: catalogSliderThumbs,
  },
});

const projectsSlider = new Swiper(".projects__slider", {
  slidesPerView: 'auto',
  spaceBetween: 15,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".project-swiper-button-next",
    prevEl: ".project-swiper-button-prev",
  },
  pagination: {
    el: ".projects-swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {// настройки для разных разрешений
    1480: {
      slidesPerView: 2,
      spaceBetween: 50,
    }
  }
});

const projectModalSlider = new Swiper(".project-modal__slider", {
  navigation: {
    nextEl: ".project-slider-button-next",
    prevEl: ".project-slider-button-prev",
  },
  pagination: {
    el: ".project-modal__pagination",
    type: "bullets",
    clickable: true,
  },
});

//плавный скролл к ссылкам
function scrollToLink() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
scrollToLink();

//модальные окна
function modal() {
  const btns = document.querySelectorAll(".modal-btn");
  const modalOverlay = document.querySelector(".modal-overlay ");
  const modals = document.querySelectorAll(".modal");
  const modalCloseBtn = document.querySelectorAll(".close-btn");
  const catalogRequestBtn = document.querySelectorAll('.catalog__request-btn');
  const modalForm = document.querySelector('.modal-form');
  
  
  // const close = document.querySelectorAll(".close");

  btns.forEach((el) => {
    el.addEventListener("click", (e) => {
      // document.body.classList.add('ov-hidden');
      let path = e.currentTarget.getAttribute("data-path");

      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });

      if (document.querySelector(`[data-target="${path}"]`)) {
        document.querySelector(`[data-target="${path}"]`).classList.add("modal--visible");
      }
        modalOverlay.classList.add("modal-overlay--visible");
    });
  });

  //модалка каталога
  catalogRequestBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      modalForm.classList.add('modal--visible');

    })
  }) 

  modalOverlay.addEventListener("click", (e) => {
    // document.body.classList.remove('ov-hidden');
      if (e.target == modalOverlay) {
        modalOverlay.classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
          el.classList.remove("modal--visible");
        });
      }
  });

  modalCloseBtn.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      // document.body.classList.remove('ov-hidden');
      
      modalOverlay.classList.remove("modal-overlay--visible");
      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });
    });
  })
}
modal();

//placeholder инпутов
let placeholder = () => {
  let input = document.querySelectorAll('.form-item');
  let label = document.querySelectorAll('.label');
  
  input.forEach((elem, id) => {
    elem.addEventListener('blur', () => {
      if (elem.value != '') {
        label[id].classList.add('active');
      }
      else {
        label[id].classList.remove('active');
      }
      console.log(elem.value);
    })
  })
}
placeholder();

//увеличивающаяся по мере заполняемости текстом textarea
let textareaTransfer = () => {
  let textarea = document.querySelectorAll('.textarea');
  
  textarea.forEach((elem) => {
    elem.setAttribute('style', 'height:' + (textarea.scrollHeight) + 'px;overflow-y:hidden;');
    elem.addEventListener("input", OnInput, false);
  })

  function OnInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  }
}
textareaTransfer();

// изменение хедера при прокрутке и прилипании
let scroll = () => {
  if (document.body.clientWidth <= 1110) {
    return;
  }

  let header =  document.querySelector('.header');

  if (header) {
    window.addEventListener("scroll", function() {
      let scroll = document.querySelector("body");
      let scrollHeight = scroll.getBoundingClientRect().top;
    
      if (scrollHeight < 0) {
        header.classList.add('sticky');
      }
      else{
        header.classList.remove('sticky');
      }
    })
  }
}
scroll();

//мобильное меню
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("ov-hidden");
});

nav.querySelectorAll("a, button").forEach((elem) => {
  elem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("ov-hidden");
  });
});

//табы преимущества
let stageTabs = () => {
  let tabBtn = document.querySelectorAll('.stages__name-wrapper');
  let tabInfo = document.querySelectorAll('.stages__info');

  tabBtn.forEach((elem, id) => {
    if (document.body.offsetWidth <= 1496) {//если ширина экрана меньше или равна 1496px
      elem.classList.remove('active');//убираем активные классы у первых табов
      tabInfo[id].classList.remove('active');

      elem.addEventListener('click', (e) => {//если по клику на элемент

        if (e.target.classList.contains('active')) {//у него есть класс active
          e.target.classList.remove('active');//у этого элемента убираем класс active
          e.target.closest('.stages__item').querySelector('.stages__info').classList.remove('active');// и у контента убираем класс active
        }
        else {//если по клику на элемент, у него нет класса active
          tabBtn.forEach((elem, id) => {//то сначала делаем все активные элементы неактивными
            elem.classList.remove('active');
            tabInfo[id].classList.remove('active');

            e.target.classList.add('active');//потом выбранный элемент активным
            e.target.closest('.stages__item').querySelector('.stages__info').classList.add('active');
          })
        }
      })
    }
    else {//если ширина больше, делаем обычные табы
      elem.addEventListener('click', () => {
        tabBtn.forEach((elem, id) => {
          elem.classList.remove('active');
          tabInfo[id].classList.remove('active')
        })
  
        tabInfo[id].classList.add('active');
        elem.classList.add('active');
      })
    }
  })
}
stageTabs();

//размер контейнера секции about в зависимости от ширины экрана
let aboutWidth = () => {
  let container = document.querySelectorAll('.stretching-container');
  let width = document.documentElement.clientWidth;

  console.log(container);
  

  // if (width > 1920) {
    let paddingContainer = (width - 1760) / 2 + 20;

    container.forEach((elem) => {
      elem.style.paddingRight = `${paddingContainer}px`;
    })
  // }
}
aboutWidth();

//фильтр продуктов
let productsFilters = () => {
  const btn = document.querySelectorAll('.filters__btn');
  const productsSlider = document.querySelectorAll('.products__slider');
  const products = document.querySelector('.products');
  
  btn.forEach(elem => {

    elem.addEventListener('click', (e) => {
      let active = document.querySelector('.filters__btn.active');

      if (e.target != active) {
        active.classList.remove('active');
        e.target.classList.add('active')
      }

      let data = e.target.getAttribute("data-filter");

      productsSlider.forEach((elem) => {
        elem.classList.remove('active')
      })

      products
        .querySelectorAll(`[data-category="${data}"]`)
        .forEach((elem) => {
          elem.classList.add("active");
        });
    })
  })
  
}
productsFilters();

//услуги
let servicesWidth = () => {
  let width = document.documentElement.clientWidth;
  const item = document.querySelectorAll('.services__item');
  
  // if (width => 1720) {
    let padding = (width - 1760) / 2 + 20;

    if (padding <= 20) {
      padding = 20;
    }

    item.forEach((elem, id) => {
      if (id % 2 == 0) {
        elem.style.paddingRight = `${padding}px`;
        elem = elem.querySelector('.services__item-info');
        elem.style.paddingLeft = `${padding}px`;
      }
      else {
        elem.style.paddingLeft = `${padding}px`;
        elem.querySelector('.services__item-info').style.paddingRight = `${padding}px`
      }
    })
  // }
}
servicesWidth();