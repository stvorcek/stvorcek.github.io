// gitprofile.config.js

const config = {
  github: {
    username: 'stvorcek', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'C#',
    'DarkScript',
    'Mein Kampf'
  ],
  experiences: [
//     {
//       company: 'Virconix.eu',
//       position: 'Owner',
//       from: 'March 2023',
//       to: 'Present',
//       companyLink: '',
//     },
    {
      company: 'StvorecStudios',
      position: 'CEO',
      from: 'January 2021',
      to: 'Present',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  /*
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  */

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Virconix.eu',
      description:
        'An 1.19 Minecraft Server',
      imageUrl: 'https://media.discordapp.net/attachments/1052282503941062708/1092094564094988440/logo.png?width=662&height=662',
    },
    {
      title: 'WiChess',
      description:
        'The Best Chess Website!',
      imageUrl: 'https://maphostimage.darkys200.repl.co/wichess.png',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
//   blog: {
//     source: 'dev', // medium | dev
//     username: 'arifszn', // to hide blog section, keep it empty
//     limit: 2, // How many posts to display. Max is 10.
//   },
//   googleAnalytics: {
//     id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
//   },
  // Track visitor interaction and behavior. https://www.hotjar.com
//   hotjar: {
//     id: '',
//     snippetVersion: 6,
//   },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
//     customTheme: {
//       primary: '#fc055b',
//       secondary: '#219aaf',
//       accent: '#e8d03a',
//       neutral: '#2A2730',
//       'base-100': '#E3E3ED',
//       '--rounded-box': '3rem',
//       '--rounded-btn': '3rem',
//     },
  },

  // Optional Footer. Supports plain text or HTML.
//   footer: `Made with <a 
//       class="text-primary" href="https://github.com/arifszn/gitprofile"
//       target="_blank"
//       rel="noreferrer"
//     >GitProfile</a> and ❤️`,
};

export default config;
