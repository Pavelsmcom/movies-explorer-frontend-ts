import Navigation from "../Navigation/Navigation";

interface IBurgerProps {
  isOpen: boolean;
  onClose: () => void;
}

function BurgerMenu({ isOpen, onClose }: IBurgerProps) {
  return (
    isOpen && (
      <section className="burger-menu burger-menu_opened">
        <div className="burger-menu__container">
          <button className="burger-menu__close-btn" onClick={onClose}></button>
          <Navigation isMobileOpen={isOpen} closeBurgerMenu={onClose} />
        </div>
      </section>
    )
  );
}

export default BurgerMenu;
