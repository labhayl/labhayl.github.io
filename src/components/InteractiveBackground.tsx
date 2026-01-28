"use client";

import { useEffect, useRef } from "react";
import { useThemeContext } from "./ThemeProvider";

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useThemeContext();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let points: Point[] = [];
        let mouse = { x: 0, y: 0 };
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Configuration - adjusted for subtlety
        const POINT_COUNT = 60; // Fewer points for cleaner look
        const CONNECTION_DISTANCE = 150;
        const MOUSE_DISTANCE = 200;

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            points = [];
            for (let i = 0; i < POINT_COUNT; i++) {
                points.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5, // Slow movement
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 1.5 + 0.5,
                });
            }
        };

        const draw = () => {
            // Clear canvas
            ctx.clearRect(0, 0, width, height);

            // Determine colors based on theme
            const particleColor = theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)";
            const lineColor = theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";

            // Update and draw points
            points.forEach((point, i) => {
                // Move points
                point.x += point.vx;
                point.y += point.vy;

                // Bounce off edges
                if (point.x < 0 || point.x > width) point.vx *= -1;
                if (point.y < 0 || point.y > height) point.vy *= -1;

                // Draw Point
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                // Connect to mouse
                const dxMouse = mouse.x - point.x;
                const dyMouse = mouse.y - point.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < MOUSE_DISTANCE) {
                    // Subtle attraction to mouse
                    const force = (MOUSE_DISTANCE - distMouse) / MOUSE_DISTANCE;
                    point.x += (dxMouse / distMouse) * force * 0.5;
                    point.y += (dyMouse / distMouse) * force * 0.5;

                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.5; // Very thin
                    ctx.stroke();
                }

                // Connect to nearby points
                for (let j = i + 1; j < points.length; j++) {
                    const p2 = points[j];
                    const dx = point.x - p2.x;
                    const dy = point.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1 - dist / CONNECTION_DISTANCE;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        init();
        draw();

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [theme]);

    // Use a fixed placement
    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.6 }} // Adjust overall opacity for subtlety
        />
    );
}
