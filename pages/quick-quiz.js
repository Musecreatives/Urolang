import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faArrowLeft, faL} from '@fortawesome/free-solid-svg-icons'
import Loading from '../components/loading'
import styles from '../styles/quick.quiz.module.css'

const QuickQuiz = () => {
    let currentQuestion = 0;
    
    const manualLoadTime = 10;
    const [loading, setLoading] = useState(false)
    const [quiz, setQuiz] = useState(null)

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Musecreatives/Urolang/quizEasy')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setQuiz(data)
        })
    },[])

    const skipQuestion = () => {
        currentQuestion++

        if(currentQuestion > 2) {
            currentQuestion = 0
        }

        document.getElementById('question').textContent = quiz[currentQuestion].quest
        document.getElementById('optA').textContent = quiz[currentQuestion].optA
        document.getElementById('optB').textContent = quiz[currentQuestion].optB
        document.getElementById('optC').textContent = quiz[currentQuestion].optC
    }

    let selectedAnswer;
    
    const submitQuestion = () => {}
    
    return(
        <div className={styles.quick__quiz__container}>
            {
                quiz === null ?
                <Loading>
                    {manualLoadTime}
                </Loading>

                :
                <div key={quiz[currentQuestion].id}>
                    <div className={styles.quest__cont}>
                        <div className={styles.heading}>
                            <div></div>
                            <h3 id="question" className={styles.question}>{quiz[currentQuestion].quest}</h3>
                            <FontAwesomeIcon icon={faXmark} style={{backgroundColor: "#D9D9D9", color: "#9A9A9A", padding: "15px 20px", fontSize: '1.9rem', borderRadius: "50%", cursor: "pointer", textAlign: 'right'}}/>
                        </div>

                        <div className={styles.content}>

                            <div className={styles.select__option__container}>
                                <div className={styles.option__card}>
                                    <div className={`${styles['option__rep__img']}`} value={quiz[currentQuestion].optA}></div>
                                    <p id="optA" className={styles.option}>{quiz[currentQuestion].optA}</p>
                                </div>

                                <div className={styles.option__card}>
                                    <div className={`${styles['option__rep__img']}`}></div>
                                    <p id="optB" className={styles.option}>{quiz[currentQuestion].optB}</p>
                                </div>

                                <div className={styles.option__card}>
                                    <div className={`${styles['option__rep__img']}`}></div>
                                    <p id="optC" className={styles.option}>{quiz[currentQuestion].optC}</p>
                                </div>
                            </div>

                            <div className={styles.dlb__btn}>
                                <button onClick={skipQuestion} className={`${styles['skip__btn']} ${styles['submit__selected__btn']}`}>Skip</button>
                                <button onClick={submitQuestion} className={`${styles['submit__btn']} ${styles['submit__selected__btn']}`}>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default QuickQuiz