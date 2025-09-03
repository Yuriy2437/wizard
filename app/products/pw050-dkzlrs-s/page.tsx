import Link from 'next/link';
import Image from 'next/image';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '5.9~18.2'],
  ['Heating Power Input Range (kW)', '1.28~4.26'],
  ['COP Range', '4.27~4.61'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '4.80~14.72'],
  ['Heating Power Input Range (kW)', '1.25~4.75'],
  ['COP Range', '3.10~3.84'],
  ['Heated Water Output (L/H)', '315'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '3.81~11.53'],
  ['Cooling Power Input Range (kW)', '1.19~4.20'],
  ['EER Range', '2.75~3.20'],
  ['Power Supply', '380V/3Ph/50~60Hz'],
  ['Max. Power Input (kW)', '6.5'],
  ['Max. Current (A)', '12.3'],
  ['Fuse or Circuit Breaker (A)', '20'],
  ['Wire Diameter (mm²)', '4mm²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m³/h)', '32'],
  ['Water Pressure Drop (max) kPa', '40'],
  ['Net Weight (kg)', '160'],
  ['Body Size (W*D*H) (mm)', '1050×480×1380'],
  ['Packing Size (W*D*H) (carton)', '1100×490×1510'],
  ['Packing Size (W*D*H) (plywood)', '1120×520×1520'],
  ['Loading Quantity (carton)', '24/48'],
  ['Loading Quantity (plywood)', '22/44'],
  ['IP Grade (Level of Protection)', 'IPX4'],
  ['Anti-electric Shock Rate', 'I'],
  ['Refrigerant', 'R32'],
  ['Compressor Brand', 'Panasonic'],
  ['Water pump Brand', 'SHIMGE'],
  ['Operation Ambient Temp. (℃)', '-30~43 ℃'],
  ['Operating Water Temperature (℃)', '28~55℃(DHW)'],
  ['Operating Water Temperature (℃)', '15~55℃(Heating)'],
  ['Operating Water Temperature (℃)', '7~30℃(Cooling)'],
];

export default function ProductPW050S() {
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
        PW050-DKZLRS-S
      </div>
      <Image
        src='/Image-10.jpg'
        alt='PW050-DKZLRS-S'
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
