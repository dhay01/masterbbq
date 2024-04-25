"use client"

export default function VideoComponent() {


    return (
        <video className="video-container" width="990" height="240" controls preload="none">
            <source src="/videos/bbq.mp4" type="video/mp4"/>
            <track
                src="/videos/bbq.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
            />
        </video>
    );
}

