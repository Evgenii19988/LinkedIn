import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    routes() {
      this.namespace = "api/v1";

      this.get("/users", (schema: any) => {
        return schema.users.all();
      });
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
    },
  });

  return server;
}
