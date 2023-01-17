import { useEffect } from "react";
import { BackDrop, Modal, CloseBtn } from "./ModalWindow.styled"
import { IoCloseOutline } from "react-icons/io5";
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

/* Приклад користування модалкою 

	import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";

	export const MyComponent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const closeModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<>
		<button onClick={closeModal}>ВІДКРИТИ МОДАЛКУ</button>
			{isModalOpen && <ModalWindow onClose={closeModal} modalType={'addPet'}>
				ВАША ВЕРСТКА 
			</ModalWindow>}
		</>
	);}

	!!! Для модалки ADD PET передаємо пропс modalType={'addPet'}, від цього залежать 
	падінги та ширина модалки. Для іншої не передаємо цей проп.
	Модалка вже зачиняється по кліку на хрестик, бекдроп та Esc.
*/

export const ModalWindow = ({ children, onClose, modalType }) => {
	const handleKeyDown = (e) => {
		if (e.code === "Escape") {
			onClose();
		}
	}

	const handleBackdropclick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	return createPortal(<BackDrop onClick={handleBackdropclick}>
		<Modal modalType={modalType}>
			{children}
			<CloseBtn type="button" onClick={onClose}>
				<IoCloseOutline />
			</CloseBtn>
		</Modal>
	</BackDrop>, modalRoot)
}