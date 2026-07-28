// ============================================================================
// CONFIGURAÇÃO DO CONTEÚDO
// ----------------------------------------------------------------------------
// Para adicionar/atualizar materiais, edite APENAS este arquivo e coloque os
// PDFs/vídeos na pasta public/materiais/{disciplina}/lista{NN}/.
//
// Convenção de nomes (recomendada, mas você pode sobrescrever nos campos
// `pdf` e `video` de cada exercício):
//   public/materiais/d1/lista01/exercicio01.pdf
//   public/materiais/d1/lista01/exercicio01.mp4
//
// Para marcar um exercício como "Resolução em atualização", basta deixar
// `pdf` como null (ou omitir). O mesmo vale para `video`.
// ============================================================================

export type Exercicio = {
  numero: number;
  enunciado?: string; // texto do enunciado (opcional)
  enunciadoImg?: string; // caminho de uma imagem do enunciado (opcional)
  pdf?: string | null; // caminho do PDF da resolução
  video?: string | null; // caminho de um vídeo local (mp4) OU URL (YouTube/Vimeo)
};

export type Lista = {
  numero: number;
  titulo?: string;
  exercicios: Exercicio[];
};

export type Disciplina = {
  slug: string;
  nome: string;
  descricao: string;
  semestre: 1 | 2;
  disponivel: boolean;
  listas: Lista[];
};

// ---------------------------------------------------------------------------
// Helper: gera 10 exercícios "padrão" apontando para os arquivos convencionais.
// Se um arquivo não existir no servidor, o site mostrará automaticamente as
// mensagens de "Resolução em atualização" / "Vídeo em preparação" (via
// verificação de disponibilidade em runtime).
// ---------------------------------------------------------------------------
function gerarExercicios(disc: string, lista: number, qtd = 15): Exercicio[] {
  const nn = (n: number) => String(n).padStart(2, "0");
  const ll = nn(lista);
  return Array.from({ length: qtd }, (_, i) => {
    const en = nn(i + 1);
      

    let videos: string[] = [];

    // ==================== ANÁLISE ENERGÉTICA ====================

if (disc === "d1" && lista === 1) {
  videos = [
    "https://www.youtube.com/embed/fARaAlXPErY",
    "https://www.youtube.com/embed/dcpzvzKYDtk",
    "https://www.youtube.com/embed/eM0tQzUhRds",
    "https://www.youtube.com/embed/GrEB8-nHMXU",
    "https://www.youtube.com/embed/TEmYtulCuBU",
    "https://www.youtube.com/embed/1DZfenFP1Zo",
    "https://www.youtube.com/embed/C77Qu_4l7Qs",
    "https://www.youtube.com/embed/q2Q9lMblbfo",
    "https://www.youtube.com/embed/RN3_RpQcL7I",
    "https://www.youtube.com/embed/j8L3HqDLrsE",
    "https://www.youtube.com/embed/ofBDW25LL1E",
    "https://www.youtube.com/embed/9ptLtJsVrX8",
    "https://www.youtube.com/embed/mC7ux_mnOlQ",
    "https://www.youtube.com/embed/RalhC4QRPFE",
  ];
}

if (disc === "d1" && lista === 2) {
  videos = [
    "https://www.youtube.com/embed/96GqoPjdo9Q",
    "https://www.youtube.com/embed/K8IX2yRWTQs",
    "https://www.youtube.com/embed/0Ck69fNUSEA",
    "https://www.youtube.com/embed/2MIEZ47ymcA",
    "https://www.youtube.com/embed/-pTDueu6xdQ",
    "https://www.youtube.com/embed/K2SxWyKTkwI",
    "https://www.youtube.com/embed/vDvU_gGzVE4",
    "https://www.youtube.com/embed/VucA68Bm9Ek",
    "https://www.youtube.com/embed/polqhro3B8g",
    "https://www.youtube.com/embed/qE7--kLY43A",
    "https://www.youtube.com/embed/Sxd5wdkuxhM",
    "https://www.youtube.com/embed/9liPyLlYU0Q",
    "https://www.youtube.com/embed/9jN4kSMNq78",
    "https://www.youtube.com/embed/yunPXu5spGU",
  ];
}

if (disc === "d1" && lista === 3) {
  videos = [
    "https://www.youtube.com/embed/oFrJEDPQ2ok",
    "https://www.youtube.com/embed/Vulf0amextg",
    "https://www.youtube.com/embed/wK88P_wmsF4",
    "https://www.youtube.com/embed/Ve551LpWPBg",
    "https://www.youtube.com/embed/WJGjQkV_IQI",
    "https://www.youtube.com/embed/YnaaowXR3W4",
    "https://www.youtube.com/embed/5X5mwxfbUdk",
    "https://www.youtube.com/embed/EBQbpgJSUoM",
    "https://www.youtube.com/embed/bt1S-TroxhA",
    "https://www.youtube.com/embed/3VlLUXAZLDA",
    "https://www.youtube.com/embed/TRm6ZO7M59c",
    "https://www.youtube.com/embed/NSSvJNfzHOE",
    "https://www.youtube.com/embed/odu8EsBldjw",
  ];
}

if (disc === "d1" && lista === 4) {
  videos = [
    "https://youtu.be/f4Rl6ZxS7RU",
    "https://youtu.be/rNRgiPNnaJw",
    "https://youtu.be/H7NrcvKHC7I",
    "https://youtu.be/vKKuzFusKGA",
    "https://youtu.be/qalxBEyvXOw",
    "https://youtu.be/BQ_KCfUPOjI",
    "https://youtu.be/43TZj4NeCKo",
    "https://youtu.be/5zy91MsMgh0",
    "https://youtu.be/PklMgRF5z7s",
    "https://youtu.be/jkC8Jxgu1Os",
    "https://youtu.be/R01loT3WKF4",
    "https://youtu.be/aKmSzzALsHo",
  ];
}

if (disc === "d1" && lista === 5) {
  videos = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d1" && lista === 6) {
  videos = [
    "https://www.youtube.com/embed/Aec2e04xV5k",
    "https://www.youtube.com/embed/nEe9pqb--O4",
    "https://www.youtube.com/embed/YG-pyvqJ-uI",
    "https://www.youtube.com/embed/rI_5HtJsLvs",
    "https://www.youtube.com/embed/bLiJebvxA1k",
    "https://www.youtube.com/embed/2cn0nJUUgEc",
    "https://www.youtube.com/embed/q2mjEDBOWbE",
    "https://www.youtube.com/embed/OKMDaOCCP0E",
    "https://www.youtube.com/embed/m4mnx8Rgw9A",
    "https://www.youtube.com/embed/7P1oVpPOUJk",
    "https://www.youtube.com/embed/aA1abBehXk4",
    "https://www.youtube.com/embed/p1c1u7ybtU0",
  ];
}

if (disc === "d1" && lista === 7) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d1" && lista === 8) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d1" && lista === 9) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}


// ==================== AMBIENTES ATMOSFÉRICOS ====================

if (disc === "d2" && lista === 1) {
  videos = [
    "https://www.youtube.com/embed/25JFL6Nh4rQ",
    "https://www.youtube.com/embed/qahrp1IormM",
    "https://www.youtube.com/embed/EVaSJnOrl4E",
    "https://www.youtube.com/embed/IWA01lFea6U",
    "https://www.youtube.com/embed/ZQm66igtm_Q",
    "https://www.youtube.com/embed/WVAlAkrNP0M",
    "https://www.youtube.com/embed/_1WBl2SthZ0",
    "https://www.youtube.com/embed/My1RdTa9Yuc",
    "https://www.youtube.com/embed/UJPNVlZOhDw",
    "https://www.youtube.com/embed/kQT2WhAmudI",
    "https://www.youtube.com/embed/xyGVa7_htZI",
    "https://www.youtube.com/embed/vlB9vtQ3zHU",
    "https://www.youtube.com/embed/CKPXSaMN0Qo",
    "https://www.youtube.com/embed/sh9HXwScPtg",
    "https://www.youtube.com/embed/9JK-6sMh0os",
  ];
}

if (disc === "d2" && lista === 2) {
  videos = [
    "https://www.youtube.com/embed/02YffKh9XYQ",
    "https://www.youtube.com/embed/4pvk5M-rQ8Q",
    "https://www.youtube.com/embed/CJy71qd03ho",
    "https://www.youtube.com/embed/xqsSSvgkt1o",
    "https://www.youtube.com/embed/N88g3lYHW7Q",
    "https://www.youtube.com/embed/nkz7AdBwZCU",
    "https://www.youtube.com/embed/YK2NRjhds3Q",
    "https://www.youtube.com/embed/bBrH3BQzQIo",
    "https://www.youtube.com/embed/60C99ZgxqfA",
    "https://www.youtube.com/embed/f8y6LyBnNak",
    "https://www.youtube.com/embed/rGexpMBZJJM",
    "https://www.youtube.com/embed/qVbuhReQL_Q",
    "https://www.youtube.com/embed/bKsikYZrUW8",
  ];
}

if (disc === "d2" && lista === 3) {
  videos = [
    "https://www.youtube.com/embed/mRAYxr8Z8ZA",
    "https://www.youtube.com/embed/5AnUqTvH3q0",
    "https://www.youtube.com/embed/RHTz7eAoBpU",
    "https://www.youtube.com/embed/q26A3lsD0UQ",
    "https://www.youtube.com/embed/wW0liI7wbHc",
    "https://www.youtube.com/embed/UEnHsQQINiY",
    "https://www.youtube.com/embed/L2UZgokNyFI",
    "https://www.youtube.com/embed/ubzSY8pRw0A",
    "https://www.youtube.com/embed/SZZHFLw7eRI",
    "https://www.youtube.com/embed/azcr_ozOOn4",
    "https://www.youtube.com/embed/OOVCIFNjKDo",
  ];
}

if (disc === "d2" && lista === 4) {
  videos = [
    "https://www.youtube.com/embed/CDJ6WcmpIzo",
    "https://www.youtube.com/embed/Iznk12moxFQ",
    "https://www.youtube.com/embed/Sr9DSLWRYBw",
    "https://www.youtube.com/embed/Zufrp8zZCeI",
    "https://www.youtube.com/embed/Wp7vWW6Usec",
    "https://www.youtube.com/embed/4kD5ysa46lM",
    "https://www.youtube.com/embed/aTqaLNlyoxw",
    "https://www.youtube.com/embed/zqwY5c4k7WI",
    "https://www.youtube.com/embed/g-eVE___zdE",
    "https://www.youtube.com/embed/Gk3Jf7wImMc",
    "https://www.youtube.com/embed/_rnOKspWREU",
  ];
}

if (disc === "d2" && lista === 5) {
  videos = [
    "https://www.youtube.com/embed/dfRk6-QqMHI",
    "https://www.youtube.com/embed/sf-bBPPZMV0",
    "https://www.youtube.com/embed/nuRrUgQPWC0",
    "https://www.youtube.com/embed/KISedQbKWBY",
    "https://www.youtube.com/embed/fPjyW7SVyfk",
    "https://www.youtube.com/embed/QLMwW6Dw0bw",
    "https://www.youtube.com/embed/xcTJHstvjic",
    "https://www.youtube.com/embed/YptHDOOxra8",
    "https://www.youtube.com/embed/g-qRAIUSIk8",
    "https://www.youtube.com/embed/9xxdqAUE3rY",
    "https://www.youtube.com/embed/EBZ3c6ycdIQ",
    "https://www.youtube.com/embed/dOl7pBpyc3M",
    "https://www.youtube.com/embed/Dw3FjJF6VOI",
  ];
}

if (disc === "d2" && lista === 6) {
  videos = [
    "https://www.youtube.com/embed/cNs7mw3Czi0",
    "https://www.youtube.com/embed/T9NWFLrAhEQ",
    "https://www.youtube.com/embed/hyp1C4yC34w",
    "https://www.youtube.com/embed/HV_L0Ckz1A4",
    "https://www.youtube.com/embed/uvq6Qq4TEEo",
    "https://www.youtube.com/embed/G6IPr83FBQY",
    "https://www.youtube.com/embed/4RCLFNxYY_o",
    "https://www.youtube.com/embed/mMqmkCT0DF8",
    "https://www.youtube.com/embed/kmw-rw8Fl9M",
    "https://www.youtube.com/embed/--udVw588DU",
  ];
}

if (disc === "d2" && lista === 7) {
  videos = [
    "https://www.youtube.com/embed/YEe2GUNMIbE",
    "https://www.youtube.com/embed/F9rctaZcXM0",
    "https://www.youtube.com/embed/7z0Wcp2Brwk",
    "https://www.youtube.com/embed/CpeBIRQkOak",
    "https://www.youtube.com/embed/-hCUQPu4yl4",
    "https://www.youtube.com/embed/2iu0qTv8LjI",
    "https://www.youtube.com/embed/34WASGxmP_Y",
    "https://www.youtube.com/embed/xY1jjdQmgH0",
    "https://www.youtube.com/embed/eRzv8b8JG8I",
    "https://www.youtube.com/embed/nqAGhId6MV4",
  ];
}

if (disc === "d2" && lista === 8) {
  videos = [
    "https://www.youtube.com/embed/8Qo1P2ipECI",
    "https://www.youtube.com/embed/DVI6d36c8w4",
    "https://www.youtube.com/embed/Tefx3TTcfto",
    "https://www.youtube.com/embed/z1xZg-l8pLA",
    "https://www.youtube.com/embed/XTVk78YaoMQ",
    "https://www.youtube.com/embed/6V2tar5Nyh0",
    "https://www.youtube.com/embed/EbU70uGYR20",
    "https://www.youtube.com/embed/kOVLukySnrw",
    "https://www.youtube.com/embed/Wd-epuWKPx8",
    "https://www.youtube.com/embed/FGqxgLBG6Zo",
  ];
}


// ==================== ESTATÍSTICA ====================

if (disc === "d3" && lista === 1) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d3" && lista === 2) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d3" && lista === 3) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d3" && lista === 4) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d3" && lista === 5) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d3" && lista === 6) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d3" && lista === 7) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d3" && lista === 8) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

if (disc === "d3" && lista === 9) {
  videos = [
    "",
    "",
    "",
    "",
    "",
  ];
}

    return {
      numero: i + 1,
      pdf: `/materiais/${disc}/lista${ll}.pdf`,
      video: videos[i] || null,
      //video: `/materiais/${disc}/lista${ll}/exercicio${en}.mp4`,
     // pdf: `/materiais/${disc}/lista${ll}/exercicio${en}.pdf`,
     // video: `/materiais/${disc}/lista${ll}/exercicio${en}.mp4`,
    };
  });
}

function gerarListas(disc: string, qtd = 9): Lista[] {
  return Array.from({ length: qtd }, (_, i) => ({
    numero: i + 1,
    exercicios: gerarExercicios(disc, i + 1),
  }));
}

// ---------------------------------------------------------------------------
// DISCIPLINAS
// Edite `disponivel`, `nome`, `descricao` e `semestre` conforme necessário.
// ---------------------------------------------------------------------------
export const disciplinas: Disciplina[] = [
  {
    slug: "AEMA",
    nome: "Análise Energética e Meio Ambiente",
    descricao: "Conteúdo disponibilizado no primeiro semestre.",
    semestre: 1,
    disponivel: true,
    listas: gerarListas("d1"),
  },
  {
    slug: "AA",
    nome: "Ambientes Atmosféricos",
    descricao: "Conteúdo disponibilizado no segundo semestre.",
    semestre: 2,
    disponivel: true,
    listas: gerarListas("d2"),
  },
  {
    slug: "E",
    nome: "Estatística",
    descricao: "Conteúdo disponibilizado no primeiro semestre.",
    semestre: 1,
    disponivel: true,
    listas: gerarListas("d3"),
  },
];

export function getDisciplina(slug: string): Disciplina | undefined {
  return disciplinas.find((d) => d.slug === slug);
}

export function getLista(slug: string, numero: number): Lista | undefined {
  return getDisciplina(slug)?.listas.find((l) => l.numero === numero);
}

export function getExercicio(
  slug: string,
  lista: number,
  numero: number,
): Exercicio | undefined {
  return getLista(slug, lista)?.exercicios.find((e) => e.numero === numero);
}
