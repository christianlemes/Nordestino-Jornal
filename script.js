/* =========================================================
   DADOS DAS NOTÍCIAS
   Esse mesmo array alimenta os cards da home e a página noticia.html
========================================================= */

const news = [
  {
    id: 1,
    title: "Festival cultural movimenta centro histórico com música, dança e gastronomia",
    state: "BA",
    category: "Cultura",
    text: "A programação valoriza artistas locais e tradições populares.",
    time: "Há 12 min",
    author: "Redação Nordestino",
    summary: "Evento reúne música, dança, gastronomia e manifestações culturais no centro histórico.",
    content: `
      <p>
        O centro histórico recebeu uma programação especial dedicada à cultura nordestina,
        reunindo música, dança, gastronomia e manifestações populares. O evento destacou
        artistas locais e fortaleceu a valorização das tradições regionais.
      </p>

      <p>
        Entre as atrações, o público pôde acompanhar apresentações musicais, rodas de dança,
        exposições de artesanato e barracas com comidas típicas. A proposta foi aproximar
        moradores e visitantes da identidade cultural da região.
      </p>

      <p>
        Para os organizadores, eventos como esse ajudam a preservar a memória local,
        movimentam a economia criativa e incentivam novas gerações a conhecerem melhor
        a história do Nordeste.
      </p>
    `
  },
  {
    id: 2,
    title: "Projeto de tecnologia aproxima jovens da inovação no agreste",
    state: "PE",
    category: "Tecnologia",
    text: "Oficinas e mentorias estimulam soluções para problemas locais.",
    time: "Há 28 min",
    author: "Redação Nordestino",
    summary: "Iniciativa incentiva jovens a criarem soluções digitais para desafios da própria comunidade.",
    content: `
      <p>
        Um projeto educacional no agreste pernambucano tem incentivado jovens a desenvolverem
        soluções tecnológicas para desafios da própria comunidade. A iniciativa oferece oficinas,
        mentorias e atividades práticas.
      </p>

      <p>
        Os participantes aprendem conceitos de programação, design digital, comunicação e
        empreendedorismo. A ideia é mostrar que a tecnologia também pode nascer de problemas
        simples do cotidiano.
      </p>

      <p>
        Além de ampliar o acesso à inovação, o projeto contribui para a formação profissional
        dos estudantes e fortalece o protagonismo juvenil na região.
      </p>
    `
  },
  {
    id: 3,
    title: "Praias recebem ações de preservação ambiental durante alta temporada",
    state: "CE",
    category: "Meio ambiente",
    text: "Iniciativa reforça cuidados com turismo sustentável.",
    time: "Há 43 min",
    author: "Redação Nordestino",
    summary: "Ações ambientais orientam turistas e moradores sobre preservação das praias.",
    content: `
      <p>
        Durante a alta temporada, praias do litoral nordestino receberam ações de conscientização
        ambiental voltadas para turistas, comerciantes e moradores. A iniciativa destacou a
        importância do descarte correto de resíduos.
      </p>

      <p>
        Equipes distribuíram materiais informativos, orientaram visitantes e promoveram mutirões
        de limpeza. O objetivo é reduzir impactos ambientais e incentivar práticas de turismo
        sustentável.
      </p>

      <p>
        A preservação das praias é essencial para proteger a biodiversidade, manter a beleza
        natural da região e garantir que o turismo continue gerando renda de forma responsável.
      </p>
    `
  },
  {
    id: 4,
    title: "Feira de artesanato destaca renda de bilro, cerâmica e literatura de cordel",
    state: "RN",
    category: "Economia criativa",
    text: "Expositores mostram a força da produção artesanal regional.",
    time: "Há 1 h",
    author: "Redação Nordestino",
    summary: "Feira valoriza artesanato, tradição popular e geração de renda local.",
    content: `
      <p>
        Uma feira de artesanato reuniu produtores locais para apresentar trabalhos em renda de
        bilro, cerâmica, madeira, tecido e literatura de cordel. O evento destacou a importância
        da economia criativa no Nordeste.
      </p>

      <p>
        Além da venda de produtos, a programação contou com demonstrações ao vivo, conversas com
        artesãos e apresentações culturais. O público pôde conhecer de perto técnicas passadas
        de geração em geração.
      </p>

      <p>
        O artesanato representa memória, identidade e fonte de renda para muitas famílias,
        fortalecendo a cultura local e valorizando o trabalho manual.
      </p>
    `
  },
  {
    id: 5,
    title: "Escolas desenvolvem atividades sobre memória, sotaque e identidade local",
    state: "PB",
    category: "Educação",
    text: "Projeto incentiva estudantes a pesquisarem a história da comunidade.",
    time: "Há 2 h",
    author: "Redação Nordestino",
    summary: "Atividades escolares valorizam sotaque, memória, costumes e histórias familiares.",
    content: `
      <p>
        Escolas da região desenvolveram atividades sobre memória, sotaque, costumes e identidade
        local. Os estudantes foram incentivados a entrevistar familiares, pesquisar histórias
        antigas e registrar expressões populares.
      </p>

      <p>
        A proposta aproximou os alunos da cultura da própria comunidade, mostrando que a história
        regional também está presente nas falas, nas festas, nas receitas e nas lembranças de cada
        família.
      </p>

      <p>
        Segundo os educadores, trabalhar a identidade cultural em sala de aula ajuda os jovens a
        reconhecerem o valor do lugar onde vivem.
      </p>
    `
  },
  {
    id: 6,
    title: "Roteiro turístico valoriza culinária, praias e manifestações populares",
    state: "AL",
    category: "Turismo",
    text: "A proposta integra cultura, lazer e geração de renda.",
    time: "Há 3 h",
    author: "Redação Nordestino",
    summary: "Novo roteiro une turismo, cultura, gastronomia e valorização dos pequenos negócios.",
    content: `
      <p>
        Um novo roteiro turístico foi criado para valorizar a culinária, as praias, os espaços
        históricos e as manifestações populares da região. A proposta busca oferecer uma experiência
        mais completa aos visitantes.
      </p>

      <p>
        O percurso inclui pontos de interesse cultural, restaurantes com pratos típicos, feiras de
        artesanato e apresentações de artistas locais. A iniciativa também pretende fortalecer
        pequenos negócios.
      </p>

      <p>
        O turismo regional é uma forma de movimentar a economia e divulgar a diversidade cultural
        do Nordeste para outros públicos.
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

      <p>
        O evento movimentou o comércio local e reuniu famílias em uma celebração marcada por
        forró, brincadeiras e pratos tradicionais, como canjica, pamonha, bolo de milho e milho
        assado.
      </p>

      <p>
        As festas juninas são uma das expressões culturais mais fortes do Nordeste e continuam
        sendo importantes para a preservação das tradições populares.
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

      <p>
        O objetivo é apresentar a diversidade cultural da região, destacando expressões como
        forró, bumba meu boi, cordel, maracatu, frevo e outras manifestações tradicionais.
      </p>

      <p>
        A exposição reforça a importância de preservar a cultura popular e reconhecer sua presença
        na formação da identidade brasileira.
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