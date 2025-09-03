import Link from 'next/link';
import Image from 'next/image';

// 1. Описываем тип модели
type ProductModel = {
  img: string;
  code: string;
  range: string;
  slug: string;
};

const wizardMiniLogo = '/Wizard-Logo-little.jpg';

const modelsR290: ProductModel[] = [
  {
    img: 'Image-4.jpg',
    code: 'PW020 - DKZLRS -E/S',
    range: '2-6 kW',
    slug: 'pw020-dkzlrs-es',
  },
  {
    img: 'Image-5.jpg',
    code: 'PW030 - DKZLRS -E/S',
    range: '3-8 kW',
    slug: 'pw030-dkzlrs-es',
  },
  {
    img: 'Image-6.jpg',
    code: 'PW040 - DKZLRS -E/S',
    range: '4-11 kW',
    slug: 'pw040-dkzlrs-es',
  },
  {
    img: 'Image-7.jpg',
    code: 'PW050 - DKZLRS -E/S',
    range: '6-15 kW',
    slug: 'pw050-dkzlrs-es',
  },
  {
    img: 'Image-4.jpg',
    code: 'PW055 - DKZLRS -E/S',
    range: '7-18 kW',
    slug: 'pw055-dkzlrs-es',
  },
  {
    img: 'Image-5.jpg',
    code: 'PW060 - DKZLRS -E/S',
    range: '9-22 kW',
    slug: 'pw060-dkzlrs-es',
  },
  {
    img: 'Image-6.jpg',
    code: 'PW070 - DKZLRS -E/S',
    range: '10-24 kW',
    slug: 'pw070-dkzlrs-es',
  },
  {
    img: 'Image-7.jpg',
    code: 'PW040 - DKZLRS -E',
    range: '4-11 kW',
    slug: 'pw040-dkzlrs-e',
  },
  {
    img: 'Image-4.jpg',
    code: 'PW050 - DKZLRS -E',
    range: '6-15 kW',
    slug: 'pw050-dkzlrs-e',
  },
  {
    img: 'Image-5.jpg',
    code: 'PW055 - DKZLRS -E',
    range: '7-18 kW',
    slug: 'pw055-dkzlrs-e',
  },
  {
    img: 'Image-6.jpg',
    code: 'PW060 - DKZLRS -E',
    range: '9-22 kW',
    slug: 'pw060-dkzlrs-e',
  },
  {
    img: 'Image-7.jpg',
    code: 'PW070 - DKZLRS -E',
    range: '10-24 kW',
    slug: 'pw070-dkzlrs-e',
  },
];

const modelsR32: ProductModel[] = [
  {
    img: 'Image-10.jpg',
    code: 'PW050-DKZLRS-S',
    range: '6-18 kW',
    slug: 'pw050-dkzlrs-s',
  },
  {
    img: 'Image-11.jpg',
    code: 'PW060-DKZLRS-S',
    range: '8-23 kW',
    slug: 'pw060-dkzlrs-s',
  },
  {
    img: 'Image-12.jpg',
    code: 'PW080-DKZLRS-S',
    range: '10-28 kW',
    slug: 'pw080-dkzlrs-s',
  },
  {
    img: 'Image-15.jpg',
    code: 'PW100-DKZLRS-S',
    range: '13-35 kW',
    slug: 'pw100-dkzlrs-s',
  },
  {
    img: 'Image-16.jpg',
    code: 'PW030-DKZLRS-R/S',
    range: '3-8 kW',
    slug: 'pw030-dkzlrs-rs',
  },
  {
    img: 'Image-18.jpg',
    code: 'PW040-DKZLRS-S',
    range: '4-13 kW',
    slug: 'pw040-dkzlrs-s',
  },
];

const darkBlue = '#13356b';
const sectionGap = 36;

// 2. Явно типизируем пропсы в CardGrid
function CardGrid({ models }: { models: ProductModel[] }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1100,
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        alignItems: 'center',
      }}
    >
      {Array.from({ length: Math.ceil(models.length / 3) }).map(
        (_, groupIndex) => (
          <div
            key={groupIndex}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              width: '100%',
              maxWidth: '1100px',
            }}
          >
            {models
              .slice(groupIndex * 3, groupIndex * 3 + 3)
              .map((model: ProductModel) => (
                <div
                  key={model.slug}
                  style={{
                    background: '#fffbe6',
                    borderRadius: '28px',
                    boxShadow: '0 2px 24px rgba(0,0,0,.06)',
                    width: 320,
                    minHeight: 370,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px 14px 10px',
                    position: 'relative',
                  }}
                >
                  <Link
                    href={`/products/${model.slug}`}
                    // target='_blank'
                    style={{ width: '100%' }}
                  >
                    <Image
                      src={`/${model.img}`}
                      alt={model.code}
                      width={450}
                      height={300}
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'contain',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        background: '#f7e9bc',
                      }}
                    />
                  </Link>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 12,
                      }}
                    >
                      <Image
                        src={wizardMiniLogo}
                        alt='Wizard Energy'
                        width={82}
                        height={52}
                        style={{ marginRight: 12 }}
                      />
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: '1.07rem',
                          color: '#333',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {model.code}
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: 4,
                        marginBottom: 0,
                        fontSize: '1rem',
                        color: '#1e1e1e',
                      }}
                    >
                      {model.range}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )
      )}
    </div>
  );
}

export default function Products() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '0 0 40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          color: '#d00015',
          fontWeight: 'bold',
          fontSize: '2.1rem',
          marginTop: '14px',
          marginBottom: '14px',
          textAlign: 'center',
          letterSpacing: '1px',
        }}
      >
        AIR-TO-WATER HEAT PUMPS
      </div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          margin: '0 0 0 0',
        }}
      >
        <Link className='v-btn' href='/'>
          Home
        </Link>
        <Link className='v-btn' href='/products'>
          Products
        </Link>
        <Link className='v-btn' href='/technology-and-projects'>
          Technology and Projects
        </Link>
        <Link className='v-btn' href='/contacts'>
          Contacts
        </Link>
      </nav>
      <div
        style={{
          color: darkBlue,
          fontWeight: 600,
          fontSize: '1.25rem',
          textAlign: 'center',
          marginTop: sectionGap,
          marginBottom: sectionGap,
          letterSpacing: '0.5px',
        }}
      >
        R290 FULL-INVERTER HEAT PUMP for cooling, heating and DHW
      </div>
      <CardGrid models={modelsR290} />
      <div
        style={{
          color: darkBlue,
          fontWeight: 600,
          fontSize: '1.25rem',
          textAlign: 'center',
          marginTop: sectionGap,
          marginBottom: sectionGap,
          letterSpacing: '0.5px',
        }}
      >
        R32 FULL-INVERTER EVI HEAT PUMP for cooling, heating and DHW
      </div>
      <CardGrid models={modelsR32} />
      <div style={{ height: '40px' }} />
      <style>{`
        .v-btn {
          background: #00a79d;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: background .2s;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(0,0,0,.05);
          cursor: pointer;
        }
        .v-btn:hover {
          background: #009487;
        }
      `}</style>
    </main>
  );
}
