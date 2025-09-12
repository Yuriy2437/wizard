import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '3.3~8.3'],
  ['Heating Power Input Range (kW)', '0.64~2.18'],
  ['COP Range', '3.81~5.17'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '3.7~7.4'],
  ['Heating Power Input Range (kW)', '0.79~2.10'],
  ['COP Range', '3.52~4.69'],
  ['Heated Water Output (L/H)', '159'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '2.4~5.8'],
  ['Cooling Power Input Range (kW)', '0.79~2.19'],
  ['EER Range', '2.65~3.04'],
  ['Heated Water Output (L/H)', '159'],
  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 35°C',
    '',
  ],
  ['Rated heat output (kW)', '582'],
  ['Seasonal Space Heating', '182,7%'],
  ['Seasonal Space Heating', '464'],
  ['ErP Level', 'A+++'],
  ['Sound pressure level', '44'],
  ['Sound power level (dB(A))', '58'],
  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 55°C',
    '',
  ],
  ['Rated heat output (kW)', '559'],
  ['Seasonal Space Heating', '136,0%'],
  ['Seasonal Space Heating', '348'],
  ['ErP Level', 'A++'],
  ['Sound pressure level', '44'],
  ['Sound power level (dB(A))', '58'],
  ['Power Supply', '230V/1Ph/50Hz -60Hz'],
  ['Max. Power Input (kW)', '31'],
  ['Max. Current (A)', '142'],
  ['Fuse or Circuit Breaker (A)', '20'],
  ['Wire Diameter (mm2)', '2'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m3/h)', '143'],
  ['Water Pressure Drop (max) kPa', '30'],
  ['Body Size (L/W/H) (mm)', '1080×460×820'],
  ['Packaging Size (W*D*H) (carton)', '1100×490×960'],
  ['Packaging Size (W*D*H) (plywood)', '1140×520×974'],
  ['Net Weight (kg)', '112'],
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

export default function ProductPW030() {
  return (
    <ProductPageTemplate
      title='PW030-DKZLRS-E/S'
      image={{ src: '/Image-5.jpg', alt: 'PW030-DKZLRS-E/S' }}
      specs={specs}
    />
  );
}
