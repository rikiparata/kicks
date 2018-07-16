
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kicks').del()
    .then(function () {
      // Inserts seed entries
      return knex('kicks').insert([
        {id: 1, name: 'YEEZY 500', brand: 'Adidas'},
        {id: 2, name: 'Air Jordan 4 Retro', brand: 'Air Jordan'},
        {id: 3, name: 'Air Max 1/97 VF SW', brand: 'Nike'},
        {id: 4, name: 'YEEZY DESERT RAT 500', brand: 'Adidas'},
        {id: 5, name: 'Air Jordan 1 X OFF-WHITE NRG', brand: 'Air Jordan'},
        {id: 6, name: 'Nike Vapormax FK', brand: 'Nike'},
        {id: 7, name: 'Yeezy Boost 350 V2', brand: 'Adidas'},
        {id: 8, name: 'Thunder Spectra', brand: 'Puma'},
        {id: 9, name: 'Ultraboost UNDFTD', brand: 'Adidas'}
      ]);
    });
};
