export const gym = {
  name: "IRONFORM",
  fullName: "IRONFORM Strength Club",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappNumber: "919876543210",
  url: "https://ironform-demo.vercel.app",
  address: {
    street: "3rd Floor, Trident Towers, Outer Ring Road",
    locality: "Marathahalli, Bengaluru",
    region: "Karnataka",
    postalCode: "560037",
  },
  hours: { opens: "05:00", closes: "23:00", label: "Mon to Sun, 5:00 AM to 11:00 PM" },
  rating: { score: 4.9, count: 245 },
};

export function waLink(message?: string) {
  const text =
    message ??
    "Hi, I'd like to book my free first session at IRONFORM";
  return `https://wa.me/${gym.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Coaches", href: "#coaches" },
  { label: "Schedule", href: "#schedule" },
  { label: "Plans", href: "#plans" },
  { label: "Visit", href: "#visit" },
];

export const programs = [
  {
    tag: "STR",
    name: "Strength & Powerbuilding",
    desc: "Barbell-first programming built around the big lifts. Progressive overload, tracked every session, coached every rep.",
  },
  {
    tag: "FNC",
    name: "Functional Fitness",
    desc: "Conditioning circuits, sleds, carries and mobility work. Built for people who want to move well outside the gym too.",
  },
  {
    tag: "CUT",
    name: "Fat Loss Coaching",
    desc: "Training plus nutrition coaching with weekly check-ins. Sustainable deficits, no crash diets, no detox nonsense.",
  },
  {
    tag: "PT",
    name: "Personal Training 1-on-1",
    desc: "A dedicated coach, a program written for your body and your goals, and a standing appointment you will not skip.",
  },
];

export const stats = [
  { value: 12, suffix: "", label: "YEARS ON THE FLOOR" },
  { value: 2400, suffix: "+", label: "MEMBERS TRAINED" },
  { value: 18, suffix: "", label: "CERTIFIED COACHES" },
];

export const coaches = [
  {
    name: "Aditya Reddy",
    role: "Head Strength Coach",
    cred: "NSCA-CSCS · 11 YRS COACHING",
    initials: "AR",
  },
  {
    name: "Noah Harrison",
    role: "Functional & Mobility",
    cred: "FRC-FRCms · CROSSFIT L2",
    initials: "NH",
  },
  {
    name: "David Thomas",
    role: "Transformation Coach",
    cred: "ACE-CPT · PN L1 NUTRITION",
    initials: "DT",
  },
];

export const schedule = [
  { time: "6:00 AM", cls: "Strength Basics", days: "MON to SAT" },
  { time: "7:00 AM", cls: "HIIT", days: "MON to SAT" },
  { time: "6:00 PM", cls: "Powerbuilding", days: "MON to SAT" },
  { time: "7:00 PM", cls: "Functional", days: "MON to SAT" },
  { time: "8:00 PM", cls: "Boxing Conditioning", days: "MON to SAT" },
  { time: "ALL DAY", cls: "Open Floor", days: "SUNDAY" },
];

export const plans = [
  {
    name: "Monthly",
    tag: null,
    features: ["All programs", "Locker access", "Free fitness assessment", "App check-ins"],
  },
  {
    name: "Quarterly",
    tag: "MOST PICKED",
    features: ["All programs", "Locker access", "Free fitness assessment", "App check-ins"],
  },
  {
    name: "Annual",
    tag: "BEST VALUE",
    features: ["All programs", "Locker access", "Free fitness assessment", "App check-ins"],
  },
];
