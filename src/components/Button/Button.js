import { ButtonStyled, Span } from './Button.styled';
import { BsSearch } from 'react-icons/bs';
const Button = () => {
  return (
    <ButtonStyled type="submit">
      <Span className="button-label">
        <BsSearch />
      </Span>
    </ButtonStyled>
  );
};
export default Button;
