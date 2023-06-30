import { Component } from 'react';
import PropTypes from 'prop-types';

import { SearchbarStyled, Form, Input, ButtonStyled } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import Notiflix from 'notiflix';

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
    console.log(!queryParam);
    if (queryParam.trim().length === 0) {
      this.setState({
        queryParam: queryParam.trim(),
      });
      return Notiflix.Notify.failure('Please type in some search key word');
    }

    this.props.onSubmit(queryParam);

    this.reset();
  };

  render() {
    return (
      <SearchbarStyled>
        <Form onSubmit={this.handleOnSubmit}>
          <ButtonStyled type="submit">
            <BsSearch />
          </ButtonStyled>
          <Input
            type="text"
            name="queryParam"
            autocomplete="off"
            value={this.state.queryParam}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
