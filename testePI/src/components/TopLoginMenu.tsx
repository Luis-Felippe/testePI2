import "./PrimaryInput.css";
interface TopLoginMenuProps {
  logo: string;
}

export default function TopLoginMenu({ logo }: TopLoginMenuProps) {
  return (
    <div className="top-login-menu">
      <h1>{logo}</h1>
    </div>
  );
}
