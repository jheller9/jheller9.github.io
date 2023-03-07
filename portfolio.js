const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jheller9.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jason Heller',
  role: 'Front End Engineer',
  description:
    'Blah blah blah.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jasonheller96/',
    github: 'https://github.com/jheller9',
  },
}

const projects = [
  {
    name: 'Predictive Recipe Lookup',
    description:
      'A CRUD-based single-page search engine that utilizes lookahead to search through a mock back-end and return the most relevant results in realtime.',
    stack: ['JavaScript', 'React', 'Json-Server'],
    sourceCode: 'https://github.com/jheller9/recipe-predictive-lookup',
    livePreview: 'https://youtu.be/IcualmCfFbs',
  },
  {
    name: 'NetSciDraw',
    description:
      'NetSciDraw: A tool for thinking in systems! This children\'s application allows you to draw circles, fill these labels with ideas, connect them with arrows, create labels, and move all of those around in order for you to understand your unique \"network.\" ',
    stack: ['Javascript'],
    sourceCode: 'https://github.com/jheller9/NetSciDraw',
    livePreview: 'http://coco.binghamton.edu/netscidraw/',
  },
  {
    name: '3D Java Game Engine',
    description:
      'A 3D game engine written in Java using OpenGL. Features a scene-entity architecture. Features fully 3D environments utilizing BSP trees for optimization, baked ambient lightmapping, skeletal animations, parallax-corrected cube maps, and a built-in component based user interface.',
    stack: ['Java', 'OpenGL', 'LWJGL', 'GLSL', 'JSON'],
    sourceCode: 'https://github.com/jheller9/3d-java-game-engine',
    livePreview: 'https://youtu.be/A_Caiwy9vuM',
  },
  {
    name: 'Moonglade Project',
    description:
      'Project Moonglade is a 3D sandbox game written in java that has an emphasis on procedural generation. It uses OpenGL for rendering via LWJGL2, and uses its own engine.',
    stack: ['Java', 'OpenGL', 'LWJGL', 'GLSL'],
    sourceCode: 'https://github.com/jheller9/3d-java-game-engine',
    livePreview: 'https://youtu.be/At-BLAWecRA',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Java',
  'Python',
  'Git',
  'R',
  'Data Analysis',
  'OpenGL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jasonheller96@mail.com',
}

export { header, about, projects, skills, contact }
