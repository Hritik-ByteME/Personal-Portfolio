import React, { useRef  } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin, faGithub, faInstagram, faFacebook, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import '../../styles/Contact/Contact.scss';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission

        emailjs
            .sendForm('service_iea21gp', 'template_ceplocj', form.current, 'B8aQfNnZeN7OV6mPC')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    form.current.reset();  // Reset the form after successful submission

                    window.scrollTo({
                        top: 0, // Adjust this value based on your layout
                        behavior: 'smooth' // Smooth scroll animation
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact__header">
                <h1>
<span
    data-aos="fade-down"
    data-aos-delay="0"
    data-aos-offset="200"
>
    C
</span>
<span
    data-aos="fade-down"
    data-aos-delay="200"
    data-aos-offset="200"
>
    O
</span>
<span
    data-aos="fade-down"
    data-aos-delay="400"
    data-aos-offset="200"
>
    N
</span>
<span
    data-aos="fade-down"
    data-aos-delay="600"
    data-aos-offset="200"
>
    T
</span>
<span
    data-aos="fade-down"
    data-aos-delay="800"
    data-aos-offset="200"
>
    A
</span>
<span
    data-aos="fade-down"
    data-aos-delay="1000"
    data-aos-offset="200"
>
    C
</span>
<span
    data-aos="fade-down"
    data-aos-delay="1200"
    data-aos-offset="200"
>
    T
</span>
<span
    data-aos="fade-down"
    data-aos-delay="1400"
    data-aos-offset="200"
>
    .
</span>
</h1>
                </div>
                <div className="contact__container">
                    <div className="contact__details">
                        <div className="contact__form" data-aos="fade-up">
                            {/* The form should use onSubmit and reference form via useRef */}
                            <form ref={form} onSubmit={sendEmail}>
                                <p className="contact__form-group">
                                    <label htmlFor="name">Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                        placeholder="Enter name"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="email">Email: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Enter email"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="message">Concern: </label>
                                    <textarea
                                        name="message"
                                        cols="20"
                                        rows="5"
                                        placeholder="How can I help you ?"
                                    ></textarea>
                                </p>
                                <button type='submit' className="contact__send-btn">
                                    Send
                                </button>
                            </form>
                            
                        </div>
                    </div>
                    <div className="contact__info" data-aos="fade-up">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <div className="contact__info-details">
                            <ul>
                                <li> <FontAwesomeIcon icon={faLocationDot} size="2x" /><p><span>Address:&nbsp;&nbsp;</span>Shiddha Aashray, Jaipur (Raj.), 302026</p></li>
                                <li> <FontAwesomeIcon icon={faPhone} size="2x" /><p><span>Phone:</span>&nbsp;&nbsp;(+91) 967*****57</p></li>
                                <li> <FontAwesomeIcon icon={faEnvelope} size="2x" /><p><span>Email:&nbsp;&nbsp;</span>hritikroshan2292@gmail.com</p></li>
                                <li> <FontAwesomeIcon icon={faSquareCheck} size="2x" /><span>FREELANCE</span></li>
                            </ul>
                        </div>
                        <div className="contact__social">
                            <p className="contact__linkedin">
                                <a href="https://www.linkedin.com/in/hritik-roshan-b20b9624a" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                            </p>
                            <p className='contact__github'>
                                <a href="https://github.com/Hritik-ByteME" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            </p>
                            <p className="contact__instagram">
                                <a href="https://www.instagram.com/hriti.kgautam?igsh=MTVsNGU0aGNjeXRzaw==" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </p>
                            <p className="contact__facebook">
                                <a href="https://www.facebook.com/share/CqayyutFSq4zVXUa/?mibextid=qi2Omg" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </p>
                            <p className="contact__twitter">
                                <a href="https://x.com/DeepakK08947126?t=Fodb92chnqprPxGOvtmkYQ&s=09" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                            </p>
                            <p className='contact__twitter'>
                                <a href='https://www.ByteME-Digitals.netlify.app' rel='noopener noreferrer' target='_blank'>
                                    <button className='byteme-btn'>Visit ByteME</button>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
