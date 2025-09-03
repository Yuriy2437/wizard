import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Wizard',
  description: 'Ваша страница Wizard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body
        style={{
          margin: 0,
          fontFamily: 'sans-serif',
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #faecc6 0%, #f7e9bc 100%)',
          overflowY: 'auto',
        }}
      >
        {/* Волнистый фон */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <svg
            viewBox='0 0 1440 120'
            width='100%'
            height='120'
            preserveAspectRatio='none'
            style={{ display: 'block' }}
          >
            <path
              d='M0,96L60,80C120,64,240,32,360,42.7C480,53,600,107,720,133.3C840,160,960,160,1080,133.3C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
              fill='#77d39a'
              fillOpacity='0.65'
            />
          </svg>
        </div>
        {/* Центрированный логотип */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: '0px',
              marginBottom: '0px',
            }}
          >
            <Image
              src='/Wizard-Logo-little.jpg'
              alt='Wizard Logo'
              width={288}
              height={200}
              priority
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
