import styles from '../styles/forgotPassword.module.css'

export default function forgotPassword() {
    return (
        <div>
            <div className={styles.header__title}>
            <h1>Forgot Password</h1>
            <p>Enter your email address and we'll send you a link to reset your password</p>
            </div>
        </div>
    )
};