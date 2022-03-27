'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Articles', [{
      id: 1,
      title: "Even Trees Are Political Now",
      body: "After Russia was banned from the European Tree of the Year competition, organizers reflected on how a celebration of trees became tangled up in global politics.",
      approved: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      title: "Ex-Party Producer Charged in $2.7 Million Bitcoin-Laundering Scheme",
      body: "Thomas Spieker’s clients included dark-web drug dealers and a cellphone-hacking identity thief, prosecutors said.",
      approved: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      title: "How to Make Data Privacy Real",
      body: "We need control over how our data is used. Thanks to California, there’s a promising new path.",
      approved: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      title: "Google is buying Mandiant, a cybersecurity firm, for $5.4 billion.",
      body: "The deal is intended to help Google differentiate its cloud business from that of its rivals Amazon and Microsoft.",
      approved: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      title: "How China Transformed Into a Prime Cyber Threat to the U.S.",
      body: "Over the past decade, China reorganized its hacking operations, turning into a sophisticated and mature adversary.",
      approved: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
