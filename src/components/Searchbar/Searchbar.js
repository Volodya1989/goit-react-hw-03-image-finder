import {
  SearchbarStyled,
  Form,
  Input,
  ButtonStyled,
  Span,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

const Searchbar = () => {
  return (
    <SearchbarStyled>
      <Form>
        <ButtonStyled type="submit">
          <Span>
            <BsSearch />
          </Span>
        </ButtonStyled>
        <Input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchbarStyled>
  );
};
export default Searchbar;
