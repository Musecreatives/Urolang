import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faArrowLeft, faL} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/get.started.module.css'

const GetStarted = () => {
    const onActive = "2.4px solid #7D00C6"
    const onDeactive = "3px solid #D9D9D9"

    const router = useRouter()

    let socialsEngaged = []
    let wrdOfMouthClicked = false
    let fbClicked = false
    let instaClicked = false
    let blogClicked = false
    let gsClicked = false
    let othersClicked = false



    const selectedMediumStyle1 = (sm, style, social) => {
        document.getElementById(sm).style.border = style

        socialsEngaged.push(social)
    }

    const selectedMediumStyle2 = (sm, style, social) => {
        document.getElementById(sm).style.border = style

        socialsEngaged.pop(social)
    }

    const wrdOfMouthMedium = () => {

        if(wrdOfMouthClicked === false) {
            selectedMediumStyle1("m__wrd", onActive, "Word of mouth")
            wrdOfMouthClicked = true
        }
        else {
            selectedMediumStyle2("m__wrd", onDeactive, "Word of mouth")
            wrdOfMouthClicked = false
        }
    }
    const facebookMedium = () => {
        if(fbClicked === false) {
            selectedMediumStyle1("m__fb", onActive, "Facebook")
            fbClicked = true
        }
        else {
            selectedMediumStyle2("m__fb", onDeactive, "Facebook")
            fbClicked = false
        }
    }
    const instagramMedium = () => {
        if(instaClicked === false) {
            selectedMediumStyle1("m__instagram", onActive, "Instagram")
            instaClicked = true
        }
        else {
            selectedMediumStyle2("m__instagram", onDeactive, "Instagram")
            instaClicked = false
        }
    }
    const blogMedium = () => {
        if(blogClicked === false) {
            selectedMediumStyle1("m__blog", onActive, "Blog")
            blogClicked = true
        }
        else {
            selectedMediumStyle2("m__blog", onDeactive, "Blog")
            blogClicked = false
        }
    }
    const googleSearchMedium = () => {
        if(gsClicked === false) {
            selectedMediumStyle1("m__gs", onActive, "Google search")
            gsClicked = true
        }
        else {
            selectedMediumStyle2("m__gs", onDeactive, "Google search")
            gsClicked = false
        }
    }
    const otherMedium = () => {
        if(othersClicked === false) {
            selectedMediumStyle1("m__others", onActive, "Others")
            othersClicked = true
        }
        else {
            selectedMediumStyle2("m__others", onDeactive, "Others")
            othersClicked = false
        }
    }
    
    const brandMediaAwarenessBtn = () => {
        if(
            wrdOfMouthClicked !== true &&
            fbClicked !== true &&
            instaClicked !== true &&
            blogClicked !== true &&
            gsClicked !== true &&
            othersClicked !== true
        ) {
            alert('Please select a medium to proceed')
            return
        }

        document.getElementById('learning__duration').style.display = 'block'
        document.getElementById('social__outreach__medium').style.display = 'none'

    }

    let selectedduration = null;

    const styleSelectedBtn = (btn1, btn2, btn3, style1, style2, style3) => {
        document.getElementById(btn1).style.background = style1
        document.getElementById(btn2).style.background = style2
        document.getElementById(btn3).style.background = style3

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
            styleSelectedBtn('goal__duration__easy', 'goal__duration__regular', 'goal__duration__committed', '#D8B3EE', 'transparent', 'transparent')
            styleSelectedPara('etx1', 'etx2', 'rtx1', 'rtx2', 'ctx1', 'ctx2','#7D00C6', '#000', '#000' )
        }
        else if(b === 'block') {
            styleSelectedBtn('goal__duration__easy', 'goal__duration__regular', 'goal__duration__committed', 'transparent', '#D8B3EE', 'transparent')
            styleSelectedPara('etx1', 'etx2', 'rtx1', 'rtx2', 'ctx1', 'ctx2','#000', '#7D00C6', '#000' )
        }
        else {
            styleSelectedBtn('goal__duration__easy', 'goal__duration__regular', 'goal__duration__committed', 'transparent', 'transparent', '#D8B3EE')
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

    const backToSocialMediumBtn = () => {
        document.getElementById('social__outreach__medium').style.display = 'block'
        document.getElementById('difficulty__level').style.display = 'none'
        document.getElementById("select__language").style.display = 'none'
        document.getElementById('learning__duration').style.display = 'none'
        document.getElementById('difficulty__level').style.display = 'none'
    }

    const selectedDurationBtn = () => {
        if(selectedduration === null) {
            alert('Please select an option to  proceed')
            return
        }
        
        document.getElementById('learning__duration').style.display = 'none'
        document.getElementById('difficulty__level').style.display = 'block'
        document.getElementById('social__outreach__medium').style.display = 'none'

    }

    const returnToHome = () => {
            router.push('/')                
    }
    const socialMediumCancelBtn = () =>  returnToHome()
    const lDurationCancelBtn = () => returnToHome()
    const levelCancelBtn = () => returnToHome()

    // select difficulty
    let difficultyLevel = null
    
    const styleSelectedParaLevel = (elem1,  elem2, elem3, color1, color2, color3) => {
        document.getElementById(elem1).style.color = color1
        document.getElementById(elem2).style.color = color2
        document.getElementById(elem3).style.color = color3
    }

    const difficultyLevelRadio = (a, b, c) => {
        let easyDuration = document.getElementById('radio__beginner')
        easyDuration.style.display = a
        let regualarDuration = document.getElementById('radio__intermediate')
        regualarDuration.style.display = b
        let committedDuration = document.getElementById('radio__expert')
        committedDuration.style.display = c

        if(a === 'block') {
            styleSelectedParaLevel('detx1', 'drtx1', 'dctx1', '#7D00C6', '#000', '#000' )
        }
        else if(b === 'block') {
            styleSelectedParaLevel('detx1', 'drtx1', 'dctx1', '#000', '#7D00C6', '#000' )
        }
        else {
            styleSelectedParaLevel('detx1', 'drtx1', 'dctx1', '#000', '#000', '#7D00C6' )
        }

    }
    
    
    const selectBeginner = () => {
        styleSelectedBtn('beginner__level', 'intermediate__level', 'expert__level', '#D8B3EE', 'transparent', 'transparent')
        difficultyLevelRadio("block", "none", "none")

        difficultyLevel = "BEGINNER"
    }

    const selectIntermediate = () => {
        styleSelectedBtn('beginner__level', 'intermediate__level', 'expert__level', 'transparent', '#D8B3EE', 'transparent')
        difficultyLevelRadio("none", "block", "none")

        difficultyLevel = "INTERMEDIATE"
    }

    const selectExpert = () => {
        styleSelectedBtn('beginner__level', 'intermediate__level', 'expert__level', 'transparent', 'transparent', '#D8B3EE')
        difficultyLevelRadio("none", "none", "block")

        difficultyLevel = "EXPERT"
    }

    const submitDifficultyLevelBtn = () => {
        if(difficultyLevel === null) {
            alert("Please select an option to proceed")
            return
        }
        
        document.getElementById('difficulty__level').style.display = 'none'
        document.getElementById("select__language").style.display = 'block'
        document.getElementById('learning__duration').style.display = 'none'
        document.getElementById('difficulty__level').style.display = 'none'
        
    }

    const backToDuration = () => {
        document.getElementById('social__outreach__medium').style.display = 'none'
        document.getElementById('difficulty__level').style.display = 'none'
        document.getElementById("select__language").style.display = 'none'
        document.getElementById('learning__duration').style.display = 'block'
        document.getElementById('difficulty__level').style.display = 'none'
    }

    // select language
    let selectedLanguage = null;
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
    
    const selectedLangBtn = () => {
        if(selectedLanguage === null) {
            alert("Please select a language to continue")
            return
        }

        document.getElementById('difficulty__level').style.display = 'none'
        document.getElementById('learning__duration').style.display = 'none'
        document.getElementById('social__outreach__medium').style.display = 'none'

        
        router.push('/quick-quiz') 
    }

    const backDifficultyLevel = () => {
        document.getElementById('social__outreach__medium').style.display = 'none'
        document.getElementById('difficulty__level').style.display = 'none'
        document.getElementById("select__language").style.display = 'none'
        document.getElementById('learning__duration').style.display = 'none'
        document.getElementById('difficulty__level').style.display = 'block'
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
                        <div id='m__wrd' onClick={wrdOfMouthMedium} className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Word of mouth</p>
                        </div>
                        <div id='m__fb' onClick={facebookMedium} className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Facebook</p>
                        </div>
                        <div id='m__instagram' onClick={instagramMedium} className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className={styles.m__bottom}>
                        <div id='m__blog' onClick={blogMedium} className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Blog</p>
                        </div>
                        <div id='m__gs' onClick={googleSearchMedium} className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Google search</p>
                        </div>
                        <div id='m__others' onClick={otherMedium} className={styles.m__card}>
                            <div className={styles.m__icon}></div>
                            <p>Others</p>
                        </div>
                    </div>
                </div>

                <button onClick={brandMediaAwarenessBtn} className={styles.submit__medium__btn}>Proceed</button>
            </div>

            {/* screen 2 */}
            <div id="learning__duration" className={`${styles['quest__container']}`} style={{display: 'none'}}>
                <div className={styles.heading__2}>
                    <FontAwesomeIcon onClick={backToSocialMediumBtn} icon={faArrowLeft} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 16px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
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
                    <FontAwesomeIcon onClick={backToDuration} icon={faArrowLeft} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 16px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                    <FontAwesomeIcon onClick={levelCancelBtn} icon={faXmark} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 20px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
                </div>

                <div className={styles.content__container}>
                    <h3>Choose difficulty level</h3>

                    <div className={styles.goals}>
                        <div id="beginner__level" onClick={selectBeginner} className={styles.question__card}>
                            <div id="g__d__content" className={`${styles["content"]}`}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__beginner" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="detx1">Beginner</p>
                                </div>
                            </div>
                        </div>

                        <div id="intermediate__level" onClick={selectIntermediate} className={styles.question__card}>
                            <div className={styles.content}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__intermediate" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="drtx1">Intermediate</p>
                                </div>
                            </div>
                        </div>

                        <div id="expert__level" onClick={selectExpert} className={styles.question__card}>
                            <div className={styles.content}>
                                <div className={styles.duration}>
                                    <div className={styles.custom__radio}>
                                        <div id="radio__expert" className={`${styles["radio__btn"]} ${styles["radio__visibility"]}`}></div>
                                    </div>
                                    <p id="dctx1">Expert</p>
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
                    <FontAwesomeIcon onClick={backDifficultyLevel} icon={faArrowLeft} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 16px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer"}}/>
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
                        <button onClick={selectedLangBtn} className={`${styles['submit__btn']} ${styles['submit__selected__btn']}`}>Proceed</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GetStarted