
exports.up = (knex) =>
    knex.schema.createTable("reminder", (table) => {
        table.increments();
        table.integer("habit_id");
        table.integer("user_id");
        table.time("time");
        table.timestamps();

    });






exports.down = (knex) =>
    knex.schema.dropTableIfExists("reminder");



