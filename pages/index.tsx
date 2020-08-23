import { useQuery, gql } from "@apollo/client";
import { appsignal } from "src/appsignalClient";
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
        Caught Error
      </button>

      <button
        onClick={() => {
          throw new Error("Uncaught");
        }}
      >
        Uncaught Error
      </button>
    </div>
  );
}
