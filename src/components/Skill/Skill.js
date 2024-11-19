import React, { useEffect } from 'react';

// Importing TagCloud for 3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud';
    const texts = [
      'HTML', 'CSS', 'SASS', 'JavaScript', 'React', 
      'Vue', 'Nuxt', 'NodeJS', 'Shopify', 'Jquery', 
      'ES6', 'GIT', 'GITHUB',
    ];

    // Function to set the radius value based on screen size
    function radiusValue() {
      return window.screen.width <= 778 ? 150 : 290;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    // Initialize TagCloud
    TagCloud(container, texts, options);

    // Clean-up to avoid memory leaks
    return () => {
      const tagcloudContainer = document.querySelector(container);
      if (tagcloudContainer) {
        tagcloudContainer.innerHTML = ''; // Clear the container
      }
    };
  }, []);

  return (
    <div className="skill">
      <div className="skill__main-container">
        <div className="skill__header" id="skill__heading">
          <h1>
            <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">S</span>
            <span data-aos="fade-down" data-aos-delay="200" data-aos-offset="200">K</span>
            <span data-aos="fade-down" data-aos-delay="400" data-aos-offset="200">I</span>
            <span data-aos="fade-down" data-aos-delay="600" data-aos-offset="200">L</span>
            <span data-aos="fade-down" data-aos-delay="800" data-aos-offset="200">L</span>
            <span data-aos="fade-down" data-aos-delay="1000" data-aos-offset="200">.</span>
          </h1>
        </div>
        <div className="skill__inner-container">
          <div className="skill__info">
            <div className="skill__details-container">
              <div className="skill__details">
                <h4>HTML / CSS</h4>
                <ul>
                  <li>
                    <span>HTML5, CSS3</span>
                  </li>
                  <li>
                    <span><b>Preprocessors:</b> SASS</span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>Python</h4>
              </div>
              <div className="skill__details">
                <h4>Wordpress</h4>
              </div>
              <div className="skill__details">
                <h4>JavaScript</h4>
                <ul>
                  <li>
                    <span><b>Frameworks & Libraries:</b> React JS, React Native</span>
                  </li>
                  <li>
                    <span>Node.js</span>
                  </li>
                  <li>
                    <span>jQuery</span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>Version Control Systems</h4>
                <ul>
                  <li>
                    <span>GIT</span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>E-Commerce</h4>
                <ul>
                  <li>
                    <span>Shopify</span>
                  </li>
                </ul>
              </div>
              <div className="skill__details">
                <h4>Server Side</h4>
                <ul>
                  <li><span>PHP</span></li>
                  <li><span>MySQL</span></li>
                  <li><span>Node.js</span></li>
                  <li><span>Express.js</span></li>
                  <li><span>MongoDB</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3D Text Cloud */}
          <div className="skill__cloud">
            <div className="tagcloud" data-aos="zoom-in-up" data-aos-offset="200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
