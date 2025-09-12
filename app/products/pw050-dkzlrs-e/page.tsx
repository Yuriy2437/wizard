import ProductPageTemplate from '../ProductPageTemplate';

const specs: [string, string][] = [
  [
    'Heating Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 30/35℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '5.9~14.8'],
  ['Heating Power Input Range (kW)', '1.13~3.83'],
  ['COP Range', '3.86~5.22'],

  [
    'DHW Condition - Ambient Temp.(DB/WB): 7/6℃, Water Temp.(In/Out): 15/55℃',
    '',
  ],
  ['Heating Capacity Range (kW)', '6.6~13.2'],
  ['Heating Power Input Range (kW)', '1.41~3.73'],
  ['COP Range', '3.54~4.67'],
  ['Heated Water Output (L/H)', '283'],

  [
    'Cooling Condition - Ambient Temp.(DB/WB): 35/24℃, Water Temp.(In/Out): 12/7℃',
    '',
  ],
  ['Cooling Capacity Range (kW)', '4.3~10.8'],
  ['Cooling Power Input Range (kW)', '1.39~3.99'],
  ['EER Range', '2.71~3.10'],
  ['Heated Water Output (L/H)', '283'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 35°C',
    '',
  ],
  ['Rated heat output (kW)', '1027'],
  ['Seasonal Space Heating', '180,8%'],
  ['Seasonal Space Heating', '460'],
  ['ErP Level', 'A+++'],
  ['Sound pressure level', '44'],
  ['Sound power level (dB(A))', '41'],

  [
    'Space Heating (According to EN14825:2022) Average Climate Water Outlet 55°C',
    '',
  ],
  ['Rated heat output (kW)', '1217'],
  ['Seasonal Space Heating', '134,7%'],
  ['Seasonal Space Heating', '344'],
  ['ErP Level', 'A++'],
  ['Sound pressure level', '43'],
  ['Sound power level (dB(A))', '43'],

  ['Power Supply', '230V/1Ph/50Hz -60Hz'],
  ['Max. Power Input (kW)', '52'],
  ['Max. Current (A)', '98'],
  ['Fuse or Circuit Breaker (A)', '16'],
  ['Wire Diameter (mm2)', '2'],
  ['Diameter of Pipe (mm)', 'DN25'],
  ['Water Flow (m3/h)', '255'],
  ['Water Pressure Drop (max) kPa', '40'],
  ['Body Size (L/W/H) (mm)', '1080×480×1060'],
  ['Packaging Size (W*D*H) (carton)', '1100×500×1210'],
  ['Packaging Size (W*D*H) (plywood)', '1140×530×1220'],
  ['Net Weight (kg)', '138'],
  ['Loading Quantity (carton)', '22/92'],
  ['Loading Quantity (plywood)', '22/88'],
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

export default function ProductPW050E() {
  return (
    <ProductPageTemplate
      title='PW050-DKZLRS-E'
      image={{ src: '/Image-4.jpg', alt: 'PW050-DKZLRS-E' }}
      specs={specs}
    />
  );
}
