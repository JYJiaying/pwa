import ReactPlayer from 'react-player'
import { useState } from 'react';
import Navbar from "./Navbar";
import Toggler from "./Toggler";
interface VideoProp {
    video: string;
}
function Video({ video }: VideoProp) {
    const [togglerVisible, setTogglerVisibility] = useState(false);
    return (
        <>
            <div className="mb-auto z-n1 position-absolute p-5 rounded-3">
                <Navbar click={() => setTogglerVisibility(true)} />
                {togglerVisible && <Toggler click={() => setTogglerVisibility(false)} />}
            </div>

            <div className="position-absolute top-50 start-50 translate-middle ">
                <ReactPlayer className="ratio ratio-16x9" allowfullscreen controls={true} url={video} />
                <form action="">
                    <input placeholder="Kommentar hinzufügen" type="text" className="form-control my-3" />
                    <div className='d-flex justify-content-end'>
                        <button type="submit" className="btn btn-primary mx-3">Abrechen</button>
                        <button type="submit" className="btn btn-primary">Kommentieren</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Video;