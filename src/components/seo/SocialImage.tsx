import { ReactNode } from 'react';

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = 'image/png';

interface SocialImageProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryStat?: string;
  secondaryStat?: string;
  footer?: string;
}

function StatChip({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: 9999,
        padding: '14px 24px',
        border: '1px solid rgba(15, 118, 110, 0.22)',
        background: 'rgba(255, 255, 255, 0.82)',
        color: '#115e59',
        fontSize: 28,
        fontWeight: 700,
      }}
    >
      {children}
    </div>
  );
}

export function SocialImage({
  eyebrow,
  title,
  description,
  primaryStat,
  secondaryStat,
  footer = 'ReviewCatLitter.com',
}: SocialImageProps) {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        background:
          'radial-gradient(circle at top left, rgba(13, 148, 136, 0.28), transparent 38%), radial-gradient(circle at bottom right, rgba(217, 179, 115, 0.28), transparent 32%), linear-gradient(135deg, #fcfaf6 0%, #f6f4ec 100%)',
        color: '#0f172a',
        padding: '54px 58px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          borderRadius: 36,
          border: '1px solid rgba(15, 118, 110, 0.14)',
          background: 'rgba(255, 255, 255, 0.82)',
          boxShadow: '0 30px 80px rgba(15, 23, 42, 0.08)',
          padding: '44px 46px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#0f766e',
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 72,
              lineHeight: 1.02,
              fontWeight: 800,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              lineHeight: 1.25,
              color: '#475569',
              maxWidth: 980,
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', gap: 16 }}>
            {primaryStat ? <StatChip>{primaryStat}</StatChip> : null}
            {secondaryStat ? <StatChip>{secondaryStat}</StatChip> : null}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 30,
              fontWeight: 700,
              color: '#0f766e',
            }}
          >
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}
