import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
export const ModalImg = styled.img`
  positon: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 22px;
  right: 12px;
  cursor: pointer;
  border: none;
  width: 24;
  height: 24;
  text-align: center;
  line-height: 0;

  font-size: 30px;
  font-weight: 700;

  background-color: transparent;

  &:hover,
  &:focus {
    color: white;
  }
`;

//NEED TO BE MODIFIED
// export const ImageModal = styled.img`
//   width: 100%;
//   height: 260px;
//   object-fit: cover;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   &:hover {
//     transform: scale(1.03);
//     cursor: zoom-in;
//   }
// `;
