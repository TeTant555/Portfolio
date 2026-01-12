import LottieImport from "lottie-react";
import type { ComponentType } from "react";

type Props = {
  className?: string;
  animationData: unknown;
};

const Lottie =
  (LottieImport as unknown as { default?: ComponentType<Props> }).default ??
  (LottieImport as unknown as ComponentType<Props>);

export default Lottie;