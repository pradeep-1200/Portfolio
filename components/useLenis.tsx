"use client";
import { useEffect } from "react";

export default function useLenis() {
  useEffect(() => {
    let lenisInstance: any = null;
    let rafId: any = null;
    const setup = async () => {
      try {
        const mod = await import("lenis");
        const Lenis = mod.default ?? mod;
        lenisInstance = new Lenis({ lerp: 0.08 });
        const loop = (time: any) => {
          if (lenisInstance?.raf) lenisInstance.raf(time);
          rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);
      } catch (err) {
        // lenis not installed — safe fallback
        // console.warn('Lenis not loaded', err)
      }
    };
    setup();
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance?.destroy) lenisInstance.destroy();
    };
  }, []);
}
