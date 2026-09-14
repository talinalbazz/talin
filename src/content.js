js
/**
 * Talin's Portfolio
 * Personal content — Arabic & English
 */

export const PROFILE = {
  name: { ar: 'تالين', en: 'Talin' },
  email: 'talinaalbaz33@gmail.com',
  github: 'https://github.com/talinalbazz',
  gitlab: 'https://gitlab.com/talinalbaz',
  linkedin: '',
  x: 'https://x.com/minihyobin?s=11',

  location: { ar: 'مكة المكرمة، السعودية', en: 'Makkah, Saudi Arabia' },
  timeZone: 'Asia/Riyadh',
}

export const NAV = [
  { id: 'home', ar: 'الرئيسية', en: 'Home' },
  { id: 'about', ar: 'نبذة عني', en: 'About' },
  { id: 'skills', ar: 'مهاراتي', en: 'Skills' },
  { id: 'projects', ar: 'مشاريعي', en: 'Projects' },
  { id: 'contact', ar: 'تواصل', en: 'Contact' },
]

export const CONTENT = {
  ar: {
    dir: 'rtl',

    hero: {
      titleBefore: 'أتعلم، أجرّب،',
      titleAccent: 'وأحوّل الأفكار',
      titleAfter: 'إلى مشاريع.',
      subtitle:
        'أنا تالين، طالبة ذكاء اصطناعي وعلوم بيانات من مكة. أحب أتعلم أشياء جديدة، أجربها بنفسي، وأشوف وين ممكن توصلني الفكرة.',
      ctaPrimary: 'شاهد مشاريعي',
      ctaSecondary: 'نبذة عني',
      scroll: 'مرّر للأسفل',
    },

    about: {
      index: '01',
      kicker: 'نبذة عني',

      paragraphs: [
        'أنا تالين، عمري 22 سنة، وأدرس الذكاء الاصطناعي وعلوم البيانات. أحب أتعلم أشياء جديدة وأجربها بنفسي، وغالبًا إذا جاتني فكرة أحب أحاول أحولها إلى مشروع بدل ما تظل مجرد فكرة.',

        'أحب أشتغل على أشياء مختلفة وأتعلم من التجربة. من الأشياء اللي استمتعت فيها تحليل البيانات باستخدام Excel وPower BI، بالإضافة إلى Python والذكاء الاصطناعي. ما زلت أتعلم وأجرب، وأحب أشوف كيف أقدر أطور الفكرة كل مرة أكثر.',

        'بعيدًا عن الدراسة والمشاريع، أحب القراءة والرياضة والأفلام، وأحب أكتشف أشياء جديدة من وقت لوقت. هذا الموقع مكان أجمع فيه الأشياء اللي أشتغل عليها، والمشاريع اللي أجربها، والأفكار اللي أبغى أطورها مع الوقت.',
      ],

      education: {
        kicker: 'حاليًا',
        degree: 'طالبة ذكاء اصطناعي وعلوم بيانات',
        school: 'أتعلم وأجرّب وأطوّر نفسي',
        period: 'قيد الدراسة',
      },
    },

    skills: {
      index: '02',
      kicker: 'مهاراتي',

      titleBefore: 'أشياء',
      titleAccent: 'أتعلمها',
      titleAfter: 'وأحب أجربها.',

      intro:
        'مو كل شيء هنا أعتبر نفسي محترفة فيه، بعضها أتعلمه حاليًا وبعضها أستخدمه في مشاريعي وتجربتي.',

      groups: [
        {
          title: 'الذكاء الاصطناعي والبرمجة',
          items: [
            'Python',
            'Artificial Intelligence',
            'Data Science',
            'Machine Learning',
          ],
        },

        {
          title: 'تحليل البيانات',
          items: [
            'Microsoft Excel',
            'Power BI',
            'Data Analysis',
            'Data Visualization',
          ],
        },

        {
          title: 'أشياء أجرّبها',
          items: [
            'Git & GitHub',
            'Web Development',
            'Building Projects',
            'Learning New Tools',
          ],
        },
      ],
    },

    Projects: {
      index: '03',
      kicker: 'مشاريعي',

      titleBefore: 'أفكار',
      titleAccent: 'أحوّلها',
      titleAfter: 'إلى أشياء حقيقية.',

      intro:
        'هنا أحط المشاريع والتجارب اللي اشتغلت عليها. بعضها بسيط، وبعضها ما زال قيد التطوير، وأحب أرجع لها وأحسنها مع الوقت.',

      viewProject: 'افتح المشروع',
      viewCode: 'شاهد الكود',
      moreTitle: 'تجارب ومشاريع أخرى',
    },

    contact: {
      index: '04',
      kicker: 'تواصل',

      titleBefore: 'عندك فكرة؟',
      titleAccent: 'خلينا نتكلم',
      titleAfter: 'عنها.',

      intro:
        'إذا عندك فكرة أو مشروع أو شيء جديد حاب تجربه، يسعدني أسمع عنه.',

      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال…',
        success: 'وصلت الرسالة، شكرًا لك 🩷',
        error: 'تعذّر الإرسال. تقدر تتواصل' , 
       },
    },
  },

  en: {
    dir: 'ltr',

    hero: {
      titleBefore: 'I learn, I experiment,',
      titleAccent: 'and I turn ideas',
      titleAfter: 'into projects.',
      subtitle:
        "I'm Talin, an AI & Data Science student from Makkah. I love learning new things, trying them out myself, and seeing where an idea can take me.",
      ctaPrimary: 'View My Projects',
      ctaSecondary: 'About Me',
      scroll: 'Scroll down',
    },

    about: {
      index: '01',
      kicker: 'About Me',

      paragraphs: [
        "I'm Talin, 22 years old, studying Artificial Intelligence and Data Science. I love learning new things and trying them out myself — when an idea comes to me, I usually try to turn it into a project instead of leaving it as just an idea.",

        "I enjoy working on different things and learning through experience. Some of the things I've enjoyed most are data analysis with Excel and Power BI, along with Python and AI. I'm still learning and experimenting, and I love seeing how each idea can grow a little more every time.",

        "Outside of studying and projects, I enjoy reading, sports, and movies, and I like discovering new things from time to time. This site is a place where I gather what I'm working on, the projects I'm experimenting with, and the ideas I want to keep developing over time.",
      ],

      education: {
        kicker: 'Currently',
        degree: 'AI & Data Science Student',
        school: 'Learning, experimenting, and growing',
        period: 'In progress',
      },
    },

    skills: {
      index: '02',
      kicker: 'Skills',

      titleBefore: 'Things',
      titleAccent: "I'm learning",
      titleAfter: 'and love exploring.',

      intro:
        "Not everything here is something I consider myself an expert in — some I'm still learning, and some I use in my projects and experiments.",

      groups: [
        {
          title: 'AI & Programming',
          items: [
            'Python',
            'Artificial Intelligence',
            'Data Science',
            'Machine Learning',
          ],
        },

        {
          title: 'Data Analysis',
          items: [
            'Microsoft Excel',
            'Power BI',
            'Data Analysis',
            'Data Visualization',
          ],
        },

        {
          title: 'Things I Explore',
          items: [
            'Git & GitHub',
            'Web Development',
            'Building Projects',
            'Learning New Tools',
          ],
        },
      ],
    },

    projects: {
      index: '03',
      kicker: 'Projects',

      titleBefore: 'Ideas',
      titleAccent: 'I turn',
      titleAfter: 'into real things.',

      intro:
        "Here I share the projects and experiments I've worked on. Some are simple, some are still in progress, and I like coming back to improve them over time.",

      viewProject: 'View Project',
      viewCode: 'View Code',
      moreTitle: 'Other Experiments & Projects',
    },

    contact: {
      index: '04',
      kicker: 'Contact',

      titleBefore: 'Got an idea?',
      titleAccent: "Let's talk",
      titleAfter: 'about it.',

      intro:
        "If you have an idea, a project, or something new you'd like to try, I'd love to hear about it.",

      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending…',
        success: 'Message sent, thank you 🩷',
        error: 'Failed to send. You can reach me directly by email.',
      },
    },
  },
}

export const PROJECTS = [
  
  {
    id: '01',
    kind: 'code',
    featured: true,
    url: 'https://github.com/talin0315',
    title: {
      ar: 'نظام ذكي لاستقطاب اللاعبين',
      en: 'AI Player Recruitment System',
    },
    description: {
      ar: 'مشروع يهدف إلى استخدام البيانات والذكاء الاصطناعي لدعم عملية استقطاب اللاعبين ومساعدة الأندية على مقارنة الخيارات وفق احتياجاتها. المشروع حاليًا قيد التطوير وأعمل على تحسينه وتطوير فكرته.',
      en: 'A project exploring how data and AI can support player recruitment and help clubs compare options based on their needs. The project is currently under development and continues to evolve.',
    },
    tech: ['Python', 'AI', 'Data Science', 'GitHub'],
  },

  {
    id: '02',
    kind: 'code',
    featured: true,
    url: 'https://github.com/talin0315',
    title: {
      ar: 'مشاريع تحليل البيانات',
      en: 'Data Analysis Projects',
    },
    description: {
      ar: 'مجموعة من التجارب والمشاريع البسيطة التي أعمل عليها لتحليل البيانات واكتشاف الأنماط وتحويل البيانات إلى معلومات يمكن فهمها والاستفادة منها.',
      en: 'A collection of small projects and experiments focused on exploring data, finding patterns, and turning raw information into useful insights.',
    },
    tech: ['Python', 'Data Analysis'],
  },

  {
    id: '03',
    kind: 'code',
    featured: true,
    url: 'https://github.com/talin0315',
    title: {
      ar: 'لوحات بيانات باستخدام Power BI',
      en: 'Power BI Dashboards',
    },
    description: {
      ar: 'تجارب في بناء لوحات تفاعلية تساعد على عرض البيانات بطريقة أبسط وأكثر وضوحًا، مع التركيز على التصور واستخراج المعلومات المهمة.',
      en: 'Experiments with interactive dashboards that make data easier to understand, with a focus on visualization and finding meaningful insights.',
    },
    tech: ['Power BI', 'Data Visualization'],
  },

  {
    id: '04',
    kind: 'code',
    featured: true,
    url: 'https://github.com/talin0315',
    title: {
      ar: 'تجارب Excel وتحليل البيانات',
      en: 'Excel Data Projects',
    },
    description: {
      ar: 'مشاريع وتجارب بسيطة باستخدام Excel لتنظيم البيانات وتحليلها وإنشاء تقارير واضحة منها.',
      en: 'Small projects and experiments using Excel to organize, analyze, and turn data into clear reports.',
    },
    tech: ['Microsoft Excel', 'Data Analysis'],
  },

  {
    id: '05',
    kind: 'code',
    url: 'https://github.com/talin0315',
    title: {
      ar: 'تجارب برمجية',
      en: 'Coding Experiments',
    },
    description: {
      ar: 'مشاريع وتجارب صغيرة أطبق فيها ما أتعلمه وأجرب أفكارًا وتقنيات جديدة.',
      en: 'Small projects and experiments where I practice what I learn and explore new ideas and technologies.',
    },
    tech: ['Python', 'GitHub'],
  },

  {
    id: '06',
    kind: 'code',
    url: 'https://github.com/talin0315',
    title: {
      ar: 'مشاريع قادمة',
      en: 'Coming Projects',
    },
    description: {
      ar: 'المساحة هنا مفتوحة للمشاريع والأفكار القادمة التي سأعمل عليها وأضيفها مع تطور رحلتي.',
      en: 'A space for future projects and ideas that I’ll build and add as my journey continues.',
    },
    tech: ['Learning', 'Exploring'],
  },
]