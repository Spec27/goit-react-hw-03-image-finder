import React, { Component } from "react"
import s from './Searchbar.module.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


class Searchbar extends Component{
  state = {
    query: '',
  };


  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() })
  };


  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error("Введіть валідне значення")
      return
    }
    this.props.onSubmit(this.state.query);
    this.reset();
    
  };

  reset = () => {
    this.setState({ query: ''})
  }

    render() {
        return (
            <header className={s.Searchbar}>
            <form className={s.Form} onSubmit={this.handleSubmit}>
              <input
                className={s.Input}
                type="text"
                name='imageName'
                value={this.state.query}
                onChange={this.handleNameChange}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                    />
                     <button type="submit" className={s.Button}>
                <span className={s.ButtonLabel}>Search</span>
              </button>
            </form>
          </header>  
        )
  };
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;


