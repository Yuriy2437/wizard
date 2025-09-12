import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 30/35°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '4.40-13.00'],
  ['Heating Power Input Range (kW)', '0.95~3.12'],
  ['COP Range', '4.17-4.63'],

  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 15/55°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '3.52-10.50'],
  ['Heating Power Input Range (kW)', '0.93-3.49'],
  ['COP Range', '3.01-3.78'],
  ['Heated Water Output (L/H)', '225'],

  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24°C, Water Temp.(In/Out): 12/7°C',
    '',
  ],
  ['Cooling Capacity Range (kW)', '2.80-8.20'],
  ['Cooling Power Input Range (kW)', '0.90-3.41'],
  ['EER Range', '2.40~3.11'],

  ['Power Supply', '230V/1Ph/50Hz/60'],
  ['Max. Power Input (kW)', '4.5'],
  ['Max. Current (A)', '8.5'],
  ['Fuse or Circuit Breaker (A)', '16'],
  ['Wire Diameter (mm²)', '2.5mm²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m³/h)', '22'],
  ['Water Pressure Drop (max) kPa', '35'],
  ['Net Weight (kg)', '115'],
  ['Body Size (W*D*H) (mm)', '1100×475×970'],
  ['Packing Size (W*D*H) (carton)', '1120×490×1110'],
  ['Packing Size (W*D*H) (plywood)', '1150×520×1120'],
  ['Loading Quantity (carton)', '48/96'],
  ['Loading Quantity (plywood)', '44/88'],
  ['IP Grade (Level of Protection)', 'IPX4'],
  ['Anti-electric Shock Rate', '1'],
  ['Refrigerant', 'R32'],
  ['Compressor Brand', 'Panasonic'],
  ['Water pump Brand', 'SHIMGE'],
  ['Operation Ambient Temp. (°C)', '-30-43°C'],
  ['Operating Water Temperature (°C)', '28-55°C(DHW)'],
  ['Operating Water Temperature (°C)', '15-55°C(Heating)'],
  ['Operating Water Temperature (°C)', '7-30°C(Cooling)'],
];

export default function ProductPW040S() {
  return (
    <ProductPageTemplate
      title='PW040-DKZLRS-S'
      image={{ src: '/Image-18.jpg', alt: 'PW040-DKZLRS-S' }}
      specs={specs}
    />
  );
}
