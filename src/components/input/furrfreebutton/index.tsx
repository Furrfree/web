import styles from "./furrfreebutton.module.css";

interface FurrfreeButtonProps {
    link: string;
    text: string;
    openInNewTab?: boolean;
}

export default function FurrfreeButton({text, link, openInNewTab = false}: FurrfreeButtonProps) {
    const handleClick = () => {
        window.open(link, openInNewTab ? "_blank" : "_self");
    };

    return (
        <button className={styles.gradientBackground} onClick={handleClick}>
            <span className={styles.test}>{text}</span>
        </button>
    );
}