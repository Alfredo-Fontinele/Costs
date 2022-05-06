import styles from '../styles/Home.module.css';
import savings from '../../imgs/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a Gerenciar Seus Projetos Agora Mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="Logo"/>
        </section>
    )
}

export default Home;