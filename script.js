/* =========================================================
   DADOS DAS NOTÍCIAS
   Esse mesmo array alimenta os cards da home e a página noticia.html
========================================================= */

const news = [
  {
    id: 1,
    title: "Incêndio atinge casarão abandonado no centro de Salvador",
    state: "BA",
    category: "Regional",
    text: "Imóvel fica localizado na Ladeira dos Barris, no bairro dos Barris. Quinze bombeiros militares foram escalados para combater chamas",
    time: "Há 2 hrs",
    author: "Redação Nordestino",
    summary: "Imóvel fica localizado na Ladeira dos Barris, no bairro dos Barris. Quinze bombeiros militares foram escalados para combater chamas.",
    content: `
      <p>
        O centro histórico recebeu uma programação especial dedicada à cultura nordestina,
        reunindo música, dança, gastronomia e manifestações populares. O evento destacou
        artistas locais e fortaleceu a valorização das tradições regionais.
      </p>

    `
  },
  {
    id: 2,
    title: "Feriado de São João: saiba o que abre e o que fecha no Grande Recife",
    state: "PE",
    category: "Diário",
    text: "Governo de Pernambuco e prefeitura do Recife decretaram ponto facultativo na segunda (22) e terça-feira (23). Já o feriado de São João cai na quarta-feira (24) e afeta funcionamento de alguns serviços.",
    time: "Há 28 min",
    author: "Redação Nordestino",
    summary: "Governo de Pernambuco e prefeitura do Recife decretaram ponto facultativo",
    content: `
      <p>
       No Grande Recife, o feriado de São João muda os horários de funcionamento do comércio, dos shoppings e de alguns serviços públicos. O governo de Pernambuco e a prefeitura do Recife decretaram ponto facultativo na segunda-feira (22), antevéspera do feriado celebrado na quarta-feira (24), respectivamente.
       Além disso, tanto o estado quanto a capital transferiram o ponto facultativo do feriado de Corpus Christi, comemorado no dia 4 de junho, para a véspera do São João, na terça-feira (23).
      </p>
    `
  },
  {
    id: 3,
    title: "Pamonha na palha do milho: aprenda receita tradicional da festa de São João",
    state: "CE",
    category: "Culinária",
    text: "Uma receita simples, com ingredientes da roça e muito carinho no preparo, ensinada pela 'Dona Ana' no programa Nordeste Rural.",
    time: "Ontem",
    author: "Redação Nordestino",
    summary: "Uma receita simples, com ingredientes da roça e muito carinho no preparo",
    content: `
      <p>
        Toda festa de São João tem que ter comidas típicas. O programa Nordeste Rural deste domingo (21) trouxe uma das receitas mais tradicionais dessa época: a pamonha na palha do milho.
        Uma receita simples, com ingredientes da roça e muito carinho no preparo, vindo do Crato, no Cariri cearense.
        Quem ensinou a escolher o milho e a preparar a receita foi a 'Dona Ana', mãe de Biana Alencar, apresentadora do Nordeste Rural.
      </p>
    `
  },
  {
    id: 4,
    title: "Mãe, padrasto e tio são presos em flagrante após criança de 8 anos morrer com tiro em casa em Natal",
    state: "RN",
    category: "Criminal",
    text: "Caso aconteceu no Guarapes no sábado (20), e família disse que disparo foi acidental. Segundo polícia, arma era de uso restrito e há indícios de alteração da cena do crime.",
    time: "Há 1 h",
    author: "Redação Nordestino",
    summary: "Mãe, padrasto e tio são presos em flagrante",
    content: `
      <p>
       A mãe, o padrasto e um tio da criança de 8 anos que morreu com um tiro dentro de casa no sábado (20) em Natal foram presos em flagrante, segundo a Polícia Civil. O caso aconteceu no bairro Guarapes, na Zona Oeste da cidade.
      Segundo a família, o disparo teria sido acidental e feito por um irmão de 11 anos enquanto não havia ninguém em casa. A Polícia Civil investiga o caso. O padrasto admitiu que comprou a arma - que é de calibre restrito - de forma irregular em Mossoró, informou a Polícia Militar.
      </p>
    `
  },
  {
    id: 5,
    title: "São João na Paraíba: confira programação das festas nas principais cidades",
    state: "PB",
    category: "Cultura",
    text: "Nesta segunda (22) e terça (23), as festas concentram algumas das principais atrações.",
    time: "Há 2 h",
    author: "Redação Nordestino",
    summary: "Nesta segunda (22) e terça (23), as festas concentram algumas das principais atrações.",
    content: `
      <p>
       As festas públicas de São João seguem em andamento na Paraíba e concentram,
      nesta segunda-feira (22) e terça-feira (23),
      parte da programação mais aguardada do calendário junino.
      Os eventos acontecem João Pessoa, Bananeiras, Campina Grande,
      além de outras regiões do estado e reúnem shows musicais e apresentações culturais com acesso gratuito ao público.
      </p>

    `
  },
  {
    id: 6,
    title: "Cuscuzeira gigante distribui cuscuz de graça no São João Massayó",
    state: "AL",
    category: "Culinária",
    text: "Estrutura de 4,2 metros recebe participantes de corrida inédita no bairro do Jaraguá; inscrição é feita com doação de 1 kg de alimento.",
    time: "Há 3 h",
    author: "Redação Nordestino",
    summary: "Estrutura de 4,2 metros recebe participantes de corrida inédita no bairro do Jaraguá.",
    content: `
      <p>
      Uma cuscuzeira de 4,2 metros prepara e distribui cuscuz de graça para o público no dia 28 de junho,
      durante a programação do São João Massayó 2026.
      A ação ocorre no bairro do Jaraguá, logo após a 1ª edição da "Carrêra da Boba – Da Fogueira ao Cuscuz".
      </p>

    `
  },
  {
    id: 7,
    title: "Comunidade recebe programação especial de São João fora de época",
    state: "SE",
    category: "Festas populares",
    text: "Quadrilhas e comidas típicas movimentam o comércio local.",
    time: "Há 4 h",
    author: "Redação Nordestino",
    summary: "Celebração reúne quadrilha, comidas típicas, forró e decoração junina.",
    content: `
      <p>
        A comunidade recebeu uma programação especial de São João fora de época, com quadrilhas,
        comidas típicas, decoração com bandeirinhas e apresentações musicais.
      </p>

    `
  },
  {
    id: 8,
    title: "Centro cultural abre exposição sobre ritmos e narrativas nordestinas",
    state: "MA",
    category: "Arte",
    text: "A mostra reúne fotografias, objetos e registros audiovisuais.",
    time: "Há 5 h",
    author: "Redação Nordestino",
    summary: "Exposição apresenta ritmos, narrativas e manifestações culturais nordestinas.",
    content: `
      <p>
        Um centro cultural abriu uma exposição dedicada aos ritmos e narrativas nordestinas.
        A mostra reúne fotografias, objetos, instrumentos musicais, registros audiovisuais e
        relatos de artistas populares.
      </p>

    `
  },
  {
    id: 9,
    title: "Produtores locais apostam em economia sustentável no semiárido",
    state: "PI",
    category: "Economia",
    text: "Iniciativas unem conhecimento tradicional e novas tecnologias.",
    time: "Há 6 h",
    author: "Redação Nordestino",
    summary: "Produtores do semiárido investem em práticas sustentáveis e adaptação ao clima.",
    content: `
      <p>
        Produtores do semiárido têm investido em práticas sustentáveis para melhorar a produção
        e enfrentar os desafios do clima. As iniciativas combinam conhecimento tradicional,
        organização comunitária e novas tecnologias.
      </p>

      <p>
        Entre as ações estão o uso consciente da água, o cultivo adaptado ao clima seco,
        a criação de pequenos sistemas de irrigação e o fortalecimento da agricultura familiar.
      </p>

      <p>
        Essas práticas mostram a capacidade de adaptação das comunidades e reforçam a importância
        da sustentabilidade para o futuro da região.
      </p>
    `
  }
];


/* =========================================================
   DADOS DAS CIDADES PARA A API DO TEMPO
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
   ELEMENTOS DO HTML
   Alguns elementos só existem na home e outros só na noticia.html
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
const singleNews = document.getElementById("singleNews");


/* =========================================================
   RENDERIZAÇÃO DOS CARDS DE NOTÍCIAS NA HOME
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
   PÁGINA INDIVIDUAL DA NOTÍCIA
   Essa função só roda se existir o elemento #singleNews
========================================================= */

function getNewsIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function renderSingleNews() {
  if (!singleNews) {
    return;
  }

  const newsId = getNewsIdFromUrl();
  const selectedNews = news.find((item) => item.id === newsId);

  if (!selectedNews) {
    singleNews.innerHTML = `
      <div class="single-news-error">
        <span class="tag">Notícia não encontrada</span>
        <h1>Essa notícia não existe ou foi removida.</h1>
        <p>Volte para a página inicial e escolha outra notícia.</p>
        <a href="index.html#noticias" class="primary-button">Voltar para notícias</a>
      </div>
    `;
    return;
  }

  document.title = `${selectedNews.title} | Nordestino`;

  singleNews.innerHTML = `
    <div class="single-news-hero" data-state="${selectedNews.state}">
      <span>${selectedNews.category}</span>
    </div>

    <div class="single-news-content">
      <div class="single-news-meta">
        <span>${selectedNews.state}</span>
        <span>${selectedNews.time}</span>
        <span>${selectedNews.author}</span>
      </div>

      <h1>${selectedNews.title}</h1>

      <p class="single-news-summary">
        ${selectedNews.summary}
      </p>

      <div class="single-news-text">
        ${selectedNews.content}
      </div>
    </div>
  `;
}


/* =========================================================
   DESCRIÇÃO DO CÓDIGO DO TEMPO
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
   API DE PREVISÃO DO TEMPO
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
   API DE COTAÇÃO DE MOEDAS
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
   MODO ESCURO
========================================================= */

function toggleTheme() {
  if (!themeButton) {
    return;
  }

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeButton.textContent = isDark ? "☀️ Modo" : "🌙 Modo";
}

function loadSavedTheme() {
  if (!themeButton) {
    return;
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️ Modo";
  } else {
    themeButton.textContent = "🌙 Modo";
  }
}


/* =========================================================
   BARRA DE PROGRESSO E BOTÃO VOLTAR AO TOPO
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


/* =========================================================
   EVENTOS DA HOME
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
   EVENTOS GERAIS
========================================================= */

if (themeButton) {
  themeButton.addEventListener("click", toggleTheme);
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

if (mainNav) {
  mainNav.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
}

window.addEventListener("scroll", updateProgressBar);

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =========================================================
   INICIALIZAÇÃO DO SITE
   O mesmo script funciona na index.html e na noticia.html
========================================================= */

loadSavedTheme();
updateProgressBar();

if (newsGrid) {
  renderNews();
}

if (weatherResult) {
  loadWeather();
}

if (currencyGrid) {
  loadCurrency();
}

if (singleNews) {
  renderSingleNews();
}