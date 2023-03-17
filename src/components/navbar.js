import style from "../styles/navbar.module.scss"
export default function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <img className={style.logo} src="https://th.bing.com/th?id=OSK.e1e6cb8955788940727661c6b8e79dc4&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM" alt="Logo" />
                <h5>Music</h5>
                <h5>Podcasts</h5>
                <h5>Go Pro</h5>
            </div>
            <div className={style.center}>
                <input className={style.search} type="text" placeholder="Search" />
            </div>
            <div className={style.right}>
                <h5>Login</h5>
                <h5>Sign Up</h5>
            </div>
            
        </div>
    )
}