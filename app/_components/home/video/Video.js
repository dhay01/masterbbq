"use client"


// export default function VideoComponent() {
//     return (
//         <div className="hero video-background">
//             <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
//                 <iframe
//                     title="masterbbq"
//                     src="/videos/MASTERBBQErbil.mp4"
//                     className="absolute inset-0 w-80 h-80"
//                     frameBorder="0"
//                     allowFullScreen
//                 ></iframe>
//             </div>
//         </div>
//     );
// }
export default function VideoComponent() {


    return (
        <video className="video-container" width="990" height="240" controls preload="none">
            <source src="/videos/MASTERBBQErbil.mp4" type="video/mp4"/>
            <track
                src="/videos/MASTERBBQErbil.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
            />
        </video>
    );
}

