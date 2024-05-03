import UploadImage from "./UploadImage";

function MyModal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if(e.target.id === "container")
        onClose();
    }

    if (!visible) return null;

    return (
        <div 
            id="container" 
            onClick={handleOnClose} 
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                
            <UploadImage/>
        </div>
    );
}

export default MyModal;
