import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoCard from '../components/VideoCard';
function Videosbereich() {
    const [videos, setVideos] = useState(
        [
            { id: 1, title: 'Videosname 1', text: 'Videosbeschreibung' },
            { id: 2, title: 'Videosname 2', text: 'Videosbeschreibung' },
            { id: 3, title: 'Videosname 3', text: 'Videosbeschreibung' },
            { id: 4, title: 'Videosname 4', text: 'Videosbeschreibung' },
        ]
    )
    return (
        <>
            {
                videos.map((videos) => {
                    console.log(videos);
                    return (
                        <VideoCard
                            key={videos.id}
                            title={videos.title}
                            text={videos.text} />
                    );
                })
            }
        </>
    );
}
export default Videosbereich;