import styles from "./furrfreebutton.module.css";


interface FurrfreeButtonProps {
    link: string
}

export default function FurrfreeButton({link}: FurrfreeButtonProps) {
    return (
        <button className={styles.gradientBackground} onClick={() => window.open(link)}>
            <span className={styles.test}>Unirse</span>
        </button>
    );
}
