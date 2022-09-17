import Script from 'next/script'
import { useEffect, useState, useRef } from 'react'
import styles from '../styles/loading.module.css'

const Loading = (children) => {
    const load = () => {
        console.log('loaded')
    }
    
    return(
        <div onLoad={load} className={styles.loading__container}>
            <div className={styles.content}>
                <h3>How did you hear about Duolingo</h3>
                <div className={styles.img}></div>

                <div className={styles.loading}>
                    <div id="loadRatio" className={styles.loader} styles={{width: `50%`}}></div>
                </div>
            </div>
        </div>
    )
}

export default Loading