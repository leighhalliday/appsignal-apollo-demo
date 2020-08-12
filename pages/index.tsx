import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const HOME_QUERY = gql`
  query HomeQuery {
    name
  }
`;

export default function Home() {
  const { data, loading } = useQuery(HOME_QUERY);

  if (loading) return <span>loading...</span>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
