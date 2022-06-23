import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import PropTypes from 'prop-types';


const modalRoot = document.querySelector("#modal-root");


class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown',this.hendleKeyDown)
    };

    componentWillUnmount() { 
        window.removeEventListener('keydown',this.hendleKeyDown)
    };

    hendleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    hendleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
        
    };

    render () {
        return createPortal (
            <div className={s.Overlay} onClick={this.hendleBackdropClick}>
                <div className={s.Modal}>
                    <img src={this.props.srs} alt='' />
                </div>
            </div>,modalRoot,
        );
    };
};

Modal.propTypes = {
    srs: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default Modal;