import { App, Request, Response } from "https://deno.land/x/attain/mod.ts";
import api from "./api.ts";

const app = new App();

app.use("/api", api);

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen({ port: 3500 });
console.log("http://localhost:3500");
