// ============================================================
//  PORTFOLIO DATA - EDIT THIS FILE TO UPDATE YOUR WEBSITE
// ============================================================
//  This is the ONLY file you need to touch to change content.
//  After editing, commit & push. GitHub Actions rebuilds and
//  deploys automatically in ~1-2 minutes.
//
//  Tips:
//  - To add a new project/experience, copy an existing block
//    (from { to },) and edit the values.
//  - `thumbnail` and `gallery` paths point to files inside
//    /public/assets/. If a file doesn't exist yet, the card
//    shows a nice placeholder instead. No errors.
//  - `gallery` items can be images or YouTube videos:
//      { type: "image", src: "assets/game-1.jpg" }
//      { type: "youtube", src: "VIDEO_ID_ONLY" }
// ============================================================

export const profile = {
  name: "Eduardo Sanov Rusianto",
  // Roles cycle in the hero typing effect
  roles: ["Game Developer", "Front-End Programmer", "Back-End Programmer"],
  tagline:
    "I craft games and interactive experiences, from Roblox worlds played by thousands to web apps and game jam experiments.",
  bio: "I'm a developer with a lifelong passion for technology and the game industry. With a background in Informatics Engineering, I've shipped commercial Roblox projects for brands like Indofood, built web apps with React and CodeIgniter, and explored engines from Unity to Godot. I'm always reskilling, upskilling, and levelling up.",
  location: "Bogor, Indonesia",
  avatar: "assets/avatar.jpg", // put your photo at public/assets/avatar.jpg, or set to null
  cvUrl: "assets/cv.pdf", // put your CV at public/assets/cv.pdf, or set to null to hide the button
  stats: [
    { label: "Years of experience", value: "5+" },
    { label: "Shipped Roblox projects", value: "10+" },
    { label: "Commercial brand projects", value: "4" },
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
//  roles    : your role(s) in the project, used for the role filter
//  featured : true shows the project in the big Featured row
//  gallery  : extra images/videos shown in the detail popup.
//             If empty, the thumbnail is used.
//  period   : when you worked on it (optional, shows in popup)
//  stats    : optional extra numbers, e.g.
//             { label: "Visits", value: "1.2M+" }
// ============================================================

export const projects = [
  {
    name: "Pedas Dower Island",
    category: "Roblox",
    roles: ["Map Designer"],
    featured: true,
    description:
      "Branded Roblox experience developed for Indofood CBP. Map design and world building for a spicy themed island adventure.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/pedas-dower.jpg",
    gallery: [],
    period: "Apr 2025 - Jun 2025",
    stats: [],
    link: "https://www.roblox.com/games/120047261417635",
  },
  {
    name: "Nerotek City",
    category: "Roblox",
    roles: ["Map Designer"],
    featured: true,
    description:
      "A city experience on Roblox built with Mahakarya Group. Designed and constructed large scale urban maps.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/nerotek-city.jpg",
    gallery: [],
    period: "Nov 2024 - May 2025",
    stats: [],
    link: "https://www.roblox.com/id/games/86658303499588",
  },
  {
    name: "Hafiz: Go - Skyland Tower",
    category: "Roblox",
    roles: ["Map Designer"],
    featured: true,
    description:
      "Educational Roblox game helping kids memorize the Al-Quran, built for PT. Hidayah Insan Mulia (Al-Qolam).",
    tech: ["Roblox Studio", "Blender"],
    thumbnail: "assets/hafiz-go.jpg",
    gallery: [],
    period: "Nov 2020 - Jan 2021",
    stats: [],
    link: "https://www.roblox.com/games/5911641962/Hafiz-GO-Skyland-Tower",
  },
  {
    name: "Leika Obby Land",
    category: "Roblox",
    roles: ["Map Designer"],
    description:
      "An obby experience on Roblox built with Leika Gaming. Designed and built maps for the game.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/leika-obby.jpg",
    gallery: [],
    period: "Oct 2024 - Nov 2024",
    stats: [],
    link: "https://www.roblox.com/id/games/86658303499588",
  },
  {
    name: "Nyelam Tower",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
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
    name: "Grow a Tower",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
    description:
      "A garden themed platformer tower where a minigame interrupts your climb every 60 seconds.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/grow-a-tower.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/games/119023287753202",
  },
  {
    name: "Math Dojo",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
    description:
      "A 2v2 math showdown. Fill in the blank answers, the fastest team wins the match.",
    tech: ["Roblox Studio", "Lua"],
    thumbnail: "assets/math-dojo.jpg",
    gallery: [],
    period: null,
    stats: [],
    link: "https://www.roblox.com/id/games/70614342067322",
  },
  {
    name: "Chromakopia Tower",
    category: "Roblox",
    roles: ["Programmer", "Map Designer"],
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
    link: "https://www.roblox.com/games/277751860/Epic-Minigames",
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
    link: "https://www.roblox.com/games/191068294/The-CrusheR",
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
    link: "https://www.roblox.com/games/333096178/Future-Impossible-Obby",
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
    link: "https://www.roblox.com/games/306266352/Super-Scary-Fun-Obby",
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
    link: "https://www.roblox.com/games/1305277533/Guess-The-Anime",
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
    link: "https://www.roblox.com/games/190814222/Update-Neon-Obby-ALPHA",
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
    link: "https://www.roblox.com/games/202409926/Noob-Obby",
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
    name: "Dice Dash Dies",
    category: "Game Jam",
    roles: ["Programmer"],
    description:
      "GMTK Game Jam 2022 entry (theme: Roll of the Dice). Bounce the dice to objectives inside a rolling dice map.",
    tech: ["Unity", "C#"],
    thumbnail: "assets/dice-dash-dies.jpg",
    gallery: [],
    period: "16-18 Jul 2022 (3 days)",
    stats: [{ label: "Rank", value: "687 / 6125 entries" }],
    link: "https://kinantan-games.itch.io/dice-dash-dies",
  },
  {
    name: "Bengkel Gizi",
    category: "Game",
    roles: ["Programmer"],
    description:
      "Serve food according to required nutrition. Final project for Skilvul's game development program.",
    tech: ["Unity", "C#"],
    thumbnail: "assets/bengkel-gizi.jpg",
    gallery: [],
    period: "2022",
    stats: [],
    link: "https://rofinoorsalim.itch.io/bengkel-gizi",
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
    tech: ["CodeIgniter 4", "Bootstrap", "MariaDB"],
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

// Optional YouTube showcase videos (IDs only). Set to [] to hide the section.
export const videos = [
  { id: "0hbEOKAV_Nk", title: "Showcase" },
  { id: "xKXYOSUuOYw", title: "Showcase" },
  { id: "naCHNpx8HS8", title: "Showcase" },
];
