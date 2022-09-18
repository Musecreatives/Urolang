import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/popup.module.css'

const Popup = (props) => {
    console.log(props.header)
    const closePopupOverlay = () => {
        document.getElementById('popup__body').style.display = 'none'
    }

    const closePopupX = () => {
        document.getElementById('popup__body').style.display = 'none'
    }
    
    return(
        <div id='popup__body' className={styles.popup__container}>
            <div onClick={closePopupOverlay} className={styles.bg__overlay}>
            </div>

            <div className={styles.popup__msg__container} style={{background: "#23B720"}}>
                <div className={styles.close__popup}>
                    <FontAwesomeIcon onClick={closePopupX} icon={faCircleXmark} style={{fontSize:"1.7rem" ,color: "#fff"}} />
                </div>

                <div className={styles.msg__container}>
                    <div className={styles.msg__icon}>
                        <FontAwesomeIcon icon={faCircleCheck} style={{fontSize: '5.5rem', color: "#fff"}} />
                    </div>
                    <h3>{props.header}</h3>
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export default Popup