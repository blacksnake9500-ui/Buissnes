const body = document.querySelector("body");
const dark = document.querySelector(".dark");
const logo_img = document.querySelector(".logo_img");

dark.addEventListener("click", () => {
  body.classList.toggle("active");
});

const translations = {
  uz: {
    titlee: "Biznes konsalting",
    desc: "Biz sizning biznesingizni rivojlantiramiz.Bu 2022-yilda suratga olingan mashhur romantik komediya bo'lib, o'z kompaniyasi direktorining (CEO) ko'r-ko'rona uchrashuviga dugonasi o'rniga borgan qiz va ularning o'rtasidagi kutilmagan munosabatlar haqida hikoya qiladi.",
    dark: "Tungi rejim",
    logo_word: "Biznes konsalting",
    hero_learn: "Ko'proq o'rganish",
    hero_h1: "Biz sizning biznesingizni yangi darajaga olib chiqamiz",
    intro_h3: "Kompaniya",
    intro_h5: "shiori bu yerda",
    two_p1: "Biznes konsalting",
    two_h1: "Sizning biznesingiz uchun qanday xizmatlarni taklif qilamiz",
    two_p2:
      "Biznesni rivojlantirish, marketing strategiyasi, moliyaviy maslahatlar va boshqalar.",
    two_h2: "Marketing strategiyasi",
    two_p3:
      "Raqobatbardosh tahlil, maqsadli auditoriyani aniqlash, brend pozitsiyasi va boshqalar.",
    three_h11:
      "Ko'proq bilishni xohlaysizmi? Biznes maslahatchimiz bilan bog'laning",
    three_h3: "Biznes maslahatchisi",
    three_h1_2: "Vizyoningizni amalga oshirish uchun siz bilan birga ishlaymiz",
    three_p:
      "Biznesingizni rivojlantirish uchun sizga eng yaxshi maslahatlarni beramiz va sizning biznesingizni yangi darajaga olib chiqamiz.",
    four_p1: "Biznes konstaling",
    four_h1: "Bilim bilan rivojlanadigan biznes va rahbarlarning tushunchasi",
    five_p1: "Biznes konsalting",
    five_h1: "Eng so'nggi loyihalarimiz",
    six_h1: "Innovatsion yechimlarni qidiryapsizmi?",
    six_p1:
      "Sizning kompaniyangiz uchun innovatsion yechimlarni qidiryapsizmi?",
  },
  en: {
    titlee: "Business Consulting",
    desc: "Subject: Collaboration Opportunity: [Sizning kompaniyangiz] x [Hamkor kompaniya]Dear [Ism],I’m reaching out from Salohiddin Co. because I see a great potential for a partnership between our brands. Our [mahsulot/xizmat] complements your work in [soha] perfectly. I believe a collaboration would be mutually beneficial.Are you available for a brief chat next week to explore this?Best regards,",
    dark: "Darkmode",
    logo_word: "Business Consulting",
    hero_learn: "Learn more",
    hero_h1: "We bring your business to new heights",
    intro_h3: "company",
    intro_h5: "slogan here",
    two_p1: "Business Consulting",
    two_h1: "What services do we offer for your business",
    two_p2:
      "Business development, marketing strategy, financial advice and more.",
    two_h2: "Marketing Strategy",
    two_p3:
      "Competitive analysis, target audience identification, brand positioning and more.",
    three_h11: "Want to learn more? Contact our business consultant",
    three_h3: "Business Consultant",
    three_h1_2: "We work with you to realize your vision",
    three_p:
      "We provide you with the best advice to grow your business and take it to the next level.",
    four_p1: "Business Consulting",
    four_h1: "The concept of business and leaders developing with knowledge",
    five_p1: "Business Consulting",
    five_h1: "Latest projects",
    six_h1: "Looking for innovative solutions?",
    six_p1: "Looking for innovative solutions for your company?",
  },
  ru: {
    titlee: "Бизнес консалтинг",
    desc: "Я представляю компанию [Название компании]. Мы занимаемся [кратко о деятельности].Мы изучили ваш профиль и видим большой потенциал для совместной работы в области [сфера деятельности]. Наше решение поможет вам [указать выгоду, например: снизить расходы на 15%].",
    dark: "Темный режим",
    logo_word: "Бизнес-консалтинг",
    hero_learn: "изучит много",
    hero_h1: "Вы достигните до високих уровена бизнеса",
    intro_h3: "кампания",
    intro_h5: "слоган здесь",
    two_p1: "Бизнес консалтинг",
    two_h1: "Какие услуги мы предлагаем для вашего бизнеса",
    two_p2:
      "Развитие бизнеса, маркетинговая стратегия, финансовые консультации и другие.",
    two_h2: "Маркетинговая стратегия",
    two_p3:
      "Конкурентный анализ, определение целевой аудитории, позиционирование бренда и другие.",

    three_h11: "Хотите узнать больше? Свяжитесь с нашим бизнес-консультантом",
    three_h3: "Бизнес-консультант",
    three_h1_2: "Мы работаем с вами, чтобы реализовать ваше видение",
    three_p:
      "Мы предоставляем вам лучшие советы для развития вашего бизнеса и вывода его на новый уровень.",
    four_p1: "Бизнес консалтинг",
    four_h1: "Концепция бизнеса и лидеров, развивающихся с знаниями",
    five_p1: "Бизнес консалтинг",
    five_h1: "Последние проекты",
    six_h1: "Ищете инновационные решения?",
    six_p1: "Ищете инновационные решения для вашей компании?",
  },
};

const buttons = document.querySelectorAll(".lang");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    document.querySelector(".titlee").textContent = translations[lang].titlee;

    document.querySelector(".desc").textContent = translations[lang].desc;

    document.querySelector(".dark").textContent = translations[lang].dark;

    document.querySelector(".logo_word").textContent =
      translations[lang].logo_word;

    document.querySelector(".hero_learn").textContent =
      translations[lang].hero_learn;

    document.querySelector(".hero_h1").textContent = translations[lang].hero_h1;

    document.querySelectorAll(".intro_h3").forEach((el) => {
      el.textContent = translations[lang].intro_h3;
    });

    document.querySelectorAll(".intro_h5").forEach((el) => {
      el.textContent = translations[lang].intro_h5;
    });

    document.querySelector(".two_p1").textContent = translations[lang].two_p1;

    document.querySelector(".two_h1").textContent = translations[lang].two_h1;

    document.querySelector(".two_p2").textContent = translations[lang].two_p2;

    document.querySelectorAll(".two_h2").forEach((el) => {
      el.textContent = translations[lang].two_h2;
    });

    document.querySelectorAll(".two_p3").forEach((el) => {
      el.textContent = translations[lang].two_p3;
    });

    document.querySelector(".three_h11").textContent =
      translations[lang].three_h11;

    document.querySelector(".three_h3").textContent =
      translations[lang].three_h3;

    document.querySelector(".three_h1_2").textContent =
      translations[lang].three_h1_2;

    document.querySelector(".three_p").textContent = translations[lang].three_p;

    document.querySelector(".four_p1").textContent = translations[lang].four_p1;

    document.querySelector(".four_h1").textContent = translations[lang].four_h1;

    document.querySelector(".five_p1").textContent = translations[lang].five_p1;

    document.querySelector(".five_h1").textContent = translations[lang].five_h1;

    document.querySelector(".six_h1").textContent = translations[lang].six_h1;

    document.querySelector(".six_p1").textContent = translations[lang].six_p1;

    document.body.className = lang; // optional (scss uchun)
  });
});
