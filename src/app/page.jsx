'use client';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Expertise from "./components/Expertise";
import RecentWork from "./components/RecentWork";
import HaveFun from "./components/HaveFun";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Skills />
      <Expertise />
      <RecentWork />
      <HaveFun />
      <Footer />
    </main>
  );
}
