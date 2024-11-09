import styles from './Section.module.scss';

const Section = () =>{
    return(
        <section className={styles.secbackground}>
        <div className={styles.dev}>
            <h1 className={styles.title}>Devstation inovação e tecnologia para pequenos e médios empreendimentos</h1>
            <p className={styles.text}>Na DevStation, acreditamos que a tecnologia deve ser acessível a todos. Oferecemos soluções personalizadas, desde a criação de sites e aplicativos de venda até sistemas de gestão, ajudando você a levar seu negócio para o próximo nível.</p>
        </div>
        </section>
    )
};
export default Section