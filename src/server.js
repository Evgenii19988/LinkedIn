import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      posts: Model,
    },
    routes() {
      this.namespace = "api/v1";

      this.get(
        "/users",
        () => ({
          data: [
            { name: "Dwight", image: "images/Dwight.png" },
            { name: "Julie", image: "images/Julie.png" },
            { name: "Leslie", image: "images/Leslie.png" },
            { name: "Marvin", image: "images/Marvin.png" },
            { name: "Randall", image: "images/Randall.png" },
            { name: "Shane", image: "images/Shane.png" },
            { name: "Wendy", image: "images/Wendy.png" },
            { name: "Philip", image: "images/Philip.png" },
            { name: "Randal", image: "images/Julie.png" },
            { name: "Dwight", image: "images/Dwight.png" },
            { name: "Julie", image: "images/Julie.png" },
            { name: "Leslie", image: "images/Leslie.png" },
          ],
        }),
        { timing: 1000 }
      );
      this.get("/me", () => ({
        data: {
          name: "Wawan Purwanto",
          description: "I have experince 1 year UI/UX Design",
        },
      }));
      this.post("/me", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return { data: attrs };
      });
    },
    seeds(server) {
      server.create("post", { name: "Inception", text: "2010", file: "dsada" });
      server.create("post", {
        name: "Interstellar",
        text: "2010",
        file: "dsada",
      });
      server.create("post", { name: "Dunkirk", text: "2010", file: "dsada" });
    },
  });

  return server;
}
