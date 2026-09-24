import { ImageResponse } from 'next/og'

export const alt = 'Vold — Keep business moving'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: -420,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 900,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(76,141,255,0.55) 0%, rgba(76,141,255,0.16) 45%, rgba(0,0,0,0) 70%)',
            display: 'flex',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <svg width="60" height="60" viewBox="-6.22 -6.22 259.19 259.19" fill="none">
            <rect
              x="122.667"
              y="-6.21313"
              width="87.4328"
              height="87.4328"
              rx="15"
              transform="rotate(45 122.667 -6.21313)"
              fill="white"
            />
            <rect
              x="191.149"
              y="62.269"
              width="87.4328"
              height="87.4328"
              rx="15"
              transform="rotate(45 191.149 62.269)"
              fill="white"
            />
            <rect
              x="55.6111"
              y="60.8423"
              width="87.4328"
              height="87.4328"
              rx="15"
              transform="rotate(45 55.6111 60.8423)"
              fill="white"
            />
            <rect
              x="124.093"
              y="129.325"
              width="87.4328"
              height="87.4328"
              rx="15"
              transform="rotate(45 124.093 129.325)"
              fill="white"
            />
          </svg>
          <span style={{ fontSize: 52, fontWeight: 600, color: 'white', letterSpacing: -2 }}>
            VOLD
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 44,
            fontSize: 60,
            fontWeight: 600,
            color: 'white',
            letterSpacing: -2,
          }}
        >
          Keep&nbsp;<span style={{ color: '#4c8dff' }}>business moving.</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
