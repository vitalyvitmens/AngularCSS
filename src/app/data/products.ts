import { IProduct } from '../models/product';

export const products: IProduct[] = [
  {
    id: 1,
    title: 'Металлочерепица "СуперМонтеррей" 0,50мм RAL7024мат',
    price: 21.60,
    description: `
    Полная ширина листа: 1190мм
    Полезная ширина листа: 1100мм
    Толщина: 0,50мм
    Толщина цинкового покрытия: 140 гр/м2
    Толщина полимерного покрытия: 35мкм

    Северсталь, Новолипецк, СтальКолор

    Доступные цвета: 9005мат (чёрный), 8019мат (тёмный шоколад), 7024мат     (тёмно-серый), 6005мат (зелёный мох), 3005мат (спелая вишня) и др.
    `,
    category: "metalTile",
    image: 'https://images.deal.by/285249808_w640_h640_285249808.jpg',
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'Металлочерепица "СуперМонтеррей" 0,50мм RAL7024',
    price: 18.60,
    description:
      `Эстетичная и практичная металлочерепица становится лидером на рынке кровельных материалов. Благодаря высоким эксплуатационным характеристикам, она подходит практически для любых зданий. Мы предлагаем популярную металлочерепицу «СуперМонтеррей», изготовленную согласно требованиям ГОСТ.

      Полная ширина листа: 1190мм
      Полезная ширина листа: 1100мм
      Толщина: 0,50мм
      Толщина цинкового покрытия: 180гр/м2
      Толщина полимерного покрытия: 35мкм

      Назначение: кровельное покрытие

      Цвета: 8019 (тёмный шоколад), 8017 (шоколад), 7024 (тёмно-серый), 7004 (светло-серый), 6005 (зелёный мох), 5005 (синий), 3011 (красный), 3005 (спелая вишня), 1015 (бежевый), 1014 (слоновая кость)  и др.

      Тип нанесения цветного покрытия:
      - лицевая сторона (грунт + полиэстер глянцевый согласно палитры RAL)
      - оборотная сторона (только грунт)

      Северсталь, Новолипецк, СтальКолор

      Срок поставки 5 рабочих дней с момента оплаты, возможна доставка, возможна комплектация доборными элементами, саморезами 4,8х29мм (металл по дереву для крепления металлочерепицы к деревянной обрешетке), саморезами 4,8х70мм (металл по дереву для крепления планки конька к деревянной обрешетке)`,
    category: "metalTile",
    image:
      'https://images.deal.by/85492478_w640_h640_85492478.jpg',
    rating: { rate: 4.1, count: 259 },
  },
];
