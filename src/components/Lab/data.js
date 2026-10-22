export default {
  categories: [
    { key: 'apps', name: 'Apps & tools' },
    { key: 'design', name: 'Design & development' },
    { key: 'games', name: 'Games & puzzles' },
    { key: 'learning', name: 'Learning & research' },
    { key: 'experiments', name: 'Web experiments' }
  ],
  data: [
    {
      key: 'giga',
      category: 'apps',
      isFeatured: true,
      isClosedSource: true,
      href: 'https://nmn.gl/blog/giga-intro',
      name: 'Giga: AI Code Analyzer',
      createdAt: '2025-01',
      color: '#4041f4',
      shortDescription: 'My AI coding assistant, built around understanding a whole codebase.'
    },
    {
      key: 'air',
      category: 'apps',
      isFeatured: true,
      href: 'https://air.nmn.gl/',
      name: 'Air Quality Impact & Visualizations',
      createdAt: '2024-11',
      color: '#0bb667',
      shortDescription: 'I used illustrations to explain what an air-quality reading means.'
    },
    {
      key: 'trends-ai',
      category: 'apps',
      isFeatured: true,
      href: 'https://trends.nmn.gl/',
      name: 'Trend Analyzer & Content Assistant',
      createdAt: '2025-01',
      color: '#6f52ff',
      shortDescription: 'My tool for finding recurring topics in online discussions.'
    },
    {
      key: 'webstiles',
      category: 'design',
      isFeatured: true,
      href: 'https://nmn.gl/webstiles',
      name: 'Webstiles In-Browser UI Prototyping',
      type: 'Tool',
      createdAt: '2013-01',
      color: '#0e90eb',
      description: `<p>I made webstiles around the time when I first started working on client projects. Webstiles was born out of a need to have an easy to understand and easy to use way to share design prototyping ideas with clients.</p>
                   <p>Webstiles soon became <a href="https://nmn.gl/blog/my-workflow-when-working-with-clients">a core part of my workflow</a>. My clients loved seeing multiple different Webstiles to choose from, and it also seemed to be well-received on social media.</p>`,
      shortDescription: 'How I showed clients a design before building their whole website.'
    },
    {
      key: 'lccpp',
      category: 'learning',
      isFeatured: true,
      href: 'https://leanpub.com/lessconfusingcpp',
      name: 'Less Confusing C++',
      type: 'Book',
      createdAt: '2017-06',
      isClosedSource: true,
      color: '#ffa700',
      description: `<p>I always felt frustrated at the study material for my 11<sup>th</sup> grade Computer Science course, which was an introduction to C++. I believed there was a massive improvement to be made by re-organizing the structure and steps of the course.</p>
                   <p>So I did just that. While finishing my 11<sup>th</sup> grade, I wrote a book called "Less Confusing C++" to teach the coursework in my style. Since the target audience was my peers, I made sure that the book is available for free.</p>`,
      shortDescription: 'I rewrote my school’s C++ coursework as a free book.'
    },
    {
      key: 'indiasmile',
      category: 'apps',
      isFeatured: true,
      href: 'https://indiasmile.github.io/',
      name: 'IndiaSmile COVID-19 Tracker & Stats',
      type: 'Tool',
      createdAt: '2020-06',
      isClosedSource: true,
      color: '#54a0ff',
      description: `<p>Around when COVID struck, I wanted some way for my friends and family to be informed and also some way to unwind. That's why my team and I decided to make IndiaSmile. It was  no-nonsense website that showed the latest COVID-19 statistics, a whatsapp and telgram community of 2500+ members, and ways to stay happy and healthy during the pandemic combined.</p>
                   <p>It went viral. At its peak, it had over <strong>6,00,000 hits</strong> per day. I enjoyed the complex challenge of rearchitecturing the backend to handle the traffic.</p>`,
      shortDescription: 'We made a COVID tracker and community during lockdown.'
    },
    {
      key: 'keyzen',
      category: 'games',
      isFeatured: true,
      href: 'https://nmn.gl/KeyZen/',
      name: 'KeyZen Touch Typing Game',
      type: 'Game',
      createdAt: '2013-10',
      color: '#0bb667',
      description: `<p>I made this game for a hackathon in a few hours. It was around a time when I was obssessed with improving my typing speed, following the logic that faster typing = faster programming.</p>
                   <p>I wanted to make soft, "biteable', pastel aesthetics. I remember that I especially enjoyed making and animating the keyboard. Keyzen took home the first prize that day.</p>`,
      shortDescription: 'I wanted to type faster, so I made a game to practise.'
    },
    {
      key: 'aiindians',
      category: 'apps',
      isFeatured: false,
      href: 'https://github.com/namanyayg/aiindians',
      name: 'AI Startups in India',
      type: 'AI',
      createdAt: '2024-06',
      isClosedSource: false,
      color: 'rgb(59, 130, 246)',
      description: `<p>Celebrating the AI developers & entrepreneurs</p>
                   <p>& tracking their growth via a leaderboard</p>
                   <p>Featuring 100+ newest AI startups of India</p>`,
      shortDescription: 'My directory and leaderboard for India’s AI builders.'
    },
    {
      key: 'kevin',
      category: 'apps',
      isFeatured: false,
      href: 'https://github.com/namanyayg/kevin-coder-ai',
      sourceHref: 'https://github.com/namanyayg/kevin-coder-ai',
      name: 'Kevin: Open Source AI Software Engineer',
      type: 'AI',
      createdAt: '2024-03',
      color: '#23c2bc',
      description: `<p>It has been a dream of mine to create a bot that could write code for me <em>(so I could delegate the boilerplate and focus on the creative parts of programming)</em>.</p>
                   <p>Seeing Devin made me realize that my teenage dream is close to becoming reality. For personal satisfaction, I embarked on making my own open-source interface.</p>
                   <p>The name comes from the legendary phreaker and my childhood hero <strong>Kevin Mitnick</strong> and is a play on Cognition Labs&rsquo; product name.</p>`,
      shortDescription: 'My open-source interface for an AI software engineer.'
    },
    {
      key: 'bandc',
      category: 'games',
      isFeatured: true,
      oldHref: 'https://vixra.org/pdf/1601.0302v1.pdf',
      href: 'https://nmn.gl/moo',
      name: 'Bulls & Cows Solver and Research',
      type: 'Research',
      createdAt: '2015-11',
      color: '#565e8e',
      isClosedSource: true,
      description: `<p>We were given the option of studying this game and produce a research paper for the <a href="https://coreisus.com/">COЯE</a> hackathon. We were given only 48 hours to prepare it.</p>
                   <p>My co-founder <a href="https://in.linkedin.com/in/adityag9">Aditya</a> and I figured out the working for the game and the optimal algorithms to solve it, and drafted a <a href="https://vixra.org/pdf/1601.0302v1.pdf">quick research paper</a> (using LaTeX for the first time here was a pleasant experience and it introduced me to a new tool).</p>
                   <p>After figuring out the game's algorithms, I decided to code it up as a JavaScript game for a demo, as I am always fond of practical explanations vs text.</p>
                   <p>We took home the first prize that day.</p>`,
      shortDescription: 'We studied Bulls & Cows and wrote a paper in 48 hours.'
    },
    {
      key: 'sympl',
      category: 'design',
      isFeatured: false,
      href: 'https://nmn.gl/sympl/',
      name: 'Sympl.css',
      color: '#1769aa',
      shortDescription: 'My CSS starting point for new websites, before I made Webstiles.'
    },
    {
      key: 'clas',
      category: 'experiments',
      isFeatured: false,
      href: 'https://nmn.gl/clas/',
      name: 'Clas',
      color: '#337da5',
      shortDescription: 'A single-page website I made at fourteen.'
    },
    {
      key: 'musicose',
      category: 'experiments',
      isFeatured: false,
      href: 'https://nmn.gl/old-experiments/musicose/',
      sourceHref: 'https://github.com/namanyayg/old-experiments/tree/main/musicose',
      name: 'MusiCose',
      color: '#008780',
      shortDescription: 'I made a sideways-scrolling website for a fictional band from Mars.'
    },
    {
      key: 'win95anim',
      category: 'experiments',
      isFeatured: false,
      href: 'https://nmn.gl/win95anim/',
      name: 'Windows 95 CSS Animation',
      color: '#856628',
      shortDescription: 'My attempt to recreate the Windows 95 launch animation in CSS.'
    },
    {
      key: 'min-slide',
      category: 'experiments',
      isFeatured: false,
      href: 'https://nmn.gl/old-experiments/min-slide/',
      sourceHref: 'https://github.com/namanyayg/old-experiments/tree/main/min-slide',
      name: 'MinSlide',
      color: '#12396b',
      shortDescription: 'An early image slider I wrote in JavaScript.'
    },
    {
      key: 'physics',
      category: 'learning',
      isFeatured: true,
      href: '/physics',
      name: 'Physics Simulators Collection',
      type: 'Simulator',
      createdAt: '2015-02',
      color: '#9C27B0',
      isClosedSource: true,
      description: `<p>During my final years of high school, I created a series of physics simulators to better understand various phenomena and help my peers learn. The collection includes:</p>
                   <ul>
                     <li>Simple Harmonic Motion</li>
                     <li>AC Generator & Graphs</li>
                     <li>P-N Junction Diode</li>
                     <li>Elastic Collisions</li>
                     <li>Equipotential Surfaces</li>
                   </ul>
                   <p>Each simulator was built using JavaScript and focuses on visualizing complex physics concepts through interactive animations.</p>`,
      shortDescription: 'I turned my physics coursework into browser simulations.'
    }
  ]
}
