import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faArrowLeft, faL} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/get.started.module.css'

const GetStarted = () => {
    let socialsEngaged = []
    const brandMediaAwareness = () => {
        document.getElementById('learning__duration').style.display = 'block'
        document.getElementById('social__outreach__medium').style.display = 'none'

    }

    let selectedduration;

    const styleSelectedBtn = (easy, reg, committed) => {
        document.getElementById("goal__duration__easy").style.background = easy
        document.getElementById("goal__duration__regular").style.background = reg
        document.getElementById("goal__duration__committed").style.background = committed

    }

    const styleSelectedPara = (elem1, elem01, elem2, elem02, elem3, elem03, color1, color2, color3) => {
        document.getElementById(elem1).style.color = color1
        document.getElementById(elem2).style.color = color2
        document.getElementById(elem3).style.color = color3

        document.getElementById(elem01).style.color = color1
        document.getElementById(elem02).style.color = color2
        document.getElementById(elem03).style.color = color3
    }
    
    const durationRadio = (a, b, c) => {
        let easyDuration = document.getElementById('radio__duration__easy')
        easyDuration.style.display = a
        let regualarDuration = document.getElementById('radio__duration__regular')
        regualarDuration.style.display = b
        let committedDuration = document.getElementById('radio__duration__committed')
        committedDuration.style.display = c
        
        if(a === 'block') {
            styleSelectedBtn('#D8B3EE', 'transparent', 'transparent')
            styleSelectedPara('etx1', 'etx2', 'rtx1', 'rtx2', 'ctx1', 'ctx2','#7D00C6', '#000', '#000' )
        }
        else if(b === 'block') {
            styleSelectedBtn('transparent', '#D8B3EE', 'transparent')
            styleSelectedPara('etx1', 'etx2', 'rtx1', 'rtx2', 'ctx1', 'ctx2','#000', '#7D00C6', '#000' )
        }
        else {
            styleSelectedBtn('transparent', 'transparent', '#D8B3EE')
            styleSelectedPara('etx1', 'etx2', 'rtx1', 'rtx2', 'ctx1', 'ctx2','#000', '#000', '#7D00C6' )
        }
    }
    const selectEasy = () => {
        durationRadio()
        durationRadio('block', 'none', 'none')

        selectedduration = 'Easy'
    }

    const selectRegular = () => {
        durationRadio('none', 'block', 'none')


        selectedduration = 'Regular'
    }

    const selectCommitted = () => {
        durationRadio('none', 'none', 'block')


        selectedduration = 'Committed'
    }

    const selectedDurationBtn = () => {
        document.getElementById('learning__duration').style.display = 'none'
        document.getElementById('difficulty__level').style.display = 'block'
    }

    const router = useRouter()
    const returnToHome = () => {
            router.push('/')                
    }
    const socialMediumCancelBtn = () =>  returnToHome()
    const lDurationCancelBtn = () => returnToHome()
    const levelCancelBtn = () => returnToHome()

    // select difficulty
    let difficultyLevel;
    const submitDifficultyLevelBtn = () => {
        document.getElementById('difficulty__level').style.display = 'none'
        document.getElementById("select__language").style.display = 'block'
        
    }

    // select language
    let selectedLanguage;
    const selectedLanguageStyle = (lang1, lang2, lang3) => {
        document.getElementById("hausa__lang").style.border = lang1
        document.getElementById("igbo__lang").style.border = lang2
        document.getElementById("yoruba__lang").style.border = lang3
    }

    const selectHausa = () => {
        selectedLanguageStyle('3px solid #7D00C6', 'none', 'none')

        selectedLanguage = 'HAUSA'
    }

    const selectIgbo = () => {
        selectedLanguageStyle('none', '3px solid #7D00C6', 'none')

        selectedLanguage = 'IGBO'
    }

    const selectYoruba = () => {
        selectedLanguageStyle('none', 'none', '3px solid #7D00C6')

        selectedLanguage = 'EDE YORUBA'
    }
    
    return(
        <div className={styles.get__started}>
            <div id="social__outreach__medium" className={styles.outreach__medium}>
                <div className={styles.heading}>
                    <h2>How did you hear about Duolingo?</h2>

                    <FontAwesomeIcon onClick={socialMediumCancelBtn} icon={faXmark} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 20px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                </div>

                <div className={styles.mediums}>
                    <div className={styles.m__top}>
                        <div className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Word of mouth</p>
                        </div>
                        <div className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Facebook</p>
                        </div>
                        <div className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className={styles.m__bottom}>
                        <div className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Blog</p>
                        </div>
                        <div className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Google search</p>
                        </div>
                        <div className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Others</p>
                        </div>
                    </div>
                </div>

                <button onClick={brandMediaAwareness} className={styles.submit__medium__btn}>Proceed</button>
            </div>

            {/* screen 2 */}
            <div id="learning__duration" className={`${styles['quest__container']}`} style={{display: 'none'}}>
                <div className={styles.heading__2}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 16px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                    <FontAwesomeIcon onClick={lDurationCancelBtn} icon={faXmark} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 20px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                </div>

                <div className={styles.content__container}>
                    <h3>Choose a learning goal</h3>

                    <div className={styles.goals}>
                        <div id="goal__duration__easy" onClick={selectEasy} className={styles.question__card}>
                            <div id="g__d__content" className={`${styles["content"]}`}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__duration__easy" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="etx1">Easy</p>
                                </div>
                                <div className={styles.period}>
                                    <p id="etx2">3 times weekly</p>
                                </div>
                            </div>
                        </div>

                        <div id="goal__duration__regular" onClick={selectRegular} className={styles.question__card}>
                            <div className={styles.content}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__duration__regular" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="rtx1">Regular</p>
                                </div>
                                <div className={styles.period}>
                                    <p id="rtx2">10 mins / day</p>
                                </div>
                            </div>
                        </div>

                        <div id="goal__duration__committed" onClick={selectCommitted} className={styles.question__card}>
                            <div className={styles.content}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__duration__committed" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="ctx1">Committed</p>
                                </div>
                                <div className={styles.period}>
                                    <p id="ctx2">20 mins / day</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={selectedDurationBtn} className={`${styles['submit__btn']}`}>Proceed</button>
                </div>
            </div>

            {/* screen 3 */}
            <div id="difficulty__level" className={styles.quest__container} style={{display: 'none'}}>
                <div className={styles.heading__2}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 16px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                    <FontAwesomeIcon onClick={levelCancelBtn} icon={faXmark} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 20px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                </div>

                <div className={styles.content__container}>
                    <h3>Choose difficulty level</h3>

                    <div className={styles.goals}>
                        <div id="goal__duration__easy" onClick={selectEasy} className={styles.question__card}>
                            <div id="g__d__content" className={`${styles["content"]}`}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__duration__easy" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="etx1">Easy</p>
                                </div>
                            </div>
                        </div>

                        <div id="goal__duration__regular" onClick={selectRegular} className={styles.question__card}>
                            <div className={styles.content}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__duration__regular" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="rtx1">Regular</p>
                                </div>
                            </div>
                        </div>

                        <div id="goal__duration__committed" onClick={selectCommitted} className={styles.question__card}>
                            <div className={styles.content}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__duration__committed" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="ctx1">Committed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={submitDifficultyLevelBtn} className={`${styles['submit__btn']}`}>Proceed</button>
                </div>
            </div>

            {/* screen 3 */}
            <div id="select__language" className={`${styles['quest__container']}, ${styles['lang__q__c']}`} style={{display: 'none'}}>
                <div className={styles.heading__2}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 16px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                    <FontAwesomeIcon onClick={lDurationCancelBtn} icon={faXmark} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 20px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                </div>

                <div className={styles.content__container}>
                    <h3>Choose language</h3>

                    <div className={styles.select__languages__container}>
                        <div onClick={selectHausa} className={styles.l__card}>
                            <div id="hausa__lang" className={`${styles['l__descr__img__container']}`}></div>
                            <p>Hausa</p>
                        </div>

                        <div onClick={selectIgbo} className={styles.l__card}>
                            <div id="igbo__lang" className={`${styles['l__descr__img__container']}`}></div>
                            <p>Igbo</p>
                        </div>

                        <div onClick={selectYoruba} className={styles.l__card}>
                            <div id="yoruba__lang" className={`${styles['l__descr__img__container']}`}></div>
                            <p>Ede Yoruba</p>
                        </div>
                    </div>

                    <div>
                        <div className={styles.speaker}></div>
                        <button onClick={selectedDurationBtn} className={`${styles['submit__btn']} ${styles['submit__selected__btn']}`}>Proceed</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GetStarted