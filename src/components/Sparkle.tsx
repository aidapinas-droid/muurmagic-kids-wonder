type SparkleProps = {
  className?: string;
  size?: number;
  color?: string;
};

export function Sparkle({ className = "", size = 24, color = "currentColor" }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z"
        fill={color}
      />
    </svg>
  );
}

export function Star({ className = "", size = 20, color = "currentColor" }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 L14.6 8.6 L21.6 9.2 L16.3 13.7 L17.9 20.5 L12 16.9 L6.1 20.5 L7.7 13.7 L2.4 9.2 L9.4 8.6 Z" />
    </svg>
  );
}
