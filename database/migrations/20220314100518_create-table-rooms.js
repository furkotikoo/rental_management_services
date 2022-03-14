/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('rooms', (table) => {
        table.increments()
        table.integer("roomNumber")
        table.string("floor")
        table.string("address")
        table.boolean("booked")
        table.timestamps()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('rooms')
};
