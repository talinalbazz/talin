/**
 * Talin's Portfolio
 * Personal content — Arabic & English
 */

export const PROFILE = {
  name: { ar: 'تالين', en: 'Talin' },
  email: 'talinaalbaz33@gmail.com',
  github: 'https://github.com/talin0315',
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

    projects: {
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
        error: 'تعذّر الإرسال. تقدر تتواصل معي عبر البريد الإلكتروني مباشرة.',
      },
    },

    footer: {
      top: 'للأعلى',
    },

    loading: 'جارٍ تحميل الصفحة',
  },

  en: {
    dir: 'ltr',

    hero: {
      titleBefore: 'I learn, explore,',
      titleAccent: 'and turn ideas',
      titleAfter: 'into projects.',
      subtitle:
        'I’m Talin, an AI and Data Science student from Makkah. I enjoy learning new things, trying them out, and seeing where an idea can take me.',
      ctaPrimary: 'View my projects',
      ctaSecondary: 'About me',
      scroll: 'Scroll',
    },

    about: {
      index: '01',
      kicker: 'About me',

      paragraphs: [
        'I’m Talin, I’m 22, and I study Artificial Intelligence and Data Science. I enjoy learning new things and trying them out for myself. Whenever I have an idea, I usually want to turn it into a project instead of leaving it as just an idea.',

        'I like working on different things and learning through experimenting. I’ve especially enjoyed working with data using Excel and Power BI, along with Python and AI. I’m still learning and trying new things, and I enjoy seeing how I can make an idea a little better each time.',

        'Outside of studying and projects, I enjoy reading, sports, and movies. I also like discovering new things along the way. This website is a place where I can share the projects I work on, the things I experiment with, and the ideas I want to keep developing.',
      ],

      education: {
        kicker: 'Right now',
        degree: 'AI & Data Science Student',
        school: 'Learning, experimenting & improving',
        period: 'Currently studying',
      },
    },

    skills: {
      index: '02',
      kicker: 'Skills',

      titleBefore: 'Things I’m',
      titleAccent: 'learning',
      titleAfter: 'and exploring.',

      intro:
        'I don’t consider myself an expert in everything here. Some are things I’m currently learning, while others are tools I use in my projects.',

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

      titleBefore: 'Ideas I',
      titleAccent: 'turn',
      titleAfter: 'into something real.',

      intro:
        'Here I share the projects and experiments I’ve worked on. Some are simple, some are still in progress, and I like coming back to improve them over time.',

      viewProject: 'Open project',
      viewCode: 'View code',
      moreTitle: 'More projects & experiments',
    },

    contact: {
      index: '04',
      kicker: 'Contact',

      titleBefore: 'Have an idea?',
      titleAccent: 'Let’s talk',
      titleAfter: 'about it.',

      intro:
        'If you have an idea, a project, or something new you want to try, I’d love to hear about it.',

      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Message received, thank you 🩷',
        error: 'Could not send. You can reach me directly by email.',
      },
    },

    footer: {
      top: 'Back to top',
    },

    loading: 'Loading the page',
  },
}

export const PROJECTS = [
  {
    id: '01',
    kind: 'code',
    featured: true,
    url: 'https://gitlab.com/talinalbaz1/ai-player-recruitment/',
    title: {
      ar: 'نظام ذكي لاستقطاب اللاعبين',
      en: 'AI Player Recruitment System',
    },
    description: {
      ar: 'مشروع يهدف إلى مساعدة الأندية الرياضية في تحليل بيانات اللاعبين ومقارنتهم حسب احتياجات الفريق، لدعم عملية اختيار اللاعبين بطريقة أسهل وأكثر اعتمادًا على البيانات.',
      en: 'A system designed to help sports clubs analyze and compare player data based on team needs, supporting a simpler and more data-driven recruitment process.',
    },
    tech: ['Python', 'Pandas', 'Data Analysis'],
  },

  {
    id: '02',
    kind: 'code',
    featured: true,
    url: '#',
    title: {
      ar: 'مشروع تحليل بيانات باستخدام Excel',
      en: 'Excel Data Analysis Project',
    },
    description: {
      ar: 'مشروع لتحليل وتنظيم البيانات باستخدام Excel، مع استخدام الجداول والدوال لاستخراج المعلومات المهمة وعرض النتائج بطريقة واضحة.',
      en: 'A project focused on organizing and analyzing data using Excel, with formulas and tables to extract useful insights and present the results clearly.',
    },
    tech: ['Excel', 'Data Analysis'],
  },

  {
    id: '03',
    kind: 'code',
    featured: true,
    url: '#',
    title: {
      ar: 'مشروع تحليل بيانات باستخدام Excel',
      en: 'Excel Data Analysis Project',
    },
    description: {
      ar: 'مشروع عملي آخر استخدمت فيه Excel للتعامل مع البيانات وتحليلها، وتحويل البيانات إلى معلومات تساعد على فهم النتائج بشكل أفضل.',
      en: 'Another practical project using Excel to work with and analyze data, turning raw information into clearer and more useful results.',
    },
    tech: ['Excel', 'Data Analysis'],
  },

  {
    id: '04',
    kind: 'live',
    featured: true,
    url: '#',
    title: {
      ar: 'لوحة معلومات تفاعلية باستخدام Power BI',
      en: 'Interactive Power BI Dashboard',
    },
    description: {
      ar: 'مشروع لإنشاء لوحة معلومات تفاعلية باستخدام Power BI، بهدف عرض البيانات بصريًا وتسهيل فهم النتائج والمعلومات المهمة.',
      en: 'An interactive dashboard created with Power BI to visualize data and make important information and results easier to understand.',
    },
    tech: ['Power BI', 'Data Visualization'],
  },
]