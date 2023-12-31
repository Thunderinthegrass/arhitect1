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

let projectsModalSlider = () => {
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
}


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

//цвет инпута при автозаполнении


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

//яндекс карты
let int = setTimeout(() => {
  ymaps.ready(init);
function init(){
  let map = new ymaps.Map("map", {
    center: [60.01861921017354,30.362484260156364],
    zoom: 14
  });

  let myPlacemark = new ymaps.Placemark([60.01861921017354,30.362484260156364], {}, { 
    iconLayout: 'default#image',
    iconImageHref: '../img/svg/logo-simbol.svg',
    icon_imagesize: [30, 42],
    iconImageOffset: [-3, -42]
});

  map.geoObjects.add(myPlacemark);

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
}, 1200);

let dataPopupProduct = () => {
  let product = document.querySelectorAll('.product');

  product.forEach((elem) => {
    let productInfo = elem.querySelector('.product__top');
    let productInfoParameters = document.querySelector('.product-info__parameters');
    
    productInfo.addEventListener('click', (e) => {//по нажатию на продукт
      let parameters = e.currentTarget.closest('.product').querySelectorAll('.parameter');

      if (productInfoParameters.hasChildNodes()) {
        productInfoParameters.innerHTML = '';
      }

      if (parameters) {//добавляем всю шнягу в попап

        for (let i = 0; i < parameters.length; i++) {
          let name = parameters[i].querySelector('.parameter-name').innerHTML;
          let value = parameters[i].querySelector('.parameter-value').innerHTML;

          let productInfoParameter = document.createElement('li');
          productInfoParameter.classList.add('product-info__parameter');
          productInfoParameter.classList.add('parameter');
          productInfoParameters.appendChild(productInfoParameter);

          let parameterName = document.createElement('span');
          parameterName.classList.add('parameter-name');
          productInfoParameter.appendChild(parameterName)
          parameterName.innerHTML = name;

          let parameterValue = document.createElement('span');
          parameterValue.classList.add('parameter-value');
          productInfoParameter.appendChild(parameterValue)
          parameterValue.innerHTML = value;
        }
      }

      let vendorCode = e.currentTarget.closest('.product').querySelector('.product__parameters-vendor-code');
      if (vendorCode) {
        document.querySelector('.vendor-code').innerHTML = vendorCode.innerHTML;
      }

      let productTitle = e.currentTarget.closest('.product').querySelector('.product__title');
      if (productTitle) {
        document.querySelector('.product-info__title').innerHTML = productTitle.innerHTML;
      }

      let productDescr = e.currentTarget.closest('.product').querySelector('.product__descr');
      if (productDescr) {
        document.querySelector('.product-info__subtitle').innerHTML = productDescr.innerHTML;
      }

      let productPrice = e.currentTarget.closest('.product').querySelector('.product__price');
      if (productPrice) {
        document.querySelector('.product-info__price').innerHTML = productPrice.innerHTML;
      }
    })
  })
}
dataPopupProduct();

let dataPopupProject = () => {
  let project = document.querySelectorAll('.project__top');
  let modalTitle = document.querySelector('.project-modal__title');
  let modalDate = document.querySelector('.project-modal__date');
  let modalLogo = document.querySelector('.project-modal-logo');
  let projectModalParameters = document.querySelector('.project-modal__parameters');
  
  let modalInfo = document.querySelector('.project-modal__info');
  let projectModalSliderWrapper = document.querySelector('.project-modal__slider-wrapper');
  
  project.forEach((elem) => {
    let title = elem.querySelector('.project__title');
    let logo = elem.closest('.project').querySelector('.project__logo').getAttribute('src');
    
    let date = elem.querySelector('.project__date');
    let info = elem.querySelector('.project__data-info');

    elem.addEventListener('click', () => {
      modalTitle.textContent = title.textContent;
      modalDate.textContent = date.textContent;
      modalLogo.setAttribute('src', logo);
      modalInfo.textContent = info.textContent;

      projectModalParameters.innerHTML = '';
      let projectParameters = elem.querySelector('.project__parameters').innerHTML;
      projectModalParameters.innerHTML = projectParameters;

      projectModalSliderWrapper.innerHTML = '';

      let imgSlider = elem.querySelectorAll('.project__slider-img');

      let projectModalSlider = document.createElement('div');
      projectModalSlider.classList.add('project-modal__slider');
      projectModalSliderWrapper.appendChild(projectModalSlider);

      let swiperWrapper = document.createElement('div');
      swiperWrapper.classList.add('swiper-wrapper');
      projectModalSlider.appendChild(swiperWrapper);

      let arrowPrev = document.createElement('div');
      arrowPrev.classList.add('project-slider-button-prev');
      arrowPrev.innerHTML = `<svg class="arrow-prev slider-arrow"><use xlink:href="img/sprite/sprite.svg#slider-arrow"></use></svg>`;
      projectModalSliderWrapper.appendChild(arrowPrev)

      let arrowNext = document.createElement('div');
      arrowNext.classList.add('project-slider-button-next');
      arrowNext.innerHTML = `<svg class="arrow-prev slider-arrow"><use xlink:href="img/sprite/sprite.svg#slider-arrow"></use></svg>`;
      projectModalSliderWrapper.appendChild(arrowNext)
      
      let pagination = document.createElement('div');
      pagination.classList.add('project-modal__pagination');
      projectModalSliderWrapper.appendChild(pagination);

      for (let i = 0; i < imgSlider.length; i++) {
        let slide = document.createElement('div');
        slide.classList.add('swiper-slide', 'project__modal-slide');
        swiperWrapper.appendChild(slide)

        let img = document.createElement('img');
        img.classList.add('project-modal__img');
        img.setAttribute('alt', 'фото проекта');
        img.setAttribute('src', `${imgSlider[i].getAttribute('src')}`);
        slide.appendChild(img);
      }
      projectsModalSlider();
    })
  })
}
dataPopupProject();