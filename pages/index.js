import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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

      <h1 className={styles.title}>this is homepage.</h1>
    </div>
  );
}
