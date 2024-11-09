import styles from './Devs.module.scss';

const Devs = () => {
    return (
        <div className={styles.devl}>
            <div className={styles.devp}>
         
                <img src="gimbra.jpg" alt="" className={styles.imgdev}/>
                <h2>Gabriel Bastos</h2>
                <h3 className={styles.area}>Desenvolvedor Front-End</h3>
                <br/>
                
                <p className={styles.skills}>Desenvolvedor e designer gráfico com foco nas tecnologias React, TypeScript, SCSS e mobile
                    <br/>
                    <a href="https://gabrielportfolio.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Confira meu curriculo
                    </a>
                </p>
            </div>
            <div className={styles.devp}>
              
                <img src="shizu.jpg" alt="" className={styles.imgdev} />
                <h2>Pedro Soares</h2>
                <h3 className={styles.area}>Desenvolvedor Back-End</h3>
                <br/>
                 <p className={styles.skills}>Desenvolvedor com foco em python e node, conhecimentos de segurança digital e designer gráfico
                    <br/>
                    <a href="https://so78073.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Confira meu curriculo
                    </a>
                </p>
                <br/>
            </div>
        </div>
    );
};

export default Devs;
