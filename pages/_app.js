import "../styles/globals.css";
import MobilePageChangeTransition from "../components/MobilePageChangeTransition";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <MobilePageChangeTransition location={router.pathname}>
        <Component {...pageProps} />
      </MobilePageChangeTransition>
    </Provider>
  );
}

export default MyApp;
