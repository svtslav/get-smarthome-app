import iconFeatureWifi from './assets/feature_wifi.svg';
import iconFeatureClimate from './assets/feature_climate.svg';
import iconFeatureEconomy from './assets/feature_economy.svg';
import iconFeatureManage from './assets/feature_manage.svg';
import iconFeatureSafety from './assets/feature_safety.svg';
import iconFeatureScripts from './assets/feature_scripts.svg';
import iconFeatureLight from './assets/feature_light.png';
import iconFeatureVoice from './assets/feature_voice.png';
import iconFeatureSecurity from './assets/feature_security.png';
import iconFeatureAudio from './assets/feature_audio.jpg';
import iconFeatureInstall from './assets/feature_install.jpg';
import iconFeatureApp from './assets/feature_app.png';
import iconVariantStart from './assets/card_start.svg';
import iconVariantLight from './assets/card_light.svg';
import iconVariantSafety from './assets/card_security.svg';

const features = [
  {
    id: 1,
    title: 'управление голосом',
    description: 'просто скажите «Привет! Я дома»',
    size: 'm',
    image: iconFeatureVoice,
    css: `
      background-size: 120px;
      background-position: center calc(100% - 20px);
      padding: 30px 30px 160px 30px;
    `
  },
  {
    id: 2,
    title: 'свет и шторы',
    description: 'меняйте интерьер одной командой с помощью освещения',
    size: 'l',
    image: iconFeatureLight,
    css: `
      background-size: contain;
      background-position: right -20px;
      padding: 30px 70px 30px 30px;
    `
  },
  {
    id: 3,
    title: 'безопасность',
    description: 'контролируйте доступ в дом где бы вы не находились',
    size: 'm',
    image: iconFeatureSecurity,
    css: `
      background-size: auto 200px;
      background-position: calc(100% - 10px) calc(100% - 30px);
      padding: 30px 100px 30px 30px;
  `
  },
  {
    id: 4,
    title: 'климат-контроль',
    description: 'создавайте идеальный климат в доме',
    size: 'm',
    image: iconFeatureClimate
  },
  {
    id: 5,
    title: 'защита',
    description: 'предотвращение чрезвычайных ситуаций в доме',
    size: 'm',
    image: iconFeatureSafety
  },
  {
    id: 6,
    title: 'мультимедиа',
    description: 'умная колонка будет громко играть на вечеринке, а также может показать кино и рассказать о погоде',
    size: 'l',
    image: iconFeatureAudio,
    css: `
      background-color: #eee;
      background-position: right bottom;
      background-size: contain;
      padding: 30px 200px 30px 30px;
  `
  },
];

const productFeatures = [
  {
    id: 1,
    title: 'никаких проводов',
    description: 'утройства и датчики работают по Wi-Fi',
    size: 'm',
    image: iconFeatureWifi
  },
  {
    id: 2,
    title: 'без шума и пыли',
    description: 'установка умного дома не требует ремонтных работ',
    size: 'l',
    image: iconFeatureInstall,
    css: `
    background-color: #e6e2d9;
    background-size: cover;
    background-position: -20px 75%;
    padding: 30px 30px 30px 150px;
  `
  },
  {
    id: 3,
    title: 'одно приложение',
    description: 'все умные устройства в одном месте',
    size: 'm',
    image: iconFeatureApp,
    css: `
      background-color: #fafafa;
      background-size: 180px;
      background-position: center bottom;
      padding: 30px 30px 30px 30px;
    `
  },
  {
    id: 4,
    title: 'сценарии',
    description: 'одна команда – несколько действий',
    size: 'l',
    image: iconFeatureScripts,
    slider: [
      {
        id: 1,
        title: '🥳 вечеринка',
        description: 'закрыть шторы, приглушить освещение, включить плэйлист для вечеринок'
      }
    ]
  },
  {
    id: 5,
    title: 'управление',
    description: 'управляейте домом через Интернет в любой точке мира',
    size: 'm',
    image: iconFeatureManage
  },
  {
    id: 6,
    title: 'экономия',
    description: 'сократите свои расходы на коммунальные услуги в доме',
    size: 'm',
    image: iconFeatureEconomy
  },
];

const steps = [
  {
    number: 1,
    title: 'оставьте заявку',
    description: 'наш технический специалист бесплатно проконсультирует и ответит на ваши вопросы'
  },
  {
    number: 2,
    title: 'обсудите детали',
    description: 'согласуйте проект, подпишите договор и выберите дату установки умного дома'
  },
  {
    number: 3,
    title: 'согласуйте установку',
    description: 'установим и настроим умный дом, продемонстрируем функционал. после этого подпишем акт выполнения работ'
  }
];

const variants = [
  {
    id: 'start',
    title: 'старт',
    description: 'стартовый комплект устройств и датчиков для демонстрации возможностей умного дома',
    icon: iconVariantStart,
    price: '14 990',
  },
  {
    id: 'light',
    title: 'освещение',
    description: 'набор для управления светом в доме',
    icon: iconVariantLight,
    price: '19 990',
  },
  {
    id: 'safety',
    title: 'безопасность',
    description: 'устройства и датчики для безопасности дома',
    icon: iconVariantSafety,
    price: '9 990',
  }
];

const navigation = [
  {
    title: 'контакты',
    items: [
      {
        text: '+7 (800) 555 35 35',
        title: 'телефон',
        link: 'tel: +78005553535',
      },
      {
        text: 'hi@get-smarthome.ru',
        title: 'электронная почта',
        link: 'mailto:hi@get-smarthome.ru',
      },
    ]
  },
  {
    title: 'документы',
    items: [
      {
        text: 'согласие на обработку персональных данных',
        title: 'согласие на обработку персональных данных',
        link: 'doc1.pdf',
      },
      {
        text: 'пользовательское соглашение',
        title: 'пользовательское соглашение',
        link: 'doc2.pdf',
      },
      {
        text: 'договор об оказании услуг',
        title: 'договор об оказании услуг',
        link: 'doc3.pdf',
      }
    ]
  },
];


export {
  features,
  productFeatures,
  steps,
  variants,
  navigation
}
