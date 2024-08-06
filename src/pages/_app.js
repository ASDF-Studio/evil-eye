import { AudioProvider } from "@/context/AudioContext";
import store from "@/store";
import "@/styles/globals.css";
import React from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AudioProvider>
        <Component {...pageProps} />
      </AudioProvider>
    </Provider>
  );
}
