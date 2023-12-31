interface BurgerProps {
  onBurgerMenuClick: () => void;
  isBurgerMenuOpen: boolean;
}

function Burger({ onBurgerMenuClick, isBurgerMenuOpen }: BurgerProps) {
  function handleClick() {
    onBurgerMenuClick();
  }

  return (
    <>
      <button className="burger" onClick={handleClick} aria-label="burger_button">
        <span
          className={
            isBurgerMenuOpen ? "burger__line burger__line_position_1_open" : "burger__line burger__line_position_1"
          }
        ></span>
        <span
          className={
            isBurgerMenuOpen ? "burger__line burger__line_position_2_open" : "burger__line burger__line_position_2"
          }
        ></span>
        <span
          className={
            isBurgerMenuOpen ? "burger__line burger__line_position_3_open" : "burger__line burger__line_position_3"
          }
        ></span>
      </button>
    </>
  );
}

export default Burger;
