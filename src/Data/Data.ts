import { shop } from '../assets/icons';
import {
  accessories,
  chair,
  chrismasShoe,
  harddrive,
  Motherboard,
  ram,
  towel,
} from '../assets/images';
import type { Card, Feature } from './Type';

export const cards: Card[] = [
  {
    title: 'Everlasting Drive',
    desc: 'Military-grade Shockproof and Waterproof External Hard Drive',
    img: harddrive,
  },
  {
    title: 'Super Fast SSD',
    desc: 'Next-gen blazing speed Solid State Drive for all workloads',
    img: harddrive,
  },
];

export const features: Feature[] = [
  {
    title: 'All Products',
    img: shop,
  },
  {
    title: 'Storage',
    img: harddrive,
  },
  {
    title: 'Ram',
    img: ram,
  },
  {
    title: 'Motherboard',
    img: Motherboard,
  },
];

export const christmasItems = [
  {
    title: 'Wall Mounted 6u Rack - 600 X 450',
    price: '$58,000',
    img: chair,
    rating: 4.5,
  },
  {
    title: 'Wall Mounted 6u Rack - 600 X 450',
    price: '$58,000',
    img: chrismasShoe,
    rating: 4.5,
  },
  {
    title: 'Wall Mounted 6u Rack - 600 X 450',
    price: '$58,000',
    img: accessories,
    rating: 4.5,
  },
  {
    title: 'Wall Mounted 6u Rack - 600 X 450',
    price: '$58,000',
    img: towel,
    rating: 4.5,
  },
];
