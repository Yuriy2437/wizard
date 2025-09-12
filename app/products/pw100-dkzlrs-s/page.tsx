import ProductPageTemplate from '../ProductPageTemplate';

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
    <ProductPageTemplate
      title='PW100-DKZLRS-S'
      image={{ src: '/Image-15.jpg', alt: 'PW100-DKZLRS-S' }}
      specs={specs}
    />
  );
}
