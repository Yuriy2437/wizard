import Link from 'next/link';
import Image from 'next/image';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 30/35°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '2.8-8.40'],
  ['Heating Power Input Range (kW)', '0.62~1.97'],
  ['COP Range', '4.26-4.52'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 15/55°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '2.3-6.81'],
  ['Heating Power Input Range (kW)', '0.61-2.23'],
  ['COP Range', '3.05-3.77'],
  ['Heated Water Output (L/H)', '146'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24°C, Water Temp.(In/Out): 12/7°C',
    '',
  ],
  ['Cooling Capacity Range (kW)', '2.1-6.22'],
  ['Cooling Power Input Range (kW)', '0.67-2.28'],
  ['EER Range', '2.73-3.13'],
  ['Power Supply', '230V/1Ph/50Hz/60'],
  ['Max. Power Input (kW)', '3.6'],
  ['Max. Current (A)', '16.5'],
  ['Fuse or Circuit Breaker (A)', '25'],
  ['Wire Diameter (mm²)', '4mm²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m³/h)', '15'],
  ['Water Pressure Drop (max) kPa', '30'],
  ['Net Weight (kg)', '105'],
  ['Body Size (W*D*H) (mm)', '970×475×820'],
  ['Packing Size (W*D*H) (carton)', '1028×490×960'],
  ['Packing Size (W*D*H) (plywood)', '1060×520×974'],
  ['Loading Quantity (carton)', '48/96'],
  ['Loading Quantity (plywood)', '44/88'],
  ['IP Grade (Level of Protection)', 'IPX4'],
  ['Anti-electric Shock Rate', '1'],
  ['Refrigerant', 'R32'],
  ['Compressor Brand', 'Panasonic'],
  ['Water pump Brand', 'SHIMGE'],
  // Ниже – эксплуатационные параметры для всех моделей в группе
  ['Operation Ambient Temp. (°C)', '-30-43°C'],
  ['Operating Water Temperature (°C)', '28-55°C(DHW)'],
  ['Operating Water Temperature (°C)', '15-55°C(Heating)'],
  ['Operating Water Temperature (°C)', '7-30°C(Cooling)'],
];

export default function ProductPW030RS() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #faecc6 0%, #f7e9bc 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      <nav
        className='main-nav'
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          margin: '30px 0 26px 0',
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
          color: '#d00015',
          fontWeight: 'bold',
          fontSize: '2.1rem',
          marginBottom: '32px',
          textAlign: 'center',
          letterSpacing: '1px',
        }}
      >
        PW030-DKZLRS-R/S
      </div>
      <Image
        src='/Image-16.jpg'
        alt='PW030-DKZLRS-R/S'
        width={600}
        height={400}
        style={{
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(0,0,0,.08)',
          marginBottom: '38px',
          background: '#fffbe6',
          objectFit: 'contain',
        }}
        priority
      />
      <div
        style={{
          width: '100%',
          maxWidth: 630,
          background: 'white',
          borderRadius: 24,
          boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
          padding: '36px 24px',
          marginBottom: '48px',
        }}
      >
        <div
          style={{
            color: '#212121',
            fontWeight: 700,
            fontSize: '1.38rem',
            letterSpacing: '0.5px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          SPECIFICATIONS
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {specs.map(([spec, value], i) => (
                <tr key={spec + i}>
                  <td
                    style={{
                      padding: '10px 16px 10px 0',
                      color: '#212121',
                      fontWeight: value === '' ? 600 : 500,
                      fontSize: '1.02rem',
                      borderBottom: '1px solid #ecdca4',
                      width: '58%',
                      minWidth: 150,
                    }}
                  >
                    {spec}
                  </td>
                  <td
                    style={{
                      padding: '10px 0',
                      color: '#212121',
                      fontWeight: 400,
                      fontSize: '1.02rem',
                      borderBottom: '1px solid #ecdca4',
                      minWidth: 80,
                    }}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
        }
        @media (max-width: 650px) {
          .specs-table, table {
            font-size: .98rem !important;
          }
          td {
            padding: 7px 4px 7px 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
