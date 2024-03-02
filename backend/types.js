const z = require('zod');

const schema1 = z.object({
    title: z.string(),
    description: z.string(),
   
  });
const schema2 = z.object({
    id: z.string()
  });

module.exports={
    createTodo:schema1,
    updateTodo:schema2
}
  