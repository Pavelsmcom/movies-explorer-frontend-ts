import { Link } from "react-router-dom";

interface AuthLinkProps {
  text: string;
  linkText: string;
  link: string;
}

function AuthLink({ text, linkText, link }: AuthLinkProps) {
  return (
    <div className="auth-link">
      <p className="auth-link__text">
        {text}{" "}
        <Link to={link} className="auth-link__link">
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default AuthLink;
