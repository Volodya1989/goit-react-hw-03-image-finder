import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled, CloseBtn, ModalImg } from './Modal.styled';
const modalRootEl = document.querySelector('#modal-root');
class Modal extends Component {
  render() {
    console.log('this.props.activeImg', this.props.children);
    return createPortal(
      <Overlay>
        <ModalStyled className="modal">
          <ModalImg
            className="modalImg"
            src={this.props.activeImg}
            alt="large image"
          />
          <CloseBtn type="button" onClick={() => this.props.onClick()}>
            &times;
          </CloseBtn>
        </ModalStyled>
      </Overlay>,
      modalRootEl
    );
  }
}
export default Modal;
