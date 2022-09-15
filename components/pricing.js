import styles from '../styles/pricing.plan.module.css'

const PricingPlan = () => {
    const switchPlans = () => {
        let monthly = true;
        let yearly = false;

        if(monthly === true) {
            styles.monthly__year__price__btn.style.justContent = 'right'
            monthly = false
            yearly = true
        }
        else if(yearly === true) {
            styles.monthly__year__price__btn.style.justContent = 'left'
            monthly = true
            yearly = false
        }

        console.log('working')
    }
    
    return(
        <div>
            <div className={styles.price__header}>
                <h3>Our Pricing</h3>
                <h2>We prepare a very reasonable pricing pack for you</h2>

                <div className={styles.monthly__year__price__btn}>
                    <h4>Billed Monthly</h4>
                    <div className={styles.btn} onClick={switchPlans}>
                        <div className={styles.btn__ctrl}></div>
                    </div>
                    <h4>Billed Yearly (save 15%)</h4>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan