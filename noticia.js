const newsDetails = [
  {
    id: 1,
    title: "Festival cultural movimenta centro histórico com música, dança e gastronomia",
    state: "BA",
    category: "Cultura",
    time: "Há 12 min",
    author: "Redação Nordestino",
    imageLabel: "BA",
    summary: "A programação valoriza artistas locais e tradições populares.",
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
    time: "Há 28 min",
    author: "Redação Nordestino",
    imageLabel: "PE",
    summary: "Oficinas e mentorias estimulam soluções para problemas locais.",
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
    time: "Há 43 min",
    author: "Redação Nordestino",
    imageLabel: "CE",
    summary: "Iniciativa reforça cuidados com turismo sustentável.",
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
    time: "Há 1 h",
    author: "Redação Nordestino",
    imageLabel: "RN",
    summary: "Expositores mostram a força da produção artesanal regional.",
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
    time: "Há 2 h",
    author: "Redação Nordestino",
    imageLabel: "PB",
    summary: "Projeto incentiva estudantes a pesquisarem a história da comunidade.",
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
    time: "Há 3 h",
    author: "Redação Nordestino",
    imageLabel: "AL",
    summary: "A proposta integra cultura, lazer e geração de renda.",
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
    time: "Há 4 h",
    author: "Redação Nordestino",
    imageLabel: "SE",
    summary: "Quadrilhas e comidas típicas movimentam o comércio local.",
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
    time: "Há 5 h",
    author: "Redação Nordestino",
    imageLabel: "MA",
    summary: "A mostra reúne fotografias, objetos e registros audiovisuais.",
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
    time: "Há 6 h",
    author: "Redação Nordestino",
    imageLabel: "PI",
    summary: "Iniciativas unem conhecimento tradicional e novas tecnologias.",
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

const singleNews = document.getElementById("singleNews");
const themeButton = document.getElementById("themeButton");
const pageProgress = document.getElementById("pageProgress");
const backTop = document.getElementById("backTop");

function getNewsIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function renderSingleNews() {
  const newsId = getNewsIdFromUrl();
  const selectedNews = newsDetails.find((item) => item.id === newsId);

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
    <div class="single-news-hero" data-state="${selectedNews.imageLabel}">
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

themeButton.addEventListener("click", toggleTheme);

window.addEventListener("scroll", updateProgressBar);

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

loadSavedTheme();
renderSingleNews();
updateProgressBar();