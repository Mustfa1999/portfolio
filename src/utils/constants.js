const navbarItems = [
  "home",
  "about me",
  "contact me",
  "projects",
  "technical documents",
];

const avatarIons = [
  {
    id: "react-orbital-icon",
    src: String.raw`\icons\reactIcon.png`,
    rotateZ: 0,
    rotateY: 80,
    start: 15,
    end: 5,
    delay: 0,
    shadow: "cyan",
  },
  {
    id: "node-orbital-icon",
    src: String.raw`icons\nodeIcon.png`,
    rotateZ: -30,
    rotateY: 80,
    start: 5,
    end: 15,
    delay: 0.5,
    shadow: "green",
  },
  {
    id: "fastAPI-orbital-icon",
    src: String.raw`icons\fastAPI.png`,
    rotateZ: -60,
    rotateY: 80,
    start: 5,
    end: 15,
    delay: 1,
    shadow: "cyan",
  },
  {
    id: "angular-orbital-icon",
    src: String.raw`icons\angularIcon.png`,
    rotateZ: -90,
    rotateY: 80,
    start: 5,
    end: 15,
    delay: 1.5,
    shadow: "red",
  },
  {
    id: "flutter-orbital-icon",
    src: String.raw`icons\flutterIcon.png`,
    rotateZ: 30,
    rotateY: 80,
    start: 5,
    end: 15,
    delay: 2,
    shadow: "lightblue",
  },
  {
    id: "github-orbital-icon",
    src: String.raw`icons\githubIcon.png`,
    rotateZ: 60,
    rotateY: 80,
    start: 5,
    end: 15,
    delay: 2.5,
    shadow: "white",
  },
  {
    id: "docker-orbital-icon",
    src: String.raw`icons\dockerIcon.png`,
    rotateZ: 0,
    rotateY: 80,
    start: 5,
    end: 15,
    delay: 1,
    shadow: "white",
  },
  {
    id: "html-orbital-icon",
    src: String.raw`icons\htmlIcon.png`,
    rotateZ: -30,
    rotateY: 80,
    start: 5,
    end: 15,
    delay: 1.5,
    shadow: "orange",
  },
  {
    id: "css-orbital-icon",
    src: String.raw`icons\cssIcon.png`,
    rotateZ: -90,
    rotateY: 80,
    start: 5,
    end: 15,
    delay: 2.5,
    shadow: "lightblue",
  },
];

module.exports = {
  navbarItems,
  avatarIons,
};
