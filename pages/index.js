import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/nav'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import PricingPlan from '../components/pricing'

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Navbar />

        <div className={styles.header__title}>
          <h1>A new different way to <br /> Learn Your African Dialect</h1>
          <p>Get familiar with diverse African languages and claim back your heritage</p>
          <button><Link href="/get-started"><a>Start Learning</a></Link></button>
        </div>

        <section className={styles.about__urolang}>
          <div className={styles.how__to__start}>
            <div className={styles.left__side}>
              image
            </div>
            <div className={styles.right__side}>
              <h3>How to start</h3>
              <h2>Simple steps to create account and start learning</h2>
              <p>A lesson or class is structured period of time where learning is intended to occur. It involves one or more students being taught</p>
              <ul>
                <li>
                <FontAwesomeIcon icon={faUser} style={{backgroundColor: '#D8B3EE', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                  <p>Create Account</p>
                </li>

                <li>
                <FontAwesomeIcon icon={faUser} style={{backgroundColor: '#D8B3EE', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                  <p>Purchase Lessons</p>
                </li>

                <li>
                <FontAwesomeIcon icon={faUser} style={{backgroundColor: '#D8B3EE', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                  <p>Start Learning</p>
                </li>
              </ul>
              <div className={styles.dbl__btn}>
                <button className={styles.btn1}>
                  <Link href="#"><a>Start Learning</a></Link>
                </button>

                <button className={styles.btn2}>
                  <FontAwesomeIcon icon={faCirclePlay} style={{color: '#ffb000'}} />
                  <Link href="#"><a>Watch Video Tutorials</a></Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

        <div className={styles.setBgWhite}></div>

        <div className={styles.setBgColorGrad}>
          <section className={styles.about__lang}>
            <div className={styles.left__side}>
              <h3>About Languages?</h3>
              <h2>What Kinds of Language Are offered on our platform</h2>
              <p>Take advantage of out bite-sized lessons so you can study at a time that's best for you. You'll see exercises at the right duration for you and can achieve certificate when you pass each duration</p>
              <button>
                <Link href="#"><a>Explore languages</a></Link>
              </button>
            </div>
            <div className={styles.right__side}>
              {/* image here */}
            </div>
          </section>
          
          <section className={styles.pricing__plan__container}>
            <div className={styles.content}>
              <PricingPlan />
            </div>
          </section>

          <div className={styles.footer__container}>
            <div className={styles.newsletter__container}>
              <div className={styles.content}>
                <div id="newsletter__illustration"></div>

                <form>
                  <label>Join 3000+ more people on our newsletter</label>
                  <div>
                    <input type="email" name="newsletter" id="newletter__email" placeholder="Your work email address" required/>
                    <input type="button" value="Submit"/>
                  </div>
                </form>
              </div>
            </div>
            <Footer /> 
          </div>
        </div>
    </div>
  )
}
