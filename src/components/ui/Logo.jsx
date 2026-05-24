export default function Logo({
  className = "h-14 w-auto sm:h-16 md:h-[4.5rem]",
  ...props
}) {
  return (
    <img
      src="/vora-logo.png"
      alt="Vora Realtors"
      width={240}
      height={96}
      className={`object-contain object-left ${className}`}
      {...props}
    />
  );
}
