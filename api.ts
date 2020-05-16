import { Router } from "https://deno.land/x/attain/mod.ts";
import { faker } from "https://raw.githubusercontent.com/jackfiszr/deno-faker/master/mod.ts";

const api = new Router();

api.get("/posts", (req, res) => {
  res.status(200).send({
    title: faker.lorem.paragraph(),
    description: faker.lorem.paragraphs(),
    metadata: {
      image_url: faker.image.imageUrl(),
    },
  });
});

export default api;
