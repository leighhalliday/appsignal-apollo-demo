import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { appsignal } from "src/appsignal";
import styles from "../styles/Home.module.css";

const HOME_QUERY = gql`
  query HomeQuery {
    name
    website
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

      <button
        onClick={() => {
          try {
            throw new Error("Caught");
          } catch (error) {
            appsignal.sendError(error);
          }
        }}
      >
        Create Error
      </button>
    </div>
  );
}
