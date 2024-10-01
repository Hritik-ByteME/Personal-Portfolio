import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>J.K. Lakshmipat University , Jaipur</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;13/08/2022 - 31/07/2025</h2>
                        <p>Pursuing a Bachelor of Computer Applications (B.C.A) with a specialization in Computer Science Engineering from J.K. Lakshmipat University.</p>
                        <p>Key Coursework: Software Development, Data Structures, Web Development, Database Management Systems, and Mobile Application Development.</p>
                        <p>Projects: Developed a weather app and a duty management app as part of hands-on experience in software development.</p>
                        <p>Extracurricular Activities: Actively participated in coding competitions, tech workshops, and seminars to enhance practical knowledge and network with industry professionals.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation