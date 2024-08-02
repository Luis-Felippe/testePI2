import { useState } from "preact/hooks";
import "./app.css";
import PrimaryInput from "./components/PrimaryInput";
import { ChangeEvent } from "preact/compat";
import { Button } from "@chakra-ui/react";
import TopLoginMenu from "./components/TopLoginMenu";
import SignInComp from "./components/SignInComp";

export function App() {
  return (
    <>
      <TopLoginMenu logo="Universitter"></TopLoginMenu>
      <SignInComp />
    </>
  );
}
