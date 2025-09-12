import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '4.5~11.4'],
  ['Heating Power Input Range (kW)', '0.85~2.95'],
  ['COP Range', '3.86~5.29'],

  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '5.2~10.2'],
  ['Heating Power Input Range (kW)', '1.10~2.87'],
  ['COP Range', '3.55~4.71'],
  ['Heated Water Output (L/H)', '219'],

  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '3.3~8.2'],
  ['Cooling Power Input Range (kW)', '1.08~3.07'],
  ['EER Range', '2.67~3.06'],
  ['Heated Water Output (L/H)', '219'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 35°C',
    '',
  ],
  ['Rated heat output (kW)', '789'],
  ['Seasonal Space Heating', '181,0%'],
  ['Seasonal Space Heating', '460'],
  ['ErP Level', 'A+++'],
  ['Sound pressure level', '43'],
  ['Sound power level (dB(A))', '57'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 55°C',
    '',
  ],
  ['Rated heat output (kW)', '870'],
  ['Seasonal Space Heating', '137,0%'],
  ['Seasonal Space Heating', '350'],
  ['ErP Level', 'A++'],
  ['Sound pressure level', '47'],
  ['Sound power level (dB(A))', '61'],

  ['Power Supply', '230V/1Ph/50Hz -60Hz'],
  ['Max. Power Input (kW)', '41'],
  ['Max. Current (A)', '188'],
  ['Fuse or Circuit Breaker (A)', '25'],
  ['Wire Diameter (mm2)', '2'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m3/h)', '196'],
  ['Water Pressure Drop (max) kPa', '35'],
  ['Body Size (L/W/H) (mm)', '1080×460×960'],
  ['Packaging Size (W*D*H) (carton)', '1100×490×1110'],
  ['Packaging Size (W*D*H) (plywood)', '1140×520×1120'],
  ['Net Weight (kg)', '120'],
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

export default function ProductPW040ES() {
  return (
    <ProductPageTemplate
      title='PW040-DKZLRS-ES'
      image={{ src: '/Image-6.jpg', alt: 'PW040-DKZLRS-ES' }}
      specs={specs}
    />
  );
}
