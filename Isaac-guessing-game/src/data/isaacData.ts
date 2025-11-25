export interface IsaacItem {
  id: number;
  name: string;
  type: 'character' | 'item' | 'boss';
  image: string;
  description: string;
}

export const isaacData: IsaacItem[] = [
  {
    id: 1,
    name: 'Isaac',
    type: 'character',
    image: 'https://i.redd.it/khqukwp8bcs81.png',
    description: 'El personaje principal del juego'
  },
  {
    id: 2,
    name: 'Magdalene',
    type: 'character',
    image: 'https://pm1.aminoapps.com/6783/30faa083093c0797d2c9346ce44d2905a2f8fcb2v2_00.jpg',
    description: 'Tiene un corazón extra al comenzar'
  },
  {
    id: 3,
    name: 'Brimstone',
    type: 'item',
    image: 'https://pm1.aminoapps.com/6475/2ae6dc6ded89ad2a5fdfeae00f617413961073fe_00.jpg',
    description: 'Láser de sangre que atraviesa enemigos'
  },
  {
    id: 4,
    name: 'Sacred Heart',
    type: 'item',
    image: 'https://i.redd.it/gcqgl9canbc81.jpg',
    description: 'Aumenta daño y otorga homing tears'
  },
  {
    id: 5,
    name: 'Mom',
    type: 'boss',
    image: 'https://p7.hiclipart.com/preview/737/892/58/the-binding-of-isaac-rebirth-mother-video-game-boss-others.jpg',
    description: 'El primer jefe principal del juego'
  },
  {
    id: 6,
    name: 'The Lamb',
    type: 'boss',
    image: 'https://preview.redd.it/why-is-the-lamb-looking-so-different-from-his-in-game-sprite-v0-ws7u78opsxze1.png?width=640&crop=smart&auto=webp&s=340abd444394f60a36108879ae052b7eeade0c5a',
    description: 'Jefe final en The Dark Room'
  },
  {
    id: 7,
    name: 'Cain',
    type: 'character',
    image: 'https://pm1.aminoapps.com/6592/2344f8dd39c1c75b36a64125e6721d21725b60ae_hq.jpg',
    description: 'Tiene más suerte y una llave'
  },
  {
    id: 8,
    name: 'Godhead',
    type: 'item',
    image: 'data:image/png;base64,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',
    description: 'Uno de los objetos más poderosos del juego'
  }
];