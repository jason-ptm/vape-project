export enum routesTypes {
  HOME = '/home',
  BACKOFFICE = '/backoffice',
  STORE = '/store',
  CART = '/cart',
}

export enum socialLinks {
  FACEBOOK = 'https://es-la.facebook.com/',
  INSTAGRAM = 'https://www.instagram.com/',
  LINKEDIN = 'https://www.linkedin.com/in/jasonsolarte',
  EMAIL = 'js.solarte29@gmail.com',
}

interface Flavor {
  name: string
  imagesUrl: string[]
}

export const flavorsData: Flavor[] = [
  {
    name: 'Cherry Lima',
    imagesUrl: ['cherry-lime-1.jpg', 'cherry-lime-2.jpg'],
  },
  {
    name: 'Strawberry Mango',
    imagesUrl: [
      'strawberry-mango-1.jpg',
      'strawberry-mango-2.jpg',
      'strawberry-mango-3.jpg',
    ],
  },
  {
    name: 'Dragon Fruit',
    imagesUrl: ['dragonfruit-1.jpg', 'dragonfruit-2.jpg', 'dragonfruit-3.jpg'],
  },
  {
    name: 'Melon Dulce',
    imagesUrl: ['melon-1.jpg', 'melon-2.jpg'],
  },
  {
    name: 'Blueberry',
    imagesUrl: ['blueberry-1.jpg', 'blueberry-2.jpg', 'blueberry-3.jpg'],
  },
  {
    name: 'Fresa Kiwi',
    imagesUrl: ['strawberry-kiwi-1.jpg', 'strawberry-kiwi-2.jpg'],
  },
  {
    name: 'Naranja Piña',
    imagesUrl: [
      'orange-pineapple-1.jpg',
      'orange-pineapple-2.jpg',
      'orange-pineapple-3.jpg',
    ],
  },
]

export type Theme = 'dark' | 'light'
