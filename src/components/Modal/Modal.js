import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled, CloseBtn, ModalImg } from './Modal.styled';
const modalRootEl = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay>
        <ModalStyled className="modal">
          <ModalImg
            className="modalImg"
            src={this.props.activeImg}
            alt="large image"
          />
          <CloseBtn type="button" onClick={() => this.props.onClose()}>
            &times;
          </CloseBtn>
        </ModalStyled>
      </Overlay>,
      modalRootEl
    );
  }
}
export default Modal;
