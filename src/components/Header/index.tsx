import styles from './header.module.scss';

export default function Header() {
  return (
    <main className={styles.mainContainer}>
      <img src="/Logo.svg" alt="logo" />
    </main>
  );
}
