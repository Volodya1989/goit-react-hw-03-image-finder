import { ButtonStyled } from './Button.styled';
const Button = ({ onLoad }) => {
  return (
    <ButtonStyled type="button" onClick={onLoad}>
      Load more
    </ButtonStyled>
  );
};
export default Button;
