import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>Fintech Digitals Pvt Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;05/05/2024 - 26/07/2024</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Developing multiple highly responsive and adaptive website using React and Vue</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Developing new user-facing features</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Building reusable code</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Forming new ideas</span>
                                    </li>
                                </ul>
                            </div>

                            {/* You can put this repeated code as a child component similar to internship.js  */}
                            <div className="experience__box">
                                <h2>DEV Creations Pvt Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/05/2023 - 01/08/2023</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Collaborating with designers to implement responsive designs and optimize user experience.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Conducting code reviews to maintain code quality</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>Troubleshooting and debugging applications</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800' data-aos-offset="-5000">
                                        <span>Collaborating with backend developers to integrate APIs and enhance functionality.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>SunRise Publication Pvt Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;11/04/2024 - 28/08/2024</h3>
                                <ul>
                                    <p>Responsible for -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Production Oversight</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Quality Control</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>Team Leadership</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800' data-aos-offset="-5000">
                                        <span>Process Improvement</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience