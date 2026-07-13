// CONFIGURATION FILE
// ============================================================

export const profile = {
  name: "Eduardo Sanov Rusianto",
  roles: ["Game Developer", "Front-End Programmer", "Back-End Programmer"],
  tagline:
    "I craft games and interactive experiences, from Roblox worlds played by thousands to web apps and game jam experiments.",
  bio: "I'm a developer with a lifelong passion for technology and the game industry. With a background in Informatics Engineering, I've shipped commercial Roblox projects for brands like Indofood, built web apps with React and CodeIgniter, and explored engines from Unity to Godot. I'm always reskilling, upskilling, and levelling up.",
  location: "Bogor, Indonesia",
  avatar: "assets/avatar.jpg",
  // cvUrl: "assets/cv.pdf",
  cvUrl: null,
  stats: [
    { label: "Years of experience", value: "5+" },
    { label: "Shipped Roblox projects", value: "15+" },
    { label: "Commercial brand projects", value: "4+" },
    { label: "GPA (Informatics)", value: "3.85" },
  ],
};

export const socials = {
  github: "https://github.com/ardoardo02",
  linkedin: "https://www.linkedin.com/in/eduardo-sanov-rusianto-91798a173/",
  youtube: "https://www.youtube.com/c/ardomainaky",
  email: "ardomainaky@gmail.com",
};

export const skills = {
  languages: [
    "Lua",
    "C#",
    "JavaScript",
    "Python",
    "GDScript",
    "PHP",
    "SQL",
    "C++",
    "Java",
    "HTML",
    "CSS",
  ],
  enginesAndFrameworks: [
    "Roblox Studio",
    "Unity",
    "Godot",
    "React.js",
    "CodeIgniter 4",
    "Bootstrap",
    "TensorFlow",
    "Tailwind CSS",
  ],
  tools: [
    "Git",
    "Visual Studio Code",
    "Blender",
    "Figma",
    "MariaDB",
    "Jupyter Notebook",
    "Kodular",
    "Adobe Premiere Pro",
  ],
  libraries: ["OpenCV", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "OpenGL", "Axios"],
  soft: ["Teamwork", "Problem Solving", "Adaptation", "Reskilling", "Upskilling"],
};

export const experiences = [
  {
    role: "Project Manager",
    company: "Asosiasi Komunitas Roblox Indonesia",
    period: "Jun 2025 - Present",
    project: null,
    link: "https://akri.or.id/",
    tech: ["Roblox Studio", "Lua"],
    points: [
      "Leading the AKRI Development Team to create Roblox experiences for Brands and Communities.",
      "Organizing and prioritizing work to complete assignments in a timely, efficient manner.",
    ],
  },
  {
    role: "Game Developer",
    company: "Indofood CBP",
    period: "Apr 2025 - Jun 2025",
    project: "Pedas Dower Island",
    link: "https://www.roblox.com/games/120047261417635",
    tech: ["Roblox Studio", "Lua"],
    points: [
      "Developed Pedas Dower Island, a branded experience on the Roblox platform.",
      "Designed and built maps for the game.",
      "Organized and prioritized work to complete assignments in a timely, efficient manner.",
      "Collaborated effectively both individually and within a team.",
    ],
  },
  {
    role: "Game Developer",
    company: "Mahakarya Group",
    period: "Nov 2024 - May 2025",
    project: "Nerotek City",
    link: "https://www.roblox.com/id/games/86658303499588",
    tech: ["Roblox Studio", "Lua"],
    points: [
      "Developed Nerotek City on the Roblox platform.",
      "Designed and built maps for the game.",
      "Organized and prioritized work to complete assignments in a timely, efficient manner.",
      "Collaborated effectively both individually and within a team.",
    ],
  },
  {
    role: "Game Developer",
    company: "Leika Gaming",
    period: "Oct 2024 - Nov 2024",
    project: "Leika Obby Land",
    link: "https://www.roblox.com/id/games/86658303499588",
    tech: ["Roblox Studio", "Lua"],
    points: [
      "Developed Leika Obby Land on the Roblox platform.",
      "Designed and built maps for the game.",
      "Organized and prioritized work to complete assignments efficiently.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "PUI-PT LP3 DLI UM",
    period: "Jun 2022 - Aug 2022",
    project: "idbookstore.id",
    link: "http://idbookstore.id",
    tech: ["React.js", "Tailwind CSS", "Git"],
    points: [
      "Implemented UI/UX designs into production code.",
      "Worked efficiently both individually and within a team.",
    ],
  },
  {
    role: "Game Developer",
    company: "PT. Hidayah Insan Mulia (Al-Qolam)",
    period: "Nov 2020 - Jan 2021",
    project: "Hafiz: Go - Skyland Tower",
    link: "https://www.roblox.com/games/5911641962/Hafiz-GO-Skyland-Tower",
    tech: ["Roblox Studio", "Blender"],
    points: [
      "Developed Hafiz: Go on the Roblox platform.",
      "Designed and built maps for the game using Roblox Studio and Blender.",
      "Organized and prioritized work to complete assignments efficiently.",
    ],
  },
];

// ============================================================
//  PROJECTS
// ============================================================
//  category : platform filter (Roblox, Game, Game Jam, Website, Application)
//  roles    : roles in the project
//  featured : true shows the project in the big Featured row
//  gallery  : extra images/videos shown in the detail popup.
//             If empty, the thumbnail is used.
//  period   : time worked (optional, on popup)
//  stats    : optional extra numbers, e.g.
//             { label: "Visits", value: "1.2M+" }
// ============================================================

export const projects = [
  {
    name: "Grow a Tower",
    category: "Roblox",
    roles: ["Programmer"],
    description:
      "A garden themed platformer tower where a minigame interrupts your climb every 60 seconds.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/grow-a-tower.png",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/119023287753202",
  },
  {
    name: "Math Dojo",
    category: "Roblox",
    roles: ["Programmer"],
    description:
      "A 2v2 math showdown. Fill in the blank answers, the fastest team wins the match.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/math-dojo.png",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/id/games/70614342067322",
  },
  {
    name: "Dice Dash Dies",
    category: "Game Jam",
    roles: ["Programmer"],
    description:
      "GMTK Game Jam 2022 entry. Bounce the dice to objectives inside a rolling dice map.",
    tech: ["Godot", "GDScript", "Git"],
    thumbnail: "assets/dice-dash-dies.jpg",
    gallery: [],
    period: "16-18 Jul 2022 (3 days)",
    stats: [
      { label: "Rank", value: "687 / 6125 entries" },
      { label: "Theme", value: "Roll of the Dice" },
      { label: "Working Site", value: "Online" }
    ],
    link: "https://kinantan-games.itch.io/dice-dash-dies",
  },
  {
    name: "Epic Minigames Maps",
    category: "Roblox",
    roles: ["Map Designer"],
    description:
      "Created unique maps for available minigames to enhance gameplay in the popular game Epic Minigames.",
    tech: ["Roblox Studio"],
    thumbnail: "assets/epic-minigames.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/277751860",
  },
  {
    name: "Bengkel Gizi",
    category: "Game",
    roles: ["Project Manager", "Programmer"],
    description:
      "Serve food according to required nutrition. Final project for Skilvul's game development program.",
    tech: ["Unity", "C#", "Git"],
    thumbnail: "assets/bengkel-gizi.jpg",
    gallery: [],
    period: "Nov 2022 - Dec 2022",
    stats: [],
    link: "https://rofinoorsalim.itch.io/bengkel-gizi",
  },
  {
    name: "Pedas Dower Island",
    category: "Roblox",
    roles: ["Asst. Project Manager", "Programmer", "Map Designer"],
    featured: true,
    description:
      "Branded Roblox experience developed for Indofood CBP. Map design and world building for a spicy themed island adventure.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/pedas-dower.jpg",
    gallery: [],
    period: "Apr 2025 - Jul 2026",
    stats: [],
    link: "https://www.roblox.com/games/79167667506661",
  },
  {
    name: "Indo Voice",
    category: "Roblox",
    roles: ["Asst. Project Manager", "Programmer", "Map Designer"],
    featured: true,
    description:
      "A Roblox Indonesian hangout experience with a voice chat feature.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/indo-voice.png",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/8356562067",
  },
  {
    name: "Lengkapi Kata",
    category: "Roblox",
    roles: ["Programmer"],
    description:
      "A Roblox word puzzle game where players fill in the blanks to complete the words.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/lengkapi-kata.png",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/72774564502867",
  },
  {
    name: "Pelangi di Mars Obby",
    category: "Roblox",
    roles: ["Project Manager", "Programmer", "Map Designer"],
    description:
      "A Roblox obby experience with a set on Mars. Made for Pelangi di Mars movie.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/pelangi-mars-obby.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/103213423543104",
  },
  {
    name: "Cold Calls!",
    category: "Game Jam",
    roles: ["Programmer"],
    description:
      "A game developed for the Roblox Developer Challenge 2026, where you need to make cold calls to potential customers.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/cold-calls.jpg",
    gallery: [],
    period: "07-10 Jul 2026 (3 days)",
    stats: [
      { label: "Rank", value: "-" },
      { label: "Theme", value: "First Contact" },
      { label: "Working Site", value: "Online" }
    ],
    link: "https://www.roblox.com/games/90752753559859",
  },
  {
    name: "Nerotek City",
    category: "Roblox",
    roles: ["Map Designer"],
    description:
      "A city experience on Roblox built with Mahakarya Group. Designed and constructed large scale urban maps.",
    tech: ["Roblox Studio"],
    thumbnail: "assets/nerotek-city.jpg",
    gallery: [],
    period: "Nov 2024 - May 2025",
    stats: [],
    link: "https://www.roblox.com/games/97367356472733",
  },
  {
    name: "Nyelam Tower",
    category: "Roblox",
    roles: ["Programmer"],
    description:
      "A platformer tower game with an underwater theme. Refill your oxygen along the journey to survive the climb.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/nyelam-tower.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/117862406344335",
  },
  {
    name: "My Mini Garden",
    category: "Roblox",
    roles: ["Programmer"],
    featured: true,
    description:
      "A relaxing garden themed experience on Roblox.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/my-mini-garden.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/105399938452820",
  },
  {
    name: "Hafiz: Go - Skyland Tower",
    category: "Roblox",
    roles: ["Map Designer"],
    description:
      "An tower/obby likes experience on Roblox built for Al-Qolam. Designed and built maps for the game.",
    tech: ["Roblox Studio", "Blender"],
    thumbnail: "assets/hafiz-go.jpg",
    gallery: [],
    period: "Nov 2020 - Jan 2021",
    stats: [],
    link: "https://www.roblox.com/games/5911641962",
  },
  {
    name: "Leika Obby Land",
    category: "Roblox",
    roles: ["Map Designer"],
    description:
      "An obby experience on Roblox built for Leika Gaming. Designed and built maps for the game.",
    tech: ["Roblox Studio"],
    thumbnail: "assets/leika-obby.jpg",
    gallery: [],
    period: "Oct 2024 - Nov 2024",
    stats: [],
    link: "https://www.roblox.com/id/games/86658303499588",
  },
  {
    name: "Cari Kata",
    category: "Roblox",
    roles: ["Programmer"],
    description:
      "A Roblox word puzzle game where players find the hidden words in a grid of letters.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/cari-kata.png",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/126029491018453",
  },
  {
    name: "Paranormal Club Activity",
    category: "Game Jam",
    roles: ["Programmer"],
    description:
      "A game developed for the Global Game Jam Jakarta 2026, where you need to investigate and find the source of the paranormal activity in the school.",
    tech: ["Godot", "GDScript", "Git"],
    thumbnail: "assets/paranormal-club-activity.jpg",
    gallery: [],
    period: "30 Jan - 01 Feb 2026 (3 days)",
    stats: [
      { label: "Rank", value: "Best Narrative" },
      { label: "Theme", value: "Mask" },
      { label: "Working Site", value: "Offline" }
    ],
    link: "https://kinantan-games.itch.io/paranormal-club-activity",
  },
  {
    name: "Chromakopia Tower",
    category: "Roblox",
    roles: ["Programmer"],
    description:
      "A platformer tower themed around Chromakopia, an album by Tyler, The Creator.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/chromakopia-tower.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/id/games/79030199280012",
  },
  {
    name: "The CrusheR Maps",
    category: "Roblox",
    roles: ["Map Designer"],
    description:
      "Designed unique maps with themed obstacles for the popular game The CrusheR.",
    tech: ["Roblox Studio"],
    thumbnail: "assets/the-crusher.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/191068294",
  },
  {
    name: "Future Impossible Obby",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
    description:
      "Dodge futuristic themed obstacles at each stage with limited lives.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/future-obby.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/333096178",
  },
  {
    name: "Super Scary Fun Obby",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
    description: "Dodge scary themed obstacles at each stage to reach the finish.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/scary-obby.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/306266352",
  },
  {
    name: "Guess The Anime!",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
    description:
      "Guess the anime name from the image on each door to open it and progress.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/guess-anime.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/1305277533",
  },
  {
    name: "Neon Obby",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
    description: "Dodge neon themed obstacles at each stage to reach the finish.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/neon-obby.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/190814222",
  },
  {
    name: "Noob Obby",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
    description:
      "Dodge Roblox noob themed obstacles at each stage to reach the finish.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/noob-obby.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/202409926",
  },
  {
    name: "Games Translator",
    category: "Roblox",
    roles: ["Translator"],
    description:
      "Open submission translating Roblox games to Bahasa Indonesia. Worked with well known front page developers.",
    tech: ["Localization"],
    thumbnail: null,
    gallery: [],
    period: null,
    stats: [],
    link: null,
  },
  {
    name: "Hafiz Hero",
    category: "Game",
    roles: ["Programmer"],
    description:
      "A game to help memorize the Al-Quran, built as a final college assignment.",
    tech: ["Unity", "C#"],
    thumbnail: "assets/hafiz-hero.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://ardoardo02.itch.io/hafiz-hero",
  },
  {
    name: "EXAMO",
    category: "Website",
    roles: ["Full-Stack Developer"],
    description:
      "Online examination platform for teachers and students. Full stack final project for Web Programming and Database II.",
    tech: ["CodeIgniter 4", "Bootstrap", "MariaDB", "HTML", "CSS", "JavaScript", "PHP"],
    thumbnail: "assets/examo.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: null,
  },
  {
    name: "SCHONE App",
    category: "Application",
    roles: ["Mobile Developer"],
    description:
      "Mobile app for students to learn the German language, built for Program Kreativitas Mahasiswa (PKM-PM).",
    tech: ["Kodular"],
    thumbnail: "assets/schone.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://play.google.com/store/apps/details?id=io.kodular.eduardo_sanov_1905356.DeutschOne",
  },
];

export const education = [
  {
    school: "Universitas Negeri Malang",
    degree: "Bachelor's degree, Information Technology",
    period: "2019 - 2024",
    detail: "GPA: 3.85 / 4.00",
  },
  {
    school: "Skilvul Tech4Impact: Game Development",
    degree: "Bootcamp - Skilvul",
    period: "Aug 2022 - Dec 2022",
    detail:
      "Mentored by industry experts to become a job-ready Unity developer.",
  },
  {
    school: "SMA Negeri 3 Bekasi",
    degree: "Science",
    period: "2016 - 2019",
    detail: "ICT (Information and Communication Technology) Programming Division.",
  },
];

export const videos = [
  { id: "0hbEOKAV_Nk", title: "Showcase" },
  { id: "xKXYOSUuOYw", title: "Showcase" },
  { id: "naCHNpx8HS8", title: "Showcase" },
];
