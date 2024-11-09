import styles from './Projects.module.scss';

const Projects = () => {
    return (
        <div className={styles.table}> 
            <h2 className={styles.title}>Ideias de projeto para seu negócio</h2>
            <section className={styles.Projects}>
                <div className={styles.cards}>
                    <h3 className={styles.titlecard}>Aplicativo mobile</h3>
                    <img src="001.png" alt="Imagem do projeto" className={styles.projectimg} />
                </div>
                <div className={styles.cards}>
                    <h3 className={styles.titlecard}>Site de vendas</h3>
                    <img src="003.png" alt="Imagem do projeto" className={styles.projectimg} />
                </div>
                <div className={styles.cards}>
                    <h3 className={styles.titlecard}>Sistema de gestão</h3>
                    <img src="002.png" alt="Imagem do projeto" className={styles.projectimg} />
                </div>
            </section>
        </div>
    );
};

export default Projects;
