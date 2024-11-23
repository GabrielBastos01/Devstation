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
                                <img src="https://img.freepik.com/free-vector/mobile-apps-concept-illustration_114360-690.jpg" alt="Aplicativo mobile" className={styles.cardImage} />
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Site de Vendas</h3>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/365/040/small_2x/GRAPHIC_DESIGN_SOFTWARE_3-01.jpg" alt="Site de vendas" className={styles.cardImage} />
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Sistema de Gestão</h3>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/578/714/small/web-analysis-programming-system-with-cloud-server-free-vector.jpg" alt="Sistema de gestão" className={styles.cardImage} />
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Design gráfico</h3>
                                <img src="https://unblast.com/wp-content/uploads/2020/05/Graphic-Design-Vector-Illustration.jpg" alt="Design gráfico" className={styles.cardImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
