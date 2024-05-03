import { useState } from "react";
import MyModal from "./MyModal";
import Header from "../../../components/Header";

function ModalComponent() {

    const [showMyModal, setShowMyModal] = useState(false);

    const handleOnClose = () => setShowMyModal(false);

    return (
        <div className="bg-blue-400 bg-opacity-30">
            <Header/>
            <div className="max-w-3xl mx-auto">
                <div className="text-center py-3">
                    <button 
                        onClick={() => setShowMyModal(true)}
                        className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
                        Open Modal
                    </button>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem maiores exercitationem voluptate iusto voluptatum id
                    delectus possimus nisi eligendi aspernatur voluptas
                    doloremque quod nobis itaque, odio sit accusamus tempora
                    ratione quam unde provident. Alias soluta consequatur,
                    distinctio voluptates sed et placeat voluptate unde
                    doloribus pariatur vel aliquam dolor animi ex. Illum eius
                    molestias repellendus tempora. Nisi, error. Accusantium
                    ipsum in nisi sequi vero, quia perspiciatis, molestias
                    deleniti minus sapiente amet consequuntur neque ratione
                    eaque dicta iste sed hic aperiam quo culpa nihil dolor quam!
                    Ea mollitia doloribus distinctio eum eius eveniet eligendi
                    vitae voluptas sit incidunt, molestiae laborum quos facere
                    consequatur. Ex omnis libero est quos quod qui, eveniet
                    mollitia, nulla maxime et sit officiis, dolor deserunt
                    quibusdam repudiandae aliquid!
                </p>
            </div>

            <MyModal onClose={handleOnClose} visible={showMyModal}/>
        </div>
    );
}

export default ModalComponent;
