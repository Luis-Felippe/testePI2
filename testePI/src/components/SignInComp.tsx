import { useState } from "preact/hooks";
import "./PrimaryInput.css";
import { ChangeEvent } from "preact/compat";
import { Button, chakra } from "@chakra-ui/react";
import PrimaryInput from "./PrimaryInput";
import { Checkbox } from "@chakra-ui/react";

export default function SignInComp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  };

  const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setFirstName(target.value);
  };

  const handleChangeSecondName = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSecondName(target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  };

  const handleChangeTelephone = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setTelephone(target.value);
  };

  const CustomCheckbox = chakra(Checkbox, {
    baseStyle: {
      control: {
        borderColor: "red",
      },
      label: {
        fontSize: "20px",

        color: "red",
      },
    },
  });

  return (
    <div className="container">
      <form>
        <label>Cadastrar-se</label>
        <div className="names-form-container">
          <PrimaryInput
            value={firstName}
            onChange={handleChangeFirstName}
            name="First Name"
            placeholder="Nome"
          />

          <div></div>

          <PrimaryInput
            value={secondName}
            onChange={handleChangeSecondName}
            name="Second Name"
            placeholder="Sobrenome"
          />
        </div>
        <PrimaryInput
          value={telephone}
          onChange={handleChangeTelephone}
          name="Telefone"
          placeholder="Telefone"
        />
        <PrimaryInput
          value={email}
          onChange={handleChangeEmail}
          name="email"
          placeholder="Email"
        />
        <PrimaryInput
          value={password}
          onChange={handleChangePassword}
          name="password"
          placeholder="*******"
        />
        <div className="CheckboxContainer">
          <CustomCheckbox defaultChecked>
            Eu li e concordo com os termos e condições de uso e política de
            privacidade
          </CustomCheckbox>
        </div>
        <Button colorScheme="teal" variant="solid">
          Cadastrar-se
        </Button>
      </form>
    </div>
  );
}
