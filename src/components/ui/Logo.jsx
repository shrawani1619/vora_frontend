export default function Logo({ className = "h-12 w-auto", ...props }) {
  return (
    <img
      src="/vora-logo.png"
      alt="Vora Realtors"
      width={160}
      height={64}
      className={`object-contain object-left ${className}`}
      {...props}
    />
  );
}
