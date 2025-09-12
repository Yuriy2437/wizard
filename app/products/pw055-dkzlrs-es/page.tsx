import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '7.2~18.2'],
  ['Heating Power Input Range (kW)', '1.38~4.65'],
  ['COP Range', '3.91~5.22'],
  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '7.2~16.2'],
  ['Heating Power Input Range (kW)', '1.54~4.58'],
  ['COP Range', '3.54~4.67'],
  ['Heated Water Output (L/H)', '348'],
  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '5.6~14.1'],
  ['Cooling Power Input Range (kW)', '1.80~5.38'],
  ['EER Range', '2.62~3.11'],
  ['Heated Water Output (L/H)', '348'],
  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 35°C',
    '',
  ],
  ['Rated heat output (kW)', '1220'],
  ['Seasonal Space Heating', '186,8%'],
  ['Seasonal Space Heating', '474'],
  ['ErP Level', 'A+++'],
  ['Sound pressure level', '41'],
  ['Sound power level (dB(A))', '57'],
  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 55°C',
    '',
  ],
  ['Rated heat output (kW)', '1216'],
  ['Seasonal Space Heating', '142,1%'],
  ['Seasonal Space Heating', '363'],
  ['ErP Level', 'A++'],
  ['Sound pressure level', '43'],
  ['Sound power level (dB(A))', '59'],
  ['Power Supply', '230V/1Ph/50Hz -60Hz'],
  ['Max. Power Input (kW)', '71'],
  ['Max. Current (A)', '325'],
  ['Fuse or Circuit Breaker (A)', '40'],
  ['Wire Diameter (mm2)', '6mm2'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m3/h)', '313'],
  ['Water Pressure Drop (max) kPa', '43'],
  ['Body Size (L/W/H) (mm)', '1080×480×1372'],
  ['Packaging Size (W*D*H) (carton)', '1100×500×1510'],
  ['Packaging Size (W*D*H) (plywood)', '1140×530×1520'],
  ['Net Weight (kg)', '165'],
  ['Loading Quantity (carton)', '22/46'],
  ['Loading Quantity (plywood)', '22/44'],
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

export default function ProductPW055ES() {
  return (
    <ProductPageTemplate
      title='PW055-DKZLRS-E/S'
      image={{ src: '/Image-4.jpg', alt: 'PW055-DKZLRS-E/S' }}
      specs={specs}
    />
  );
}
