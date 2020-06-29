
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("projects").truncate()
  await knex("resources").truncate()
  await knex("tasks").truncate()
};
