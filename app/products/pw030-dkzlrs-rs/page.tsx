import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 30/35°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '2.8-8.40'],
  ['Heating Power Input Range (kW)', '0.62~1.97'],
  ['COP Range', '4.26-4.52'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6°C, Water Temp.(In/Out): 15/55°C',
    '',
  ],
  ['Heating Capacity Range (kW)', '2.3-6.81'],
  ['Heating Power Input Range (kW)', '0.61-2.23'],
  ['COP Range', '3.05-3.77'],
  ['Heated Water Output (L/H)', '146'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24°C, Water Temp.(In/Out): 12/7°C',
    '',
  ],
  ['Cooling Capacity Range (kW)', '2.1-6.22'],
  ['Cooling Power Input Range (kW)', '0.67-2.28'],
  ['EER Range', '2.73-3.13'],
  ['Power Supply', '230V/1Ph/50Hz/60'],
  ['Max. Power Input (kW)', '3.6'],
  ['Max. Current (A)', '16.5'],
  ['Fuse or Circuit Breaker (A)', '25'],
  ['Wire Diameter (mm²)', '4mm²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m³/h)', '15'],
  ['Water Pressure Drop (max) kPa', '30'],
  ['Net Weight (kg)', '105'],
  ['Body Size (W*D*H) (mm)', '970×475×820'],
  ['Packing Size (W*D*H) (carton)', '1028×490×960'],
  ['Packing Size (W*D*H) (plywood)', '1060×520×974'],
  ['Loading Quantity (carton)', '48/96'],
  ['Loading Quantity (plywood)', '44/88'],
  ['IP Grade (Level of Protection)', 'IPX4'],
  ['Anti-electric Shock Rate', '1'],
  ['Refrigerant', 'R32'],
  ['Compressor Brand', 'Panasonic'],
  ['Water pump Brand', 'SHIMGE'],
  // Ниже – эксплуатационные параметры для всех моделей в группе
  ['Operation Ambient Temp. (°C)', '-30-43°C'],
  ['Operating Water Temperature (°C)', '28-55°C(DHW)'],
  ['Operating Water Temperature (°C)', '15-55°C(Heating)'],
  ['Operating Water Temperature (°C)', '7-30°C(Cooling)'],
];

export default function ProductPW030RS() {
  return (
    <ProductPageTemplate
      title='PW030-DKZLRS-R/S'
      image={{ src: '/Image-16.jpg', alt: 'PW030-DKZLRS-R/S' }}
      specs={specs}
    />
  );
}
