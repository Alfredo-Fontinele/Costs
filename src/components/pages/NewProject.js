import styles from '../styles/NewProject.module.css'
import ProjectForm from '../projects/ProjectForm';
import { useNavigate } from 'react-router-dom';

function NewProject() {

    const history = useNavigate();

    function createPost(project) {

        // inicializate cost and services 
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project), // mandando os dados do projeto para o body
        })
        .then((resp) => resp.json())
        .then((data) => {
            history('/projects', { message: 'Projeto Criado com Sucesso!' })
        })
        .catch((err) => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;