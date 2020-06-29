
exports.seed = async (knex) => {
 
  await knex("resources").insert([
    {name: "Resource 1", description: "First Resource", projectID: 1},

  ])
};
