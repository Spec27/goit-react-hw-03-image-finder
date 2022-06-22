
import React, { Component } from "react";
import { ToastContainer,toast} from 'react-toastify';
import s from "./App.module.css";
import Searchbar from "./Searchbar";
import Button from "./Button";
import ImageGallery from './ImageGallery';
import Loader from "./Loader";


class App extends Component{  
  state = {
    API_KEY: '25616509-8eba6619d00cba2f4a1d7faa3',
    URL: 'https://pixabay.com/api/',
    pictures: [],
    error: '',
    isLoading: false,
    page: 1,
    query: '',
  };

  fetchImages = () => {
    return fetch(
      `${this.state.URL}?q=${this.state.query}&page=${this.state.page}&key=${this.state.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Зображення не знайдено'));
      })
      .then(pictures => {
        if (!pictures.total) {
          toast.error('Знайшов');
        }
        const properties = pictures.hits.map(
          ({ id, largeImageURL, webformatURL }) => {
            return { id, largeImageURL, webformatURL };
          }
        );
        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...properties],
            isLoading: false,
          };
        });
      })
      .catch(error => this.setState({ error}));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ isLoading: true, pictures: [], page: 1 });
      this.fetchImages();
    }
    if (
      this.state.query === prevState.query &&
      this.state.page !== prevState.page
    ) {
      this.setState({isLoading: true });
      this.fetchImages();
    }
  };


  
  handleFormSubmit = query => {
    this.setState({query});
  };


  hendleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1
      };
    });
  };

  
  render() {
    const { pictures, isLoading} = this.state;
    return (
      <>
        <div className={s.BcgImg}>
          <div className={s.Container}>
          <ToastContainer autoClose={4000}
            position={'top-right'}/>
            <Searchbar onSubmit={this.handleFormSubmit} />
            {pictures.length > null && <ImageGallery images={pictures} />}
            {isLoading && <Loader/>}
            {pictures.length > null && !isLoading && (<Button onClick={this.hendleLoadMore} />)}
           </div>
        </div>
      </>
    )
  };
}
export default App 
 
