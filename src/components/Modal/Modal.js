import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled, CloseBtn, ModalImg } from './Modal.styled';
const modalRootEl = document.querySelector('#modal-root');
class Modal extends Component {
  render() {
    return createPortal(
      <Overlay>
        <ModalStyled className="modal">
          <ModalImg
            className="modalImg"
            src="https://pixabay.com/get/gb955733479ca593e5f03c8e4fd01312e602378809fe3d0b1c58a0d67704c98cd43985f93555b3acb0cbfeb74b27453730d4fc4cfd5398bf879c6ba65e10fddd6_1280.jpg"
            alt=""
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
