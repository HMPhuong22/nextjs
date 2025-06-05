export const products = [
  {
    key: '3481-random',
    slug: 'iphone',
    name: 'iPhone 14 Pro',
    description: 'Chiếc điện thoại cao cấp của Apple.',
    price: 25990000,
  },
  {
    key: '9275-random',
    slug: 'samsung',
    name: 'Samsung Galaxy S23',
    description: 'Flagship của Samsung với nhiều tính năng hiện đại.',
    price: 21990000,
  },
  {
    key: '1034-random',
    slug: 'xiaomi',
    name: 'Xiaomi 13 Pro',
    description: 'Hiệu năng mạnh mẽ, giá hợp lý.',
    price: 17990000,
  },
  {
    key: '6712-random',
    slug: 'oppo',
    name: 'Oppo Find X5 Pro',
    description: 'Thiết kế cao cấp, camera mạnh mẽ.',
    price: 18990000,
  },
  {
    key: '8459-random',
    slug: 'vivo',
    name: 'Vivo X90 Pro',
    description: 'Công nghệ Zeiss hỗ trợ chụp ảnh chuyên nghiệp.',
    price: 20990000,
  },
  {
    key: '2901-random',
    slug: 'realme',
    name: 'Realme GT Neo 5',
    description: 'Hiệu năng cao, sạc siêu nhanh 240W.',
    price: 11990000,
  },
  {
    key: '7830-random',
    slug: 'asus',
    name: 'Asus ROG Phone 7',
    description: 'Điện thoại gaming hàng đầu với tản nhiệt mạnh mẽ.',
    price: 23990000,
  },
  {
    key: '1122-random',
    slug: 'google',
    name: 'Google Pixel 8 Pro',
    description: 'Trải nghiệm Android gốc, camera xử lý AI xuất sắc.',
    price: 24990000,
  },
  {
    key: '4507-random',
    slug: 'sony',
    name: 'Sony Xperia 1 V',
    description: 'Màn hình 4K OLED, âm thanh đỉnh cao, quay video chuyên nghiệp.',
    price: 26990000,
  },
  {
    key: '3098-random',
    slug: 'nokia',
    name: 'Nokia X30 5G',
    description: 'Thiết kế bền vững, Android thuần.',
    price: 9990000,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getListProducts(){
  return products;
}
