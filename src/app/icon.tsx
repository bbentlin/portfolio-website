import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 38,
            fontWeight: 900,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-0.05em',
          }}
        >
          BB
        </div>
      </div>
    ),
    { ...size }
  )
}