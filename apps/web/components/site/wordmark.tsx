import Link from 'next/link'

export function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Vold home">
      <svg
        width="22"
        height="22"
        viewBox="0 0 247 247"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect
          x="122.667"
          y="-6.21313"
          width="87.4328"
          height="87.4328"
          rx="15"
          transform="rotate(45 122.667 -6.21313)"
          className="fill-foreground"
        />
        <rect
          x="191.149"
          y="62.269"
          width="87.4328"
          height="87.4328"
          rx="15"
          transform="rotate(45 191.149 62.269)"
          className="fill-foreground"
        />
        <rect
          x="55.6111"
          y="60.8423"
          width="87.4328"
          height="87.4328"
          rx="15"
          transform="rotate(45 55.6111 60.8423)"
          className="fill-foreground"
        />
        <rect
          x="124.093"
          y="129.325"
          width="87.4328"
          height="87.4328"
          rx="15"
          transform="rotate(45 124.093 129.325)"
          className="fill-foreground"
        />
      </svg>
      <span className="text-[19px] font-semibold tracking-[-0.07em] text-foreground">VOLD</span>
    </Link>
  )
}
