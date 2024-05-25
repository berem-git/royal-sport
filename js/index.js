document.querySelectorAll('.carousel-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
      const imageUrl = this.getAttribute('data-image');
      const imageContainer = document.getElementById('carouselImage');
      imageContainer.style.backgroundImage = `url(${imageUrl})`;
      imageContainer.style.display = 'block';
  });

  item.addEventListener('mouseleave', function() {
      const imageContainer = document.getElementById('carouselImage');
      imageContainer.style.display = 'none';
  });
});


const localization = {
    ru: {
      about: "О нас",
      brands: "Бренды",
      cooperation: "Сотрудничество",
      geography: "География",
      welcom:'ДОБРО ПОЖАЛОВАТЬ В МИР Roayl Sport!',
    },
    en: {
      about: "About Us",
      brands: "Brands",
      cooperation: "Cooperation",
      geography: "Geography",
      welcom:'ДОБРО ПОЖАЛОВАТЬ В МИР Roayl Sport!',
    },
    kg: {
      about: "Биз жөнүндө",
      brands: "Бренддер",
      cooperation: "Кызматташуу",
      geography: "География",
      welcom:'ДОБРО ПОЖАЛОВАТЬ В МИР Roayl Sport!',
    }
  };

  function changeLanguage(language) {
    document.getElementById("about").textContent = localization[language].about;
    document.getElementById("brands").textContent = localization[language].brands;
    document.getElementById("cooperation").textContent = localization[language].cooperation;
    document.getElementById("geography").textContent = localization[language].geography;

    localStorage.setItem('preferredLanguage', language);
  }

  function loadPreferredLanguage() {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
      changeLanguage(preferredLanguage);
    }
  }
  
  document.getElementById("lang-ru").addEventListener("click", () => changeLanguage("ru"));
  document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));
  document.getElementById("lang-kg").addEventListener("click", () => changeLanguage("kg"));

  window.onload = loadPreferredLanguage;