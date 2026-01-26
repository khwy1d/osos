
import React from 'react';
import { Plane, Bus, HeartPulse, FileCheck, Landmark, Car, Building2, MapPin, Clock, BadgeDollarSign, Headphones, Users, Briefcase, Palmtree } from 'lucide-react';
import { Service, NavLink, Offer, Step } from './types';

export const WA_PHONE = '776002190';
export const DISPLAY_PHONE = '+967 776 002 190';

export const NAV_LINKS: NavLink[] = [
  { key: 'home', label: { ar: 'الرئيسية', en: 'Home' }, href: '/' },
  { key: 'services', label: { ar: 'خدماتنا', en: 'Services' }, href: '/services' },
  { key: 'about', label: { ar: 'عنّا', en: 'About Us' }, href: '/about' },
  { key: 'contact', label: { ar: 'اتصل بنا', en: 'Contact' }, href: '/contact' },
];

export const STEPS: Step[] = [
  { id: 1, title: { ar: 'تقديم الطلب', en: 'Submit Request' }, desc: { ar: 'حدد الخدمة المطلوبة عبر الموقع أو الواتساب', en: 'Select your service via site or WhatsApp' } },
  { id: 2, title: { ar: 'مراجعة المتطلبات', en: 'Review Requirements' }, desc: { ar: 'نرسل لك قائمة الأوراق المطلوبة والتكلفة', en: 'We send you the required docs and costs' } },
  { id: 3, title: { ar: 'التنفيذ السريع', en: 'Fast Execution' }, desc: { ar: 'ننهي الإجراءات الرسمية في وقت قياسي', en: 'We complete official procedures in record time' } },
  { id: 4, title: { ar: 'إتمام الخدمة', en: 'Completion' }, desc: { ar: 'استلام الخدمة أو التأشيرة وبدء رحلتك', en: 'Receive service or visa and start your journey' } },
];

export const SERVICES: Service[] = [
  {
    id: 'security-clearance',
    priority: true,
    icon: <FileCheck className="w-8 h-8" />,
    title: { ar: 'الموافقات الأمنية لمصر', en: 'Egypt Security Clearance' },
    description: { ar: 'استخراج الموافقات الأمنية الرسمية للمواطنين اليمنيين بسرعة ودقة ومتابعة مستمرة.', en: 'Handling official security clearances for Yemeni citizens with speed and follow-up.' },
    cta: { ar: 'اطلب موافقتك', en: 'Request Clearance' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمة الموافقات الامنية للسفر.",
    link: '/security-clearance-egypt'
  },
  {
    id: 'medical',
    priority: true,
    icon: <HeartPulse className="w-8 h-8" />,
    title: { ar: 'السفر العلاجي', en: 'Medical Travel' },
    description: { ar: 'تنسيق مواعيد وخصومات خاصة على الفحوصات الطبية في مصر والأردن وإجراءات سفر ميسرة.', en: 'Coordination of medical appointments and special discounts in Egypt & Jordan.' },
    cta: { ar: 'نسّق رحلتك', en: 'Coordinate Now' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمة السفر العلاجي.",
    link: '/medical-tourism'
  },
  {
    id: 'flights',
    priority: false,
    icon: <Plane className="w-8 h-8" />,
    title: { ar: 'تذاكر طيران', en: 'Flight Tickets' },
    description: { ar: 'حجز طيران داخلي ودولي عبر اليمنية وفلاي أدين بأسعار منافسة وتأكيد فوري.', en: 'Domestic and international flights via Yemenia & Fly Aden with competitive rates.' },
    cta: { ar: 'استعلم عن رحلة', en: 'Inquire Now' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمة تذاكر الطيران.",
    link: '/flights'
  },
  {
    id: 'saudi-visit',
    priority: false,
    icon: <Briefcase className="w-8 h-8" />,
    title: { ar: 'زيارة السعودية', en: 'Saudi Arabia Visit' },
    description: { ar: 'تجهيز تأشيرات الزيارة العائلية والشخصية والأعمال للمملكة وإنجاز المعاملات عبر منصة إنجاز.', en: 'Processing family, personal, and business visit visas to KSA and Enjaz platform.' },
    cta: { ar: 'ابدأ المعاملة', en: 'Start Process' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمة زيارة المملكة العربية السعودية.",
    link: '/saudi-visit'
  },
  {
    id: 'umrah',
    priority: false,
    icon: <Landmark className="w-8 h-8" />,
    title: { ar: 'الحج والعمرة', en: 'Hajj & Umrah' },
    description: { ar: 'خدمات متكاملة للحجاج والمعتمرين، إصدار تأشيرات وتنظيم رحلات للمشاعر المقدسة.', en: 'Integrated services for Hajj & Umrah, visa issuance, and organized trips to holy sites.' },
    cta: { ar: 'اطلب الآن', en: 'Request Now' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمات الحج والعمرة.",
    link: '/umrah'
  },
  {
    id: 'tourism',
    priority: false,
    icon: <Palmtree className="w-8 h-8" />,
    title: { ar: 'سياحة خارجية', en: 'International Tourism' },
    description: { ar: 'باكجات سياحية متكاملة إلى تركيا، ماليزيا، جورجيا، ومصر شاملة الطيران والسكن.', en: 'Full tour packages to Turkey, Malaysia, Georgia, and Egypt including flights and stay.' },
    cta: { ar: 'استكشف العالم', en: 'Explore World' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن العروض السياحية الدولية.",
    link: '/tourism'
  },
  {
    id: 'domestic-tourism',
    priority: false,
    icon: <MapPin className="w-8 h-8" />,
    title: { ar: 'سياحة داخلية', en: 'Domestic Tourism' },
    description: { ar: 'خدمات سياحية محلية مبسطة وعملية لاستكشاف أجمل المناطق اليمنية والمحميات.', en: 'Simple and practical local tourism services to explore beautiful Yemeni regions.' },
    cta: { ar: 'اكتشف اليمن', en: 'Discover Yemen' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمة السياحة الداخلية.",
    link: '/domestic-tourism'
  },
  {
    id: 'bus-reservations',
    priority: false,
    icon: <Bus className="w-8 h-8" />,
    title: { ar: 'حجز الباصات', en: 'Bus Reservations' },
    description: { ar: 'حجز باصات دولية ومحلية (داخلي وخارجي) بأسعار منافسة وتنسيق دقيق.', en: 'Internal and external bus bookings with competitive rates.' },
    cta: { ar: 'احجز وسيلة نقلك', en: 'Book Transport' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمة حجز الباصات.",
    link: '/transport'
  },
  {
    id: 'car-rental',
    priority: false,
    icon: <Car className="w-8 h-8" />,
    title: { ar: 'تأجير سيارات', en: 'Car Rental' },
    description: { ar: 'تنسيق تأجير السيارات في مصر مع دعم كامل وشروط واضحة.', en: 'Car rental coordination in Egypt with full support and clear conditions.' },
    cta: { ar: 'اطلب سيارة', en: 'Request Car' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمة تاجير السيارات في مصر.",
    link: '/car-rental'
  },
  {
    id: 'real-estate',
    priority: false,
    icon: <Building2 className="w-8 h-8" />,
    title: { ar: 'خدمات عقارية', en: 'Real Estate' },
    description: { ar: 'إدارة أملاك، بيع وشراء شقق، تأجير وإدارة إدارية للعقارات بمهنية.', en: 'Property management, apartment sales, and rentals.' },
    cta: { ar: 'استشرنا عقارياً', en: 'Consult Us' },
    waMessage: "السلام عليكم ، اريد الاستعلام عن خدمات العقارات.",
    link: '/real-estate'
  }
];

export const TRUST_SIGNALS = [
  { ar: 'تنفيذ سريع وموثوق بكافة الإجراءات', en: 'Fast & reliable execution of all procedures' },
  { ar: 'أسعار منافسة وشفافية مطلقة', en: 'Competitive pricing & absolute transparency' },
  { ar: 'فريق متخصص لمتابعة طلبك حتى النهاية', en: 'Dedicated team to follow your request until completion' },
];

export const LIVE_OFFERS: Offer[] = [
  { id: '1', route: { ar: 'صنعاء - القاهرة (طيران)', en: 'Sana\'a - Cairo (Flight)' }, day: { ar: 'رحلات يومية', en: 'Daily Flights' }, price: '$420', type: 'Flight' },
  { id: '2', route: { ar: 'عدن - القاهرة (باص)', en: 'Aden - Cairo (Bus)' }, day: { ar: 'كل سبت واثنين', en: 'Every Sat & Mon' }, price: '$110', type: 'Bus' },
  { id: '3', route: { ar: 'تعز - عدن (نقل خاص)', en: 'Taiz - Aden (Private)' }, day: { ar: 'حسب الطلب', en: 'On Request' }, price: '$60', type: 'Bus' },
];

export const WHY_CHOOSE_US = [
  {
    icon: <Clock className="w-10 h-10" />,
    title: { ar: 'سرعة التنفيذ', en: 'Fast Execution' },
    desc: { ar: 'نحن ندرك قيمة الوقت، لذا ننهي معاملاتك في أسرع وقت ممكن.', en: 'We understand the value of time, so we complete your transactions as quickly as possible.' }
  },
  {
    icon: <BadgeDollarSign className="w-10 h-10" />,
    title: { ar: 'أسعار منافسة', en: 'Competitive Prices' },
    desc: { ar: 'نقدم خدماتنا بأسعار واقعية ومنافسة تلبي احتياجات الجميع.', en: 'We offer our services at realistic and competitive prices that meet everyone\'s needs.' }
  },
  {
    icon: <Headphones className="w-10 h-10" />,
    title: { ar: 'دعم مباشر ومستمر', en: 'Direct Continuous Support' },
    desc: { ar: 'فريقنا متاح للرد على استفساراتكم ومتابعة معاملاتكم بوضوح.', en: 'Our team is available to answer your questions and follow up your transactions clearly.' }
  }
];
