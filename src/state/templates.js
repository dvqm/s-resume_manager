import { Rick, Bazz } from '../assets/base64Img';
export const template = {
  name: '',
  about: {
    first: '',
    middle: '',
    last: '',
    photo: '',
    position: '',
    city: '',
    state: '',
    country: '',
    tel: '',
    email: '',
    linkedin: '',
    gitHub: '',
  },
  summary: {
    summary: '',
  },
  projects: [],
  expertise: [],
  experiences: [],
  educations: [],
  additional: [],
};

export const titles = {
  about: {
    header: 'About',
    first: 'First Name: ',
    middle: 'Middle Name: ',
    last: 'Last Name: ',
    photo: 'Upload Photo: ',
    position: 'Applied Position: ',
    city: 'City: ',
    state: 'State: ',
    country: 'Country: ',
    tel: 'Phone number: ',
    email: 'Email: ',
    linkedin: 'Linkedin: ',
    gitHub: 'GitHub: ',
  },
  summary: {
    header: 'Summary',
    summary: 'Summary',
  },
  projects: {
    header: 'My Projects',
    title: 'Project name: ',
    currentlyWork: 'Current Work',
    startDate: 'Start date: ',
    endDate: 'End date: ',
    deployUrl: 'View project',
    sourceUrl: 'Source code',
    technologies: 'Technologies: ',
    description: 'Description: ',
  },
  expertise: {
    header: 'Area of Expertise',
    title: 'Scope of expertise: ',
    labels: 'Labels: ',
    placeholder: 'Enter the scope name',
    tip: 'Enter your areas of expertise in the scope divided by comma and space',
  },
  experiences: {
    header: 'Work Experience',
    title: 'Position name: ',
    employmentType: 'Employment type :',
    company: 'Company name: ',
    location: 'Location:',
    contractType: 'Contract type: ',
    currentlyWork: 'Current Work',
    startDate: 'Start date: ',
    endDate: 'End date: ',
    description: 'Description: ',
  },
  educations: {
    header: 'Education',
    title: 'Educational institution: ',
    degree: 'Degree: ',
    studyField: 'Field of study: ',
    startDate: 'Start date: ',
    endDate: 'End date (or expected): ',
    grade: 'Grade: ',
    activities: 'Activities and societies: ',
    description: 'Description: ',
  },
  additional: {
    header: 'Additional information',
    title: 'Title',
    description: 'Description: ',
  },
};

export const defaultValues = {
  projects: {
    title: '',
    currentlyWork: false,
    startDate: '',
    endDate: '',
    deployUrl: '',
    sourceUrl: '',
    technologies: '',
    description: '',
  },
  expertise: {
    title: '',
    labels: '',
  },
  experiences: {
    title: '',
    employmentType: 'Full-time',
    company: '',
    location: '',
    contractType: 'On-site',
    currentlyWork: false,
    startDate: '',
    endDate: '',
    description: '',
  },
  educations: {
    title: '',
    degree: '',
    studyField: '',
    startDate: '',
    endDate: '',
    grade: '',
    activities: '',
    description: '',
  },
  additional: {
    title: '',
    description: '',
  },
}

export const examples = [
  {
    name: 'John Doe Developer',
    mock: 0,
    about: {
      first: 'John',
      middle: '',
      last: 'Doe',
      photo: '',
      position: 'Middle Front-End Developer',
      city: 'San Francisco',
      state: 'California',
      country: 'USA',
      tel: '555-555-5555',
      email: 'johndoe@email.com',
      linkedin: 'linkedin.com/in/johndoe',
      gitHub: 'github.com/johndoe',
    },
    summary: {
      summary:
        'John Doe is a skilled Middle Front-End Developer based in San Francisco, California. With experience in HTML, CSS, and JavaScript, John has a talent for creating user-friendly and visually appealing websites. He is always seeking new challenges and opportunities to expand his skills and knowledge in the tech industry. In his free time, John enjoys coding for fun and making silly jokes about his favorite programming languages. When asked about his favorite code editor, John quips "I only use Vim, because the only thing I like to nano is my smoothie."',
    },
    projects: [
      {
        id: 1,
        title: 'The Great To-Do List of Doom!',
        currentlyWork: false,
        startDate: '2021-01-01',
        endDate: '2021-12-31',
        deployUrl: 'https://doomtodo.com',
        sourceUrl: 'https://github.com/johndoe/doomtodo',
        technologies: 'React, Firebase, Material UI',
        description:
          'A to-do list application that not only helps you stay organized, but also adds a touch of excitement with its apocalyptic theme. Never forget to buy milk again...or face the consequences!',
      },
      {
        id: 2,
        title: 'The Unsolvable Maze',
        currentlyWork: false,
        startDate: '2022-01-01',
        endDate: '2022-06-30',
        deployUrl: 'https://unsolvablemaze.com',
        sourceUrl: 'https://github.com/johndoe/unsolvablemaze',
        technologies: 'JavaScript, HTML, CSS',
        description:
          'A browser-based maze game that promises to drive players crazy with its seemingly unsolvable puzzles. Can you escape the maze and retain your sanity?',
      },
      {
        id: 3,
        title: 'The Random Fact Generator 3000',
        currentlyWork: false,
        startDate: '2022-07-01',
        endDate: '2022-12-31',
        deployUrl: 'https://randomfactgen3000.com',
        sourceUrl: 'https://github.com/johndoe/randomfactgen3000',
        technologies: 'Vue, Axios, Tailwind CSS',
        description:
          'A fun and educational web application that spews out random, sometimes bizarre, facts with just the click of a button. Impress your friends with your newfound knowledge...or confuse them beyond belief!',
      },
    ],
    expertise: [
      {
        id: 1,
        title: 'Technologies',
        labels: 'JavaScript, React, Vue, Angular, Node.js',
      },
      {
        id: 2,
        title: 'Application Solutions',
        labels:
          'E-commerce, Content Management Systems, Single Page Applications, Progressive Web Applications, Mobile Applications',
      },
      {
        id: 3,
        title: 'Soft Skills',
        labels:
          'Collaboration, Communication, Problem-Solving, Adaptability, Time Management',
      },
    ],
    experiences: [
      {
        id: 1,
        title: 'Front-end Developer',
        employmentType: 'Full-time',
        company: 'Acme Inc.',
        location: 'San Francisco, CA, USA',
        contractType: 'On-site',
        currentlyWork: false,
        startDate: '2021-01-01',
        endDate: '2021-12-31',
        description:
          'Developed and maintained various web applications for the company, using technologies such as React, Redux and CSS. Worked closely with the design team to ensure high-quality user experiences. Collaborated with cross-functional teams to drive projects from conception to launch.',
      },
      {
        id: 2,
        title: 'Lead Front-end Developer',
        employmentType: 'Full-time',
        company: 'Globex Corp.',
        location: 'London, UK',
        contractType: 'On-site',
        currentlyWork: false,
        startDate: '2019-01-01',
        endDate: '2020-12-31',
        description:
          'Led a team of front-end developers in the development and maintenance of various web applications for the company, using technologies such as Vue, Nuxt.js and SCSS. Implemented best practices for code quality and maintainability. Mentored junior developers and fostered a positive and productive team culture.',
      },
    ],
    educations: [
      {
        id: 1,
        title: 'University of Technology',
        degree: 'Bachelor of Science in Computer Science',
        studyField: 'Computer Science',
        startDate: '2016-09-01',
        endDate: '2020-05-31',
        grade: '3.8/4.0',
        activities: 'Student Council, Computer Science Club, Research Project',
        description:
          'Completed a Bachelor of Science in Computer Science, with a focus on web development. Participated in student council and computer science club activities, and completed a research project on the use of machine learning in web applications. Achieved a grade point average of 3.8 out of 4.0.',
      },
      {
        id: 2,
        title: 'Udemy',
        degree: 'Certificate of Completion',
        studyField: 'React Native Development',
        startDate: '2021-01-01',
        endDate: '2021-12-31',
        grade: '',
        activities: '',
        description:
          'Completed a course on React Native development, covering topics such as creating cross-platform mobile applications using React Native, and integrating with APIs and third-party libraries. Earned a certificate of completion.',
      },
      {
        id: 3,
        title: 'Coursera',
        degree: 'Certificate of Completion',
        studyField: 'Full Stack Web Development',
        startDate: '2022-03-01',
        endDate: '2022-06-30',
        grade: '',
        activities: '',
        description:
          'Completed a course on full-stack web development, covering topics such as front-end development with React, and back-end development with Node.js and Express. Earned a certificate of completion.',
      },
    ],
    additional: [
      {
        id: 1,
        title: 'Volunteer Experience',
        description:
          'Volunteered as a mentor for a local coding bootcamp, helping students develop their web development skills and providing guidance on projects and job search strategies.',
      },
      {
        id: 2,
        title: 'Personal Project',
        description:
          'Developed and maintained a personal blog, built with Gatsby.js and hosted on Github Pages. Utilized modern web development technologies such as React, GraphQL, and CSS to create a visually appealing and user-friendly website.',
      },
    ],
  },
  {
    name: 'Bazz Lighter the Astronaut',
    mock: 1,
    about: {
      first: 'Bazz',
      middle: '',
      last: 'Lighter',
      photo: Bazz,
      position: 'Intergalactic Pilot',
      city: 'Orbiting Earth',
      state: 'Space',
      country: 'Galaxy',
      tel: '555-555-5555',
      email: 'johndoe@email.com',
      linkedin: 'linkedin.com/in/johndoe',
      gitHub: 'github.com/johndoe',
    },
    summary: {
      summary:
        'Bazz Lighter is a seasoned intergalactic pilot with a passion for exploring the unknown reaches of space. He is a skilled navigator and has a talent for landing on planets with the most unexpected gravitational pull. In his free time, Bazz enjoys reading sci-fi novels, playing chess against extraterrestrial opponents, and cracking jokes about the lack of decent coffee in deep space. His favorite motto is "The sky is not the limit, it\'s just the beginning."',
    },
    projects: [
      {
        id: 1,
        title: 'The Great Galactic Adventure!',
        currentlyWork: true,
        startDate: '2021-01-01',
        endDate: '',
        deployUrl: 'https://galacticadventure.com',
        sourceUrl: 'https://github.com/johndoe/galacticadventure',
        technologies:
          'Orbital Mechanics, Spacecraft Design, Interstellar Communications',
        description:
          "A mission to explore and chart new galaxies, meet new alien species, and gather data on the secrets of the universe. It's a big universe out there and Bazz is determined to leave his mark on it.",
      },
      {
        id: 2,
        title: 'Interstellar Rescue Mission',
        currentlyWork: false,
        startDate: '2022-01-01',
        endDate: '',
        description:
          'Led a team of astronauts on a daring rescue mission to save a stranded spaceship crew in a remote corner of the galaxy. Navigated through treacherous asteroid fields and battled against hostile alien forces to complete the mission successfully.',
      },
      {
        id: 3,
        title: 'The Great Cosmic Survey',
        currentlyWork: false,
        startDate: '2021-01-01',
        endDate: '2021-12-31',
        description:
          'Participated in a comprehensive survey of the universe, collecting data on various astronomical phenomena and discovering several new planets and star systems. Utilized cutting-edge technology to gather and analyze data, contributing to our understanding of the cosmos.',
      },
      {
        id: 4,
        title: 'Project Star Explorer',
        currentlyWork: false,
        startDate: '2020-01-01',
        endDate: '2020-12-31',
        description:
          'Led a team of scientists and engineers on a mission to explore a distant star system, conducting experiments and gathering data to further our understanding of the universe. The mission was a resounding success, yielding groundbreaking discoveries and paving the way for future exploration efforts.',
      },
    ],
    expertise: [
      {
        id: 1,
        title: 'Piloting',
        labels:
          'Orbital Mechanics, Spacecraft Design, Interstellar Navigation, Propulsion Systems, Extravehicular Activity, Astrobiology',
      },
      {
        id: 2,
        title: 'Interstellar Navigation',
        labels:
          'Star Charts, Stellar Cartography, Galaxy Mapping, Warp Drives, Hyperspace, Gravity Wells',
      },
      {
        id: 3,
        title: 'Space Survival',
        labels:
          'Space Suits, Oxygen Generation, Radiation Shielding, Zero-G Training, Emergency Procedures, Extra-Vehicular Activity',
      },
      {
        id: 4,
        title: 'Alien Languages',
        labels: 'Klingon, Ferengi, Romulan, Cardassian, Bajoran, Vulcan',
      },
      {
        id: 5,
        title: 'Laser Weaponry',
        labels:
          'Phasers, Disruptors, Ion Cannons, Tractor Beams, Deflector Shields, Photon Torpedoes',
      },
      {
        id: 6,
        title: 'Space Engineering',
        labels:
          'Propulsion Systems, Life Support Systems, Communications Systems, Power Generation Systems, Structural Engineering, Robotics',
      },
    ],
    experiences: [
      {
        id: 1,
        title: 'Astronaut',
        employmentType: 'Full-time',
        company: 'Intergalactic Space Agency',
        location: 'Orbiting Earth',
        contractType: 'Hybrid',
        currentlyWork: true,
        startDate: '2021-01-01',
        endDate: '',
        description:
          'As an astronaut for the Intergalactic Space Agency, Bazz has been involved in various missions to explore new planets and galaxies. He is responsible for piloting the spacecraft, conducting scientific experiments, and establishing communications with extraterrestrial life forms. Bazz has also helped design and test new space suits and equipment to ensure the safety and comfort of astronauts during their missions.',
      },
    ],
    educations: [
      {
        id: 1,
        title: 'Intergalactic University',
        degree: 'Bachelor of Astronautics',
        studyField: 'Astronautics',
        startDate: '2015-09-01',
        endDate: '2019-05-31',
        grade: 'Astro-Nomical',
        activities:
          'Interplanetary Flying Club, Extraterrestrial Geology Society, Zero Gravity Volleyball Team',
        description:
          'Earned a Bachelor of Astronautics degree from the esteemed Intergalactic University. Was an active member of various clubs and societies, including the Interplanetary Flying Club and Extraterrestrial Geology Society. Also a star player on the Zero Gravity Volleyball Team. Achieved an Astro-Nomical grade.',
      },
      {
        id: 2,
        title: 'Exoplanetary Flight School',
        degree: 'Certificate in Advanced Piloting Techniques',
        studyField: 'Piloting',
        startDate: '2020-01-01',
        endDate: '2020-12-31',
        grade: 'Interstellar',
        activities: '',
        description:
          'Completed a rigorous program at Exoplanetary Flight School to earn a Certificate in Advanced Piloting Techniques. Acquired mastery in navigating through treacherous asteroid fields and navigating through black holes. Achieved an Interstellar grade.',
      },
      {
        id: 3,
        title: 'Interstellar Language Institute',
        degree: 'Certificate in Galactic Communication',
        studyField: 'Languages',
        startDate: '2021-01-01',
        endDate: '2021-12-31',
        grade: 'Cosmic',
        activities: '',
        description:
          'Expanded linguistic abilities by completing a program at the Interstellar Language Institute to earn a Certificate in Galactic Communication. Can now fluently speak and understand multiple alien languages, including those used by extraterrestrial beings. Achieved a Cosmic grade.',
      },
    ],
    additional: [
      {
        id: 1,
        title: 'Certifications',
        description:
          'Certified in Warp Drive Maintenance, Hyperdrive Repair, and Interspace Navigation. Ready for any challenges the vast universe has in store!',
      },
      {
        id: 2,
        title: 'Languages',
        description:
          "Fluent in English, Binary, and Klingon. Learning to speak Wookiee, but it's a bit of a grunt work.",
      },
      {
        id: 3,
        title: 'Interests',
        description:
          'Enjoys stargazing, exploring strange new worlds, and seeking out new life and civilizations. Also a big fan of classic sci-fi movies and TV shows, but gets frustrated when people confuse Star Wars with Star Trek.',
      },
    ],
  },
  {
    name: 'Inter-Dimensional Scientist',
    mock: 2,
    about: {
      first: 'Rick',
      middle: '',
      last: 'Sanchez',
      photo: Rick,
      position: 'Inter-Dimensional Scientist',
      city: 'C-137',
      state: '',
      country: 'Universe',
      tel: '',
      email: 'ricksanchez@citadel.com',
      linkedin: '',
      gitHub: '',
    },
    summary: {
      summary:
        'Rick Sanchez is an inter-dimensional scientist who has a passion for science and adventure. He has a wealth of experience in traversing the multiverse and inventing complex gadgets and contraptions. He is a genius but also a bit of a wild card, often causing trouble for those around him, but always with the best of intentions. When asked about his approach to science, Rick quips "I don\'t have to outrun the monster, I just have to outrun you."',
    },
    projects: [
      {
        id: 1,
        title: 'The Interdimensional Portal Gun',
        currentlyWork: true,
        startDate: '2005-01-01',
        endDate: '',
        deployUrl: '',
        sourceUrl: '',
        technologies: 'Quantum Physics, Advanced Engineering',
        description:
          'Developed a device that allows travel between parallel universes and dimensions. Used for both personal and scientific purposes...and sometimes for causing trouble.',
      },
      {
        id: 2,
        title: 'M. Night Shaym-Aliens!',
        currentlyWork: false,
        startDate: '2010-01-01',
        endDate: '2010-12-31',
        deployUrl: '',
        sourceUrl: '',
        technologies: 'Extraterrestrial Biology, Advanced Genetics',
        description:
          'Created a hybrid alien-human life form, but quickly realized the error of his ways and destroyed the creature before it could wreak havoc.',
      },
      {
        id: 3,
        title: 'The Meeseeks Box',
        currentlyWork: false,
        startDate: '2013-01-01',
        endDate: '2013-12-31',
        deployUrl: '',
        sourceUrl: '',
        technologies: 'Interdimensional Magic, Robotics',
        description:
          'Invented a box that creates creatures known as Meeseeks, whose sole purpose is to fulfill a single request before disappearing. Things got out of hand when the requests became more and more complicated.',
      },
      {
        id: 4,
        title: 'Interdimensional Cable TV',
        currentlyWork: false,
        startDate: '2015-01-01',
        endDate: '2015-12-31',
        deployUrl: '',
        sourceUrl: '',
        technologies: 'Interdimensional Technology, Cable TV',
        description:
          'Created a TV that can access programming from parallel universes and dimensions. Binge-watched for months before realizing the impact on his mental health and well-being.',
      },
      {
        id: 5,
        title: 'Interdimensional Cable Network',
        currentlyWork: true,
        startDate: '2022-06-01',
        endDate: '',
        deployUrl: '',
        sourceUrl: 'https://github.com/RickSanchez/ICN',
        technologies: 'JavaScript, React, GraphQL, Node.js',
        description:
          'A streaming platform that connects you to the weirdest and most absurd TV shows from across the multiverse. Binge-watch the latest episodes of "Squanchy\'s Wild Adventures" or "The Rick and Morty Show" from the comfort of your own portal gun!',
      },
    ],
    expertise: [
      {
        id: 1,
        title: 'Interdimensional Science & Technology',
        labels:
          'Quantum Mechanics, Time Travel, Alternate Realities, Robotics, Antimatter Physics, Wormholes, Nanotechnology, Nanomachines, Particle Physics, Space-Time Distortion',
      },
      {
        id: 2,
        title: 'Inventing & Engineering',
        labels:
          'Rocket Science, Microbots, Meeseeks Boxes, Interdimensional Portals, Genetic Engineering, Robotic Surgery, Cyborg Construction, Neural Networking, Augmented Reality, Cryogenic Preservation',
      },
    ],
    experiences: [
      {
        id: 1,
        title: 'Chief Scientist',
        employmentType: 'Full-time',
        company: 'Sanchez Labs',
        location: 'Dimension C-137',
        contractType: 'Remote',
        currentlyWork: true,
        startDate: '2010-01-01',
        endDate: 'Present',
        description:
          'In charge of leading the scientific research and experiments at Sanchez Labs. Continuously exploring the multiverse, conducting experiments and inventing new and dangerous technologies. Some of my most notable inventions include the Portal Gun and the Mega Seeds.',
      },
      {
        id: 2,
        title: 'Chief Engineer',
        employmentType: 'Part-time',
        company: 'Space Cruiser Builder, Inc.',
        location: 'Dimension C-137',
        contractType: 'On-site',
        currentlyWork: false,
        startDate: '2005-01-01',
        endDate: '2010-01-01',
        description:
          'Designed and built intergalactic space cruisers for various interdimensional clients. Specialized in creating highly advanced and unique vehicles, equipped with state-of-the-art technology and weaponry. A few of my notable creations include the Death Star and the Heart of Gold.',
      },
      {
        id: 3,
        title: 'Professor of Sciences',
        employmentType: 'Part-time',
        company: 'Interdimensional Community College',
        location: 'Dimension C-137',
        contractType: 'Hybrid',
        currentlyWork: false,
        startDate: '2000-01-01',
        endDate: '2005-01-01',
        description:
          'Taught courses in physics, chemistry, and advanced mathematics to interdimensional students. Developed innovative and hands-on learning materials, making science fun and accessible for all. Some of my most popular classes include "Black Hole 101" and "Quantum Mechanics for Dummies".',
      },
      {
        id: 4,
        title: 'R&D Manager',
        employmentType: 'Full-time',
        company: 'Interdimensional Inc.',
        location: 'Dimension C-137',
        contractType: 'On-site',
        currentlyWork: false,
        startDate: '1995-01-01',
        endDate: '2000-01-01',
        description:
          'Managed a team of interdimensional researchers and developers, working on cutting-edge technology and inventions. Directed the development of several successful products, including the first interdimensional portal device and the first interdimensional teleporter. ',
      },
      {
        id: 5,
        title: 'Multiverse Navigator',
        employmentType: 'Full-time',
        position: 'Interdimensional Cable Inc.',
        location: 'C-137',
        contractType: 'Hybrid',
        currentlyWork: true,
        startDate: '1999-01-01',
        endDate: '',
        description:
          'As a Multiverse Navigator, I travel through various parallel universes and dimensions, gathering information and encountering strange new life and civilizations. I also have to deal with the unexpected consequences of my actions, like accidentally turning everyone in a dimension into giants or wiping out all life on a planet. But hey, it’s just another day at the office.',
      },
    ],
    educations: [
      {
        id: 1,
        title: 'Interdimensional University',
        degree: 'Doctor of Science in Multi-Dimensional Physics',
        studyField: 'Multi-Dimensional Physics',
        startDate: '1957-01-01',
        endDate: '1987-12-31',
        grade: 'A+',
        activities:
          'Lead Researcher, Interdimensional Physics Society, Time Travelers Anonymous',
        description:
          'Earned a Doctor of Science in Multi-Dimensional Physics from Interdimensional University, with a focus on interdimensional portals and time travel. Served as lead researcher and was active in Interdimensional Physics Society and Time Travelers Anonymous. Achieved a grade of A+.',
      },
      {
        id: 2,
        title: 'Zigerion Community College',
        degree: 'Certificate of Attendance in Scamming',
        studyField: 'Scamming',
        startDate: '1981-01-01',
        endDate: '1981-12-31',
        grade: 'AAA+++',
        activities: 'Scamming Society, Zigerion Debate Team',
        description:
          'Attended Zigerion Community College and received a Certificate of Attendance in Scamming. Was active in Scamming Society and Zigerion Debate Team. No grades were recorded, as the certificate was acquired through less than honorable means.',
      },
    ],
    additional: [
      {
        id: 1,
        title: 'Facts About Rick Sanchez',
        description:
          'Rick Sanchez is a mad scientist and the main protagonist of the animated television show, Rick and Morty. He is known for his love of alcohol and his carefree, reckless behavior. Here are some fun facts about Rick that fans of the show might enjoy: \n\n1. Rick is voiced by co-creator of the show, Justin Roiland. \n2. Rick is referred to as a genius, and he has a PhD in applied physics. \n3. He has an extensive knowledge of the multiverse, and has visited countless planets and dimensions. \n4. Despite his intelligence, Rick is often motivated by his own selfish desires, which often get him into trouble. \n5. Rick has a daughter named Beth, and a granddaughter named Summer, who he often takes on adventures through the multiverse.',
      },
      {
        id: 2,
        title: 'Facts About Morty',
        description:
          "Morty Smith is Rick Sanchez's good-hearted but easily distressed grandson and constant companion. He is often dragged into Rick's dangerous and crazy adventures. Here are some fun facts about Morty: \n\n1. Morty is voiced by Justin Roiland. \n2. Morty is a typical 14-year-old teenager and is not as intelligent as Rick. \n3. Despite this, Morty is often the voice of reason in their adventures, and is the one who tries to keep Rick in check. \n4. Morty has a crush on a fellow student named Jessica, who he often tries to impress. \n5. Morty is known for his catchphrase, \"I don't want to go on this adventure, Rick!\"",
      },
      {
        id: 3,
        title: 'Facts About Beth',
        description:
          "Beth Smith is Rick Sanchez's daughter, and Morty and Summer's mother. She is a horse surgeon and often serves as the voice of reason in the family. Here are some fun facts about Beth: \n\n1. Beth is voiced by Sarah Chalke. \n2. Beth is a successful horse surgeon, but she is often unhappy with her life and is searching for more meaning. \n3. She has a strained relationship with her father, Rick, and is constantly trying to win his approval. \n4. Beth is married to Jerry Smith, Morty and Summer's father, but their marriage is often rocky. \n5. Despite her tough exterior, Beth is a loving mother who wants the best for her children and will do anything to protect them.",
      },
    ],
  },
];

