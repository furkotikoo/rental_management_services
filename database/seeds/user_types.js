/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user_types').del()
  await knex('user_types').insert([
    { id: 1, name: 'admin', description: "Administrator" },
    { id: 2, name: 'guest', description: "Guest" },
    { id: 3, name: 'user', description: "User " }
  ]);
};
