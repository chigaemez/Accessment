// src/mirage.ts
import { createServer } from 'miragejs';
import type { ProductResponse } from '../Data/Type.ts';
import { bag, blower, hoodie, plier, shoe, sneaker } from '../assets/images/index.ts';

export function makeServer() {
  let server = createServer({
    routes() {
       this.namespace = "api";

      this.get('/products', (): ProductResponse => {
        return {
          products: [
            { id: 1,
              image: sneaker, title: 'SuperEdge 2U/3Node Short Depth', price: 549 },
            {
              id: 2,
              image: blower,
              title:
                'StarTech.com N6PATCH10BK 10 ft. Cat 6 Black Cat. 6 Patch Cable',
              price: 1200,
            },
            {
              id: 3,
              image: hoodie,
              title: 'Seagate Hard Disk Drive For server - 100TB',
              price: 2500,
            },
            {
              id: 4,
              image: plier,
              title: 'Networking Crimping Tool For Rj45 & Rj11 Cables',
              price: 5000,
            },
            {
              id: 5,
              image:shoe ,
              title:
                'G.SKILL Zeta R5 Series 64GB (4 x 16GB) ECC Registered DDR5 6400 R-DIMM (PC5 51200) Server Memory Model F5-6400R3239G16GQ4-ZR5K',
              price: 250,
            },
            {
              id: 6,
              image:bag ,
              title:
                'StarTech.com N6PATCH10BK 10 ft. Cat 6 Black Cat. 6 Patch Cable',
              price: 250,
            },
          ],
        };
      });
    },
  });

  return server;
}
