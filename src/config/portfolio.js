// ---------------------------------------------------------------------------
// Edit this file to personalize the entire portfolio. Nothing else should
// need to change for day-to-day updates (name, links, skills, copy, etc).
// ---------------------------------------------------------------------------

export const GITHUB_USERNAME = 'ltsanjai'

export const profile = {
  name: 'L.T.Sanjai',
  location: 'VIT-AP, Amaravati, Andra Pradesh',
  role: 'Computer Science student, developer and builder',
  tagline: "I build things for the web.",
  badge: 'CS STUDENT • DEVELOPER • BUILDER',
  bio: "I'm a Computer Science student who enjoys building software, experimenting with new technologies, and turning ideas into working projects.\n\nI particularly enjoy programming, Linux, app development, and exploring how different technologies fit together.",
  heroDescription:
    'Computer Science student, developer and builder interested in creating useful software and experimenting with new technologies.',
}

export const contact = {
  email: 'ltsanjaiedu.gmail.com',
  github: `https://github.com/ltsanjai`,
  linkedin: 'https://linkedin.com/in/sanjai-l-t-2ab018447',
}

export const aboutHighlights = [
  { emoji: '🎓', label: 'Computer Science Student' },
  { emoji: '💻', label: 'Developer' },
  { emoji: '🐧', label: 'Linux enthusiast' },
  { emoji: '🚀', label: 'Always building' },
]

// Each skill: { name, category }. `category` must match one of the group
// names below, or "Other". Remove/add freely — the grid re-flows itself.
export const skillGroups = [
  {
    group: 'Languages',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    group: 'Development',
    skills: ['Flutter', 'Git', 'UI Designing'],
  },
  {
    group: 'Tools',
    skills: ['Linux', 'GitHub', 'VS Code', 'Figma'],
  },
]

// Shown in "Currently Exploring". No fake progress values — just what's
// actively being learned right now.
export const currentlyLearning = [
  { title: 'Mobile Development', note: 'Building cross-platform apps with Flutter' },
  { title: 'Web Development', note: 'Modern React patterns and tooling' },
  { title: 'Linux', note: 'Shell scripting and system internals' },
  { title: 'UI/UX', note: 'Design fundamentals for developer-built products' },
]

// Replace with a real project once you have one worth featuring. Set to
// `null` to hide the featured section entirely.
export const featuredProject = {
  name: 'FormFit',
  description:
    'It is a website which detects your form when doing certain workouts.',
  stack: ['React', 'Node.js', 'SQL'],
  githubUrl: 'https://github.com/ltsanjai/FormFit',
  liveUrl: 'https://ltsanjai.github.io/FormFit/',
  image: null, // e.g. '/featured.png' — falls back to a gradient panel if empty
}

// Language -> tailwind-safe color used for the small dot in project cards.
export const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  default: '#8b949e',
}
