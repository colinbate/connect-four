import { bounceOut } from "svelte/easing";
import type { EasingFunction, TransitionConfig } from "svelte/transition";

interface DropParams {
  delay: number;
  duration: number;
  easing: EasingFunction;
  y: number;
}

export function drop(
  node: Element,
  {
    delay = 0,
    duration = 400,
    easing = bounceOut,
    y = 0,
  }: Partial<DropParams> = {}
): TransitionConfig {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;

  return {
    delay,
    duration,
    easing,
    css: (t) => `
			transform: ${transform} translate(0px, ${(1 - t) * y}%);`,
  };
}
