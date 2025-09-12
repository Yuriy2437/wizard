import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '2.5~6.0'],
  ['Heating Power Input Range (kW)', '0.48~1.44'],
  ['COP Range', '4.16~5.21'],

  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '2.6~5.3'],
  ['Heating Power Input Range (kW)', '0.56~1.50'],
  ['COP Range', '3.53~4.64'],
  ['Heated Water Output (L/H)', '114'],

  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '1.7~4.2'],
  ['Cooling Power Input Range (kW)', '0.53~1.37'],
  ['EER Range', '3.06~3.20'],
  ['Heated Water Output (L/H)', '114'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 35°C',
    '',
  ],
  ['Rated heat output (kW)', '419'],
  ['Seasonal Space Heating', '198,1%'],
  ['Seasonal Space Heating', '503'],
  ['ErP Level', 'A+++'],
  ['Sound pressure level', '35'],
  ['Sound power level (dB(A))', '49'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 55°C',
    '',
  ],
  ['Rated heat output (kW)', '415'],
  ['Seasonal Space Heating', '144,5%'],
  ['Seasonal Space Heating', '369'],
  ['ErP Level', 'A++'],
  ['Sound pressure level', '35'],
  ['Sound power level (dB(A))', '49'],

  ['Power Supply', '230V/1Ph/50Hz -60Hz'],
  ['Max. Power Input (kW)', '25'],
  ['Max. Current (A)', '115'],
  ['Fuse or Circuit Breaker (A)', '16'],
  ['Wire Diameter (mm2)', '2.5mm ²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m3/h)', '103'],
  ['Water Pressure Drop (max) kPa', '25'],
  ['Body Size (L/W/H) (mm)', '1080×440×761'],
  ['Packaging Size (W*D*H) (carton)', '1105×470×900'],
  ['Packaging Size (W*D*H) (plywood)', '1135×500×910'],
  ['Net Weight (kg)', '95'],
  ['Loading Quantity (carton)', '48/100'],
  ['Loading Quantity (plywood)', '44/96'],
  ['IP Grade (Level of Protection)', 'IPX4'],
  ['Anti-electric Shock Rate', 'I'],
  ['Refrigerant', 'R290'],
  ['Compressor Brand', 'HIGHLY'],
  ['Water Pump Brand', 'SHINHOO'],
  ['Operation Ambient Temp. (℃)', '-25~43 ℃'],
  ['Operating Water Temperature (℃)', '28~65 ℃(DHW)'],
  ['Operating Water Temperature (℃)', '15~70 ℃(Heating)'],
  ['Operating Water Temperature (℃)', '7~35℃(Cooling)'],
];

export default function ProductPW020() {
  return (
    <ProductPageTemplate
      title='PW020-DKZLRS-E/S'
      image={{ src: '/Image-4.jpg', alt: 'PW020-DKZLRS-E/S' }}
      specs={specs}
    />
  );
}
