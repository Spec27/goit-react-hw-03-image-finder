import React, { Component } from "react";
import s from "./ImageGalleryItem.module.css";
import Modal from "components/Modal";
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component{
    state = {
        showModal: false,
       
    }
    
    toggleModal = () => {
        this.setState(({showModal})=> ({
            showModal: !showModal
        }))
    };
    
    render() {
        const {showModal}=this.state
        return (
            <li className={s.GalleryItem}>
                <img
                    className={s.Img}
                    src={this.props.smallImgURL}
                    alt={this.props.id}
                    onClick={this.toggleModal}
                />
                {showModal && <Modal onClose={this.toggleModal}
                   srs={this.props.bigUrl}
                />} 
            </li>
        );
    }
};

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    smallImgURL: PropTypes.string.isRequired,
  };

export default ImageGalleryItem;