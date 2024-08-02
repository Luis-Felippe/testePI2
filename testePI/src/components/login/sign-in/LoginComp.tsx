import { useState } from "preact/hooks";
import PrimaryInput from "../../PrimaryInput";
import { ChangeEvent } from "preact/compat";
import { Button } from "@chakra-ui/react";

export default function LoginComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  };

  return (
    <div className="container">
      <form>
        <PrimaryInput
          value={email}
          onChange={handleChangeEmail}
          name="email"
          placeholder="Email"
        />
        <PrimaryInput
          value={password}
          onChange={handleChangePassword}
          name="First Name"
          placeholder="Nome"
        />

        <Button colorScheme="teal" variant="solid">
          Registrar
        </Button>
      </form>
    </div>
  );
}
