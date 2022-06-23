
import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem"
import s from "./ImageGallery.module.css"
/* import Modal from "components/Modal"; */
import PropTypes from 'prop-types'


class ImageGallery extends Component{
  /*   state = {
        showModal: false,
        bigImgUrl:null,
    } */

   /*  componentDidMount() {
        document.addEventListener('click', this.hendleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.hendleClick)
    }
    
    hendleClick = event => {
        if (event.target.nodeName !== 'IMG') {
            this.setState({ showModal: false });
          return;
        }
        else {
            let picture = this.props.images.filter(obj => {
              return obj.id === parseInt(event.target.alt);
            });
            this.setState({ bigImgUrl: picture[0].largeImageURL });
          }
    }


    toggleModal = () => {
        this.setState(({showModal})=> ({
            showModal: !showModal
        }))
    }; */


    render() {
        /* const {showModal,bigImgUrl}=this.state */
        return (
            <>
                <ul className={s.ImageGalery} /* onClick={this.toggleModal} */>
                    {this.props.images.map(({ id,webformatURL,largeImageURL})=> {
                        return (
                            <ImageGalleryItem 
                                key={id}
                                smallImgURL={webformatURL}
                                id={id}
                                bigUrl={largeImageURL}
                            /> 
                        )
                    })}
                </ul>
               {/*  {showModal && bigImgUrl &&  <Modal onClose={this.toggleModal} picture={bigImgUrl } />} */} 
            </>
          
        );
    }
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    )
    
};

export default ImageGallery;