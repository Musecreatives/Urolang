import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faArrowLeft, faL} from '@fortawesome/free-solid-svg-icons'
import Loading from '../components/loading'
import styles from '../styles/quick.quiz.module.css'

const QuickQuiz = () => {
    const manualLoadTime = 10;
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    
    return(
        <div className={styles.quick__quiz__container}>
            {
                loading?
                <Loading>
                    {manualLoadTime}
                </Loading>

                :

                <div className={`${styles['question__wrapper']}`}>
                    <div className={styles.quest__cont}>
                        <div className={styles.heading}>
                            <div></div>
                            <h3 className={styles.question}>Choose hello more ques language</h3>
                            <FontAwesomeIcon icon={faXmark} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 20px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer", textAlign: 'right'}}/>
                        </div>

                        <div className={styles.content}>

                            <div className={styles.select__option__container}>
                                <div className={styles.option__card}>
                                    <div id="hausa__lang" className={`${styles['option__rep__img']}`}></div>
                                    <p className={styles.option}>Spoon</p>
                                </div>

                                <div className={styles.option__card}>
                                    <div id="igbo__lang" className={`${styles['option__rep__img']}`}></div>
                                    <p className={styles.option}>Pot</p>
                                </div>

                                <div className={styles.option__card}>
                                    <div id="yoruba__lang" className={`${styles['option__rep__img']}`}></div>
                                    <p className={styles.option}>Bag</p>
                                </div>
                            </div>

                            <div className={styles.dlb__btn}>
                                <button className={`${styles['skip__btn']} ${styles['submit__selected__btn']}`}>Skip</button>
                                <button className={`${styles['submit__btn']} ${styles['submit__selected__btn']}`}>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default QuickQuiz