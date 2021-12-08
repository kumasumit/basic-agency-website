import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kumar Sumit Portfolio</title>
        <meta
          name="description"
          content="FrontEnd Developer Portfolios.kmr-sumit"
        />
      </Head>

      <Intro />
    </div>
  );
}
