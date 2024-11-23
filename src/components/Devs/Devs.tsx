import styles from './Devs.module.scss';

const Devs = () => {
  return (
    <div className={styles.devl}>
      <div className={styles.devp}>
        <img src="https://scontent.fudi1-1.fna.fbcdn.net/v/t1.6435-9/121989666_390434001965416_2421287503626529474_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4WgauPsMNHUQ7kNvgGyuJR8&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=A74Uh3HnhmHemDAwlVYfLL3&oh=00_AYAz8c-9e3Nfzc-7bSpuMlUhM43sTt54xcYnGOJuAvDycg&oe=6769E911" alt="Gabriel Bastos" className={styles.imgdev} />
        <h2>Gabriel Bastos</h2>
        <h3 className={styles.area}>Desenvolvedor Front-End</h3>
        <br />
        <p className={styles.skills}>
          Desenvolvedor e designer gráfico com foco nas tecnologias React, TypeScript, SCSS e mobile
          <br />
          <a href="https://gabrielbastos01.github.io/profile/index.html" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Confira meu currículo
          </a>
        </p>
      </div>
      <div className={styles.devp}>
        <img src="https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/441923168_1655481648342954_2456259017838727558_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=oXY6AYZ7RCAQ7kNvgEaJHFV&_nc_zt=23&_nc_ht=scontent.fudi1-2.fna&_nc_gid=AA9IJmmFHC4kpx9Rl2nsAiB&oh=00_AYA_x6WPNo2T5M9W1N6p34Wtfysc6Opciug_Q75TxSvOGQ&oe=674828F1" alt="Pedro Soares" className={styles.imgdev} />
        <h2>Pedro Soares</h2>
        <h3 className={styles.area}>Desenvolvedor Back-End</h3>
        <br />
        <p className={styles.skills}>
          Desenvolvedor com foco em python e node, conhecimentos de segurança digital e designer gráfico
          <br />
          <a href="https://so78073.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Confira meu currículo
          </a>
        </p>
        <br />
      </div>
    </div>
  );
};

export default Devs;
