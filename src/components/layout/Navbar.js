import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../imgs/costs_logo.png'

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Logo Costs" title="Costs"/>
                </Link>
                <h1>Costs | Plataforma</h1>
                <div className={styles.menu_mobile}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                    <li className={styles.item}><Link to="/company">Empresa</Link></li> 
                    <li className={styles.item}><Link to="/newproject">Novo Projeto</Link></li>
                </ul>

            </Container>
        </nav>
    )
}

export default Navbar;