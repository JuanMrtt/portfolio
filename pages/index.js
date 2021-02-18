import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import useWindowSize from '../hooks/useCurrentWidth';

import Layout from '../containers/Layout/Layout';
import AboutMe from '../containers/AboutMe/AboutMe';
import Experience from '../containers/Experience/Experience';
import Projects from '../containers/Projects/Projects';
import Introduction from '../containers/Introduction/Introduction';
import Footer from '../containers/Footer/Footer';

export default function Home() {
    const aboutMeRef = useRef();
    const experienceRef = useRef();
    const projectRef = useRef();
    const contactRef = useRef();

    const width = useWindowSize()[0];

    const [isMobile, setIsMobile] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (width <= 690 && !isMobile) {
            setIsMobile(true);
            setIsLaptop(false);
            setIsDesktop(false);
        }
        if (width > 690 && width < 1300 && !isLaptop) {
            setIsMobile(false);
            setIsLaptop(true);
            setIsDesktop(false);
        }
        if (width >= 1300 && !isDesktop) {
            setIsMobile(false);
            setIsLaptop(false);
            setIsDesktop(true);
        }
    }, [width]);

    // const scrollToMyRef = () => {
    //   console.log('presionando aboutme')
    //   window.scroll({
    //     top: aboutMeRef.current.offsetTop,
    //     left: 0,
    //     behavior: 'smooth',
    //   });
    // };
    console.log(isMobile, isLaptop, isDesktop);

    const scrollToHandler = index => {
        switch (index) {
            case 0:
                window.scroll({ top: aboutMeRef.current.offsetTop, left: 0 });
                return;
            case 1:
                window.scroll({
                    top: experienceRef.current.offsetTop,
                    left: 0,
                });
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
            <Layout
                scrollToHandler={scrollToHandler}
                isMobile={isMobile}
                isLaptop={isLaptop}
                isDesktop={isDesktop}
            >
                <Introduction
                    ref={aboutMeRef}
                    isMobile={isMobile}
                    isLaptop={isLaptop}
                    isDesktop={isDesktop}
                />
                <AboutMe
                    ref={aboutMeRef}
                    isMobile={isMobile}
                    isLaptop={isLaptop}
                    isDesktop={isDesktop}
                />
                <Experience
                    ref={experienceRef}
                    isMobile={isMobile}
                    isLaptop={isLaptop}
                    isDesktop={isDesktop}
                />
                <Projects
                    ref={projectRef}
                    isMobile={isMobile}
                    isLaptop={isLaptop}
                    isDesktop={isDesktop}
                />
                <Footer
                    ref={contactRef}
                    isMobile={isMobile}
                    isLaptop={isLaptop}
                    isDesktop={isDesktop}
                />
            </Layout>
        </>
    );
}
