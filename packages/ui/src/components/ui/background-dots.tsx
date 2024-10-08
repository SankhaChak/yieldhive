interface DotPatternBackgroundProps {
  dotSize?: number;
  dotColor?: string;
  backgroundColor?: string;
  gap?: number;
  maskColor?: string;
  className?: string;
  style?: React.CSSProperties;
  fade?: boolean;
  // [key: string]: any;
}

const BackgroundDots: React.FC<DotPatternBackgroundProps> = (
  props: DotPatternBackgroundProps
) => {
  const {
    dotSize = 1.2,
    dotColor = "#111111b3",
    backgroundColor = "transparent",
    gap = 20,
    className,
    fade = true,
    style,
    ...otherProps
  } = props;

  const encodedDotColor = encodeURIComponent(dotColor);

  const maskStyle: React.CSSProperties = fade
    ? {
        maskImage: "radial-gradient(circle, white 10%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(circle, white 10%, transparent 90%)",
      }
    : {};

  //  SVG taken from https://heropatterns.com/
  const backgroundStyle: React.CSSProperties = {
    backgroundColor,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='${gap}' height='${gap}' viewBox='0 0 ${gap} ${gap}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodedDotColor}' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='${dotSize}' cy='${dotSize}' r='${dotSize}'/%3E%3C/g%3E%3C/svg%3E")`,
    ...maskStyle,
    ...style,
  };

  return (
    <div
      className={`fixed inset-0 h-screen w-full pointer-events-none ${className}`}
      style={backgroundStyle}
      {...otherProps}
    />
  );
};

BackgroundDots.displayName = "BackgroundDots";

export default BackgroundDots;
