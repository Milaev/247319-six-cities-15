import {OfferTypes} from '../types/offer';

export const offers: OfferTypes[] = [
  {
    id: '854bbd80-6ba5-4c41-a0e1-6fc8b5c4fad4',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 400,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 2,
    goods: ['Heating', 'lazydog', 'crazyfrog'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    ],
    maxAdults: 2
  },
  {
    id: 'b7d55565-278b-4a97-9600-ead99f238222',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 444,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 3,
    goods: ['Heating', 'cabelTv'],
    host: {
      name: 'Oliver Bonner',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    ],
    maxAdults: 3
  },
  {
    id: '5c581e97-fa51-4032-bae4-aefb75334f00',
    title: 'Tile House',
    type: 'house',
    price: 500,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 4,
    goods: ['Heating', 'wifi', 'alco', 'surf'],
    host: {
      name: 'Angelina Conner',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ],
    maxAdults: 4
  },
  {
    id: 'b859adcf-6095-46c9-927e-8764281cf9d5',
    title: 'Loft Studio in the Central Area',
    type: 'apartment',
    price: 555,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3499553943508,
      longitude: 4.877309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 5,
    goods: ['bla', 'blabla', 'blablablab', 'blablah'],
    host: {
      name: 'Lapapi Lapupa',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    ],
    maxAdults: 6
  },
  {
    id: 'b859adcf-6725-46c9-927e-8764281cf9d5',
    title: 'Loft BLABLA Studio in the Central Area',
    type: 'apartment',
    price: 333,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.9,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 5,
    goods: ['bla', 'blabla', 'blablablab', 'blablah'],
    host: {
      name: 'Lapapi Lapupa',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    ],
    maxAdults: 6
  },
  {
    id: '0998f31d-cd7f-42db-a9c2-d97d78ed4385',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 600,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3709553943508,
      longitude: 4.919309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 7,
    goods: ['bla', 'blabla', 'blablablab', 'blam', 'blablam', 'blablabnlab'],
    host: {
      name: 'Trinity Matrix',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/12.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/23.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/34.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/25.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ],
    maxAdults: 8
  },
  {
    id: 'b727dca6-5d2c-43f3-81ef-e5b774849327',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 666,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3889553943508,
      longitude: 4.944309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    goods: ['bla', 'blablarr', 'blablablab'],
    host: {
      name: 'Darth Vader',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    ],
    maxAdults: 2
  },
  {
    id: '2c9a23c3-8eef-4fe5-84fc-0dab85512cfe',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 300,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    goods: ['bla', 'blablarr', 'blablablab'],
    host: {
      name: 'Darth Vader',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    ],
    maxAdults: 2
  },
  {
    id: 'e6ed52cf-eb63-41e3-a696-b34fdc62e83d',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 100,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    goods: ['bla', 'blablarr', 'blablablab'],
    host: {
      name: 'Darth Vader',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    ],
    maxAdults: 2
  },
  {
    id: 'c401632e-62e1-47bd-a9fa-f14068fbcecc',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 200,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. An independent House, strategically located between are and National Opera, but where the bustle of the city`comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    goods: ['bla', 'blablarr', 'blablablab'],
    host: {
      name: 'Darth Vader',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    ],
    maxAdults: 2
  },
];
