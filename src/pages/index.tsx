import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.svg";

import styles from "../styles/Menu.module.scss";

export default function Menu() {
  return (
    <div className="container">
      <Head>
        <title>Green Quiz</title>
        <meta name="description" content="Green Quiz | Menu" />
      </Head>

      <Image src={Logo} alt="GreenQuiz Logo" />

      <h2 className={styles.welcomeMsg}>Bem vindo(a), Fulano</h2>

      <ul className={styles.menuList}>
        <li>
          <Link href="/quizInfo">
            <a>Iniciar Quiz</a>
          </Link>
        </li>
        <li>Ranking</li>
        <li>Prêmios</li>
        <li>Instruções</li>
        <li className={styles.exitButton}>Sair</li>
      </ul>
    </div>
  );
}
