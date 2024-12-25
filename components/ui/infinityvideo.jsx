import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingVideo = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };


    const [animeState, setAnimeState] = useState('animate-scroll'); // Default state for scroll animation
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                onMouseEnter={() => setAnimeState('animate-scroll paused')} // Pause on hover
                onMouseLeave={() => setAnimeState('animate-scroll running')} // Resume on mouse leave
                className={cn(
                    'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
                    animeState // Dynamically apply the animeState
                )}
            >
                {items.map((item, idx) =>{
                    console.log(item , 'ites')
                    return  (
                        <li
                            className="w-[350px]relative "
                            style={{
                                background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                            }}
                            key={idx} 
                        >
                            <div className="relative z-20 w-[350px] max-w-full h-[150px] flex flex-row items-center">
    
                                <iframe
                                    src={item.url} 
                                    title={`Video ${idx + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    style={{
                                        top: 0,
                                        left: 0,
                                        width: "200%",
                                        height: "150%",
                                      }}
                                ></iframe>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

    
};
