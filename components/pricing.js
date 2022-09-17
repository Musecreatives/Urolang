import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMarker} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/pricing.plan.module.css'

const PricingPlan = () => {
    let monthly = true;
    let yearly = false;
    const switchPlans = () => {
        const btn = document.getElementById('pricingBtn')

        if(monthly === true) {
            btn.style.justifyContent = 'right'
            monthly = false
            yearly = true

            document.getElementById('h__yearly').style.color = "#7D00C6"
            document.getElementById('h__monthly').style.color = "#9A979F"
        }
        else if(yearly === true) {
            btn.style.justifyContent = 'left'
            monthly = true
            yearly = false

            document.getElementById('h__monthly').style.color = "#7D00C6"
            document.getElementById('h__yearly').style.color = "#9A979F"
        }

        console.log('working')
    }
    
    return(
        <div>
            <div className={styles.price__header}>
                <h3>Our Pricing</h3>
                <h2>We prepare a very reasonable pricing pack for you</h2>

                <div className={styles.monthly__year__price__btn}>
                    <h4 id="h__monthly" style={{color: "#7D00C6" }}>Billed Monthly</h4>
                    <div className={styles.price__btn} id="pricingBtn" onClick={switchPlans}>
                        <div className={styles.btn__ctrl}></div>
                    </div>
                    <h4 id="h__yearly">Billed Yearly (save 15%)</h4>
                </div>
            </div>

            <div className={styles.plan__description}>
                <div className={styles.card}>
                    <div className={styles.c__heading}>
                        <h2>Free</h2>
                        <h2 style={{marginTop: '.35em'}}>N0</h2>
                        <p>Description of the tier list will go here, copy should be concise and impactful</p>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.card__btn}>
                        <button id="try__for__free__btn" style={{backgroundColor: 'transparent', border: '2px solid #7D00C6', color: '#7D00C6'}}>Try for free</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.c__heading}>
                        <h2>Pro</h2>
                        <div style={{display: 'flex', alignItems: 'baseline', marginTop: '.6em'}}>
                            <h2>N3,500</h2>
                            <small style={{marginLeft: '8px'}}>/ month</small>
                        </div>
                        <p>Description of the tier list will go here, copy should be concise and impactful</p>
                    </div>

                    <div>
                        <p style={{color: '#8C94A3', fontSize: '1.1rem', marginTop: '1.5em'}}>Everything in the free plan, plus</p>
                        
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.card__btn}>
                        <button id="subscribe__now__btn" style={{backgroundColor: '#7D00C6', color: '#fff'}}>Subscribe now</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.c__heading}>
                        <h2>Enterprise</h2>
                        <div style={{display: 'flex', alignItems: 'baseline', marginTop: '.6em'}}>
                            <h2>Custom</h2>
                            <small style={{marginLeft: '8px'}}> yearly billing only</small>
                        </div>
                        <p>Description of the tier list will go here, copy should be concise and impactful</p>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMarker} style={{backgroundColor: '#F4EBFF', color: '#7D00C6', padding: '6px 7px', borderRadius: '50%'}} />
                                <p>Start Learning</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.card__btn}>
                        <button id="contact__sales__btn" style={{backgroundColor: 'transparent', border: '2px solid #7D00C6', color: '#7D00C6'}}>Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan