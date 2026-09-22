import Link from 'next/link'

export function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Vold home">
      <svg
        width="22"
        height="22"
        viewBox="0 0 200 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M95.5279 1.05565C98.3431 -0.351992 101.657 -0.351989 104.472 1.05565L194.472 46.0557C197.86 47.7496 200 51.2122 200 54.9999V142.639C200 146.427 197.86 149.89 194.472 151.584L104.472 196.584C101.657 197.991 98.3431 197.991 95.5279 196.584L5.52786 151.584C2.14002 149.89 0 146.427 0 142.639V54.9999C0 51.2122 2.14002 47.7496 5.52786 46.0556L95.5279 1.05565Z"
          className="fill-foreground"
        />
        <path
          d="M100.992 24.9097L174.439 62.9959L173.349 136.988L98.8116 172.894L100.992 93.7085L26.4549 60.8156L100.992 24.9097Z"
          className="fill-background"
        />
      </svg>
      <span className="text-[19px] font-semibold tracking-[-0.07em] text-foreground">VOLD</span>
    </Link>
  )
}
