import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface VideoProps{
    title:string;
    text:string;
}
function Video({title, text} : VideoProps) {
    return (
        <Fragment>
            <div className="row mx-5 mt-5">
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}</p>
                            <Link to={`/pwa/video`} className="btn btn-primary" onClick={() => { console.log("zum Videosbereich") }}>  Zum Videosbereich</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Video;