import ProductPageTemplate from '../ProductPageTemplate';

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
    <ProductPageTemplate
      title='PW050-DKZLRS-S'
      image={{ src: '/Image-10.jpg', alt: 'PW050-DKZLRS-S' }}
      specs={specs}
    />
  );
}
