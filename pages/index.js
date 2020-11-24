import React from 'react'

import { useRef } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Experience from "../components/Experience/Experience";
import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import Projects from '../components/Projects/Projects';
import Introduction from '../components/Introduction/Introduction';

export default function Home() {
  const aboutMeRef = useRef();
  const experienceRef = useRef();
  const projectRef = useRef();

  console.log('aboutme', aboutMeRef)
  console.log('experienceRef', experienceRef)

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
        console.log('click0')
        console.log(aboutMeRef)
        window.scroll({ top: aboutMeRef.current.offsetTop, left: 0 });
        // aboutMeRef.current.offsetTop;
        return;
      case 1:
        console.log('click')
        console.log(experienceRef)
        window.scroll({ top: experienceRef.current.offsetTop, left: 0 });
        return;
      case 2:
        //   this.workChild.current.scrollToMyRef();
        window.scroll({ top: projectRef.current.offsetTop, left: 0 });
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
      </Layout>
    </>
  )
}
