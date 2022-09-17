import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faArrowLeft, faL} from '@fortawesome/free-solid-svg-icons'
import Loading from '../components/loading'
import styles from '../styles/quick.quiz.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    const data = await res.json()

    return {
        props: {quizData: data}
    }

}

const QuickQuiz = ({quizData}) => {
    const manualLoadTime = 10;
    const [loading, setLoading] = useState(false)
    const [quiz, setQuiz] = useState(null)

    
    return(
        <div className={styles.quick__quiz__container}>
            {
                quizData.map(quizQuest => {
                    <div key={quizQuest.id}>
                        {console.log(quizQuest)}
                    </div>
                })
            }
        </div>
    )
}

export default QuickQuiz