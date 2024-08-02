import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "preact/compat";
import "./PrimaryInput.css";

interface PrimaryInputProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function PrimaryInput({
  name,
  value,
  onChange,
  placeholder,
}: PrimaryInputProps) {
  return (
    <div className="input-container">
      <Input
        variant="filled"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
