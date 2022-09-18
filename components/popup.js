import styles from '../styles/popup.module.css'

const Popup = () => {
    return(
        <div>
            <div className='bg__overlay'>
                <div className='popup__msg__container'>
                    <div className={styles.close__popup}></div>

                    <div className={styles.msg__container}>
                        <div className={styles.msg__icon}></div>
                        <h3>Correct Answer</h3>
                        <p>You are a genius</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup