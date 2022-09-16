import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faDribbble, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import styles from '../styles/footer.module.css'

const Footer = () => {
    
    return(
        <footer className={styles.footer}>
            <div className={styles.links__container}>
                <div style={{textAlign: 'left'}} className={styles.property}>
                    <div>
                        logo
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quam consequatur est? Tempore sit saepe labore? Ipsa repellat dolorum inventore
                    </p>
                    <div style={{marginTop: '2em'}}>
                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} style={{backgroundColor: '#424242', color: '#e2e3e4', padding: '4px 5px', borderRadius: '50%'}} />
                        </a>

                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faDribbble} style={{backgroundColor: '#424242', color: '#e2e3e4', padding: '4px 5px', borderRadius: '50%', marginLeft: '.7em'}}/>
                        </a>
                        
                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} style={{backgroundColor: '#424242', color: '#e2e3e4', padding: '4px 5px', borderRadius: '50%', marginLeft: '.7em'}}/>
                        </a>

                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} style={{backgroundColor: '#424242', color: '#e2e3e4', padding: '5px 5px', borderRadius: '50%', marginLeft: '.7em'}}/>
                        </a>
                    </div>
                </div>

                <div className={styles.property}>
                    <p className={styles.title}>Quick Links</p>

                    <ul className={styles.footer__links}>
                        <li>
                            <Link href="#">
                                <a>Home</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>About Us</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>Contact Us</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>Careers</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.property}>
                    <p className={styles.title}>Available Languages</p>

                    <ul className={styles.footer__links}>
                        <li>
                            <Link href="#">
                                <a>Yoruba</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>Ohorobo</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>Contact Us</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>Hausa</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>Igbo</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                <a>Ijaw</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.property}>
                    <p className={styles.title}>Reach us</p>

                    <ul className={styles.footer__links}>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} style={{color: '#D6B1FF', padding: '2px 3px', borderRadius: '50%'}} />
                            <p>hello@urolang.com</p>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faInstagram} style={{color: '#D6B1FF', padding: '2px 3px', borderRadius: '50%'}} />
                            <p>+234 3829 83749</p>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faInstagram} style={{color: '#D6B1FF', padding: '2px 3px', borderRadius: '50%'}} />
                            <p>234, Ikeja City mall, Aluasa, Lagos Nigeria</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>2022 Urolang. All rights reserved</div>
        </footer>
    )
}

export default Footer