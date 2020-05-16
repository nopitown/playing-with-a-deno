import { Drash } from "https://deno.land/x/drash@v1.0.0/mod.ts";

class HomeResource extends Drash.Http.Resource {
  static paths = ["/home"];
  public GET() {
    this.response.body = JSON.stringify({ "text": "hello" });
    return this.response;
  }

  public POST() {
    this.response.status_code = 401;
    return this.response;
  }
}

class PostResource extends Drash.Http.Resource {
  static paths = ["/posts"];

  public DELETE() {
    const id = this.request.getUrlQueryParam("id");
    this.response.body = `Your id is: ${id}`;

    return this.response;
  }
}

const server = new Drash.Http.Server({
  response_output: "text/json",
  resources: [HomeResource, PostResource],
});

server.run({
  hostname: "localhost",
  port: 8080,
});

console.log("Server listening: http://localhost:8080");
