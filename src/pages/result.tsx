import Head from "next/head";

import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { LoadingScreen } from "../components/LoadingScreen";
import { MainImages } from "../components/MainImages";
import { ResultStatistic } from "../components/ResultStatistic";

import { useAuth } from "../contexts/authContext";
import { useQuestion } from "../contexts/questionContext";

import styles from "../styles/Result.module.scss";

export default function Result() {
  const { questions } = useQuestion();
  const { user, userAuth } = useAuth();

  const total = questions.length;
  const percent = Math.round((user?.score / total) * 100);
  const userPercent = isNaN(percent) ? 0 : percent;

  if (!userAuth || !questions) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Green Quiz | Resultado</title>
        <meta name="description" content="Green Quiz" />
      </Head>
      <Container>
        <MainImages trophy result />
        <h2 className={styles.resultMessage}>
          {user ? user.name : "Usuário"}, seu resultado nesse quiz foi..
        </h2>
        <div className={styles.resultStatisticsContainer}>
          <ResultStatistic text={"Perguntas"} value={total} />
          <ResultStatistic
            text={"Score"}
            value={user?.score}
            bgColor={"var(--dark-purple)"}
          />
          <ResultStatistic text={"Percentual"} value={`${userPercent}%`} />
        </div>
        <Button href="/" text="Menu" />
      </Container>
    </>
  );
}
