
exports.up = (knex) =>
    knex.schema.createTable("habit", (table) => {
        table.increments();
        table.string("goal_name");
        table.string("habit_name");
        table.date("goal_date");
        table.integer("user_id");
        table.timestamps();

    });


exports.down = (knex) =>
    knex.schema.dropTableIfExists("habit");
