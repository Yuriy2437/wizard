import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '7.5~23.0'],
  ['Heating Power Input Range (kW)', '1.61~5.38'],
  ['COP Range', '4.28~4.66'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '6.1~18.5'],
  ['Heating Power Input Range (kW)', '1.61~6.12'],
  ['COP Range', '3.02~3.79'],
  ['Heated Water Output (L/H)', '396'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '4.73~14.6'],
  ['Cooling Power Input Range (kW)', '1.47~5.29'],
  ['EER Range', '2.76~3.22'],
  ['Power Supply', '380V/3Ph/50~60Hz'],
  ['Max. Power Input (kW)', '7.35'],
  ['Max. Current (A)', '14'],
  ['Fuse or Circuit Breaker (A)', '25'],
  ['Wire Diameter (mm²)', '4mm²'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m³/h)', '39'],
  ['Water Pressure Drop (max) kPa', '45'],
  ['Net Weight (kg)', '165'],
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

export default function ProductPW060S() {
  return (
    <ProductPageTemplate
      title='PW060-DKZLRS-S'
      image={{ src: '/Image-11.jpg', alt: 'PW060-DKZLRS-S' }}
      specs={specs}
    />
  );
}
