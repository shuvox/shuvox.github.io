import flappy_poster from "$lib/images/flappy-bird.png";
import buet_cse_courseworks_poster from "$lib/images/buet_cse_courseworks2.jpg";
import algomania_poster from "$lib/images/algo-mania.png";
import mathcamp_poster from "$lib/images/math-camp.png";
import repair_guru_poster from "$lib/images/repair-guru2.png";
import trinity_learning_poster from "$lib/images/trinity-learning.png";
import aegis_shield_poster from "$lib/images/aegis-shield.png";
import eduVerse_poster from "$lib/images/eduVerse.png";

export const projects = [
  {
    title: "eduVerse",
    imageUrl: eduVerse_poster,
    githubUrl: "https://github.com/ShadmanSShuvo/edu-Verse",
    youtubeUrl: "https://www.youtube.com/watch?v=AdwLN4_UKM4",
    tags: [
      "TypeScript",
      "Next.js",
      "postgreSQL",
      "Gemini-API",
      "BUET CSE",
    ],
    year: "2026",
    description:
      "eduVerse is a sophisticated, role-based e-learning platform built with Next.js 16, React 19, and PostgreSQL. It features AI-powered automated MCQ exam generation via Google Gemini, adaptive HLS video streaming with Mux, and secure local payment integration through SSLCommerz.",
  },
  {
    title: "Trinity Learning",
    imageUrl: trinity_learning_poster,
    githubUrl: "https://github.com/ShadmanSShuvo/Trinity-Learning",
    youtubeUrl: "https://youtu.be/0Gcdd81dBdU",
    tags: [
      "TypeScript",
      "Next.js",
      "Gemini-API",
      "NotebookLM",
      "BUET CSE Fest Hackathon",
    ],
    year: "2026",
    description:
      "AI-powered supplementary learning platform built for BUET CSE Fest 2026 Hackathon (AI & API segment). Inspired by NotebookLM, this project helps users interact with learning materials through intelligent summaries, Q&A, and contextual insights.",
  },
  {
    title: "Aegis Shield",
    imageUrl: aegis_shield_poster,
    githubUrl: "https://github.com/ShadmanSShuvo/Aegis-Shield",
    youtubeUrl: "https://youtu.be/1h5EfKMbaME",
    tags: ["TypeScript", "Gemini-API", "AI", "Build4Democracy Hackathon"],
    year: "2025",
    description:
      "An anonymous platform for reporting human rights violations, crimes, and harassment. The app uses AI to analyze reports, identify potential legal violations, suggest actions, and categorize risks, empowering users to seek justice safely.",
  },
  {
    title: "Repair Guru",
    imageUrl: repair_guru_poster,
    githubUrl: "https://github.com/ShadmanSShuvo/Repair-Guru",
    youtubeUrl: "https://youtu.be/NR-uJ1V-9vg",
    tags: ["TypeScript", "Gemini-API", "AI", "Solvio AI Hackathon"],
    year: "2025",
    description:
      "This repository contains the links to the Repair Guru project for Solvio AI Hackathon. It is a team project with Sanim Muntasir Mithun, Afia Jahin Adhitee & Ahnaf Akif, developed using TypeScript and Gemini-API to provide repair solutions using AI.",
  },
  {
    title: "AlgoMania - DSA Visualizer",
    imageUrl: algomania_poster,
    githubUrl: "https://github.com/ShadmanSShuvo/AlgoMania",
    youtubeUrl: "https://youtu.be/R8U2GAA77SI",
    tags: ["Java", "JavaFX", "CSS", "OOP", "BUET CSE"],
    year: "2025",
    description:
      "This repository contains the links to the CSE 106 JavaFX Project of L1-T2. It is a Data Structures & Algorithms Visualizer developed using Java and JavaFX.",
  },

  {
    title: "Flappy Bird Clone Game",
    imageUrl: flappy_poster,
    githubUrl: "https://github.com/ShadmanSShuvo/FlappyBird",a
    youtubeUrl: "https://youtu.be/mjMROK7sZJY",
    tags: ["C", "C++", "OpenGL", "BUET CSE", "Courseworks"],
    year: "2024",
    description:
      "This repository contains the links to the CSE 102 iGraphics Project of L1-T1. It is a Flappy Bird Clone Game developed using C/C++ and OpenGL.",
  },

  {
    title: "BUET-CSE-Courseworks",
    imageUrl: buet_cse_courseworks_poster,
    githubUrl: "https://github.com/ShadmanSShuvo/BUET-CSE-Courseworks",
    youtubeUrl: undefined,
    tags: ["C", "C++", "Java", "Python", "DSA", "DBMS"],
    year: "2024-Present",
    description:
      "This repo contains the links to all of my course works of BUET CSE. It contains onlines, offlines, projects and assignments of various courses.",
  },

  {
    title: "National Camp Journal",
    imageUrl: mathcamp_poster,
    githubUrl: "https://github.com/ShadmanSShuvo/Nat-Camp-Journal",
    youtubeUrl: undefined,
    fileUrl: "src/lib/documents/Math-Camp-2021.pdf",
    tags: ["LaTeX", "Math", "Olympiad", "Problem Solving"],
    year: "2021",
    description:
      "This is a LaTeX project that contains the journal of the National Olympiad Camp 2021. It contains the lectures, problems and solutions of the camp.",
  },
];
