import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Videosbereich() {
    // const url = "https://medimesh-backend-dev.herokuapp.com/user/list";
    // const [videoList, setVideoList] = useState(null);

    // async function fetchTasks() {
    //     try {
    //       let response = await fetch(url);
    //       return await console.log(response.json());
    //     } catch (ex) {
    //       console.error(ex);
    //     }
    //   }

    //   useEffect(()=>{
    //     fetchTasks();
    //   })
    return (
        <Fragment>
            <div className="row mx-5 mt-5">
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">Videosname 1</h5>
                            <p className="card-text">Videosbeschreibung</p>
                            <Link to={`/pwa/video`} className="btn btn-primary" onClick={() => { console.log("zum Videosbereich") }}>  Zum Videosbereich</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">Videosname 2</h5>
                            <p className="card-text">Videosbeschreibung</p>
                            <Link to={`/pwa/video`} className="btn btn-primary" onClick={() => { console.log("zum Videosbereich") }}>  Zum Videosbereich</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">Videosname 3</h5>
                            <p className="card-text">Videosbeschreibung</p>
                            <Link to={`/pwa/video`} className="btn btn-primary" onClick={() => { console.log("zum Videosbereich") }}>  Zum Videosbereich</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">Videosname 4</h5>
                            <p className="card-text">Videosbeschreibung</p>
                            <Link to={`/pwa/video`} className="btn btn-primary" onClick={() => { console.log("zum Videosbereich") }}>  Zum Videosbereich</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Videosbereich;