import Link from 'next/link';

export default function TechnologyAndProjects() {
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
      {/* Красный заголовок */}
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
        ENERGY-EFFICIENT TECHNICAL SOLUTION
      </div>
      <nav
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
            minHeight: '300px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
          }}
        >
          {/* Встраиваем PDF-файл */}
          <iframe
            src='/Presentation_of_an_energy-efficient_technical_solution.pdf'
            width='100%'
            height='600px'
            style={{
              border: 'none',
              borderRadius: '24px',
              background: '#fff',
              boxShadow: '0 2px 24px rgba(0,0,0,0.04)',
            }}
            title='PDF Presentation'
            allowFullScreen
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
        }
        .v-btn:hover {
          background: #009487;
        }
      `}</style>
    </main>
  );
}
