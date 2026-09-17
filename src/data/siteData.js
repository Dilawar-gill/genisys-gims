export const COMPANY = {
  name: 'Genisys International Marketing Solutions',
  brand: 'GENISYS',
  shortName: 'GIMS',
  tagline: 'International Marketing Solutions',
  established: 2019,
  address: {
    street: '66/C 13th Commercial Street',
    area: 'D.H.A Phase II Extension, Phase 2 Commercial Area',
    city: 'Defence Housing Authority',
    postal: 'Karachi 75500',
    country: 'Pakistan',
  },
  phone: '+92 315 0255687',
  whatsapp: '+923150255687',
  whatsappMessage: 'Hello Genisys International, I would like to discuss marketing services for my business.',
  social: {
    facebook: 'https://www.facebook.com/Genisys.gims/',
    instagram: 'https://www.instagram.com/genisys_international/',
    linkedin: 'https://pk.linkedin.com/company/genisys-international-marketing-solutions',
  },
};

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Our Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'meta-ads',
    icon: 'Target',
    title: 'Meta Ads & Lead Generation',
    short: 'Facebook & Instagram advertising campaigns designed around targeted service areas and customer acquisition.',
    description: 'We build and manage Facebook and Instagram advertising campaigns specifically designed for home-service businesses. From audience targeting and creative development to budget management and performance tracking.',
    color: 'var(--color-primary-dark)',
  },
  {
    id: 'social-media',
    icon: 'Share2',
    title: 'Social Media Management',
    short: 'Content planning, publishing, business page management and brand consistency.',
    description: 'Consistent, professional social media presence across Facebook and Instagram. We handle content planning, post creation, scheduling and page management so your business stays active and credible online.',
    color: 'var(--color-primary)',
  },
  {
    id: 'customer-support',
    icon: 'MessageSquare',
    title: 'Customer Support & Lead Handling',
    short: 'Professional handling of customer inquiries and Messenger conversations.',
    description: 'We manage incoming customer inquiries through Facebook Messenger and other channels. Fast, professional responses that keep potential customers engaged and moving toward a booking.',
    color: 'var(--color-primary-dark)',
  },
  {
    id: 'appointment-booking',
    icon: 'CalendarCheck',
    title: 'Appointment Booking',
    short: 'Qualifying customer inquiries and converting suitable leads into scheduled appointments.',
    description: 'Beyond generating leads, we qualify each inquiry and work to convert suitable prospects into confirmed appointments. This bridges the gap between advertising and actual booked jobs.',
    color: 'var(--color-secondary-dark)',
  },
  {
    id: 'web-development',
    icon: 'Globe',
    title: 'Website Design & Development',
    short: 'Modern conversion-focused websites for service businesses.',
    description: 'Clean, fast, mobile-optimized websites built to convert visitors into customer inquiries. Designed specifically for home-service businesses with clear calls to action and local SEO foundations.',
    color: 'var(--color-primary)',
  },
  {
    id: 'branding',
    icon: 'Palette',
    title: 'Branding & Creative Design',
    short: 'Advertising creatives, graphics, brand assets and promotional materials.',
    description: 'Professional visual identity and advertising creative that represents your business credibly. From ad graphics and promotional materials to brand guidelines and business assets.',
    color: 'var(--color-primary-dark)',
  },
  {
    id: 'content',
    icon: 'FileText',
    title: 'Content Marketing',
    short: 'Professional content planning and creation for home-service businesses.',
    description: 'Strategic content that educates homeowners, builds trust and supports your advertising. Blog posts, social content, email copy and promotional materials tailored to your services.',
    color: 'var(--color-primary)',
  },
  {
    id: 'strategy',
    icon: 'TrendingUp',
    title: 'Marketing Strategy',
    short: 'Offer development, geographic targeting and customer acquisition strategy.',
    description: 'A clear plan for how your business attracts and converts customers. We develop service offers, define target areas, plan seasonal campaigns and build a customer acquisition approach that fits your business.',
    color: 'var(--color-secondary-dark)',
  },
];

export const INDUSTRIES = [
  { name: 'Air Duct Cleaning', icon: 'Wind' },
  { name: 'HVAC', icon: 'Thermometer' },
  { name: 'Dryer Vent Cleaning', icon: 'Flame' },
  { name: 'Furnace Services', icon: 'Zap' },
  { name: 'Air Conditioning', icon: 'Snowflake' },
  { name: 'Air Exchanger Services', icon: 'RefreshCw' },
  { name: 'Indoor Air Quality', icon: 'Activity' },
  { name: 'Other Home Services', icon: 'Home' },
];

export const WORKFLOW_STEPS = [
  { num: '01', title: 'Target the Right Service Area', desc: 'Define geographic targeting, service radius and ideal customer profile for your market.' },
  { num: '02', title: 'Build the Right Offer', desc: 'Develop a compelling service offer that resonates with homeowners in your target area.' },
  { num: '03', title: 'Launch Advertising', desc: 'Deploy Facebook and Instagram campaigns with tested creatives and precise audience targeting.' },
  { num: '04', title: 'Generate Customer Inquiries', desc: 'Capture leads through ads, landing pages and direct Messenger conversations.' },
  { num: '05', title: 'Respond & Qualify', desc: 'Respond quickly to every inquiry, qualify the lead and gather the information needed to book.' },
  { num: '06', title: 'Schedule Appointments', desc: 'Convert qualified leads into confirmed appointments on your calendar.' },
  { num: '07', title: 'Review & Optimize', desc: 'Analyze campaign performance, refine targeting and continuously improve results.' },
];

export const PORTFOLIO = [
  {
    id: 'dial4duct',
    name: 'Dial4Duct',
    url: 'https://dial4duct.com/',
    market: 'Canada',
    industry: 'Air Duct Cleaning',
    services: ['Meta Ads', 'Lead Generation', 'Customer Support', 'Appointment Booking'],
    color: '#1769FF',
  },
  {
    id: 'blueguard',
    name: 'Blue Guard',
    url: 'https://blueguard.ca/',
    market: 'Canada',
    industry: 'Home Services',
    services: ['Meta Ads', 'Social Media Management', 'Branding'],
    color: '#0A4FA8',
  },
  {
    id: 'maultrafresh',
    name: 'MA Ultra Fresh',
    url: 'https://maultrafresh.com/',
    market: 'Canada',
    industry: 'Air Duct & Dryer Vent Cleaning',
    services: ['Meta Ads', 'Lead Generation', 'Website Development'],
    color: '#00897B',
  },
  {
    id: 'ecoairhvac',
    name: 'Eco Air HVAC',
    url: 'https://ecoairhvac.us/',
    market: 'United States',
    industry: 'HVAC',
    services: ['Meta Ads', 'Lead Generation', 'Social Media', 'Customer Support'],
    color: '#2E7D32',
  },
];

export const WHY_GENISYS = [
  { title: 'Home-Service Industry Experience', desc: 'We understand how duct cleaning, HVAC and related businesses operate — the seasonal patterns, the customer questions, the booking process.' },
  { title: 'Canada & USA Market Knowledge', desc: 'Practical experience with North American homeowners, service-area advertising and the expectations of customers in Canadian and American markets.' },
  { title: 'Full Acquisition Process', desc: 'We handle the complete path from advertising to appointment — not just running ads and leaving you to manage the rest.' },
  { title: 'Professional Communication', desc: 'Customer-facing communication that represents your business credibly and professionally at every touchpoint.' },
  { title: 'Appointment-Focused Approach', desc: 'Our goal is booked jobs, not just leads. We qualify inquiries and work to convert them into confirmed appointments.' },
  { title: 'Integrated Marketing Support', desc: 'Advertising, content, design, web and strategy working together rather than disconnected services.' },
  { title: 'Long-Term Business Approach', desc: 'We focus on building sustainable customer acquisition systems, not short-term campaign spikes.' },
  { title: 'Operating Since 2019', desc: 'Years of experience supporting service businesses gives us practical knowledge that newer agencies simply do not have.' },
];

export const PROCESS_STEPS = [
  { num: '01', title: 'Business Analysis', desc: 'We learn your business, service area, current marketing and goals before recommending anything.' },
  { num: '02', title: 'Strategy', desc: 'We develop a clear customer acquisition plan tailored to your services, market and budget.' },
  { num: '03', title: 'Launch', desc: 'Campaigns, content and systems go live with careful setup and quality checks.' },
  { num: '04', title: 'Lead Management', desc: 'We handle incoming inquiries, qualify leads and work to convert them into appointments.' },
  { num: '05', title: 'Optimization', desc: 'Ongoing review of performance data to improve targeting, creative and conversion rates.' },
];

export const TIMELINE = [
  { year: '2019', title: 'Genisys International begins operations.', desc: 'Founded in Karachi with a focus on digital marketing and customer acquisition for service businesses.' },
  { year: '2020–2022', title: 'Expansion of services.', desc: 'Growth of social media marketing, advertising management and customer-support services for North American clients.' },
  { year: '2023–2025', title: 'Home-service specialization.', desc: 'Increased focus on duct cleaning, HVAC and related home-service businesses across Canada and the United States.' },
  { year: '2026', title: 'Continued development.', desc: 'Ongoing development of integrated marketing, customer acquisition and digital solutions for service businesses.' },
];
