"use client"
import {useEffect, useState} from "react";
import {animate, motion, useMotionValue} from "framer-motion";
import useMeasure from "react-use-measure";
import Card from "@/app/_components/home/carousel/Card"


const Carousel = () => {
    const images = [
        "/images/photo10.jpg",
        "/images/photo11.jpg",
        "/images/photo13.jpg",
        "/images/photo12.jpg",
        "/images/photo14.jpg",
        "/images/photo15.jpg",
        "/images/photo17.jpg",
        "/images/photo18.jpg",
    ];

    const FAST_DURATION = 25;
    const SLOW_DURATION = 75;

    const [duration, setDuration] = useState(FAST_DURATION);
    const [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        const finalPosition = -width / 2;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return () => controls?.stop();
    }, [rerender, xTranslation, duration, width, mustFinish]);

    return (
        <main className="py-8 overflow-clip">

            <motion.div
                className=" flex  "
                style={{x: xTranslation}}
                ref={ref}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {[...images, ...images].map((item, idx) => (
                    <Card image={`${item}`} key={idx}/>
                ))}
            </motion.div>
        </main>
    );
}
export default Carousel;