
exports.up = (knex) =>
    knex.schema.createTable("status", (table) => {
        table.date("date");
        table.time("time");
        table.integer("habit_id");
        table.boolean("status");

    });

exports.down = (knex) =>
    knex.schema.dropTableIfExits("status");
