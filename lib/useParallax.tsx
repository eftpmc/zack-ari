// useParallax.js or useParallax.ts
import { useTransform, MotionValue } from "framer-motion";

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
