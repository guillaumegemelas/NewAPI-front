import "@/styles/globals.css";
import { useEffect } from "react";

//import fontawesone icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

//import icones bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

//import de Bootstrap de node modules
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import du composant Container
import Container from "@/components/Container/Container";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
