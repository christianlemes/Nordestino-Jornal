/* =========================================================
   JORNAL DIGITAL NORDESTINO
   script.js

   Este arquivo controla apenas a página inicial index.html:
   - cards de notícias
   - filtro por estado
   - busca
   - previsão do tempo
   - cotação de moedas
   - modo escuro
   - menu mobile
   - barra de progresso
   - botão voltar ao topo
========================================================= */


/* =========================================================
   1. DADOS RESUMIDOS DAS NOTÍCIAS

   Estes dados aparecem nos cards da página inicial.
   O campo id precisa bater com o id correspondente no noticia.js.
========================================================= */

const news = [
  {
    id: 1,
    title: "Incêndio atinge casarão abandonado no centro de Salvador",
    state: "BA",
    category: "Regional",
    text: "Imóvel localizado na região dos Barris mobilizou equipes do Corpo de Bombeiros.",
    time: "Há 2 hrs"
  },
  {
    id: 2,
    title: "Feriado de São João: saiba o que abre e o que fecha no Grande Recife",
    state: "PE",
    category: "Diário",
    text: "Feriado junino altera o funcionamento de serviços públicos, comércio e shoppings.",
    time: "Há 9 hrs"
  },
  {
    id: 3,
    title: "Pamonha na palha do milho: aprenda receita tradicional da festa de São João",
    state: "CE",
    category: "Culinária",
    text: "Receita típica do período junino valoriza ingredientes simples e tradição familiar.",
    time: "Ontem"
  },
  {
    id: 4,
    title: "Família é investigada após ocorrência grave dentro de casa em Natal",
    state: "RN",
    category: "Segurança",
    text: "Polícia investiga as circunstâncias de uma ocorrência doméstica registrada na Zona Oeste de Natal.",
    time: "Há 1 h"
  },
  {
    id: 5,
    title: "São João na Paraíba: confira programação das festas nas principais cidades",
    state: "PB",
    category: "Cultura",
    text: "Festas juninas movimentam cidades paraibanas com shows, quadrilhas e programação gratuita.",
    time: "Há 2 h"
  },
  {
    id: 6,
    title: "Cuscuzeira gigante distribui cuscuz de graça no São João Massayó",
    state: "AL",
    category: "Culinária",
    text: "Ação gastronômica valoriza o cuscuz, um dos alimentos mais tradicionais da região.",
    time: "Há 3 h"
  },
  {
    id: 7,
    title: "Plataforma digital do NAT oferta mais de 1.400 vagas de emprego para diversas áreas",
    state: "SE",
    category: "Oportunidades",
    text: "Há vagas disponíveis para a capital e para o interior, com cadastro feito pela internet.",
    time: "Há 4 h"
  },
  {
    id: 8,
    title: "Bezerro nasce com duas cabeças no interior do Maranhão; mãe sobreviveu",
    state: "MA",
    category: "Curiosidade",
    text: "Caso raro chamou atenção de moradores no interior maranhense.",
    time: "Há 5 h"
  },
  {
    id: 9,
    title: "Comunidade debate segurança familiar e prevenção de acidentes domésticos no Piauí",
    state: "PI",
    category: "Comunidade",
    text: "Ação reforça orientações sobre cuidado, prevenção e proteção dentro de casa.",
    time: "Há 6 h"
  }
];


/* =========================================================
   2. DADOS DAS CIDADES PARA A API DE PREVISÃO DO TEMPO
========================================================= */

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


/* =========================================================
   3. SELEÇÃO DOS ELEMENTOS DA INDEX.HTML
========================================================= */

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


/* =========================================================
   4. RENDERIZAÇÃO DOS CARDS DE NOTÍCIAS
========================================================= */

function renderNews() {
  if (!newsGrid || !stateFilter || !searchInput) {
    return;
  }

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

  newsGrid.innerHTML = filteredNews.map((item) => `
    <article class="news-card">
      <div class="news-image" data-state="${item.state}"></div>

      <div class="news-body">
        <span class="tag">${item.category}</span>

        <h3>${item.title}</h3>

        <p>${item.text}</p>

        <div class="news-meta">
          <span>${item.time}</span>

          <a href="noticia.html?id=${item.id}" class="read-more">
            Ler mais
          </a>
        </div>
      </div>
    </article>
  `).join("");
}


/* =========================================================
   5. DESCRIÇÃO DOS CÓDIGOS DA API DE TEMPO
========================================================= */

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


/* =========================================================
   6. API DE PREVISÃO DO TEMPO
========================================================= */

async function loadWeather(cityKey = "recife") {
  if (!weatherResult) {
    return;
  }

  const city = cities[cityKey];

  if (!city) {
    weatherResult.innerHTML = `<p>Cidade não encontrada.</p>`;
    return;
  }

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


/* =========================================================
   7. API DE COTAÇÃO DE MOEDAS
========================================================= */

async function loadCurrency() {
  if (!currencyGrid) {
    return;
  }

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


/* =========================================================
   8. MODO ESCURO
========================================================= */

function updateThemeButtonText() {
  if (!themeButton) {
    return;
  }

  const isDark = document.body.classList.contains("dark");
  themeButton.textContent = isDark ? "Modo claro" : "Modo escuro";
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateThemeButtonText();
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  updateThemeButtonText();
}


/* =========================================================
   9. BARRA DE PROGRESSO E BOTÃO VOLTAR AO TOPO
========================================================= */

function updateProgressBar() {
  if (!pageProgress) {
    return;
  }

  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const progress = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

  pageProgress.style.width = `${progress}%`;

  if (!backTop) {
    return;
  }

  if (scrollTop > 420) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   10. MENU MOBILE
========================================================= */

function toggleMobileMenu() {
  if (!mainNav) {
    return;
  }

  mainNav.classList.toggle("open");
}

function closeMobileMenu() {
  if (!mainNav) {
    return;
  }

  mainNav.classList.remove("open");
}


/* =========================================================
   11. EVENTOS DA PÁGINA INICIAL
========================================================= */

if (stateFilter) {
  stateFilter.addEventListener("change", renderNews);
}

if (searchInput) {
  searchInput.addEventListener("input", renderNews);
}

if (citySelect) {
  citySelect.addEventListener("change", () => {
    loadWeather(citySelect.value);
  });
}


/* =========================================================
   12. EVENTOS GERAIS
========================================================= */

if (themeButton) {
  themeButton.addEventListener("click", toggleTheme);
}

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMobileMenu);
}

if (mainNav) {
  mainNav.addEventListener("click", closeMobileMenu);
}

if (backTop) {
  backTop.addEventListener("click", scrollToTop);
}

window.addEventListener("scroll", updateProgressBar);


/* =========================================================
   13. INICIALIZAÇÃO DA INDEX.HTML
========================================================= */

loadSavedTheme();
renderNews();
loadWeather();
loadCurrency();
updateProgressBar();