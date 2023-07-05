import { createServer, Model } from "miragejs";
import v4 from "react-uuid";

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
      this.get("/posts", (schema, request) => {
        return schema.posts.all();
      });
      this.post("/posts", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.posts.create(attrs);
      });
      this.post("/me", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return { data: attrs };
      });
    },
    seeds(server) {
      server.create("post", {
        name: "Inception",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        file: "dsada",
        autor: {
          name: "Julia Robert",
          description: "Product Designer at lancar.id",
        },
      });
      server.create("post", {
        name: "Interstellar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        file: "dsada",
        autor: {
          name: "Julia Robert",
          description: "Product Designer at lancar.id",
        },
      });
      server.create("post", {
        name: "Dunkirk",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        file: "dsada",
        autor: {
          name: "Julia Robert",
          description: "Product Designer at lancar.id",
        },
      });
    },
  });

  return server;
}
