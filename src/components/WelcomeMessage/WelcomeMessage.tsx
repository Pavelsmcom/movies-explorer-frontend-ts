import Logo from "../Logo/Logo";

interface WelcomeMessageProps {
  text: string;
  positionProfile?: boolean;
}

function WelcomeMessage({ text, positionProfile = false }: WelcomeMessageProps) {
  return (
    <div className="welcome">
      {positionProfile ? "" : <Logo />}
      <h2 className={positionProfile ? "welcome__header welcome__header_profile" : "welcome__header"}>{text}</h2>
    </div>
  );
}

export default WelcomeMessage;
