import { toast } from 'sonner'
import styles from './text.module.css'

export const Text = ({ h1, paragraph1, paragraph2, paragraph3, h2, lang }) => {
    
    const handleOnClick = (lang) => {
        const messages = {
            pt: 'Email copiado para a área de transferência!',
            eng: 'Email has been copied to clipboard!',
            es: '¡Correo copiado al portapapeles!'
        }

        navigator.clipboard.writeText('yujievandro@gmail.com')
            .then(() => {
                toast.success(messages[lang] || messages.pt)
            })
            .catch(() => {
                toast.error('Erro ao copiar o email 😢')
            })
    }

    return (
        <div className={styles.containerText}>
            <div>
                <h1 className={styles.h1}>{h1}</h1>
            </div>

            <div className={styles.containerP}>
                <p className={styles.p}>{paragraph1}</p>
                <p className={styles.p}>{paragraph2}</p>
                <p className={styles.p}>{paragraph3}</p>
            </div>

            <div className={styles.containerContact}>
                <h2>{h2}</h2>

                <a onClick={() => handleOnClick(lang)} className={styles.a}>
                    <img src="/img/Mail.png" alt="Mail" />
                </a>

                <a href="#" target="_blank" className={styles.a}>
                    <img src="/img/Linkedin.png" alt="Linkedin" />
                </a>

                <a href="https://github.com/EvandroKaibara" target="_blank" className={styles.a}>
                    <img src="/img/Github.png" alt="GitHub" />
                </a>
            </div>
        </div>
    )
}
