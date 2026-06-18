const news = [
  {
    title: "Festival cultural movimenta centro histórico com música, dança e gastronomia",
    state: "BA",
    category: "Cultura",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A programação valoriza artistas locais e tradições populares.",
    time: "Há 12 min"
  },
  {
    title: "Projeto de tecnologia aproxima jovens da inovação no agreste",
    state: "PE",
    category: "Tecnologia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Oficinas e mentorias estimulam soluções para problemas locais.",
    time: "Há 28 min"
  },
  {
    title: "Praias recebem ações de preservação ambiental durante alta temporada",
    state: "CE",
    category: "Meio ambiente",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iniciativa reforça cuidados com turismo sustentável.",
    time: "Há 43 min"
  },
  {
    title: "Feira de artesanato destaca renda de bilro, cerâmica e literatura de cordel",
    state: "RN",
    category: "Economia criativa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expositores mostram a força da produção artesanal regional.",
    time: "Há 1 h"
  },
  {
    title: "Escolas desenvolvem atividades sobre memória, sotaque e identidade local",
    state: "PB",
    category: "Educação",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto incentiva estudantes a pesquisarem a história da comunidade.",
    time: "Há 2 h"
  },
  {
    title: "Roteiro turístico valoriza culinária, praias e manifestações populares",
    state: "AL",
    category: "Turismo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A proposta integra cultura, lazer e geração de renda.",
    time: "Há 3 h"
  },
  {
    title: "Comunidade recebe programação especial de São João fora de época",
    state: "SE",
    category: "Festas populares",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quadrilhas e comidas típicas movimentam o comércio local.",
    time: "Há 4 h"
  },
  {
    title: "Centro cultural abre exposição sobre ritmos e narrativas nordestinas",
    state: "MA",
    category: "Arte",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mostra reúne fotografias, objetos e registros audiovisuais.",
    time: "Há 5 h"
  },
  {
    title: "Produtores locais apostam em economia sustentável no semiárido",
    state: "PI",
    category: "Economia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iniciativas unem conhecimento tradicional e novas tecnologias.",
    time: "Há 6 h"
  }
];

const cities = {
  recife: {
    name: "Recife - PE",
    lat: -8.0476,
    lon: -34.8770
  },
  salvador: {
    name: "Salvador - BA",
    lat: -12.9777,
    lon: -38.5016
  },
  fortaleza: {
    name: "Fortaleza - CE",
    lat: -3.7319,
    lon: -38.5267
  },
  natal: {
    name: "Natal - RN",
    lat: -5.7945,
    lon: -35.2110
  },
  joaoPessoa: {
    name: "João Pessoa - PB",
    lat: -7.1195,
    lon: -34.8450
  },
  maceio: {
    name: "Maceió - AL",
    lat: -9.6498,
    lon: -35.7089
  },
  aracaju: {
    name: "Aracaju - SE",
    lat: -10.9472,
    lon: -37.0731
  },
  saoLuis: {
    name: "São Luís - MA",
    lat: -2.5307,
    lon: -44.3068
  },
  teresina: {
    name: "Teresina - PI",
    lat: -5.0919,
    lon: -42.8034
  }
};

const newsGrid = document.getElementById("newsGrid");
const stateFilter = document.getElementById("stateFilter");
const searchInput = document.getElementById("searchInput");
const citySelect = document.getElementById("citySelect");
const weatherResult = document.getElementById("weatherResult");
const currencyGrid = document.getElementById("currencyGrid");
const themeButton = document.getElementById("themeButton");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const pageProgress = document.getElementById("pageProgress");
const backTop = document.getElementById("backTop");

function renderNews() {
  const selectedState = stateFilter.value;
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredNews = news.filter((item) => {
    const matchesState = selectedState === "todos" || item.state === selectedState;

    const searchableText = `
      ${item.title}
      ${item.state}
      ${item.category}
      ${item.text}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesState && matchesSearch;
  });

  if (filteredNews.length === 0) {
    newsGrid.innerHTML = `
      <article class="news-card">
        <div class="news-body">
          <h3>Nenhuma notícia encontrada</h3>
          <p>Tente alterar o filtro de estado ou buscar outra palavra-chave.</p>
        </div>
      </article>
    `;
    return;
  }

  newsGrid.innerHTML = filteredNews.map((item, index) => `
    <article class="news-card">
      <div class="news-image" data-state="${item.state}"></div>

      <div class="news-body">
        <span class="tag">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>

        <div class="news-meta">
          <span>${item.time}</span>
          <a href="#" class="read-more" onclick="fakeReadMore(event, ${index})">
            Ler mais
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

function fakeReadMore(event, index) {
  event.preventDefault();
  alert("Este é um wireframe. A notícia completa pode ser adicionada depois.");
}

function getWeatherDescription(code) {
  const descriptions = {
    0: "Céu limpo",
    1: "Principalmente limpo",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    48: "Neblina com geada",
    51: "Garoa leve",
    53: "Garoa moderada",
    55: "Garoa forte",
    61: "Chuva leve",
    63: "Chuva moderada",
    65: "Chuva forte",
    80: "Pancadas de chuva leves",
    81: "Pancadas de chuva moderadas",
    82: "Pancadas de chuva fortes",
    95: "Trovoadas"
  };

  return descriptions[code] || "Condição variável";
}

async function loadWeather(cityKey = "recife") {
  const city = cities[cityKey];

  weatherResult.innerHTML = `<p>Carregando previsão para ${city.name}...</p>`;

  const url = `
    https://api.open-meteo.com/v1/forecast
    ?latitude=${city.lat}
    &longitude=${city.lon}
    &current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code
    &timezone=America%2FSao_Paulo
  `.replace(/\s/g, "");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro ao buscar previsão.");
    }

    const data = await response.json();
    const current = data.current;

    const temp = Math.round(current.temperature_2m);
    const humidity = current.relative_humidity_2m;
    const wind = Math.round(current.wind_speed_10m);
    const description = getWeatherDescription(current.weather_code);

    weatherResult.innerHTML = `
      <div class="weather-main">
        <div>
          <strong>${city.name}</strong>
          <p class="weather-desc">${description}</p>
        </div>

        <div class="weather-temp">${temp}°C</div>
      </div>

      <div class="weather-details">
        <span>💧 Umidade: <strong>${humidity}%</strong></span>
        <span>🌬️ Vento: <strong>${wind} km/h</strong></span>
      </div>
    `;
  } catch (error) {
    weatherResult.innerHTML = `
      <div class="weather-main">
        <div>
          <strong>${city.name}</strong>
          <p class="weather-desc">Não foi possível carregar a API agora.</p>
        </div>

        <div class="weather-temp">28°C</div>
      </div>

      <div class="weather-details">
        <span>💧 Umidade: <strong>70%</strong></span>
        <span>🌬️ Vento: <strong>14 km/h</strong></span>
      </div>
    `;
  }
}

async function loadCurrency() {
  const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro ao buscar cotações.");
    }

    const data = await response.json();

    const currencies = [
      {
        name: "Dólar",
        code: "USD",
        data: data.USDBRL
      },
      {
        name: "Euro",
        code: "EUR",
        data: data.EURBRL
      },
      {
        name: "Libra",
        code: "GBP",
        data: data.GBPBRL
      }
    ];

    currencyGrid.innerHTML = currencies.map((item) => {
      const value = Number(item.data.bid).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });

      const variation = Number(item.data.pctChange);
      const variationClass = variation >= 0 ? "positive" : "negative";
      const signal = variation >= 0 ? "+" : "";

      return `
        <div class="currency-item">
          <strong>${item.name} (${item.code})</strong>
          <span>${value}</span>
          <small class="${variationClass}">
            ${signal}${variation.toFixed(2)}%
          </small>
        </div>
      `;
    }).join("");
  } catch (error) {
    currencyGrid.innerHTML = `
      <div class="currency-item">
        <strong>Dólar</strong>
        <span>R$ 5,40</span>
        <small>Valor exemplo</small>
      </div>

      <div class="currency-item">
        <strong>Euro</strong>
        <span>R$ 6,10</span>
        <small>Valor exemplo</small>
      </div>

      <div class="currency-item">
        <strong>Libra</strong>
        <span>R$ 7,20</span>
        <small>Valor exemplo</small>
      </div>
    `;
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeButton.textContent = isDark ? "☀️ Modo" : "🌙 Modo";
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️ Modo";
  }
}

function updateProgressBar() {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const progress = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

  pageProgress.style.width = `${progress}%`;

  if (scrollTop > 420) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
}

stateFilter.addEventListener("change", renderNews);
searchInput.addEventListener("input", renderNews);

citySelect.addEventListener("change", () => {
  loadWeather(citySelect.value);
});

themeButton.addEventListener("click", toggleTheme);

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.addEventListener("click", () => {
  mainNav.classList.remove("open");
});

window.addEventListener("scroll", updateProgressBar);

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

loadSavedTheme();
renderNews();
loadWeather();
loadCurrency();
updateProgressBar();