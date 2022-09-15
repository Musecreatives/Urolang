import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <h2>Logo</h2>
            </div>

            <ul className="nav__links">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About us</a></Link></li>
                <li><Link href="/contact"><a>Contact us</a></Link></li>
            </ul>

            <div className="nav__btns">
                <button><Link href="#"><a>Log in</a></Link></button>
                <button><Link href="#"><a>Sign up</a></Link></button>
            </div>
        </nav>
    )
}

export default Navbar