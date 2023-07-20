import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    unity,
    csharp,
    java,
    python,
    comcast,
    prohashing,
    sbu,
    threejs,
    resume,
    redistricting,
    hellsfury,
    duckgame
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#work",
      title: "Work",
    },
    {
      id: "#contact",
      title: "Contact",
    },
    {
      id: resume,
      title: "CV"
    }
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Cybersecurity Engineer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Scripting Experience",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "unity",
      icon: unity,
    },
    {
      name: "c#",
      icon: csharp,
    },
  ];
  
  const experiences = [
    // {
    //   title: "BSE, Computer Science",
    //   company_name: "Stony Brook University",
    //   icon: sbu,
    //   iconBg: "#E6DEDD",
    //   date: "August 2018 - May 2022",
    //   points: [
    //     "Learned many valuable skills related to the fundamentals of computer science.",
    //     "Created multiple intensive projects with team members.",
    //     ".",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Backend Engineer",
      company_name: "Prohashing",
      icon: prohashing,
      iconBg: "#E6DEDD",
      date: "January 2022 - December 2022",
      points: [
        "Tasked with regular maintenance and upgrades of servers/databases using Twisted and other python libraries, including monitoring of these systems with Prometheus/Grafana.",
        "Implemented several mining algorithms in Python, creating and working with dozens of APIs to ensure proper communication between systems, including custom-built WAMP software.",
        "Wrote extensive documentation of implemented systems and features."
      ],
    },
    {
      title: "Full Stack Developer/Secure Coding Engineer",
      company_name: "Comcast",
      icon: comcast,
      iconBg: "#383E56",
      date: "January 2023 - Current",
      points: [
        "Developing/mainting applications with React front-end, Spring Boot back-end, mySQL database.",
        "Main project: connector tool meant to make server inventory management simple via web/mobile app.",
        "Jenkins and CI/CD pipelines for deployment of new features and bugfixes.",
        "Penetration testing software via Burp Suite and NMAP.",
      ],
    }
  ];
  
  const projects = [
    {
      name: "Redistricting Simulator",
      description:
        "Full-stack simulation of potential redistricting plans using real data to generate thousands of iterations of possible plans for three states.",
      tags: [
        {
          name: "vanillajs",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "pink-text-gradient",
        },
      ],
      image: redistricting,
      source_code_link: "https://github.com/adithyajith925/cse-416-front-end",
    },
    {
      name: "Hell's Fury",
      description:
        "Pixel art web game coded entirely in typescript on a homemade game engine. Dungeon-crawler levels with unique enemies and bosses on each floor.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "aseprite",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: hellsfury,
      source_code_link: "https://github.com/Ed-joe/Hells-Fury",
    },
    {
      name: "Untitled Duck Game",
      description:
        "An in-progress Unity turn-based RPG about rubber ducks and their adventures.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: duckgame,
      source_code_link: "https://github.com/adithyajith925/Untitled-Duck-Game",
    },
  ];
  
  export { services, technologies, experiences, projects };