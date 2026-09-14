export default function Contours({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 60 420 Q 180 340 300 400 T 560 380 Q 680 360 760 430"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M 20 460 Q 160 400 320 450 T 600 420 Q 700 400 790 470"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M 0 500 Q 140 460 340 500 T 640 460 Q 730 445 800 510"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M 40 380 Q 200 280 340 350 T 580 330 Q 660 320 740 380"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M 90 340 Q 220 250 360 310 T 540 290 Q 610 285 690 335"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  );
}
