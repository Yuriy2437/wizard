import Link from 'next/link';
import Image from 'next/image';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 30/35°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '12.8-35.0'],
  ['Heating Power Input Range (kW)', '2.71-8.19'],
  ['COP Range', '4.27-4.72'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 15/55°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '13.6-22.6'],
  ['Heating Power Input Range (kW)', '3.19-6.15'],
  ['COP Range', '3.67-4.26'],
  ['Heated Water Output (L/H)', '485'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24°C, Water Temp.(In/Out): 12/7°C',
    '',
  ],
  ['Cooling Capacity Range (kW)', '8.13-24.6'],
  ['Cooling Power Input Range (kW)', '2.52-8.95'],
  ['EER Range', '2.75-3.23'],
  ['Power Supply', '380V/3Ph/50-60Hz'],
  ['Max. Power Input (kW)', '12'],
  ['Max. Current (A)', '22.8'],
  ['Fuse or Circuit Breaker (A)', '32'],
  ['Wire Diameter (mm²)', '6mm²'],
  ['Diameter of Pipe (mm)', 'DN32'],
  ['Water Flow (m³/h)', '60'],
  ['Water Pressure Drop (max) kPa', '55'],
  ['Net Weight (kg)', '240'],
  ['Body Size (W*D*H) (mm)', '1160×500×1580'],
  ['Packing Size (W*D*H) (carton)', '1200×510×1720'],
  ['Packing Size (W*D*H) (plywood)', '1230×540×1730'],
  ['Loading Quantity (carton)', '19/43'],
  ['Loading Quantity (plywood)', '18/40'],
  ['IP Grade (Level of Protection)', 'IPX4'],
  ['Anti-electric Shock Rate', '1'],
  ['Refrigerant', 'R32'],
  ['Compressor Brand', 'Panasonic'],
  ['Water pump Brand', 'AWMT'],
  ['Operation Ambient Temp. (°C)', '-30-43°C'],
  ['Operating Water Temperature (°C)', '28-55°C(DHW)'],
  ['Operating Water Temperature (°C)', '15-55°C(Heating)'],
  ['Operating Water Temperature (°C)', '7-30°C(Cooling)'],
];

export default function ProductPW100S() {
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
        PW100-DKZLRS-S
      </div>
      <Image
        src='/Image-15.jpg'
        alt='PW100-DKZLRS-S'
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
