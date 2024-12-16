import ProjectCard from "./components/cards/ProjectCard";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/projects/Counter/Counter";
import Gallery from "./components/projects/Image Gallery/Gallery";
import LanguageMV from "./components/projects/Programming-Language-Multiverse/LanguageMV";
import Practice from "./components/projects/Practice/Practice";
import Anagram from "./components/projects/Anagram Checker/Anagram/";
import BGChanger from "./components/projects/BackGround Changer/BGChanger";
import Stopwatch from "./components/projects/Stopwatch/Stopwatch";
import MusicHub from "./components/projects/Music Playlist/Music";

const PROJECTS = [
  {
    id: "counter",
    title: "Counter App",
    description: "A simple counter with increment and decrement functionality",
    path: "/counter",
    date: "",
    component: Counter,
  },
  {
    id: "gallery",
    title: "Image Gallery",
    description: "A gallery to display and interact with images",
    path: "/gallery",
    date: "",
    component: Gallery,
  },
  {
    id: "languages",
    title: "Language Multiverse",
    description: "A page to display different Programming Languages Available",
    path: "/languagess",
    date: "",
    component: LanguageMV,
  },
  {
    id: "practice",
    title: "Practice",
    description: "Page where I can practice react concepts",
    path: "/practice",
    date: "",
    component: Practice,
  },
  {
    id: "anagram",
    title: "Anargam Checker",
    description: "Page to check two words are anargam or not.",
    path: "/anargam",
    date: "15-12-2024",
    component: Anagram,
  },
  {
    id: "bgchanger",
    title: "BackGround Changer",
    description: "Page to change Backgound color.",
    path: "/bgchanger",
    date: "15-12-2024",
    component: BGChanger,
  },
  {
    id: "stopwatch",
    title: "Stopwatch",
    description: "Page for a stopwatch.",
    path: "/stopwatchr",
    date: "16-12-2024",
    component: Stopwatch,
  },
  {
    id: "MusicHub",
    title: "Music Hub",
    description: "Page containing different songs.",
    path: "/musichub",
    date: "16-12-2024",
    component: MusicHub,
  },
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="homepage">
            <h1 className="page-heading">React Mini Projects</h1>
            <div className="cards-container">
              {PROJECTS.map(({ id, title, description, path, date }) => (
                <ProjectCard
                  key={id}
                  title={title}
                  description={description}
                  projectLink={path}
                  date={date}
                />
              ))}
            </div>
          </div>
        }
      />
      {PROJECTS.map(({ id, path, component: Component }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default App;
