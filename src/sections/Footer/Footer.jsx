import styles from './FooterStyles.module.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="footer" className={styles.container}>
        <p>
            <b>&copy; {currentYear} Sabin Rimal</b>.<br></br>
            "This code is licensed for personal use only and is not permitted for commercial purposes."
        </p>
    </section>
  )
}

export default Footer
