import "./splash.css";
import Navigation from "../Navigation";
const Splash = () => {

  return (
    <div className="SplashPage">
      <Navigation />
      <section id="top">
        <div className="splashTitles">
          <p>
            <b> Get your next</b>
          </p>
          <div className="splashtitle1">
            {" "}
            <b>weeknight dinner idea</b>{" "}
          </div>
        </div>
        <div className="image-container">
          <div className="splishColumns" id="column1">
            <div className="pic1">
              <img
                className="splishPic"
                src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea1.jpg"
              />
            </div>
          </div>

          <div className="splishColumns" id="column2">
            <div className="pic2">
              <img
                className="splishPic"
                src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea2.jpg"
              />
            </div>
          </div>
          <div className="splishColumns" id="column3">
            <div className="pic3">
              <img
                className="splishPic"
                src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea3.jpg"
              />
            </div>
          </div>
          <div className="splishColumns" id="column4">
            <div className="pic4">
              <img
                className="splishPic"
                src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea4.jpg"
              />
            </div>
          </div>
          <div className="splishColumns" id="column5">
            <div className="pic5">
              <img
                className="splishPic"
                src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea5.jpg"
              />
            </div>
          </div>
          <div className="splishColumns" id="column6">
            <div className="pic6">
              <img
                className="splishPic"
                src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea6.jpg"
              />
            </div>
          </div>
          <div className="splishColumns" id="column7">
            <div className="pic7">
              <img
                className="splishPic"
                src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea7.jpg"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div>Here is how it works</div>
          <svg
            className="aUZ R19 U90 kVc"
            height="12"
            width="12"
            viewBox="0 0 24 24"
            aria-label="arrow down icon"
            role="img"
          >
            <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

// import React, { useEffect, useRef, useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// import { scroller } from 'react-scroll';

// function Splash() {

//   const history = useHistory();
//   const location = useLocation();
//   const [isScrolling, setIsScrolling] = useState(false);
//   const sectionIds = ['section1', 'section2', 'section3', 'section4'];
//   const prevScrollY = useRef(0);
//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const section3Ref = useRef(null);
//   const section4Ref = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };
//   const handleScroll = (e) => {
//     e.preventDefault();
//     if (isScrolling) return;

//     const currentScrollY = window.scrollY;
//     const deltaY = e.deltaY;

//     // Determine the scroll direction
//     let scrollDirection;
//     if (deltaY > 0) {
//       scrollDirection = 'down';
//     } else if (deltaY < 0) {
//       scrollDirection = 'up';
//     } else {
//       scrollDirection = 'none';
//     }

//     // Perform actions based on scroll direction
//     if (scrollDirection === 'down') {
//       let currentSectionIndex = sectionIds.indexOf(location.hash.slice(1));
//       console.log(currentSectionIndex, 'currentSectionIndex')
//       console.log(location.hash, 'location.hash')
//       if(currentSectionIndex===-1)currentSectionIndex++
//       let nextSectionIndex = currentSectionIndex + 1;

//       if (nextSectionIndex >= sectionIds.length) nextSectionIndex = sectionIds.length - 1;

//       setIsScrolling(true);
//     //   scrollToSection(section4Ref);
//     if(currentSectionIndex===0){
//         section1Ref.current?.scrollIntoView({ behavior: 'smooth' });

//     }else if(currentSectionIndex===1){
//         section2Ref.current?.scrollIntoView({ behavior: 'smooth' });

//     }else if(currentSectionIndex===2){
//         section3Ref.current?.scrollIntoView({ behavior: 'smooth' });

//     }else if(currentSectionIndex===3){
//         section4Ref.current?.scrollIntoView({ behavior: 'smooth' });

//     }
//     //   section4Ref.current?.scrollIntoView({ behavior: 'smooth' });
//     //   console.log(section4Ref, 'section4Ref')
//     //   history.push(`/#${sectionIds[nextSectionIndex]}`);

//     //   scroller.scrollTo(sectionIds[nextSectionIndex], {
//     //     duration: 800,
//     //     delay: 0,
//     //     smooth: 'easeInOutQuart'
//     //   });

//       setTimeout(() => setIsScrolling(false), 800);
//     } else if (scrollDirection === 'up') {
//       let currentSectionIndex = sectionIds.indexOf(location.hash.slice(1));
//       let nextSectionIndex = currentSectionIndex - 1;

//       if (nextSectionIndex < 0) nextSectionIndex = 0;

//       setIsScrolling(true);
//     //   history.push(`/#${sectionIds[nextSectionIndex]}`);

//     //   scroller.scrollTo(sectionIds[nextSectionIndex], {
//     //     duration: 800,
//     //     delay: 0,
//     //     smooth: 'easeInOutQuart'
//     //   });
//     if(currentSectionIndex===0){
//         section1Ref.current?.scrollIntoView({ behavior: 'smooth' });

//     }else if(currentSectionIndex===1){
//         section2Ref.current?.scrollIntoView({ behavior: 'smooth' });

//     }else if(currentSectionIndex===2){
//         section3Ref.current?.scrollIntoView({ behavior: 'smooth' });

//     }else if(currentSectionIndex===3){
//         section4Ref.current?.scrollIntoView({ behavior: 'smooth' });

//     }

//       setTimeout(() => setIsScrolling(false), 800);
//     }

//     // Update the previous scroll position
//     prevScrollY.current = currentScrollY;
//   };

//   useEffect(() => {
//     console.log(location.hash.slice(1), 'location.hash.slice(1)')
//     const section = location.hash.slice(1);
//     if (sectionIds.includes(section)) {
//       scroller.scrollTo(section, {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart',
//       });
//     }
//   }, [location]);

//   useEffect(() => {
//     window.addEventListener('wheel', handleScroll, { passive: false });
//     return () => window.removeEventListener('wheel', handleScroll);
//   }, [ isScrolling]);

//   return (
//     // <div style={{ position: 'fixed', width: '100%', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
//     <div>

//       <section id="section1" ref={section1Ref} class='st'>
//         <Navigation/>
//         <p>section1</p>
//         {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />   */}
//       </section>
//       <section id="section2" ref={section2Ref} class='st'>
//         <p>section2</p>

//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//       </section>
//       <section id="section3" ref={section3Ref} class='st'>
//         <p>section3</p>
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//       </section>
//       <section id="section4" ref={section4Ref} class='st'>
//         <p>section4</p>
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//       </section>
//     </div>
//   );
// }

export default Splash;

// export default Splash;
