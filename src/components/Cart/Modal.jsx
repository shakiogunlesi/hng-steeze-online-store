
import './modal.css';

const Modal = ({ open, onClose, children }) => {
    return (
        <div className={`modal ${open ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
