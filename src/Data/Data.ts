import { shop } from '../assets/icons';
import { harddrive, Motherboard, ram } from '../assets/images';
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
