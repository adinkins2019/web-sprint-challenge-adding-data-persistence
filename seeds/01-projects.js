
exports.seed = async (knex) => {
 
  await knex("projects").insert([
    {name: "One", description: "First Project"}, 
  ])
};
