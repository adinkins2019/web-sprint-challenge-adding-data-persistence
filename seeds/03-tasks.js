exports.seed = async (knex) => {
 
  await knex("tasks").insert([
    {description: "First Task", notes: "Step 1", isCompleted: false, projectID: 1},

  ])
};