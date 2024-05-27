"use client"
import React, { useEffect, useRef, useState } from 'react';

const HexagonContainer: React.FC = () => {
    const hexagonContainerRef = useRef<SVGSVGElement>(null);
    const [isActiveScrolling, setIsActiveScrolling] = useState(false);

    useEffect(() => {
        const hexagonContainer = hexagonContainerRef.current!;
        const size = 10;
        const hexagonWidth = size * Math.sqrt(3);
        const hexagonHeight = size * 2;
        const numRows = Math.ceil(window.innerHeight / (hexagonHeight * 0.75)) + 1;
        const numCols = Math.ceil(window.innerWidth / hexagonWidth) + 1;

        for (let row = 0; row < numRows; row++) {
            const strokeOpacity = 0.1 * (row / numRows); // Calculate stroke opacity based on row position
            for (let col = 0; col < numCols; col++) {
                const x = col * hexagonWidth + (row % 2 === 1 ? hexagonWidth / 2 : 0);
                const y = row * hexagonHeight * 0.75;
                const hexagon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                hexagon.setAttribute("class", "hexagon");
                hexagon.setAttribute("points", calculateHexagonPoints(x, y, size));
                hexagon.setAttribute("stroke", `rgba(255, 255, 255, ${strokeOpacity})`); // Set stroke color dynamically
                hexagon.setAttribute("fill", "none"); // Set fill to none to remove background color
                hexagonContainer.appendChild(hexagon);
            }
        }

        function calculateHexagonPoints(x: number, y: number, size: number): string {
            const points = [
                [x, y + size],
                [x + (Math.sqrt(3) * size) / 2, y + size / 2],
                [x + (Math.sqrt(3) * size) / 2, y - size / 2],
                [x, y - size],
                [x - (Math.sqrt(3) * size) / 2, y - size / 2],
                [x - (Math.sqrt(3) * size) / 2, y + size / 2]
            ];
            return points.map(p => p.join(",")).join(" ");
        }

        let scrollTimeout: NodeJS.Timeout | null = null;

        function handleScroll() {
            setIsActiveScrolling(true);

            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            scrollTimeout = setTimeout(() => {
                setIsActiveScrolling(false);
            }, 100);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <svg id="hexagon-container" ref={hexagonContainerRef}></svg>
            <style jsx>{`
                #hexagon-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    z-index: -2;
                    opacity: ${isActiveScrolling ? 0.6 : 0};
                    transition: opacity 0.8s; /* Smooth transition for opacity */
                }

                .hexagon {
                    fill: none;
                    stroke-width: 0.005px;
                }
            `}</style>
        </>
    );
};

export default HexagonContainer;
