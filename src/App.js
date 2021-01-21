import React, { useState, useEffect } from "react";
import VizSensor from 'react-visibility-sensor';
import classnames from 'classnames';

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Greetings from "./components/greetings/Greetings";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Badges from "./components/badges/Badges";
import About from "./components/about/About";

const App = () => {
    const [projectsInView, setProjectsInview] = useState(false);
    const [aboutInView, setAboutInview] = useState(false);
    const [contactInView, setContactInview] = useState(false);

    const [shortcutBadge, setShortcutBadge] = useState(false);
    const [firstProjectBadge, setFirstProjectBadge] = useState(false);
    const [bottomBadge, setBottomBadge] = useState(false);
    const [allProjectsBadge, setAllProjectsBadge] = useState(false);
    const [trophyBadge, setTrophyBadge] = useState(false);
    const [numAchieved, setNumAchieved] = useState(0);

    const checkView = (isVisible, elm) => {
        switch(elm){
            case 'projects':
                setProjectsInview(isVisible);
                break;
            case 'about':
                setAboutInview(isVisible);
                break;
            case 'contact':
                setContactInview(isVisible);
                if(isVisible) {
                    checkAchieved('bottom')
                }
                break;
            default:
                return;
        }
    };

    const checkAchieved = (badge) => {
        switch(badge){
            case 'shortcut':
                if(!shortcutBadge){
                    setShortcutBadge(true);
                    setNumAchieved(numAchieved + 1);
                }
                break;
            case 'first-project': 
                if(!firstProjectBadge){
                    setFirstProjectBadge(true);
                    setNumAchieved(numAchieved + 1);
                }
                break;
            case 'bottom':
                if(!bottomBadge){
                    setBottomBadge(true);
                    setNumAchieved(numAchieved + 1);
                }
                break;
            case 'all-projects':
                if(!allProjectsBadge){
                    setAllProjectsBadge(true);
                    setNumAchieved(numAchieved + 1);
                }
                break;
            default:
                return;
        }
    };

    if(shortcutBadge && firstProjectBadge && bottomBadge && allProjectsBadge){
        if(!trophyBadge){
            setTrophyBadge(true);
            setNumAchieved(numAchieved + 1);
        }
    };

    return (
        <div>
            <Header shortcutBadge={shortcutBadge}/>
            <main className="o-wrap o-wrap__main">
                <section  id="top" className="o-wrap o-wrap__section">
                    <Greetings />
                </section>
                <section id="projects" className="o-wrap o-wrap__section">
                    <VizSensor partialVisibility={true} offset={{top:400, bottom:300}} onChange={(isVisible) => checkView(isVisible, 'projects')}>
                       <Projects checkAchieved={checkAchieved} allProjectsBadge={allProjectsBadge}/> 
                    </VizSensor>
                </section>
                <section id="about" className="o-wrap o-wrap__section">
                    <VizSensor partialVisibility={true} offset={{top:400, bottom:300}} onChange={(isVisible) => checkView(isVisible, 'about')}>
                      <About />  
                    </VizSensor>
                </section>
                <section id="contact" className="o-wrap o-wrap__section">
                    <VizSensor partialVisibility={true} offset={{bottom:200}} onChange={(isVisible) => checkView(isVisible, 'contact')}>
                      <Contact checkAchieved={checkAchieved}/>  
                    </VizSensor>
                </section>
            </main>
            <Badges
                shortcutBadge={shortcutBadge}
                firstProjectBadge={firstProjectBadge}
                bottomBadge={bottomBadge}
                allProjectsBadge={allProjectsBadge}
                trophyBadge={trophyBadge}
                numAchieved={numAchieved}
                setNumAchieved={setNumAchieved}
            />
            <Navigation
                projectsInView={projectsInView}
                aboutInView={aboutInView}
                contactInView={contactInView}
                checkView={checkView}
                checkAchieved={checkAchieved}
            />
        </div>
    ) 
    
}

export default App;
