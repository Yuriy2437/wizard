import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '0 0 40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          color: '#d00015',
          fontWeight: 'bold',
          fontSize: '2.1rem',
          marginTop: '14px',
          marginBottom: '14px',
          textAlign: 'center',
          letterSpacing: '1px',
        }}
      >
        WIZARD HEAT PUMPS
      </div>
      <nav
        className='main-nav'
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          margin: '0 0 20px 0',
        }}
      >
        <Link className='v-btn' href='/'>
          Home
        </Link>
        <Link className='v-btn' href='/products'>
          Products
        </Link>
        <Link className='v-btn' href='/technology-and-projects'>
          Technology and Projects
        </Link>
        <Link className='v-btn' href='/contacts'>
          Contacts
        </Link>
      </nav>
      <div
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '1120px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 32px',
        }}
      >
        <div
          style={{
            background: '#fffbe6',
            borderRadius: '36px',
            boxShadow: '0 6px 32px rgba(0,0,0,0.07)',
            width: '100%',
            maxWidth: '1000px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <iframe
            src='https://www.youtube.com/embed/mre9QiFF640'
            frameBorder='0'
            allow='fullscreen'
            allowFullScreen
            width='1000'
            height='562'
            style={{
              display: 'block',
              width: '100%',
              height: '56vw',
              maxWidth: '1000px',
              maxHeight: '562px',
              minHeight: '300px',
              borderRadius: '32px',
              background: '#fffbe6',
            }}
          />
        </div>
      </div>
      <div style={{ height: '48px' }} />
      <style>{`
        .v-btn {
          background: #00a79d;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: background .2s;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(0,0,0,.05);
          cursor: pointer;
          margin: 0;
        }
        .v-btn:hover {
          background: #009487;
        }
        .main-nav {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 32px;
          margin-bottom: 20px;
        }
        @media (max-width: 700px) {
          .main-nav {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center !important;
          }
          .v-btn {
            width: 90vw;
            max-width: 370px;
            margin: 0 auto;
            display: block;
          }
          iframe {
            height: 48vw !important;
            min-height: 230px !important;
            max-height: 300px !important;
          }
        }
      `}</style>
    </main>
  );
}
