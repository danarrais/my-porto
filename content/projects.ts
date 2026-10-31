export type TranslatableString = { EN: string; ID: string };
export type TranslatableArray = { EN: string[]; ID: string[] };

export type TechStack = {
  category: string;
  items: { name: string; icon: string }[];
};

export type RoleDetail = {
  title: TranslatableString;
  tasks: TranslatableArray;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: TranslatableString;
  category: string;
  role: string;
  duration: TranslatableString;
  platform: string;
  isPrivate: boolean;
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  heroImage: string;
  overview: TranslatableArray;
  problem: TranslatableString;
  solution: TranslatableString;
  rolesDetails: RoleDetail[];
  techStack: TechStack[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: 'sponsorea',
    title: 'Sponsorea',
    shortDescription: {
      ID: 'Sistem informasi marketplace sponsorship untuk memfasilitasi kolaborasi antara perusahaan dan penyelenggara event.',
      EN: 'A sponsorship marketplace information system to facilitate collaboration between companies and event organizers.'
    },
    category: 'Fullstack Development',
    role: 'Fullstack Developer',
    duration: { ID: '4 Bulan', EN: '4 Months' },
    platform: 'Web Application',
    isPrivate: false,
    githubUrl: 'https://github.com/yasrtcha/sponsorea',
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786257768/hero_sponsorea_bau7sx.webp',
    overview: {
      ID: [
        'Sponsorea adalah platform marketplace yang dikembangkan sebagai proyek Tugas Akhir (TA) untuk mempertemukan penyelenggara event dengan perusahaan penyedia sponsorship.',
        'Sistem ini dirancang untuk menangani proposal secara sistematis, memberikan fitur tracking status, dan serta dilengkapi dengan fitur cetak laporan untuk mempermudah rekapitulasi data kerja sama.'
      ],
      EN: [
        'Sponsorea is a marketplace platform developed as a final project to connects event organizers with companies providing sponsorship. The main goal of this platform is to simplify the fundraising and distribution sponsorship funds.',
        'The system is designed to handle proposals systematically, provide status tracking features, and include a report-printing feature to facilitate the compilation of partnership data.'
      ]
    },
    problem: {
      ID: 'Penyelenggara event sering kesulitan menemukan sponsor yang relevan, sementara perusahaan kesulitan menyortir ratusan proposal yang masuk melalui email, atau media sosial secara tidak terstruktur.',
      EN: 'Event organizers often struggle to find relevant sponsors, while companies have difficulty sorting through hundreds of unstructured proposals received via email or social media.'
    },
    solution: {
      ID: 'Membangun platform terpusat dengan sistem pengelolaan proposal, filter kategori yang relevan, dan dashboard tracking status proposal secara real-time.',
      EN: 'Building a centralized platform with a proposal management system, relevant category filters, and a real-time proposal status tracking dashboard.'
    },
    rolesDetails: [
      {
        title: { ID: 'Fullstack Developer', EN: 'Fullstack Developer' },
        tasks: {
          ID: ['Arsitektur Database', 'Pengembangan API', 'Integrasi Frontend', 'Analitik Dashboard'],
          EN: ['Database Architecture', 'API Development', 'Frontend Integration', 'Dashboard Analytics']
        }
      },
      {
        title: { ID: 'UI/UX Designer', EN: 'UI/UX Designer' },
        tasks: {
          ID: ['Wireframing'],
          EN: ['Wireframing']
        }
      }
    ],
    techStack: [
      { category: 'Frontend', items: [{ name: 'Tailwind CSS', icon: 'tailwindcss' }] },
      { category: 'Backend', items: [{ name: 'Laravel', icon: 'laravel' }, { name: 'MySQL', icon: 'mysql' }] }
    ],    gallery: [
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785556192/login.jpg_yzim8z.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785556274/register_kfccom.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785556444/isi_profile_p4wu3u.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558314/verif_ufs1o4.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558312/dashboard_admin_keehsp.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558313/verifikasi_akun_eimoy2.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558312/manajemen_kategori_b2zb4p.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558231/dashboard_xjaxko.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558232/explore_ic7hcq.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558231/data_event_db9tks.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558231/status_pengajuan_iwqjsj.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558232/tawaran_masuk_oceg0x.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785558231/rekap_pf271b.png'
    ]
  },
  {
    slug: 'wellspace',
    title: 'Wellspace',
    shortDescription: {
      ID: 'Aplikasi mobile dan website berbasis kesehatan yang menyediakan fitur-fitur untuk membantu pengguna mengelola kesehatan mental dan fisik mereka.',
      EN: 'A health-based mobile and website application that provides features to help users manage their mental and physical health.'
    },
    category: 'WEB & MOBILE DEVELOPMENT',
    role: 'Web Developer',
    duration: { ID: '2 Bulan', EN: '2 Months' },
    platform: 'Website & Mobile Application',
    isPrivate: true,
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786258125/hero_wellscpace_pjkica.webp',
    overview: {
      ID: [
        'WellSpace adalah aplikasi mobile dan website berbasis kesehatan mental yang membantu pengguna memantau kondisi emosional serta menjaga kesejahteraan mental melalui fitur Mood Tracker, Q&A, dan Kutipan Harian.',
        'Platform ini dirancang untuk memberikan dukungan awal agar pengguna lebih sadar terhadap kondisi mentalnya dan membangun kebiasaan positif.'
      ],
      EN: [
        'WellSpace is a mobile and web-based mental health application designed to help users monitor their emotional well-being through features such as Mood Tracker, Q&A, and Daily Quotes.',
        'The platform provides accessible tools to encourage self-awareness and support positive mental health habits.'
      ]
    },
    problem: {
      ID: 'Banyak orang masih kesulitan mengenali kondisi kesehatan mental mereka sejak dini serta belum memiliki media yang mudah diakses untuk memantau suasana hati dan memperoleh informasi maupun motivasi terkait kesehatan mental.',
      EN: 'Many people find it difficult to recognize their mental health condition at an early stage and lack an accessible platform to track their emotions while obtaining reliable information and daily motivation.'
    },
    solution: {
      ID: 'Menyediakan platform untuk mencatat suasana hati, mengakses fitur Q&A, dan memperoleh kutipan harian guna membantu pengguna menjaga kesehatan mental.',
      EN: 'Provides a platform to track daily moods, access a Q&A feature, and receive daily quotes to support users mental well-being.'
    },
    rolesDetails: [
      {
        title: { ID: 'Web Developer', EN: 'Web Developer' },
        tasks: {
          ID: ['Pengembangan Admin Panel', 'Perancangan Basis Data', 'Integrasi Sistem'],
          EN: ['Admin Panel Development', 'Database Design', 'System Integration']
        }
      }
    ],
    techStack: [
      { category: 'Tools', items: [{ name: 'Flutter', icon: 'flutter' }, { name: 'Laravel', icon: 'laravel' }, { name: 'Dart', icon: 'dart' }, { name: 'MySql', icon: 'mysql' }] }
    ],    gallery: [
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785588019/web_yil6bh.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785588018/qna_web_yaxizh.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785588018/kutipan_web_wyttk3.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785588018/ajukan_pertanyaan_zjus00.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785588018/admin_oehlyv.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785588018/kelola_user_lljyte.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785588019/kelola_qna_cl0ogq.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785588019/kelola_kutipan_rbzdtc.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785829147/loginmobile_uzfob8.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785829154/dasboard_pengguna_xl2afg.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785829156/kutipanmobile_jd3osc.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785829158/tanyamobile_qmfcln.png'
    ]
  },
  {
    slug: 'water-level',
    title: 'Water Level',
    shortDescription: {
      ID: 'Sistem IoT berbasis ESP32 untuk memantau ketinggian air secara real-time, memberikan status kondisi (Normal, Waspada, Banjir), mengontrol pakan otomatis, serta menampilkan seluruh data melalui dashboard website.',
      EN: 'An ESP32-based IoT system for real-time water level monitoring, water condition classification (Normal, Warning, Flood), automatic feeding, and web dashboard monitoring.'
    },
    category: 'Web & IoT',
    role: 'Web Developer',
    duration: { ID: '1 Bulan', EN: '1 Month' },
    platform: 'Web Dashboard & IoT',
    isPrivate: false,
    githubUrl: 'https://github.com/yasrtcha',
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786258237/hero_waterlevel_oknujj.webp',
    overview: {
      ID: [
        'Proyek ini merupakan sistem monitoring berbasis Internet of Things (IoT) yang menggunakan sensor ultrasonik HC-SR04 untuk mengukur ketinggian air.',
        'Data diproses oleh ESP32 dan dikirim ke dashboard website untuk pemantauan secara real-time. Sistem juga dilengkapi dengan servo sebagai mekanisme pemberian pakan otomatis serta indikator LED yang menampilkan status kondisi air.'
      ],
      EN: [
        'This project is an Internet of Things (IoT) monitoring system that utilizes an HC-SR04 ultrasonic sensor to measure water levels.',
        'The ESP32 processes the sensor data and sends it to a web dashboard for real-time monitoring. The system also includes a servo for automatic feeding and LED indicators to display the current water condition.'
      ]
    },
    problem: {
      ID: 'Pemantauan ketinggian air dan pemberian pakan secara manual kurang efisien serta berisiko menyebabkan keterlambatan dalam mendeteksi kondisi yang berpotensi menimbulkan banjir.',
      EN: 'Manual water level monitoring and feeding are inefficient and may delay the detection of critical water conditions that could lead to flooding.'
    },
    solution: {
      ID: 'Membangun sistem IoT yang mampu memantau ketinggian air secara real-time, memberikan status kondisi, mengotomatisasi pemberian pakan, dan menampilkan data melalui dashboard website.',
      EN: 'Developed an IoT system that monitors water levels in real time, classifies water conditions, automates feeding, and displays monitoring data through a web dashboard.'
    },
    rolesDetails: [
      {
        title: { ID: 'Web Developer', EN: 'Web Developer' },
        tasks: {
          ID: ['Pengembangan Komponen', 'Manajemen State', 'Visualisasi Data'],
          EN: ['Component Development', 'State Management', 'Data Visualization']
        }
      }
    ],
    techStack: [
      { category: 'Frontend', items: [{ name: 'Laravel', icon: 'laravel' }, { name: 'PHP', icon: 'php' }, { name: 'Tailwind CSS', icon: 'tailwindcss' }, { name: 'Arduino', icon: 'arduino' }, { name: 'MySQL', icon: 'mysql' }, {name: 'ESP32', icon: 'esp32' }] }
    ],    gallery: [
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785648406/dashboard_website_vyonr7.jpg',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785648019/maket_arw494.jpg',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785648408/maket_2_lgk3o5.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785648407/1_bskgjx.jpg',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785648407/2_cwik5o.jpg',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785648020/1_qxagxj.jpg',
      'https://res.cloudinary.com/oyuxswwy/video/upload/f_auto,q_auto/v1785829643/vid1_mztdtz.mp4',
      'https://res.cloudinary.com/oyuxswwy/video/upload/f_auto,q_auto/v1785861140/vid2_lookqn.mp4',
      'https://res.cloudinary.com/oyuxswwy/video/upload/v1785862140/vid4_d72phq.mp4'
    ]
  },
  {
    slug: 'confest',
    title: 'Confest KPI',
    shortDescription: {
      ID: 'Website Landing Page untuk mempermudah penyebaran informasi mengenai pendaftaran & pelaksanaan Confest KPI 2025.',
      EN: 'A landing page website to facilitate the dissemination of information regarding the registration and implementation of Confest KPI 2025.'
    },
    category: 'Web Development',
    role: 'Frontend Developer',
    duration: { ID: '1 Minggu', EN: '1 Weeks' },
    platform: 'Website',
    isPrivate: false,
    githubUrl: 'https://github.com/yasrtcha/project-confest-2025',
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761348/hero_r5e6aj.webp',
    overview: {
      ID: [
        'CONFEST KPI 2025 merupakan website landing page yang dikembangkan untuk mendukung penyebaran informasi mengenai kegiatan CONFEST 2025 yang diselenggarakan oleh HIMA KPI Universitas Ibn Khaldun Bogor.',
        'Website ini menjadi pusat informasi yang memuat tema acara, profil HIMA KPI, jadwal pelaksanaan, kategori perlombaan, alur pendaftaran, serta informasi penting lainnya sehingga peserta dapat memperoleh seluruh informasi dalam satu platform.'
      ],
      EN: [
        'CONFEST KPI 2025 is a landing page website developed to support the dissemination of information about CONFEST 2025, organized by the Islamic Communication and Broadcasting Student Association (HIMA KPI) of Ibn Khaldun University Bogor.',
        'The website serves as a centralized information hub containing the event theme, organization profile, event schedule, competition categories, registration process, and other essential information, allowing participants to access everything in one place.'
      ]
    },
    problem: {
      ID: 'Sebelum website dikembangkan, informasi mengenai CONFEST 2025 masih tersebar di berbagai media sehingga peserta kesulitan memperoleh informasi yang lengkap, terpusat, dan mudah diakses.',
      EN: 'Before the website was developed, information about CONFEST 2025 was scattered across multiple platforms, making it difficult for participants to access complete, centralized, and organized information.'
    },
    solution: {
      ID: 'Website landing page dikembangkan sebagai pusat informasi resmi yang menyajikan seluruh informasi CONFEST 2025 secara terstruktur, responsif, dan mudah diakses oleh seluruh peserta.',
      EN: 'A landing page website was developed as the official information hub to deliver all CONFEST 2025 information in a structured, responsive, and easily accessible platform for participants.'
    },
    rolesDetails: [
      {
        title: { ID: 'Frontend Developer', EN: 'Frontend Developer' },
        tasks: {
          ID: ['Web Development', 'Responsive Layout', 'Interactive UI'],
          EN: ['Web Development', 'Responsive Layout', 'Interactive UI']
        }
      }
    ],
    techStack: [
      { category: 'Tools', items: [{ name: 'React', icon: 'react' }, { name: 'JavaScript', icon: 'javascript' }, { name: 'Tailwind CSS', icon: 'tailwindcss' }] }
    ],    gallery: [
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761881/timerr_neje9t.webp',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761881/abouttheme_oz07px.webp',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761881/aboutkpi_yxmkb1.webp',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761881/yt_aae8tg.webp',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761882/lomba_tpchcz.webp',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761882/lomba1_tndzli.webp',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761881/timeline_kolzcj.webp',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785761881/faq_tktflk.webp'
    ]
  },
  {
    slug: 'cms-website',
    title: 'CMS Website',
    shortDescription: {
      ID: 'Sistem Content Management System (CMS) berbasis web yang dikembangkan selama program magang untuk memudahkan pengelolaan konten website.',
      EN: 'A web-based Content Management System (CMS) developed during an internship to facilitate website content management.'
    },
    category: 'Web Development',
    role: 'Frontend Developer & UI/UX Designer',
    duration: { ID: '6 Bulan', EN: '6 Months' },
    platform: 'Web Application',
    isPrivate: true,
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785765643/login_qaddn7.webp',
    overview: {
      ID: [
        'CMS Website merupakan proyek Project Based Learning (PBL) yang dikembangkan selama program magang sebagai solusi untuk membangun sistem Content Management System (CMS) internal bagi perusahaan.',
        'Proyek ini bertujuan membantu administrator mengelola konten website melalui dashboard yang mudah digunakan tanpa bergantung pada layanan CMS pihak ketiga.'
      ],
      EN: [
        'CMS Website is a Project Based Learning (PBL) project developed during an internship to build an internal Content Management System (CMS) for the company.',
        'The project aims to help administrators manage website content through a user-friendly dashboard without relying on third-party CMS services.'
      ]
    },
    problem: {
      ID: 'Perusahaan belum memiliki sistem CMS internal dan masih bergantung pada layanan CMS pihak ketiga, sehingga diperlukan solusi yang dapat dikelola secara mandiri serta disesuaikan dengan kebutuhan perusahaan.',
      EN: 'The company lacked an internal CMS and relied on third-party services, requiring a self-managed solution tailored to the company’s specific needs.'
    },
    solution: {
      ID: 'Dikembangkan CMS berbasis web sebagai solusi internal yang memungkinkan perusahaan mengelola konten website secara mandiri, lebih fleksibel, dan sesuai dengan kebutuhan bisnis tanpa bergantung pada layanan CMS pihak ketiga.',
      EN: 'A web-based CMS was developed as an internal solution enabling the company to manage website content independently, with greater flexibility, and tailored to business needs without relying on third-party CMS services.'
    },
    rolesDetails: [
      {
        title: { ID: 'Frontend Developer', EN: 'Frontend Developer' },
        tasks: {
          ID: ['Desain Organization Page', 'Desain Personal Page', 'Desain Builder User Page'],
          EN: ['Organization Page Design', 'Personal Page Design', 'User Builder Page Design']
        }
      },
      {
        title: { ID: 'UI/UX Designer', EN: 'UI/UX Designer' },
        tasks: {
          ID: ['Desain Builder User Page', 'Content Management Page', 'API Integration Page', 'Workflow Approval Page', 'Media Assets Page'],
          EN: ['User Builder Page Design', 'Content Management Page', 'API Integration Page', 'Workflow Approval Page', 'Media Assets Page']
        }
      }
    ],
    techStack: [
      { category: 'Tools', items: [{ name: 'Figma', icon: 'figma' }, { name: 'Next JS', icon: 'nextjs' }, { name: 'Prisma', icon: 'prisma' }, { name: 'TypeScript', icon: 'typescript' }, { name: 'Tailwind CSS', icon: 'tailwindcss' }] }
    ],    gallery: [
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785768160/Desktop_-_1_ovtqfa.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785768285/Desktop_-_4_qs4tk2.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785768286/Desktop_-_5_nhgptp.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785768288/Desktop_-_9_i3ttql.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785768288/Desktop_-_8_cgpy6q.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785768287/Desktop_-_7_bt10na.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785768287/Desktop_-_6_vppjnw.png'
    ]
  },
  {
    slug: 'rais-portfolio',
    title: 'Website Portfolio Rais',
    shortDescription: {
      ID: 'Portofolio website nya Danar Rais Alhakim ',
      EN: 'Portfolio website of Danar Rais Alhakim'
    },
    category: 'Web Development',
    role: 'Frontend Developer',
    duration: { ID: '2 Minggu', EN: '2 Weeks' },
    platform: 'Website',
    isPrivate: false,
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786258350/hero_portofolio_fiyimk.webp',
    overview: {
      ID: ['Website portfolio ini dibuat sebagai media untuk menampilkan profil, project, pengalaman, dan skill yang saya miliki sebagai lulusan Teknologi Informasi Universitas Brawijaya. Website dirancang dengan konsep modern dan minimalis agar informasi dapat tersampaikan dengan jelas dan profesional.'],
      EN: ['This portfolio website was created as a medium to display my profile, projects, experiences, and skills as a graduate of Information Technology at Universitas Brawijaya. The website is designed with a modern and minimalist concept to ensure information is conveyed clearly and professionally.']
    },
    problem: {
      ID: 'Sebagai fresh graduate, diperlukan platform yang dapat menampilkan hasil project dan kemampuan teknis secara terstruktur agar mudah dipahami oleh recruiter maupun client.',
      EN: 'As a fresh graduate, a platform is needed to display project outcomes and technical skills in a structured manner to be easily understood by recruiters and clients.'
    },
    solution: {
      ID: 'Membangun website portfolio dengan tampilan responsif yang mengorganisir project, sertifikat, tech stack, dan informasi kontak dalam satu platform untuk memperkuat personal branding.',
      EN: 'Built a responsive portfolio website that organizes projects, certificates, tech stack, and contact information in one platform to strengthen personal branding.'
    },
    rolesDetails: [
      {
        title: { ID: 'Frontend Developer', EN: 'Frontend Developer' },
        tasks: {
          ID: ['Web Development', 'Responsive Layout', 'Interactive UI'],
          EN: ['Web Development', 'Responsive Layout', 'Interactive UI']
        }
      }
    ],
    techStack: [
      { category: 'Frontend', items: [{ name: 'Next JS', icon: 'nextjs' }, { name: 'TypeScript', icon: 'typescript' }, { name: 'Tailwind CSS', icon: 'tailwindcss' }, { name: 'Cloudinary', icon: 'cloudinary' }] }
    ],    gallery: []
  },
  {
    slug: 'feel-play',
    title: 'Feel Play',
    shortDescription: {
      ID: 'FeelPlay adalah aplikasi musik berbasis mood yang memberikan rekomendasi lagu berdasarkan emosi dan suasana hati pengguna.',
      EN: 'FeelPlay is a mood-based music application that recommends songs based on users\' emotions and current moods.'
    },
    category: 'UI/UX Design',
    role: 'UI/UX Designer',
    duration: { ID: '1 Minggu', EN: '1 Week' },
    platform: 'Mobile App',
    isPrivate: false,
    figmaUrl: 'https://www.figma.com/design/dkL5swvFYxtmnOdF7cjFaz/FeelPlay?node-id=0-1&t=XvRNb9evCBqGrzvO-1',
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786258424/hero_feelplay_ewbzgu.webp',
    overview: {
      ID: [
        'FeelPlay merupakan project desain UI/UX untuk aplikasi musik yang berfokus pada rekomendasi lagu berdasarkan mood pengguna.',
        'Desain dibuat untuk memberikan pengalaman yang mudah digunakan dalam menemukan musik yang sesuai dengan kondisi emosional pengguna.'
      ],
      EN: [
        'FeelPlay is a UI/UX design project for a music application focused on recommending songs based on user mood.',
        'The design was created to provide an easy-to-use experience in discovering music that matches the user\'s emotional state.'
      ]
    },
    problem: {
      ID: 'Pengguna sering mengalami kesulitan dalam menemukan lagu yang sesuai dengan suasana hati mereka. Platform musik yang ada umumnya masih berfokus pada genre, artis, atau riwayat mendengarkan.',
      EN: 'Users often struggle to find songs that match their mood. Existing music platforms generally still focus on genre, artist, or listening history.'
    },
    solution: {
      ID: 'Merancang aplikasi musik dengan fitur rekomendasi berbasis mood yang memungkinkan pengguna memilih suasana hati dan mendapatkan rekomendasi lagu yang sesuai.',
      EN: 'Designing a music application with mood-based recommendation features that allow users to select their mood and receive appropriate song recommendations.'
    },
    rolesDetails: [],
    techStack: [
      { category: 'Mobile', items: [{ name: 'Figma', icon: 'figma' }] }
    ],    gallery: [
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785771806/Apple_iPhone_11_Pro_Silver_xvtzcg.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827652/signup2_dtub1j.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785825640/sign_inn_usobpq.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827664/signin2_yyr0tq.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827744/search_zogy20.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827777/setting_kbkkvc.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827744/search_zogy20.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827824/search_2_jelyox.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827826/search_3_pgsukp.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827858/search_lagu_pqqqww.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827888/mood_j3ejhg.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827908/moodplaylist_vvxsq0.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827911/mood_playlist_2_g1emmm.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827913/moodplaysong_ggvdxi.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827991/myplaylist_hijdor.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827993/myplaylist2_jlpkt9.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1785827995/playlistsongplay_cyuz5h.png'
    ]
  }
];
