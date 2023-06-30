import { Component } from 'react';
import {
  SearchbarStyled,
  Form,
  Input,
  ButtonStyled,
  Span,
} from './Searchbar.styled';
// import { BsSearch } from 'react-icons/bs';

class Searchbar extends Component {
  state = {
    queryParam: '',
  };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;
    value.trim();
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ queryParam: '' });
  };

  handleOnSubmit = e => {
    const { queryParam } = this.state;
    e.preventDefault();
    this.props.onSubmit(queryParam);

    this.reset();
  };

  render() {
    return (
      <SearchbarStyled>
        <Form onSubmit={this.handleOnSubmit}>
          <ButtonStyled type="submit">
            <Span>{/* <BsSearch /> */}</Span>
          </ButtonStyled>
          <Input
            type="text"
            name="queryParam"
            autocomplete="off"
            value={this.state.name}
            onChange={this.handleOnChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarStyled>
    );
  }
}
export default Searchbar;
