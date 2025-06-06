import lab from '../assests/images/lab.png'
import port from '../assests/images/port.png'
import web from '../assests/images/web.png'
import card from '../assests/images/card.png'

export const projects = [
  {
    id: 1,
    title: "hospital-Lab-management",
    description: "Interactive lab management interface with real-time test status tracking",
    image: lab,
    tags: ["HTML", "CSS", "Express js","Node js"],
    demoUrl: "#",
    codeUrl: "https://github.com/magdaline4/hospital-Lab-management"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "“Responsive Portfolio with Elegant Style”",
    image: port,
    tags: ["CSS","JSX with HTML", "React js", "Framer Motion"],
    demoUrl: "https://magportfoliowebsite.netlify.app/",
    codeUrl: "https://github.com/magdaline4/myportfolio"
  },
    {
    id: 3,
    title: "Nexcent Website",
    description: "simple website with a responsive design by using HTML and CSS",
    image: web,
    tags: ["HTML", "CSS"],
    demoUrl: "#",
    codeUrl: "https://github.com/magdaline4/Nexcent-website"
  },
      {
    id: 4,
    title: "Memory-Game",
    description:"A memory card matching game where players flip cards to find matching image pairs. The game includes flip animations, match detection, and automatic reshuffling after all pairs are matched.",
    image: card,
    tags: ["HTML", "CSS", "JS"],
    demoUrl: "#",
    codeUrl: "https://github.com/magdaline4/Memory-Flip-Card.git"
  }
];