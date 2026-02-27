import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Seed data for floating dots — deterministic positions, varied sizes & opacities
const DOTS = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 3 + (i % 4) * 1.5,                       // 3–7.5 px
    x: ((i * 37 + 11) % 100),                       // pseudo-random x %
    y: ((i * 53 + 7) % 100),                        // pseudo-random y %
    opacity: 0.12 + (i % 5) * 0.04,                 // 0.12 – 0.28
    duration: 18 + (i % 6) * 4,                     // 18 – 38 s full cycle
    delay: (i % 5) * -4,                            // stagger start
}));

const AmbientBackground = () => {
    const circlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!circlesRef.current) return;

        // Subtle parallax: shift decorative circles up slowly as user scrolls down
        const ctx = gsap.context(() => {
            gsap.to(circlesRef.current, {
                y: -60,
                ease: 'none',
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.5,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        >
            {/* ─── Large decorative gradient circles (bottom-left) ─── */}
            <div ref={circlesRef}>
                {/* Primary circle */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: '56vw',
                        height: '56vw',
                        maxWidth: 820,
                        maxHeight: 820,
                        bottom: '-22vw',
                        left: '-18vw',
                        background:
                            'radial-gradient(circle at 40% 40%, rgba(59,130,246,0.08), rgba(16,185,129,0.06) 60%, transparent 80%)',
                    }}
                />

                {/* Secondary circle — slightly offset */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: '38vw',
                        height: '38vw',
                        maxWidth: 560,
                        maxHeight: 560,
                        bottom: '-10vw',
                        left: '-8vw',
                        background:
                            'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.07), rgba(59,130,246,0.04) 65%, transparent 85%)',
                    }}
                />

                {/* Tertiary arc — small accent ring */}
                <div
                    className="absolute rounded-full border"
                    style={{
                        width: '28vw',
                        height: '28vw',
                        maxWidth: 400,
                        maxHeight: 400,
                        bottom: '-6vw',
                        left: '2vw',
                        borderColor: 'rgba(59,130,246,0.06)',
                        background: 'transparent',
                    }}
                />
            </div>

            {/* ─── Floating dots ─── */}
            {DOTS.map((dot) => (
                <div
                    key={dot.id}
                    className="absolute rounded-full"
                    style={{
                        width: dot.size,
                        height: dot.size,
                        left: `${dot.x}%`,
                        top: `${dot.y}%`,
                        opacity: dot.opacity,
                        backgroundColor: 'rgba(59,130,246,0.6)',
                        animation: `ambient-float-x ${dot.duration}s ease-in-out ${dot.delay}s infinite alternate,
                         ambient-float-y ${dot.duration * 1.3}s ease-in-out ${dot.delay}s infinite alternate`,
                    }}
                />
            ))}
        </div>
    );
};

export default AmbientBackground;
