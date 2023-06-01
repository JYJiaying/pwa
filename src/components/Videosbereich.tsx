import { Fragment } from "react";
function Videosbereich() {
    return (
        <Fragment>
            <div className="row mx-5 mt-5">
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">Videosname 1</h5>
                            <p className="card-text">Videosbeschreibung</p>
                            <a href="#" className="btn btn-primary">Zum Videosbereich</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">Videosname 2</h5>
                            <p className="card-text">Videosbeschreibung</p>
                            <a href="#" className="btn btn-primary">Zum Videosbereich</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">Videosname 3</h5>
                            <p className="card-text">Videosbeschreibung</p>
                            <a href="#" className="btn btn-primary">Zum Videosbereich</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 center card me-3 mb-3" style={{ width: " 18rem" }}>
                    <div className="embed-responsive embed.responsive-16by9 ">
                        <div className="card-body">
                            <video controls className="card-img-top"></video>
                            <h5 className="card-title">Videosname 4</h5>
                            <p className="card-text">Videosbeschreibung</p>
                            <a href="#" className="btn btn-primary">Zum Videosbereich</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Videosbereich;