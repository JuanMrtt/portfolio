import React from 'react'
import { useRef } from "react";

import Layout from "../containers/Layout/Layout";
import AboutMe from '../containers/AboutMe/AboutMe';
import Experience from "../containers/Experience/Experience";
import Projects from '../containers/Projects/Projects';
import Introduction from '../containers/Introduction/Introduction';
import Footer from '../containers/Footer/Footer';

export default function Home() {
  const aboutMeRef = useRef();
  const experienceRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();


  // const scrollToMyRef = () => {
  //   console.log('presionando aboutme')
  //   window.scroll({
  //     top: aboutMeRef.current.offsetTop,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };

  const scrollToHandler = (index) => {
    switch (index) {
      case 0:
        window.scroll({ top: aboutMeRef.current.offsetTop, left: 0 });
        return;
      case 1:
        window.scroll({ top: experienceRef.current.offsetTop, left: 0 });
        return;
      case 2:
        window.scroll({ top: projectRef.current.offsetTop, left: 0 });
        return;
      case 3:
        window.scroll({ top: contactRef.current.offsetTop, left: 0 });
        return;
      default:
        return;
    }
  };

  return (
    <>
      <Layout scrollToHandler={scrollToHandler}>
        <Introduction ref={aboutMeRef} />
        <AboutMe ref={aboutMeRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectRef} />
        <Footer ref={contactRef} />
      </Layout>
    </>
  )
}
