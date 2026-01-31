
import React from 'react';
import { Plane, Bus, HeartPulse, FileCheck, Landmark, Car, Building2, MapPin, Clock, BadgeDollarSign, Headphones, Users, Briefcase, Palmtree } from 'lucide-react';
import { Service, NavLink, Offer, Step } from './types';

export const WA_PHONE = '967776002190';
export const DISPLAY_PHONE = '+967 776 002 190';

export const NAV_LINKS: NavLink[] = [
  { key: 'home', label: { ar: 'الرئيسية', en: 'Home' }, href: '/' },
  { key: 'services', label: { ar: 'خدماتنا', en: 'Services' }, href: '/services' },
  { key: 'about', label: { ar: 'عنّا', en: 'About Us' }, href: '/about' },
  { key: 'contact', label: { ar: 'اتصل بنا', en: 'Contact' }, href: '/contact' },
];

export const STEPS: Step[] = [
  { id: 1, title: { ar: 'تقديم الطلب', en: 'Submit Request' }, desc: { ar: 'حدد الخدمة عبر الموقع أو الواتساب', en: 'Select service via site or WhatsApp' } },
  { id: 2, title: { ar: 'مراجعة المتطلبات', en: 'Review Docs' }, desc: { ar: 'نرسل لك قائمة الأوراق والتكاليف', en: 'We send required docs & costs' } },
  { id: 3, title: { ar: 'التنفيذ السريع', en: 'Fast Execution' }, desc: { ar: 'ننهي الإجراءات الرسمية في وقت قياسي', en: 'Official procedures in record time' } },
  { id: 4, title: { ar: 'إتمام الرحلة', en: 'Completion' }, desc: { ar: 'استلام التأشيرة وبدء رحلتك بأمان', en: 'Receive visa and start your journey' } },
];

export const SERVICES: Service[] = [
  {
    id: 'security-clearance',
    priority: true,
    icon: <FileCheck className="w-6 h-6" />,
    title: { ar: 'الموافقات الأمنية لمصر', en: 'Egypt Security Clearance' },
    description: { ar: 'استخراج الموافقات الأمنية الرسمية للمواطنين اليمنيين بسرعة ودقة عبر وكالة ثقة للسفر.', en: 'Official security clearances for Yemeni citizens with speed via Thiqa Travel.' },
    cta: { ar: 'اطلب موافقتك', en: 'Request Clearance' },
    waMessage: "أريد الاستعلام عن خدمة الموافقات الأمنية لمصر من وكالة ثقة.",
    link: '/security-clearance-egypt'
  },
  {
    id: 'medical',
    priority: true,
    icon: <HeartPulse className="w-6 h-6" />,
    title: { ar: 'السفر العلاجي', en: 'Medical Travel' },
    description: { ar: 'تنسيق طبي متكامل في مصر والأردن مع ضمان الثقة والاحترافية في التعامل.', en: 'Integrated medical coordination in Egypt & Jordan with trust and professionalism.' },
    cta: { ar: 'نسّق رحلتك', en: 'Coordinate Now' },
    waMessage: "أريد الاستعلام عن خدمة التنسيق الطبي والسفر العلاجي لدى ثقة.",
    link: '/medical-tourism'
  },
  {
    id: 'flights',
    priority: false,
    icon: <Plane className="w-6 h-6" />,
    title: { ar: 'تذاكر طيران', en: 'Flight Tickets' },
    description: { ar: 'حجز طيران داخلي ودولي بأسعار منافسة وتأكيد فوري من وكالة ثقة.', en: 'Domestic and international flights with competitive rates from Thiqa agency.' },
    cta: { ar: 'استعلم الآن', en: 'Inquire Now' },
    waMessage: "أريد الاستعلام عن تذاكر طيران من وكالة ثقة.",
    link: '/flights'
  },
  {
    id: 'tourism',
    priority: false,
    icon: <Palmtree className="w-6 h-6" />,
    title: { ar: 'السياحة', en: 'Tourism' },
    description: { ar: 'باكجات سياحية متكاملة داخل اليمن وإلى تركيا، ماليزيا، جورجيا، ومصر.', en: 'Full tour packages within Yemen and to Turkey, Malaysia, Georgia, and Egypt.' },
    cta: { ar: 'اكتشف العروض', en: 'Explore Offers' },
    waMessage: "أريد الاستعلام عن عروض السياحة لدى ثقة.",
    link: '/tourism'
  },
  {
    id: 'umrah',
    priority: false,
    icon: <Landmark className="w-6 h-6" />,
    title: { ar: 'الحج والعمرة', en: 'Hajj & Umrah' },
    description: { ar: 'خدمات متكاملة للحجاج والمعتمرين برؤية واضحة وإجراءات ميسرة.', en: 'Integrated services for Hajj & Umrah with clear vision and easy procedures.' },
    cta: { ar: 'احجز مكانك', en: 'Request Now' },
    waMessage: "أريد الاستفسار عن باقات العمرة والحج من ثقة.",
    link: '/umrah'
  },
  {
    id: 'bus-reservations',
    priority: false,
    icon: <Bus className="w-6 h-6" />,
    title: { ar: 'حجز الباصات', en: 'Bus Reservations' },
    description: { ar: 'حجز باصات دولية ومحلية بأسعار منافسة وتنسيق دقيق للمواعيد.', en: 'Internal and external bus bookings with competitive rates.' },
    cta: { ar: 'احجز رحلتك', en: 'Book Transport' },
    waMessage: "أريد حجز تذاكر باص عبر وكالة ثقة.",
    link: '/transport'
  },
  {
    id: 'car-rental',
    priority: false,
    icon: <Car className="w-6 h-6" />,
    title: { ar: 'تأجير سيارات', en: 'Car Rental' },
    description: { ar: 'تنسيق تأجير السيارات في مصر مع دعم كامل وشروط واضحة.', en: 'Car rental coordination in Egypt with full support.' },
    cta: { ar: 'اطلب سيارة', en: 'Request Car' },
    waMessage: "أريد الاستفسار عن تأجير السيارات في مصر عبر ثقة.",
    link: '/car-rental'
  },
  {
    id: 'real-estate',
    priority: false,
    icon: <Building2 className="w-6 h-6" />,
    title: { ar: 'خدمات عقارية', en: 'Real Estate' },
    description: { ar: 'إدارة أملاك، بيع وشراء شقق، وتأجير العقارات بمهنية في مصر واليمن.', en: 'Property management, apartment sales, and rentals.' },
    cta: { ar: 'استشرنا عقارياً', en: 'Consult Us' },
    waMessage: "أريد الاستشارة بخصوص الخدمات العقارية لدى ثقة.",
    link: '/real-estate'
  }
];

export const LIVE_OFFERS: Offer[] = [
  {
    id: 'offer-1',
    route: { ar: 'صنعاء ⟵ القاهرة', en: 'Sanaa ⟵ Cairo' },
    day: { ar: 'كل إثنين وخميس', en: 'Every Mon & Thu' },
    price: '$380',
    type: 'Flight',
  },
  {
    id: 'offer-2',
    route: { ar: 'تعز ⟵ الرياض', en: 'Taiz ⟵ Riyadh' },
    day: { ar: 'يومياً', en: 'Daily' },
    price: '450 SAR',
    type: 'Bus',
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: { ar: 'سرعة التنفيذ', en: 'Fast Execution' },
    desc: { ar: 'ننهي معاملاتك في أسرع وقت ممكن لتوفير جهدك ومالك.', en: 'We complete your transactions quickly to save effort and money.' }
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8" />,
    title: { ar: 'أسعار واقعية', en: 'Realistic Prices' },
    desc: { ar: 'شفافية كاملة في التسعير بدون أي تكاليف خفية.', en: 'Full pricing transparency without hidden costs.' }
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: { ar: 'دعم مستمر', en: 'Continuous Support' },
    desc: { ar: 'فريقنا متاح للرد على استفساراتكم ومتابعة معاملاتكم.', en: 'Our team is available to answer your questions.' }
  }
];
