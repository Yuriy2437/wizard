import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 30/35°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '10.2-28.0'],
  ['Heating Power Input Range (kW)', '2.17-6.56'],
  ['COP Range', '4.27-4.70'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 15/55°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '12.3-20.4'],
  ['Heating Power Input Range (kW)', '2.9-5.57'],
  ['COP Range', '3.66-4.24'],
  ['Heated Water Output (L/H)', '437'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24°C, Water Temp.(In/Out): 12/7°C',
    '',
  ],
  ['Cooling Capacity Range (kW)', '6.54-19.8'],
  ['Cooling Power Input Range (kW)', '2.02-7.17'],
  ['EER Range', '2.76-3.24'],
  ['Power Supply', '380V/3Ph/50-60Hz'],
  ['Max. Power Input (kW)', '10.1'],
  ['Max. Current (A)', '19'],
  ['Fuse or Circuit Breaker (A)', '32'],
  ['Wire Diameter (mm²)', '6mm²'],
  ['Diameter of Pipe (mm)', 'DN32'],
  ['Water Flow (m³/h)', '48'],
  ['Water Pressure Drop (max) kPa', '50'],
  ['Net Weight (kg)', '220'],
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

export default function ProductPW080S() {
  return (
    <ProductPageTemplate
      title='PW080-DKZLRS-S'
      image={{ src: '/Image-12.jpg', alt: 'PW080-DKZLRS-S' }}
      specs={specs}
    />
  );
}
