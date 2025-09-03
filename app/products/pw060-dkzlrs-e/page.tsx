import Link from 'next/link';
import Image from 'next/image';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '8.8~22.0'],
  ['Heating Power Input Range (kW)', '1.68~5.77'],
  ['COP Range', '3.81~5.24'],

  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '7.8~17.6'],
  ['Heating Power Input Range (kW)', '1.67~5.01'],
  ['COP Range', '3.51~4.66'],
  ['Heated Water Output (L/H)', '377'],

  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '6.2~15.3'],
  ['Cooling Power Input Range (kW)', '1.99~5.60'],
  ['EER Range', '2.73~3.12'],
  ['Heated Water Output (L/H)', '377'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 35°C',
    '',
  ],
  ['Rated heat output (kW)', '1397'],
  ['Seasonal Space Heating', '184,6%'],
  ['Seasonal Space Heating', '469'],
  ['ErP Level', 'A+++'],
  ['Sound pressure level', '46'],
  ['Sound power level (dB(A))', '43'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 55°C',
    '',
  ],
  ['Rated heat output (kW)', '1347'],
  ['Seasonal Space Heating', '138,9%'],
  ['Seasonal Space Heating', '355'],
  ['ErP Level', 'A++'],
  ['Sound pressure level', '43'],
  ['Sound power level (dB(A))', '58'],

  ['Power Supply', '230V/1Ph/50Hz -60Hz'],
  ['Max. Power Input (kW)', '76'],
  ['Max. Current (A)', '143'],
  ['Fuse or Circuit Breaker (A)', '20'],
  ['Wire Diameter (mm2)', '4mm²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m3/h)', '378'],
  ['Water Pressure Drop (max) kPa', '45'],
  ['Body Size (L/W/H) (mm)', '1080×480×1372'],
  ['Packaging Size (W*D*H) (carton)', '1100×500×1510'],
  ['Packaging Size (W*D*H) (plywood)', '1140×530×1520'],
  ['Net Weight (kg)', '170'],
  ['Loading Quantity (carton)', '22/46'],
  ['Loading Quantity (plywood)', '22/44'],
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

export default function ProductPW060E() {
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
        PW060-DKZLRS-E
      </div>
      <Image
        src='/Image-6.jpg'
        alt='PW060-DKZLRS-E'
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
                  }}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
        }
        .v-btn:hover {
          background: #009487;
        }
      `}</style>
    </main>
  );
}
