import { Component } from 'react';
import s from '../Searchbar/Searchbar.module.scss';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleInputChange = e => {
    this.setState({ searchName: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.searchName.trim().toLowerCase());
    this.reset();
  };

  reset = () => {
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button className={s.btn} type="submit">
            <img
              className={s.icon}
              src={
                'https://raw.githubusercontent.com/EllaHonchar/goit-js-hw-11/8189ae51e5a4a5f5eb4ef508d0798cb2738b5f87/src/search.svg'
              }
              alt="search"
            />
            {/* <span className={s.label}>Search</span> */}
          </button>

          <input
            className={s.input}
            value={this.state.searchName}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
