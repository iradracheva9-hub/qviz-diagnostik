const OWNER_GITHUB_LOGIN = "YOUR_GITHUB_LOGIN";

const STORAGE_KEYS = {
  questions: "human_design_quiz_questions_v1",
  style: "human_design_quiz_style_v1",
  botLink: "human_design_quiz_bot_link_v1",
  cover: "quiz_cover",
  ownerLogin: "quiz_owner_login",
  landing: "quiz_landing_settings_v1",
  lead: "quiz_lead_settings_v1"
};

const DEFAULT_BOT_LINK = "https://t.me/your_bot";
const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1600&q=80";

const TYPES = ["action", "mind", "emotion", "expectation"];
const TYPE_LABELS = {
  action: "Действие",
  mind: "Ум",
  emotion: "Эмоции",
  expectation: "Ожидания"
};
const TYPE_ALIASES = {
  действие: "action",
  ум: "mind",
  эмоции: "emotion",
  ожидания: "expectation",
  action: "action",
  mind: "mind",
  emotion: "emotion",
  expectation: "expectation"
};
const BG_PRESETS = {
  soft: "linear-gradient(160deg, #f8fafc 0%, #eef2ff 100%)",
  sky: "linear-gradient(160deg, #ecfeff 0%, #dbeafe 100%)",
  sand: "linear-gradient(160deg, #fffbeb 0%, #fef3c7 100%)",
  mint: "linear-gradient(160deg, #ecfdf5 0%, #d1fae5 100%)"
};
const HERO_VERTICAL_MAP = {
  top: "flex-start",
  center: "center",
  bottom: "flex-end"
};
const HERO_HORIZONTAL_MAP = {
  left: { align: "flex-start", text: "left" },
  center: { align: "center", text: "center" },
  right: { align: "flex-end", text: "right" }
};

const DEFAULT_QUESTIONS = [
  {
    text: "Утром вы составляете план дня. Что чаще всего вами движет?",
    answers: [
      { text: "Сразу иду делать, чтобы не терять темп", type: "действие" },
      { text: "Долго думаю, как лучше и правильнее", type: "ум" },
      { text: "Проверяю, в каком я состоянии и настроении", type: "эмоции" },
      { text: "Смотрю, что от меня ждут другие", type: "ожидания" }
    ]
  },
  {
    text: "Вам предлагают новый проект. Ваша первая реакция:",
    answers: [
      { text: "Беру сразу, потом разберусь", type: "действие" },
      { text: "Собираю факты и анализирую риски", type: "ум" },
      { text: "Слушаю внутреннее чувство: тепло или напряжение", type: "эмоции" },
      { text: "Соглашаюсь, чтобы не подвести команду", type: "ожидания" }
    ]
  },
  {
    text: "Когда вы устали, обычно вы:",
    answers: [
      { text: "Все равно продолжаю, пока не закончу", type: "действие" },
      { text: "Ищу идеальный способ сделать быстрее", type: "ум" },
      { text: "Замечаю, что мне эмоционально тяжело", type: "эмоции" },
      { text: "Игнорирую себя, потому что " + "\"надо\"", type: "ожидания" }
    ]
  },
  {
    text: "Если вас критикуют, вы чаще:",
    answers: [
      { text: "Сразу пытаюсь доказать делом обратное", type: "действие" },
      { text: "Прокручиваю разговор в голове много раз", type: "ум" },
      { text: "Остро переживаю и долго отпускаю эмоции", type: "эмоции" },
      { text: "Меняю поведение, чтобы соответствовать", type: "ожидания" }
    ]
  },
  {
    text: "Выбирая, чем заняться вечером, вы чаще:",
    answers: [
      { text: "Делаю то, что даст быстрый результат", type: "действие" },
      { text: "Сравниваю варианты и выбираю самый логичный", type: "ум" },
      { text: "Выбираю то, от чего внутри становится легче", type: "эмоции" },
      { text: "Делаю то, что " + "\"правильно\"" + " в глазах других", type: "ожидания" }
    ]
  },
  {
    text: "В конфликте с близким человеком вы обычно:",
    answers: [
      { text: "Сразу иду решать и действовать", type: "действие" },
      { text: "Пытаюсь рационально все объяснить", type: "ум" },
      { text: "Сначала проживаю чувства, потом говорю", type: "эмоции" },
      { text: "Соглашаюсь, чтобы сохранить мир любой ценой", type: "ожидания" }
    ]
  },
  {
    text: "Перед важным выбором вам сложнее всего:",
    answers: [
      { text: "Остановиться, не бросаясь сразу в шаги", type: "действие" },
      { text: "Отключить бесконечные мысли " + "\"а если\"", type: "ум" },
      { text: "Разобраться в своих истинных чувствах", type: "эмоции" },
      { text: "Понять, что хочу я, а не другие", type: "ожидания" }
    ]
  },
  {
    text: "Когда появляется свободное время, вы чаще:",
    answers: [
      { text: "Заполняю его делами автоматически", type: "действие" },
      { text: "Снова планирую и структурирую задачи", type: "ум" },
      { text: "Пытаюсь поймать состояние покоя", type: "эмоции" },
      { text: "Ищу, кому могу быть полезным", type: "ожидания" }
    ]
  },
  {
    text: "Фраза, которая чаще звучит внутри:",
    answers: [
      { text: "Надо быстрее и больше делать", type: "действие" },
      { text: "Нужно все продумать идеально", type: "ум" },
      { text: "Я так чувствую, но боюсь довериться", type: "эмоции" },
      { text: "Я должен соответствовать ожиданиям", type: "ожидания" }
    ]
  }
];

function isValidQuestionSet(candidate) {
  if (!Array.isArray(candidate) || candidate.length < 1) return false;
  return candidate.every((q) => {
    if (!q || typeof q.text !== "string" || !Array.isArray(q.answers) || q.answers.length !== 4) {
      return false;
    }
    return q.answers.every((ans) => {
      return ans && typeof ans.text === "string" && typeof ans.type === "string" && normalizeType(ans.type) !== "";
    });
  });
}

function normalizeType(type) {
  const key = String(type || "").trim().toLowerCase();
  return TYPE_ALIASES[key] || "";
}

function normalizeQuestions(questionSet) {
  return questionSet.map((q) => ({
    text: q.text,
    answers: q.answers.map((ans) => ({
      text: ans.text,
      type: normalizeType(ans.type)
    }))
  }));
}

function loadQuestions() {
  const raw = localStorage.getItem(STORAGE_KEYS.questions);
  if (!raw) return normalizeQuestions(DEFAULT_QUESTIONS);
  try {
    const parsed = JSON.parse(raw);
    return isValidQuestionSet(parsed) ? normalizeQuestions(parsed) : normalizeQuestions(DEFAULT_QUESTIONS);
  } catch {
    return normalizeQuestions(DEFAULT_QUESTIONS);
  }
}

function isValidHexColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value);
}

function getHoverColor(hex) {
  if (!isValidHexColor(hex)) return "#0b5c56";
  const normalized = hex.slice(1);
  const r = Math.max(0, parseInt(normalized.slice(0, 2), 16) - 20);
  const g = Math.max(0, parseInt(normalized.slice(2, 4), 16) - 20);
  const b = Math.max(0, parseInt(normalized.slice(4, 6), 16) - 20);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
    .toString(16)
    .padStart(2, "0")}`;
}

function loadStyleSettings() {
  const fallback = {
    background: "soft",
    buttonColor: "#0f766e",
    headingColor: "#172b4d",
    questionColor: "#172b4d",
    bodyTextColor: "#4a607e",
    heroTextColor: "#ffffff",
    heroTitleSize: 38,
    heroSubtitleSize: 18,
    heroVertical: "bottom",
    heroHorizontal: "left"
  };
  const raw = localStorage.getItem(STORAGE_KEYS.style);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    const heroTitleSize = Number(parsed.heroTitleSize);
    const heroSubtitleSize = Number(parsed.heroSubtitleSize);
    return {
      background: BG_PRESETS[parsed.background] ? parsed.background : fallback.background,
      buttonColor: isValidHexColor(parsed.buttonColor) ? parsed.buttonColor : fallback.buttonColor,
      headingColor: isValidHexColor(parsed.headingColor) ? parsed.headingColor : fallback.headingColor,
      questionColor: isValidHexColor(parsed.questionColor) ? parsed.questionColor : fallback.questionColor,
      bodyTextColor: isValidHexColor(parsed.bodyTextColor) ? parsed.bodyTextColor : fallback.bodyTextColor,
      heroTextColor: isValidHexColor(parsed.heroTextColor) ? parsed.heroTextColor : fallback.heroTextColor,
      heroTitleSize: Number.isFinite(heroTitleSize) ? Math.min(64, Math.max(24, heroTitleSize)) : fallback.heroTitleSize,
      heroSubtitleSize: Number.isFinite(heroSubtitleSize)
        ? Math.min(32, Math.max(14, heroSubtitleSize))
        : fallback.heroSubtitleSize,
      heroVertical: HERO_VERTICAL_MAP[parsed.heroVertical] ? parsed.heroVertical : fallback.heroVertical,
      heroHorizontal: HERO_HORIZONTAL_MAP[parsed.heroHorizontal] ? parsed.heroHorizontal : fallback.heroHorizontal
    };
  } catch {
    return fallback;
  }
}

function applyStyleSettings(settings) {
  const bg = BG_PRESETS[settings.background] || BG_PRESETS.soft;
  const vertical = HERO_VERTICAL_MAP[settings.heroVertical] || HERO_VERTICAL_MAP.bottom;
  const horizontal = HERO_HORIZONTAL_MAP[settings.heroHorizontal] || HERO_HORIZONTAL_MAP.left;
  document.documentElement.style.setProperty("--page-bg", bg);
  document.documentElement.style.setProperty("--accent", settings.buttonColor);
  document.documentElement.style.setProperty("--accent-hover", getHoverColor(settings.buttonColor));
  document.documentElement.style.setProperty("--heading-color", settings.headingColor);
  document.documentElement.style.setProperty("--question-color", settings.questionColor);
  document.documentElement.style.setProperty("--body-text-color", settings.bodyTextColor);
  document.documentElement.style.setProperty("--hero-text-color", settings.heroTextColor);
  document.documentElement.style.setProperty("--hero-title-size", `${settings.heroTitleSize}px`);
  document.documentElement.style.setProperty("--hero-subtitle-size", `${settings.heroSubtitleSize}px`);
  document.documentElement.style.setProperty("--hero-justify", vertical);
  document.documentElement.style.setProperty("--hero-align", horizontal.align);
  document.documentElement.style.setProperty("--hero-text-align", horizontal.text);
}

function loadLandingSettings() {
  const fallback = {
    title: "Где я живу из долга, а где из отклика",
    subtitle:
      "Мини-диагностика для тех, кто устал тащить всё на себе и хочет вернуть себе внутреннее “да” и “нет”"
  };
  const raw = localStorage.getItem(STORAGE_KEYS.landing);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return {
      title: typeof parsed.title === "string" && parsed.title.trim() ? parsed.title.trim() : fallback.title,
      subtitle:
        typeof parsed.subtitle === "string" && parsed.subtitle.trim() ? parsed.subtitle.trim() : fallback.subtitle
    };
  } catch {
    return fallback;
  }
}

function loadLeadSettings() {
  const fallback = {
    title: "Почти готово!",
    subtitle:
      "Нажми кнопку ниже, чтобы получить результат и перейти в чат-бот с персональной расшифровкой.",
    submitText: "Получить результат"
  };
  const raw = localStorage.getItem(STORAGE_KEYS.lead);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return {
      title: typeof parsed.title === "string" && parsed.title.trim() ? parsed.title.trim() : fallback.title,
      subtitle:
        typeof parsed.subtitle === "string" && parsed.subtitle.trim() ? parsed.subtitle.trim() : fallback.subtitle,
      submitText:
        typeof parsed.submitText === "string" && parsed.submitText.trim() ? parsed.submitText.trim() : fallback.submitText
    };
  } catch {
    return fallback;
  }
}

function loadBotLink() {
  const value = localStorage.getItem(STORAGE_KEYS.botLink);
  if (!value) return DEFAULT_BOT_LINK;
  return isValidUrl(value) ? value : DEFAULT_BOT_LINK;
}

function loadCover() {
  return localStorage.getItem(STORAGE_KEYS.cover) || DEFAULT_COVER;
}

function isValidUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

function getConfiguredOwnerLogin() {
  const stored = localStorage.getItem(STORAGE_KEYS.ownerLogin);
  if (stored && stored.trim()) return stored.trim().toLowerCase();
  if (OWNER_GITHUB_LOGIN !== "YOUR_GITHUB_LOGIN") return OWNER_GITHUB_LOGIN.toLowerCase();
  return "";
}

function createEmptyScores() {
  return { action: 0, mind: 0, emotion: 0, expectation: 0 };
}

function createBlankQuestion() {
  return {
    text: "",
    answers: [
      { text: "", type: "action" },
      { text: "", type: "mind" },
      { text: "", type: "emotion" },
      { text: "", type: "expectation" }
    ]
  };
}

function getTopType(scores) {
  const priority = ["emotion", "mind", "action", "expectation"];
  return priority.reduce((best, current) => {
    return scores[current] > scores[best] ? current : best;
  }, priority[0]);
}

function setActiveScreen(screens, key) {
  Object.values(screens).forEach((el) => el.classList.remove("active", "fade-in"));
  screens[key].classList.add("active", "fade-in");
}

function applyCoverToElement(element, coverUrl) {
  element.style.backgroundImage = `url("${coverUrl}")`;
}

function initQuizPage() {
  const screens = {
    landing: document.getElementById("landing-screen"),
    quiz: document.getElementById("quiz-screen"),
    lead: document.getElementById("lead-screen")
  };

  const startBtn = document.getElementById("start-btn");
  const heroCover = document.getElementById("hero-cover");
  const landingTitle = document.getElementById("landing-title");
  const landingSubtitle = document.getElementById("landing-subtitle");
  const questionCounter = document.getElementById("question-counter");
  const progressBar = document.getElementById("progress-bar");
  const questionText = document.getElementById("question-text");
  const answersList = document.getElementById("answers-list");

  const leadTitle = document.getElementById("lead-title");
  const leadSubtitle = document.getElementById("lead-subtitle");
  const leadSubmitBtn = document.getElementById("lead-submit-btn");

  let questions = loadQuestions();
  let currentQuestionIndex = 0;
  let scores = createEmptyScores();
  let resultType = "";

  applyStyleSettings(loadStyleSettings());
  applyCoverToElement(heroCover, loadCover());
  const landing = loadLandingSettings();
  const lead = loadLeadSettings();
  landingTitle.textContent = landing.title;
  landingSubtitle.textContent = landing.subtitle;
  leadTitle.textContent = lead.title;
  leadSubtitle.textContent = lead.subtitle;
  leadSubmitBtn.textContent = lead.submitText;

  function renderQuestion() {
    const total = questions.length;
    const current = questions[currentQuestionIndex];
    questionCounter.textContent = `Вопрос ${currentQuestionIndex + 1} из ${total}`;
    progressBar.style.width = `${(currentQuestionIndex / total) * 100}%`;
    questionText.textContent = current.text;
    answersList.innerHTML = "";

    current.answers.forEach((answer) => {
      const answerType = normalizeType(answer.type);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn answer-btn";
      btn.textContent = answer.text;
      btn.dataset.type = answerType;
      btn.addEventListener("click", () => {
        if (!answerType) return;
        scores[answerType] += 1;
        currentQuestionIndex += 1;
        if (currentQuestionIndex >= total) {
          resultType = getTopType(scores);
          progressBar.style.width = "100%";
          setActiveScreen(screens, "lead");
          return;
        }
        renderQuestion();
      });
      answersList.appendChild(btn);
    });
  }

  function redirectToBot() {
    const link = new URL(loadBotLink());
    const finalResultType = resultType || getTopType(scores);
    link.searchParams.set("result", finalResultType);
    link.searchParams.set("resultType", finalResultType);
    link.searchParams.set("action", String(scores.action));
    link.searchParams.set("mind", String(scores.mind));
    link.searchParams.set("emotion", String(scores.emotion));
    link.searchParams.set("expectation", String(scores.expectation));
    window.location.href = link.toString();
  }

  startBtn.addEventListener("click", () => {
    questions = loadQuestions();
    scores = createEmptyScores();
    resultType = "";
    currentQuestionIndex = 0;
    renderQuestion();
    setActiveScreen(screens, "quiz");
  });

  leadSubmitBtn.addEventListener("click", () => {
    redirectToBot();
  });

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEYS.cover) applyCoverToElement(heroCover, loadCover());
    if (event.key === STORAGE_KEYS.style) applyStyleSettings(loadStyleSettings());
    if (event.key === STORAGE_KEYS.landing) {
      const nextLanding = loadLandingSettings();
      landingTitle.textContent = nextLanding.title;
      landingSubtitle.textContent = nextLanding.subtitle;
    }
    if (event.key === STORAGE_KEYS.lead) {
      const nextLead = loadLeadSettings();
      leadTitle.textContent = nextLead.title;
      leadSubtitle.textContent = nextLead.subtitle;
      leadSubmitBtn.textContent = nextLead.submitText;
    }
  });
}

function initAdminPage() {
  const loginScreen = document.getElementById("admin-login-screen");
  const panelScreen = document.getElementById("admin-panel-screen");

  const loginInput = document.getElementById("admin-login-input");
  const loginBtn = document.getElementById("admin-login-btn");
  const loginMessage = document.getElementById("admin-login-message");

  const coverInput = document.getElementById("cover-file-input");
  const coverMessage = document.getElementById("cover-message");
  const coverPreview = document.getElementById("cover-preview");
  const landingTitleInput = document.getElementById("landing-title-input");
  const landingSubtitleInput = document.getElementById("landing-subtitle-input");
  const heroTextColorInput = document.getElementById("hero-text-color-input");
  const heroTitleSizeInput = document.getElementById("hero-title-size-input");
  const heroSubtitleSizeInput = document.getElementById("hero-subtitle-size-input");
  const heroTitleSizeValue = document.getElementById("hero-title-size-value");
  const heroSubtitleSizeValue = document.getElementById("hero-subtitle-size-value");
  const heroVerticalPositionSelect = document.getElementById("hero-vertical-position-select");
  const heroHorizontalPositionSelect = document.getElementById("hero-horizontal-position-select");
  const coverPreviewTitle = document.getElementById("cover-preview-title");
  const coverPreviewSubtitle = document.getElementById("cover-preview-subtitle");
  const coverPreviewText = document.getElementById("cover-preview-text");

  const botLinkInput = document.getElementById("bot-link-input");
  const bgSelect = document.getElementById("bg-select");
  const buttonColorInput = document.getElementById("button-color-input");
  const headingColorInput = document.getElementById("heading-color-input");
  const questionColorInput = document.getElementById("question-color-input");
  const bodyTextColorInput = document.getElementById("body-text-color-input");
  const stylePreview = document.getElementById("style-preview");

  const adminList = document.getElementById("admin-list");
  const addQuestionBtn = document.getElementById("add-question-btn");
  const leadTitleInput = document.getElementById("lead-title-input");
  const leadSubtitleInput = document.getElementById("lead-subtitle-input");
  const leadSubmitTextInput = document.getElementById("lead-submit-text-input");
  const adminSaveBtn = document.getElementById("admin-save-btn");
  const adminResetBtn = document.getElementById("admin-reset-btn");
  const adminLogoutBtn = document.getElementById("admin-logout-btn");
  const adminMessage = document.getElementById("admin-message");

  let draftCoverData = "";

  applyStyleSettings(loadStyleSettings());
  const knownOwner = getConfiguredOwnerLogin();
  if (knownOwner) loginInput.value = knownOwner;

  function openPanel() {
    loginScreen.classList.remove("active");
    panelScreen.classList.add("active", "fade-in");

    const style = loadStyleSettings();
    const cover = loadCover();
    const landing = loadLandingSettings();
    const lead = loadLeadSettings();
    botLinkInput.value = loadBotLink();
    landingTitleInput.value = landing.title;
    landingSubtitleInput.value = landing.subtitle;
    bgSelect.value = style.background;
    buttonColorInput.value = style.buttonColor;
    headingColorInput.value = style.headingColor;
    questionColorInput.value = style.questionColor;
    bodyTextColorInput.value = style.bodyTextColor;
    heroTextColorInput.value = style.heroTextColor;
    heroTitleSizeInput.value = String(style.heroTitleSize);
    heroSubtitleSizeInput.value = String(style.heroSubtitleSize);
    heroVerticalPositionSelect.value = style.heroVertical;
    heroHorizontalPositionSelect.value = style.heroHorizontal;
    updateStylePreview();
    applyCoverToElement(coverPreview, cover);
    updateCoverPreviewText();
    renderQuestionEditor(loadQuestions());
    leadTitleInput.value = lead.title;
    leadSubtitleInput.value = lead.subtitle;
    leadSubmitTextInput.value = lead.submitText;
  }

  function updateCoverPreviewText() {
    coverPreviewTitle.textContent = landingTitleInput.value.trim() || "Заголовок обложки";
    coverPreviewSubtitle.textContent = landingSubtitleInput.value.trim() || "Описание обложки";
    coverPreviewTitle.style.color = heroTextColorInput.value;
    coverPreviewSubtitle.style.color = heroTextColorInput.value;
    heroTitleSizeValue.textContent = String(heroTitleSizeInput.value);
    heroSubtitleSizeValue.textContent = String(heroSubtitleSizeInput.value);

    const vertical = HERO_VERTICAL_MAP[heroVerticalPositionSelect.value] || HERO_VERTICAL_MAP.bottom;
    const horizontal = HERO_HORIZONTAL_MAP[heroHorizontalPositionSelect.value] || HERO_HORIZONTAL_MAP.left;
    coverPreviewText.style.justifyContent = vertical;
    coverPreviewText.style.alignItems = horizontal.align;
    coverPreviewText.style.textAlign = horizontal.text;
    coverPreviewTitle.style.fontSize = `${Math.round(Number(heroTitleSizeInput.value) * 0.7)}px`;
    coverPreviewSubtitle.style.fontSize = `${Math.round(Number(heroSubtitleSizeInput.value) * 0.9)}px`;
  }

  function updateStylePreview() {
    const previewCanvas = stylePreview.querySelector(".style-preview-canvas");
    const previewHeading = stylePreview.querySelector(".style-preview-heading");
    const previewSubtitle = stylePreview.querySelector(".style-preview-subtitle");
    const previewQuestion = stylePreview.querySelector(".style-preview-question");
    const previewButton = stylePreview.querySelector(".style-preview-btn");

    const bgKey = bgSelect.value;
    const bgValue = BG_PRESETS[bgKey] || BG_PRESETS.soft;
    const buttonColor = buttonColorInput.value;
    const headingColor = headingColorInput.value;
    const questionColor = questionColorInput.value;
    const bodyTextColor = bodyTextColorInput.value;

    previewCanvas.style.background = bgValue;
    previewHeading.style.color = headingColor;
    previewSubtitle.style.color = bodyTextColor;
    previewQuestion.style.color = questionColor;
    previewButton.style.backgroundColor = buttonColor;
    previewButton.style.color = "#ffffff";
    heroTitleSizeValue.textContent = String(heroTitleSizeInput.value);
    heroSubtitleSizeValue.textContent = String(heroSubtitleSizeInput.value);
  }

  function renderQuestionEditor(questions) {
    adminList.innerHTML = "";
    questions.forEach((question, qIndex) => {
      const card = document.createElement("article");
      card.className = "admin-question";

      const head = document.createElement("div");
      head.className = "admin-question-head";

      const title = document.createElement("h4");
      title.textContent = `Вопрос ${qIndex + 1}`;
      head.appendChild(title);

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn btn-ghost admin-remove-question";
      removeBtn.textContent = "Удалить";
      removeBtn.dataset.role = "remove-question";
      removeBtn.dataset.q = String(qIndex);
      if (questions.length <= 1) removeBtn.disabled = true;
      head.appendChild(removeBtn);

      card.appendChild(head);

      const questionInput = document.createElement("input");
      questionInput.type = "text";
      questionInput.value = question.text;
      questionInput.dataset.role = "question";
      questionInput.dataset.q = String(qIndex);
      card.appendChild(questionInput);

      question.answers.forEach((answer, aIndex) => {
        const row = document.createElement("div");
        row.className = "admin-option";

        const answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.value = answer.text;
        answerInput.dataset.role = "answer";
        answerInput.dataset.q = String(qIndex);
        answerInput.dataset.a = String(aIndex);

        const select = document.createElement("select");
        select.dataset.role = "type";
        select.dataset.q = String(qIndex);
        select.dataset.a = String(aIndex);
        TYPES.forEach((type) => {
          const option = document.createElement("option");
          option.value = type;
          option.textContent = TYPE_LABELS[type];
          if (type === normalizeType(answer.type)) option.selected = true;
          select.appendChild(option);
        });

        row.appendChild(answerInput);
        row.appendChild(select);
        card.appendChild(row);
      });

      adminList.appendChild(card);
    });
  }

  function collectEditedQuestions() {
    const questionInputs = Array.from(adminList.querySelectorAll('[data-role="question"]'));
    return questionInputs.map((qInput, qIndex) => {
      const question = { text: qInput.value.trim(), answers: [] };
      for (let a = 0; a < 4; a += 1) {
        const aInput = adminList.querySelector(`[data-role="answer"][data-q="${qIndex}"][data-a="${a}"]`);
        const tSelect = adminList.querySelector(`[data-role="type"][data-q="${qIndex}"][data-a="${a}"]`);
        question.answers.push({
          text: aInput ? aInput.value.trim() : "",
          type: tSelect ? tSelect.value : ""
        });
      }
      return question;
    });
  }

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("Не удалось прочитать файл"));
      reader.readAsDataURL(file);
    });
  }

  loginBtn.addEventListener("click", () => {
    const entered = loginInput.value.trim().toLowerCase();
    if (!entered) {
      loginMessage.textContent = "Введите GitHub логин.";
      return;
    }

    const configured = getConfiguredOwnerLogin();

    if (!configured) {
      localStorage.setItem(STORAGE_KEYS.ownerLogin, entered);
      loginMessage.textContent = "";
      openPanel();
      return;
    }

    if (entered !== configured) {
      loginMessage.textContent = "Логин не совпадает.";
      return;
    }
    localStorage.setItem(STORAGE_KEYS.ownerLogin, configured);
    loginMessage.textContent = "";
    openPanel();
  });

  coverInput.addEventListener("change", async () => {
    const file = coverInput.files && coverInput.files[0];
    if (!file) return;
    try {
      draftCoverData = await fileToDataUrl(file);
      applyCoverToElement(coverPreview, draftCoverData);
      coverMessage.textContent = "Файл выбран. Нажмите «Сохранить изменения» ниже.";
    } catch {
      coverMessage.textContent = "Не удалось загрузить изображение.";
    }
  });

  addQuestionBtn.addEventListener("click", () => {
    const draftQuestions = collectEditedQuestions();
    draftQuestions.push(createBlankQuestion());
    renderQuestionEditor(draftQuestions);
    adminMessage.textContent = "Новый вопрос добавлен. Заполните текст и ответы.";
  });

  adminList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.role !== "remove-question") return;

    const qIndex = Number(target.dataset.q);
    if (!Number.isFinite(qIndex)) return;

    const draftQuestions = collectEditedQuestions();
    if (draftQuestions.length <= 1) {
      adminMessage.textContent = "Нельзя удалить последний вопрос.";
      return;
    }
    draftQuestions.splice(qIndex, 1);
    renderQuestionEditor(draftQuestions);
    adminMessage.textContent = "Вопрос удален.";
  });

  [
    bgSelect,
    buttonColorInput,
    headingColorInput,
    questionColorInput,
    bodyTextColorInput,
    heroTextColorInput,
    heroTitleSizeInput,
    heroSubtitleSizeInput,
    heroVerticalPositionSelect,
    heroHorizontalPositionSelect
  ].forEach((control) => {
    control.addEventListener("input", updateStylePreview);
    control.addEventListener("change", updateStylePreview);
  });

  [
    landingTitleInput,
    landingSubtitleInput,
    heroTextColorInput,
    heroTitleSizeInput,
    heroSubtitleSizeInput,
    heroVerticalPositionSelect,
    heroHorizontalPositionSelect
  ].forEach((control) => {
    control.addEventListener("input", updateCoverPreviewText);
    control.addEventListener("change", updateCoverPreviewText);
  });

  adminSaveBtn.addEventListener("click", () => {
    const botLink = botLinkInput.value.trim();
    const landingTitle = landingTitleInput.value.trim();
    const landingSubtitle = landingSubtitleInput.value.trim();
    const buttonColor = buttonColorInput.value;
    const headingColor = headingColorInput.value;
    const questionColor = questionColorInput.value;
    const bodyTextColor = bodyTextColorInput.value;
    const heroTextColor = heroTextColorInput.value;
    const heroTitleSize = Number(heroTitleSizeInput.value);
    const heroSubtitleSize = Number(heroSubtitleSizeInput.value);
    const heroVertical = heroVerticalPositionSelect.value;
    const heroHorizontal = heroHorizontalPositionSelect.value;
    const background = bgSelect.value;
    const questions = collectEditedQuestions();
    const leadSettings = {
      title: leadTitleInput.value.trim(),
      subtitle: leadSubtitleInput.value.trim(),
      submitText: leadSubmitTextInput.value.trim()
    };

    if (!isValidUrl(botLink)) {
      adminMessage.textContent = "Введите корректную HTTPS ссылку на бота.";
      return;
    }
    if (!landingTitle || !landingSubtitle) {
      adminMessage.textContent = "Заполните заголовок и описание обложки.";
      return;
    }
    if (!isValidHexColor(buttonColor)) {
      adminMessage.textContent = "Выберите корректный цвет кнопки.";
      return;
    }
    if (!isValidHexColor(headingColor)) {
      adminMessage.textContent = "Выберите корректный цвет заголовков.";
      return;
    }
    if (!isValidHexColor(questionColor)) {
      adminMessage.textContent = "Выберите корректный цвет текста вопросов.";
      return;
    }
    if (!isValidHexColor(bodyTextColor)) {
      adminMessage.textContent = "Выберите корректный цвет обычного текста.";
      return;
    }
    if (!isValidHexColor(heroTextColor)) {
      adminMessage.textContent = "Выберите корректный цвет текста на обложке.";
      return;
    }
    if (!Number.isFinite(heroTitleSize) || heroTitleSize < 24 || heroTitleSize > 64) {
      adminMessage.textContent = "Размер заголовка на обложке должен быть от 24 до 64.";
      return;
    }
    if (!Number.isFinite(heroSubtitleSize) || heroSubtitleSize < 14 || heroSubtitleSize > 32) {
      adminMessage.textContent = "Размер описания на обложке должен быть от 14 до 32.";
      return;
    }
    if (!HERO_VERTICAL_MAP[heroVertical]) {
      adminMessage.textContent = "Выберите корректную позицию по вертикали.";
      return;
    }
    if (!HERO_HORIZONTAL_MAP[heroHorizontal]) {
      adminMessage.textContent = "Выберите корректную позицию по горизонтали.";
      return;
    }
    if (!BG_PRESETS[background]) {
      adminMessage.textContent = "Выберите корректный фон.";
      return;
    }
    if (!isValidQuestionSet(questions)) {
      adminMessage.textContent = "Проверьте вопросы: нужен хотя бы 1 вопрос, и в каждом по 4 варианта ответа.";
      return;
    }
    if (Object.values(leadSettings).some((value) => !value)) {
      adminMessage.textContent = "Заполните все поля блока «Экран формы (после вопросов)»";
      return;
    }

    localStorage.setItem(STORAGE_KEYS.botLink, botLink);
    localStorage.setItem(
      STORAGE_KEYS.style,
      JSON.stringify({
        background,
        buttonColor,
        headingColor,
        questionColor,
        bodyTextColor,
        heroTextColor,
        heroTitleSize,
        heroSubtitleSize,
        heroVertical,
        heroHorizontal
      })
    );
    localStorage.setItem(
      STORAGE_KEYS.landing,
      JSON.stringify({
        title: landingTitle,
        subtitle: landingSubtitle
      })
    );
    if (draftCoverData) {
      localStorage.setItem(STORAGE_KEYS.cover, draftCoverData);
      draftCoverData = "";
      if (coverInput.value) coverInput.value = "";
      coverMessage.textContent = "Обложка обновлена.";
    } else {
      coverMessage.textContent = "Изображение обложки без изменений.";
    }
    localStorage.setItem(STORAGE_KEYS.questions, JSON.stringify(questions));
    localStorage.setItem(STORAGE_KEYS.lead, JSON.stringify(leadSettings));
    applyStyleSettings(loadStyleSettings());
    updateCoverPreviewText();
    adminMessage.textContent = "Изменения сохранены.";
  });

  adminResetBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.questions);
    localStorage.removeItem(STORAGE_KEYS.style);
    localStorage.removeItem(STORAGE_KEYS.botLink);
    localStorage.removeItem(STORAGE_KEYS.cover);
    localStorage.removeItem(STORAGE_KEYS.ownerLogin);
    localStorage.removeItem(STORAGE_KEYS.lead);

    botLinkInput.value = DEFAULT_BOT_LINK;
    bgSelect.value = "soft";
    buttonColorInput.value = "#0f766e";
    headingColorInput.value = "#172b4d";
    questionColorInput.value = "#172b4d";
    bodyTextColorInput.value = "#4a607e";
    heroTextColorInput.value = "#ffffff";
    heroTitleSizeInput.value = "38";
    heroSubtitleSizeInput.value = "18";
    heroVerticalPositionSelect.value = "bottom";
    heroHorizontalPositionSelect.value = "left";
    landingTitleInput.value = "Где я живу из долга, а где из отклика";
    landingSubtitleInput.value =
      "Мини-диагностика для тех, кто устал тащить всё на себе и хочет вернуть себе внутреннее “да” и “нет”";
    localStorage.removeItem(STORAGE_KEYS.landing);
    updateStylePreview();
    updateCoverPreviewText();
    applyStyleSettings(loadStyleSettings());
    applyCoverToElement(coverPreview, loadCover());
    renderQuestionEditor(loadQuestions());
    const lead = loadLeadSettings();
    leadTitleInput.value = lead.title;
    leadSubtitleInput.value = lead.subtitle;
    leadSubmitTextInput.value = lead.submitText;
    adminMessage.textContent = "Сброс выполнен.";
    coverMessage.textContent = "";
  });

  adminLogoutBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.ownerLogin);
    loginInput.value = "";
    loginMessage.textContent = "Вы вышли из админки.";
    panelScreen.classList.remove("active");
    loginScreen.classList.add("active", "fade-in");
  });
}

(function bootstrap() {
  const page = document.body.dataset.page;
  if (page === "admin") {
    initAdminPage();
  } else {
    initQuizPage();
  }
})();
