import { ApolloProvider } from "@apollo/client";
import { ErrorBoundary } from "@appsignal/react";
import { useApollo } from "src/apolloClient";
import { appsignal } from "src/appsignalClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return (
    <ErrorBoundary
      instance={appsignal}
      fallback={(_error) => <span>boundary</span>}
    >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  const url = "/__appsignal-web-vitals";

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon(url, body)) ||
    fetch(url, { body, method: "POST", keepalive: true });
}

export default MyApp;
