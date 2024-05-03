type PropsType = {
    open: any;
    onClose: any;
    children: any;
};

function Modal({ open, onClose, children }: PropsType) {
    return (
        <div
            className={`fixed inset-0 flex justify-center items-center transition-colors ${
                open ? "visible bg-black/20" : "invisible"
            }`}
            onClick={onClose}
        >
            {children}
        </div>
    );
}

export default Modal;
