
import React from 'react';

export type Language = 'ar' | 'en';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: Record<Language, string>;
  description: Record<Language, string>;
  cta: Record<Language, string>;
  waMessage: string;
  priority: boolean;
  link: string;
  hidden?: boolean;
}

export interface Step {
  id: number;
  title: Record<Language, string>;
  desc: Record<Language, string>;
}

export interface Offer {
  id: string;
  route: Record<Language, string>;
  day: Record<Language, string>;
  price: string;
  type: 'Bus' | 'Flight';
  badge?: Record<Language, string>;
}

export interface NavLink {
  key: string;
  label: Record<Language, string>;
  href: string;
}
