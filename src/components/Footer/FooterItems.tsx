import styles from './Footer.module.css';

type FooterItemsProps= {
    children: React.ReactNode;
}

const FooterItems = ({children}: FooterItemsProps) => {
    return (
        <div className={styles.footerItems}>
            {children}
        </div>

    )
}

export default FooterItems;