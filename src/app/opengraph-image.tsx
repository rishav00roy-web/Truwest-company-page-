import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'TruWest Mortgage | Bespoke Mortgage Strategy';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#161616',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div style={{ width: '40px', height: '2px', background: '#D9C19E', marginRight: '20px' }} />
          <span
            style={{
              color: '#D9C19E',
              fontSize: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              fontFamily: 'monospace',
            }}
          >
            TruWest Mortgage
          </span>
          <div style={{ width: '40px', height: '2px', background: '#D9C19E', marginLeft: '20px' }} />
        </div>

        <div
          style={{
            color: '#ffffff',
            fontSize: '84px',
            lineHeight: 1.1,
            fontWeight: 500,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span>Banks read tax returns.</span>
          <span style={{ color: '#D9C19E', fontStyle: 'italic', marginTop: '20px' }}>
            We read businesses.
          </span>
        </div>

        <div
          style={{
            color: '#B8B4AC',
            fontSize: '32px',
            marginTop: '60px',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            maxWidth: '800px',
            lineHeight: 1.5,
          }}
        >
          Bespoke mortgage strategy for self-employed borrowers, investors, and complex financial situations.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
