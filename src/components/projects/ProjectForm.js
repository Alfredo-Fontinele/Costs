import styles from "./ProjectForm.module.css";
import Select from "../form/Select";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira o Nome do Projeto"
            />
            <Input 
                type="number" 
                text="Orçamento do Projeto" 
                name="budget" 
                placeholder="Insira o Orçamento Total R$"
            />
            <Select name="category_id" text="Selecione a Categoria"/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm;