
import React from 'react';
import { Plane, Bus, HeartPulse, FileCheck, Moon, Car, Building2, Palmtree, Clock, BadgeDollarSign, Headphones } from 'lucide-react';
import { Service, NavLink, Step, Offer } from './types';

export const WA_PHONE = '967776002190';
export const DISPLAY_PHONE = '+967 776 002 190';
export const EMAIL_ADDRESS = 'osostravel1@gmail.com';
export const FACEBOOK_LINK = 'https://www.facebook.com/share/1C75gKppb4/';
export const INSTAGRAM_LINK = 'https://www.instagram.com/osos_travel?igsh=ZjRjNmV3NDdpbmZ4';
export const TIKTOK_LINK = 'https://tiktok.com/@osos_travel';
export const X_LINK = 'https://x.com/osos_travel?t=kPh-mG5xYRI3ccVYXGLcNQ&s=09';

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
    description: { ar: 'استخراج الموافقات الأمنية الرسمية للمواطنين اليمنيين بسرعة ودقة عبر وكالة أُسس للسفر.', en: 'Official security clearances for Yemeni citizens with speed via Osos Travel.' },
    cta: { ar: 'اطلب موافقتك', en: 'Request Clearance' },
    waMessage: "أريد الاستعلام عن خدمة الموافقات الأمنية لمصر من وكالة أُسس.",
    link: '/security-clearance-egypt'
  },
  {
    id: 'medical',
    priority: true,
    icon: <HeartPulse className="w-6 h-6" />,
    title: { ar: 'السفر العلاجي', en: 'Medical Travel' },
    description: { ar: 'تنسيق طبي متكامل في مصر مع ضمان الثقة والاحترافية في التعامل.', en: 'Integrated medical coordination in Egypt with trust and professionalism.' },
    cta: { ar: 'نسّق رحلتك', en: 'Coordinate Now' },
    waMessage: "أريد الاستعلام عن خدمة التنسيق الطبي والسفر العلاجي لدى أُسس.",
    link: '/medical-tourism'
  },
  {
    id: 'flights',
    priority: false,
    icon: <Plane className="w-6 h-6" />,
    title: { ar: 'تذاكر طيران', en: 'Flight Tickets' },
    description: { ar: 'حجز طيران داخلي ودولي بأسعار منافسة وتأكيد فوري من وكالة أُسس.', en: 'Domestic and international flights with competitive rates from Osos agency.' },
    cta: { ar: 'استعلم الآن', en: 'Inquire Now' },
    waMessage: "أريد الاستعلام عن تذاكر طيران من وكالة أُسس.",
    link: '/flights'
  },
  {
    id: 'tourism',
    priority: false,
    icon: <Palmtree className="w-6 h-6" />,
    title: { ar: 'السياحة', en: 'Tourism' },
    description: { ar: 'باكجات سياحية متكاملة داخل اليمن وإلى أفضل الوجهات السياحية العالمية.', en: 'Full tour packages within Yemen and to top global destinations.' },
    cta: { ar: 'اكتشف العروض', en: 'Explore Offers' },
    waMessage: "أريد الاستعلام عن عروض السياحة لدى أُسس.",
    link: '/tourism'
  },
  {
    id: 'umrah',
    priority: false,
    icon: <Moon className="w-6 h-6" />,
    title: { ar: 'الحج والعمرة', en: 'Hajj & Umrah' },
    description: { ar: 'خدمات متكاملة للحجاج والمعتمرين برؤية واضحة وإجراءات ميسرة.', en: 'Integrated services for Hajj & Umrah with clear vision and easy procedures.' },
    cta: { ar: 'احجز مكانك', en: 'Request Now' },
    waMessage: "أريد الاستفسار عن باقات العمرة والحج من أُسس.",
    link: '/umrah'
  },
  {
    id: 'bus-reservations',
    priority: false,
    icon: <Bus className="w-6 h-6" />,
    title: { ar: 'حجز الباصات', en: 'Bus Reservations' },
    description: { ar: 'حجز باصات دولية ومحلية بأسعار منافسة وتنسيق دقيق للمواعيد.', en: 'Internal and external bus bookings with competitive rates.' },
    cta: { ar: 'احجز رحلتك', en: 'Book Transport' },
    waMessage: "أريد حجز تذاكر باص عبر وكالة أُسس.",
    link: '/transport'
  },
  {
    id: 'car-rental',
    priority: false,
    icon: <Car className="w-6 h-6" />,
    title: { ar: 'تأجير سيارات', en: 'Car Rental' },
    description: { ar: 'تنسيق تأجير السيارات في مصر مع دعم كامل وشروط واضحة.', en: 'Car rental coordination in Egypt with full support.' },
    cta: { ar: 'اطلب سيارة', en: 'Request Car' },
    waMessage: "أريد الاستفسار عن تأجير السيارات في مصر عبر أُسس.",
    link: '/car-rental'
  },
  {
    id: 'real-estate',
    priority: false,
    icon: <Building2 className="w-6 h-6" />,
    title: { ar: 'خدمات عقارية', en: 'Real Estate' },
    description: { ar: 'إدارة أملاك، بيع وشراء شقق، وتأجير العقارات بمهنية في مصر واليمن.', en: 'Property management, apartment sales, and rentals.' },
    cta: { ar: 'استشرنا عقارياً', en: 'Consult Us' },
    waMessage: "أريد الاستشارة بخصوص الخدمات العقارية لدى أُسس.",
    link: '/real-estate'
  }
];

export const LIVE_OFFERS: Offer[] = [
  {
    id: 1,
    type: 'Flight',
    route: { ar: 'صنعاء - عمان - صنعاء', en: 'Sanaa - Amman - Sanaa' },
    price: '$650',
    day: { ar: 'الإثنين والأربعاء', en: 'Monday & Wednesday' }
  },
  {
    id: 2,
    type: 'Bus',
    route: { ar: 'اليمن - السعودية', en: 'Yemen - Saudi Arabia' },
    price: '300 SAR',
    day: { ar: 'رحلات يومية', en: 'Daily Trips' }
  },
  {
    id: 3,
    type: 'Flight',
    route: { ar: 'عدن - القاهرة - عدن', en: 'Aden - Cairo - Aden' },
    price: '$580',
    day: { ar: 'الأحد والثلاثاء', en: 'Sunday & Tuesday' }
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
