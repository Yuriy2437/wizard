import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '9.6~24.0'],
  ['Heating Power Input Range (kW)', '1.83~6.30'],
  ['COP Range', '3.81~5.24'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '8.8~19.6'],
  ['Heating Power Input Range (kW)', '1.89~5.60'],
  ['COP Range', '3.50~4.66'],
  ['Heated Water Output (L/H)', '421'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '6.9~17.0'],
  ['Cooling Power Input Range (kW)', '2.21~6.49'],
  ['EER Range', '2.62~3.12'],
  ['Heated Water Output (L/H)', '421'],
  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 35°C',
    '',
  ],
  ['Rated heat output (kW)', '1601'],
  ['Seasonal Space Heating', '189,9%'],
  ['Seasonal Space Heating', '482'],
  ['ErP Level', 'A+++'],
  ['Sound pressure level', '43'],
  ['Sound power level (dB(A))', '58'],
  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 55°C',
    '',
  ],
  ['Rated heat output (kW)', '1580'],
  ['Seasonal Space Heating', '140,0%'],
  ['Seasonal Space Heating', '357'],
  ['ErP Level', 'A++'],
  ['Sound pressure level', '43'],
  ['Sound power level (dB(A))', '58'],
  ['Power Supply', '230V/1Ph/50Hz -60Hz'],
  ['Max. Power Input (kW)', '78'],
  ['Max. Current (A)', '357'],
  ['Fuse or Circuit Breaker (A)', '40'],
  ['Wire Diameter (mm2)', '6mm²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m3/h)', '413'],
  ['Water Pressure Drop (max) kPa', '50'],
  ['Body Size (L/W/H) (mm)', '1160×480×1580'],
  ['Packaging Size (W*D*H) (carton)', '1200×510×1720'],
  ['Packaging Size (W*D*H) (plywood)', '1230×540×1730'],
  ['Net Weight (kg)', '220'],
  ['Loading Quantity (carton)', '19/43'],
  ['Loading Quantity (plywood)', '18/40'],
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

export default function ProductPW070ES() {
  return (
    <ProductPageTemplate
      title='PW070-DKZLRS-E/S'
      image={{ src: '/Image-6.jpg', alt: 'PW070-DKZLRS-E/S' }}
      specs={specs}
    />
  );
}
