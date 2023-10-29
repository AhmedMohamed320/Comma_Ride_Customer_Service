"use client";
import classes from "./LocationAndState.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TimeLine from "@/components/Delivery_men/TimeLine";
import dynamic from "next/dynamic";

const LocationAndState = () => {
    const DynamicMap = dynamic(() => import("../map/Map"), {
        ssr: false,
    });
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 8,
            spacing: 0,
        },
        breakpoints: {
            "(max-width: 65rem)": {
                slides: {
                    perView: 6,
                    spacing: 0,
                },
            },
            "(max-width: 45rem)": {
                slides: {
                    perView: 4,
                    spacing: 0,
                },
            },
        },
    });
    return (
        <section>
            <p className="text-2xl pt-4 font-semibold text-center">
                مواقع الطيارين
            </p>

            <div className={classes.map}>
                <DynamicMap />
            </div>
            <p className="text-2xl pt-4 font-semibold text-center">
                الطيارين المتاحين
            </p>
            <div ref={sliderRef} className={`keen-slider ${classes.timeLine}`}>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
                <div className="keen-slider__slide">
                    <TimeLine time="11:00" />
                </div>
            </div>
        </section>
    );
};

export default LocationAndState;
