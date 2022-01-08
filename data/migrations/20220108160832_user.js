
exports.up = (knex) =>
    knex.schema.createTable("user", (table) => {
        table.increments();
        table.string("name");
        table.string("email");
        table.string("mobile");
        table.string("social_links");
        table.string("photo");
        table.timestamps();

    });

exports.down = (knex) =>
    knex.schema.dropTableIfExists("user");
