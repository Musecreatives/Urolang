import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faDribbble, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    
    return(
        <footer>
            <div>
                <div>
                    <div>
                        logo
                    </div>
                    <p></p>
                    <div>
                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} style={{backgroundColor: '#191919', color: '#fff', padding: '2px 3px', borderRadius: '50%'}} />
                        </a>

                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faDribbble} />
                        </a>
                        
                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>

                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer