import Arrow from "../../images/portfolio_arrow.svg";

interface PortfolioLinkProps {
  name: string;
  link: string;
}

function PortfolioLink({ name, link }: PortfolioLinkProps) {
  return (
    <li className="portfolio__element">
      <a className="portfolio__link" href={link} target="_blank" rel="noreferrer">
        <p className="portfolio__text">{name}</p>
        <img className="portfolio__arrow" src={Arrow} alt="изображение стерлки" />
      </a>
    </li>
  );
}

export default PortfolioLink;
