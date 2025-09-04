import Link from 'next/link';
import Image from 'next/image';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '4.5~11.4'],
  ['Heating Power Input Range (kW)', '0.85~2.95'],
  ['COP Range', '3.86~5.29'],

  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '5.2~10.2'],
  ['Heating Power Input Range (kW)', '1.10~2.87'],
  ['COP Range', '3.55~4.71'],
  ['Heated Water Output (L/H)', '219'],

  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '3.3~8.2'],
  ['Cooling Power Input Range (kW)', '1.08~3.07'],
  ['EER Range', '2.67~3.06'],
  ['Heated Water Output (L/H)', '219'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 35°C',
    '',
  ],
  ['Rated heat output (kW)', '761'],
  ['Seasonal Space Heating', '181,6%'],
  ['Seasonal Space Heating', '462'],
  ['ErP Level', 'A+++'],
  ['Sound pressure level', '43'],
  ['Sound power level (dB(A))', '58'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 55°C',
    '',
  ],
  ['Rated heat output (kW)', '810'],
  ['Seasonal Space Heating', '135,8%'],
  ['Seasonal Space Heating', '347'],
  ['ErP Level', 'A++'],
  ['Sound pressure level', '42'],
  ['Sound power level (dB(A))', '57'],

  ['Power Supply', '230V/1Ph/50Hz -60Hz'],
  ['Max. Power Input (kW)', '41'],
  ['Max. Current (A)', '78'],
  ['Fuse or Circuit Breaker (A)', '16'],
  ['Wire Diameter (mm2)', '2.5mm ²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m3/h)', '196'],
  ['Water Pressure Drop (max) kPa', '35'],
  ['Body Size (L/W/H) (mm)', '1080×460×960'],
  ['Packaging Size (W*D*H) (carton)', '1100×490×1110'],
  ['Packaging Size (W*D*H) (plywood)', '1140×520×1120'],
  ['Net Weight (kg)', '120'],
  ['Loading Quantity (carton)', '48/96'],
  ['Loading Quantity (plywood)', '44/88'],
  ['IP Grade (Level of Protection)', 'IPX4'],
  ['Anti-electric Shock Rate', 'I'],
  ['Refrigerant', 'R290'],
  ['Compressor Brand', 'HIGHLY'],
  ['Water Pump Brand', 'SHIMGE'],
  ['Operation Ambient Temp. (℃)', '-25~43 ℃'],
  ['Operating Water Temperature (℃)', '28~65 ℃(DHW)'],
  ['Operating Water Temperature (℃)', '15~70 ℃(Heating)'],
  ['Operating Water Temperature (℃)', '7~35℃(Cooling)'],
];

export default function ProductPW040E() {
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
        PW040-DKZLRS-E
      </div>
      <Image
        src='/Image-7.jpg'
        alt='PW040-DKZLRS-E'
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
