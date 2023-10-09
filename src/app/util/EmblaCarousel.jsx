import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import imageByIndex from "./ImageByIndex";
import styles from "../styles/carousel.module.css"; // Mengimpor CSS Module
import Image from "next/image";

const TWEEN_FACTOR = 4.2;
const AUTOPLAY_INTERVAL = 5000; // Interval otomatis dalam milidetik (misalnya, 5000ms atau 5 detik)

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [tweenValues, setTweenValues] = useState([]);
  const autoplayTimer = useRef(null);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  const startAutoplay = () => {
    autoplayTimer.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, AUTOPLAY_INTERVAL);
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [emblaApi, onScroll]);

  return (
    <section className="max-w-screen-xl mx-auto mt-5">
      <div className="mx-5 p-1 bg-white border border-gray-200 rounded-2xl shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-md md:text-md font-bold text-green-500 ml-2 sm:text-2xl">
          Weekly Promotion 🔥
        </h1>
        <div className={styles.embla}>
          <div
            className={styles.embla__viewport}
            ref={(el) => {
              emblaRef(el);
              if (el) {
                emblaApi && startAutoplay();
              } else {
                stopAutoplay();
              }
            }}
          >
            <div className={styles.embla__container}>
              {slides.map((index) => (
                <div
                  className={styles.embla__slide}
                  key={index}
                  style={{
                    ...(tweenValues.length && { opacity: tweenValues[index] }),
                  }}
                >
                  <div className={styles.embla__slide__number}>
                    <span>{index + 1}</span>
                  </div>
                  <Image
                    className={styles.embla__slide__img}
                    src={imageByIndex(index)}
                    alt="Your alt text"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
