import styles from './Projects.module.scss';
import { IonIcon } from '@ionic/react';
import { logoWhatsapp } from 'ionicons/icons';

const Projects = () => {
    return (
        <div className={styles.container}>
            {/* Div do WhatsApp acima */}
            <div className={styles.whatsapp}>
                <h2 className={styles.title}>Agendamento via WhatsApp</h2>
                {/* Link para WhatsApp */}
                <a 
                    href="https://wa.me/5534996822440" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.whatsappLink}
                >
                    <IonIcon icon={logoWhatsapp} size="large" className={styles.icon} />
                    <span className={styles.whatsappText}>Agende Agora</span>
                </a>
            </div>

            <div className={styles.phone}>
                <div className={styles.mainWrapper}>
                    <div className={styles.content}>
                        <div className={styles.headerContainer}>
                            <h2 className={styles.title}>Ideias de Projeto para seu Negócio</h2>
                        </div>
                        <div className={styles.appsContainer}>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Aplicativo Mobile</h3>
                                <img src="001.png" alt="Aplicativo mobile" className={styles.cardImage} />
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Site de Vendas</h3>
                                <img src="003.png" alt="Site de vendas" className={styles.cardImage} />
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Sistema de Gestão</h3>
                                <img src="002.png" alt="Sistema de gestão" className={styles.cardImage} />
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Design gráfico</h3>
                                <img src="002.png" alt="Design gráfico" className={styles.cardImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
