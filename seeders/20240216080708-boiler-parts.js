const { faker } = require('@faker-js/faker');
'use strict';

const boilerManufacturers = [
  'Ariston',
  'Chaffoteaux&Maury',
  'Baxi',
  'Bongioanni',
  'Saunier Duval',
  'Buderus',
  'Strategist',
  'Henry',
  'Northwest',
];

const partManufacturers = [
  'Azure',
  'Gloves',
  'Cambridgeshire',
  'Salmon',
  'Sensor',
  'Lesly',
  'Radian',
  'Gasoline',
  'Croatia',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('BoilerParts', [...Array(100)].map(() => ({
      boiler_manufacturer: 
      boilerManufacturers[
        Math.floor(Math.random() * boilerManufacturers.length)
      ],
      parts_manufacturer: 
      partManufacturers[
        Math.floor(Math.random() * partManufacturers.length)
      ],
      price: faker.random.numeric(4),
      name: faker.lorem.sentence(2),
      description: faker.lorem.sentence(10),
      images: JSON.stringify([...Array(2)].map(() => `${faker.image.abstract()}?random=${faker.random.numeric(15)}`,
      ),
      ),
      vendor_code: faker.internet.password(),
      in_stock: faker.random.numeric(1),
      bestseller: faker.datatype.boolean(),
      new: faker.datatype.boolean(),
      popularity: faker.random.numeric(3),
      compatibility: faker.lorem.sentence(7),
      createdAt: new Date(),
      updatedAt: new Date()
    })),
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  }
};
