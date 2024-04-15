"use client"

export default function VideoComponent() {
    return (
        <div className="hero video-background ">
            <video autoPlay muted loop width="100%" height="50%">
                <source src="/videos/MASTERBBQErbil.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
