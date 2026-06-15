export const products = [
  {
    id: 'p1',
    name: 'گردنبند مرواریدی مینیمال',
    price: 129000,
    image: '/p1.jpg',
    category: 'گردنبند',
  },
  {
    id: 'p2',
    name: 'دستبند طلایی کلاسیک',
    price: 189000,
    image: '/p2.jpg',
    category: 'دستبند',
  },
  {
    id: 'p3',
    name: 'گوشواره نگین دار',
    price: 99000,
    image: '/p3.jpg',
    category: 'گوشواره',
  },
  {
    id: 'p4',
    name: 'حلقه اسپرت نقره',
    price: 149000,
    image: '/p1.jpg',
    category: 'انگشتر',
  },
  {
    id: 'p5',
    name: 'پین مو دست ساز',
    price: 79000,
    image: '/p2.jpg',
    category: 'آرایشی بهداشتی',
  },
  {
    id: 'p6',
    name: 'کیف کوچک چرمی',
    price: 249000,
    image: '/p3.jpg',
    category: 'کیف',
  },
  {
    id: 'p7',
    name: 'گردنبند طلایی ساده',
    price: 159000,
    image: '/p3.jpg',
    category: 'گردنبند',
  },
  {
    id: 'p8',
    name: 'دستبند طرح گل',
    price: 119000,
    image: '/p2.jpg',
    category: 'دستبند',
  },
  {
    id: "b1",
    name: "کرم مرطوب‌کننده روز",
    price: 185000,
    image: "/p1.jpg",
    category: "آرایشی بهداشتی",
  },
  {
    id: "b2",
    name: "سرم روشن‌کننده ویتامین C",
    price: 265000,
    image: "/p2.jpg",
    category: "آرایشی بهداشتی",
  },
  {
    id: "b3",
    name: "ماسک شب آرگان",
    price: 149000,
    image: "/p3.jpg",
    category: "آرایشی بهداشتی",
  },
  {
    id: "b4",
    name: "اسپری تثبیت‌کننده آرایش",
    price: 98000,
    image: "/p1.jpg",
    category: "آرایشی بهداشتی",
  }
]

export type Product = (typeof products)[number]
