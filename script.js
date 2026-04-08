const OWNER_GITHUB_LOGIN = "YOUR_GITHUB_LOGIN";

const STORAGE_KEYS = {
  questions: "human_design_quiz_questions_v1",
  style: "human_design_quiz_style_v1",
  botLink: "human_design_quiz_bot_link_v1",
  cover: "quiz_cover",
  ownerLogin: "quiz_owner_login"
};

const DEFAULT_BOT_LINK = "https://t.me/your_bot";
const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1600&q=80";

const TYPES = ["действие", "ум", "эмоции", "ожидания"];
const BG_PRESETS = {
  soft: "linear-gradient(160deg, #f8fafc 0%, #eef2ff 100%)",
  sky: "linear-gradient(160deg, #ecfeff 0%, #dbeafe 100%)",
  sand: "linear-gradient(160deg, #fffbeb 0%, #fef3c7 100%)",
  mint: "linear-gradient(160deg, #ecfdf5 0%, #d1fae5 100%)"
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
  if (!Array.isArray(candidate) || candidate.length !== 9) return false;
  return candidate.every((q) => {
    if (!q || typeof q.text !== "string" || !Array.isArray(q.answers) || q.answers.length !== 4) {
      return false;
    }
    return q.answers.every(
      (ans) => ans && typeof ans.text === "string" && typeof ans.type === "string" && TYPES.includes(ans.type)
    );
  });
}

function loadQuestions() {
  const raw = localStorage.getItem(STORAGE_KEYS.questions);
  if (!raw) return DEFAULT_QUESTIONS;
  try {
    const parsed = JSON.parse(raw);
    return isValidQuestionSet(parsed) ? parsed : DEFAULT_QUESTIONS;
  } catch {
    return DEFAULT_QUESTIONS;
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
    bodyTextColor: "#4a607e"
  };
  const raw = localStorage.getItem(STORAGE_KEYS.style);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return {
      background: BG_PRESETS[parsed.background] ? parsed.background : fallback.background,
      buttonColor: isValidHexColor(parsed.buttonColor) ? parsed.buttonColor : fallback.buttonColor,
      headingColor: isValidHexColor(parsed.headingColor) ? parsed.headingColor : fallback.headingColor,
      questionColor: isValidHexColor(parsed.questionColor) ? parsed.questionColor : fallback.questionColor,
      bodyTextColor: isValidHexColor(parsed.bodyTextColor) ? parsed.bodyTextColor : fallback.bodyTextColor
    };
  } catch {
    return fallback;
  }
}

function applyStyleSettings(settings) {
  const bg = BG_PRESETS[settings.background] || BG_PRESETS.soft;
  document.documentElement.style.setProperty("--page-bg", bg);
  document.documentElement.style.setProperty("--accent", settings.buttonColor);
  document.documentElement.style.setProperty("--accent-hover", getHoverColor(settings.buttonColor));
  document.documentElement.style.setProperty("--heading-color", settings.headingColor);
  document.documentElement.style.setProperty("--question-color", settings.questionColor);
  document.documentElement.style.setProperty("--body-text-color", settings.bodyTextColor);
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
  return { действие: 0, ум: 0, эмоции: 0, ожидания: 0 };
}

function getTopType(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
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
  const questionCounter = document.getElementById("question-counter");
  const progressBar = document.getElementById("progress-bar");
  const questionText = document.getElementById("question-text");
  const answersList = document.getElementById("answers-list");

  const leadForm = document.getElementById("lead-form");
  const nameInput = document.getElementById("name-input");
  const telegramInput = document.getElementById("telegram-input");
  const emailInput = document.getElementById("email-input");
  const formError = document.getElementById("form-error");

  let questions = loadQuestions();
  let currentQuestionIndex = 0;
  let scores = createEmptyScores();

  applyStyleSettings(loadStyleSettings());
  applyCoverToElement(heroCover, loadCover());

  function renderQuestion() {
    const total = questions.length;
    const current = questions[currentQuestionIndex];
    questionCounter.textContent = `Вопрос ${currentQuestionIndex + 1} из ${total}`;
    progressBar.style.width = `${(currentQuestionIndex / total) * 100}%`;
    questionText.textContent = current.text;
    answersList.innerHTML = "";

    current.answers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn answer-btn";
      btn.textContent = answer.text;
      btn.addEventListener("click", () => {
        scores[answer.type] += 1;
        currentQuestionIndex += 1;
        if (currentQuestionIndex >= total) {
          progressBar.style.width = "100%";
          setActiveScreen(screens, "lead");
          return;
        }
        renderQuestion();
      });
      answersList.appendChild(btn);
    });
  }

  function validateLead(data) {
    if (!data.name) return "Введите имя.";
    if (!/^@[a-zA-Z0-9_]{4,}$/.test(data.telegram)) {
      return "Введите Telegram в формате @username.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return "Введите корректную эл. почту.";
    }
    return "";
  }

  function redirectToBot(leadData) {
    const link = new URL(loadBotLink());
    link.searchParams.set("result", getTopType(scores));
    link.searchParams.set("name", leadData.name);
    link.searchParams.set("telegram", leadData.telegram);
    link.searchParams.set("email", leadData.email);
    link.searchParams.set("action", String(scores.действие));
    link.searchParams.set("mind", String(scores.ум));
    link.searchParams.set("emotion", String(scores.эмоции));
    link.searchParams.set("expectation", String(scores.ожидания));
    window.location.href = link.toString();
  }

  startBtn.addEventListener("click", () => {
    questions = loadQuestions();
    scores = createEmptyScores();
    currentQuestionIndex = 0;
    leadForm.reset();
    formError.textContent = "";
    renderQuestion();
    setActiveScreen(screens, "quiz");
  });

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const leadData = {
      name: nameInput.value.trim(),
      telegram: telegramInput.value.trim(),
      email: emailInput.value.trim()
    };
    const error = validateLead(leadData);
    if (error) {
      formError.textContent = error;
      return;
    }
    formError.textContent = "";
    redirectToBot(leadData);
  });

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEYS.cover) applyCoverToElement(heroCover, loadCover());
    if (event.key === STORAGE_KEYS.style) applyStyleSettings(loadStyleSettings());
  });
}

function initAdminPage() {
  const loginScreen = document.getElementById("admin-login-screen");
  const panelScreen = document.getElementById("admin-panel-screen");

  const loginInput = document.getElementById("admin-login-input");
  const loginBtn = document.getElementById("admin-login-btn");
  const loginMessage = document.getElementById("admin-login-message");

  const coverInput = document.getElementById("cover-file-input");
  const saveCoverBtn = document.getElementById("save-cover-btn");
  const coverMessage = document.getElementById("cover-message");
  const coverPreview = document.getElementById("cover-preview");

  const botLinkInput = document.getElementById("bot-link-input");
  const bgSelect = document.getElementById("bg-select");
  const buttonColorInput = document.getElementById("button-color-input");
  const headingColorInput = document.getElementById("heading-color-input");
  const questionColorInput = document.getElementById("question-color-input");
  const bodyTextColorInput = document.getElementById("body-text-color-input");

  const adminList = document.getElementById("admin-list");
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
    botLinkInput.value = loadBotLink();
    bgSelect.value = style.background;
    buttonColorInput.value = style.buttonColor;
    headingColorInput.value = style.headingColor;
    questionColorInput.value = style.questionColor;
    bodyTextColorInput.value = style.bodyTextColor;
    applyCoverToElement(coverPreview, cover);
    renderQuestionEditor(loadQuestions());
  }

  function renderQuestionEditor(questions) {
    adminList.innerHTML = "";
    questions.forEach((question, qIndex) => {
      const card = document.createElement("article");
      card.className = "admin-question";

      const title = document.createElement("h4");
      title.textContent = `Вопрос ${qIndex + 1}`;
      card.appendChild(title);

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
          option.textContent = type;
          if (type === answer.type) option.selected = true;
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
    const list = [];
    for (let q = 0; q < 9; q += 1) {
      const qInput = adminList.querySelector(`[data-role="question"][data-q="${q}"]`);
      const question = { text: qInput ? qInput.value.trim() : "", answers: [] };
      for (let a = 0; a < 4; a += 1) {
        const aInput = adminList.querySelector(`[data-role="answer"][data-q="${q}"][data-a="${a}"]`);
        const tSelect = adminList.querySelector(`[data-role="type"][data-q="${q}"][data-a="${a}"]`);
        question.answers.push({
          text: aInput ? aInput.value.trim() : "",
          type: tSelect ? tSelect.value : ""
        });
      }
      list.push(question);
    }
    return list;
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
      coverMessage.textContent = "Файл выбран. Нажмите Сохранить.";
    } catch {
      coverMessage.textContent = "Не удалось загрузить изображение.";
    }
  });

  saveCoverBtn.addEventListener("click", () => {
    if (!draftCoverData) {
      coverMessage.textContent = "Сначала выберите файл изображения.";
      return;
    }
    localStorage.setItem(STORAGE_KEYS.cover, draftCoverData);
    coverMessage.textContent = "Обложка обновлена";
    draftCoverData = "";
  });

  adminSaveBtn.addEventListener("click", () => {
    const botLink = botLinkInput.value.trim();
    const buttonColor = buttonColorInput.value;
    const headingColor = headingColorInput.value;
    const questionColor = questionColorInput.value;
    const bodyTextColor = bodyTextColorInput.value;
    const background = bgSelect.value;
    const questions = collectEditedQuestions();

    if (!isValidUrl(botLink)) {
      adminMessage.textContent = "Введите корректную HTTPS ссылку на бота.";
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
    if (!BG_PRESETS[background]) {
      adminMessage.textContent = "Выберите корректный фон.";
      return;
    }
    if (!isValidQuestionSet(questions)) {
      adminMessage.textContent = "Проверьте вопросы: 9 вопросов и 4 варианта в каждом.";
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
        bodyTextColor
      })
    );
    localStorage.setItem(STORAGE_KEYS.questions, JSON.stringify(questions));
    applyStyleSettings(loadStyleSettings());
    adminMessage.textContent = "Изменения сохранены.";
  });

  adminResetBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.questions);
    localStorage.removeItem(STORAGE_KEYS.style);
    localStorage.removeItem(STORAGE_KEYS.botLink);
    localStorage.removeItem(STORAGE_KEYS.cover);
    localStorage.removeItem(STORAGE_KEYS.ownerLogin);

    botLinkInput.value = DEFAULT_BOT_LINK;
    bgSelect.value = "soft";
    buttonColorInput.value = "#0f766e";
    headingColorInput.value = "#172b4d";
    questionColorInput.value = "#172b4d";
    bodyTextColorInput.value = "#4a607e";
    applyStyleSettings(loadStyleSettings());
    applyCoverToElement(coverPreview, loadCover());
    renderQuestionEditor(loadQuestions());
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
