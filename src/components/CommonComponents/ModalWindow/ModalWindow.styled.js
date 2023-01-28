import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: ${p => {
		if (p.modalHeight >= p.viewPortHeight) {
			return "0%"
		}
		return "50%"
	}};
  left: 50%;
  z-index: 5;
  transform: ${p => {
		if (p.modalHeight >= p.viewPortHeight) {
			return "translateX(-50%)"
		}
		return "translate(-50%, -50%)"
	}};
  background-color: #fff;
  width: 280px;
  border-radius: 20px;
  padding: ${p => {
		if (p.modalType === 'addPet') {
			return '40px 20px';
		}
		return '60px 20px 40px';
	}};

  @media (min-width: 768px) {
    padding: ${p => {
		if (p.modalType === 'addPet') {
			return '40px 80px';
		}
		return '32px 20px';
	}};
    width: ${p => {
		if (p.modalType === 'addPet') {
			return '608px';
		}
		return '704px';
	}};
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 23px;
  right: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: #fdf7f2;
  backdrop-filter: blur(2px);
  transition: background-color 300ms linear;

  :hover, :focus{
	background-color: #F59256;
  }

  svg {
    width: 28px;
    height: 28px;
    fill: #000;
  }
`;
