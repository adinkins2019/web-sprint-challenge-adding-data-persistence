
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments()
      table.text("name", 128).notNullable()
      table.text("description")
      table.boolean("isCompleted")
            .notNullable()
            .default(false)
      table.integer("resourceID")
        .unsigned()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")

  })

  await knex.schema.createTable("resources", (table) => {
      table.increments()
      table.text("name", 128).notNullable()
      table.text("description")
      table.integer("projectID")
            .unsigned()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
  })

  await knex.schema.createTable("tasks", (table) => {
      table.increments()
      table.text("description").notNullable()
      table.text("notes")
      table.boolean("isCompleted")
            .notNullable()
            .default(false)
      table.integer("projectID")
            .unsigned()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("tasks")

};
