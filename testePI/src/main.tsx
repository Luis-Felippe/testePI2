import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

export function Main() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}

render(<Main />, document.getElementById("app")!);
