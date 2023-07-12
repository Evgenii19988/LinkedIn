import { createServer, Model } from "miragejs";
import v4 from "react-uuid";

export function makeServer() {
  let server = createServer({
    models: {
      posts: Model,
      users: Model,
    },
    routes() {
      this.namespace = "api/v1";

      // this.get(
      //   "/users",
      //   () => ({
      //     data: [
      //       { name: "Dwight", image: "images/Dwight.png" },
      //       { name: "Julie", image: "images/Julie.png" },
      // { name: "Leslie", image: "images/Leslie.png" },
      // { name: "Marvin", image: "images/Marvin.png" },
      // { name: "Randall", image: "images/Randall.png" },
      // { name: "Shane", image: "images/Shane.png" },
      // { name: "Wendy", image: "images/Wendy.png" },
      // { name: "Philip", image: "images/Philip.png" },
      // { name: "Randal", image: "images/Julie.png" },
      // { name: "Dwight", image: "images/Dwight.png" },
      // { name: "Julie", image: "images/Julie.png" },
      // { name: "Leslie", image: "images/Leslie.png" },
      //     ],
      //   }),
      //   { timing: 1000 }
      // );
      this.get("/users", (schema, request) => {
        return schema.users.all();
      });
      this.get("/me", () => ({
        data: {
          firstName: "Wawan",
          lastName: "Purwanto",
          description: "I have experince 1 year UI/UX Design",
          image: "images/WawanPurwanto.png",
        },
      }));
      this.get("/posts", (schema, request) => {
        return schema.posts.all();
      });
      this.post("/posts", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.posts.create(attrs);
      });
      this.patch("/posts/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let post = schema.posts.find(id);

        return post.update(newAttrs);
      });
      this.patch("/users/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let user = schema.users.find(id);

        return user.update(newAttrs);
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
        file: "https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/7/65/755540270893657.jpg",
        author: {
          firstName: "Julia",
          lastName: "Robert",
          description: "Product Designer at lancar.id",
          image: "images/Wendy.png",
        },
      });
      server.create("post", {
        name: "Interstellar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        file: "https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/7/65/755540270893657.jpg",
        author: {
          firstName: "Julia",
          lastName: "Robert",
          description: "Product Designer at lancar.id",
          image: "images/Julie.png",
        },
      });
      server.create("post", {
        name: "Dunkirk",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        file: "https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/7/65/755540270893657.jpg",
        author: {
          firstName: "Julia",
          lastName: "Robert",
          description: "Product Designer at lancar.id",
          image: "images/Wendy.png",
        },
      });
      server.create("user", {
        firstName: "Wawan",
        lastName: "Purwanto",
        description: "I have experince 1 year UI/UX Design",
        image: "images/WawanPurwanto.png",
        password: "111",
      });
      server.create("user", {
        firstName: "Julia",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Julie.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Leslie",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Leslie.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Marvin",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Marvin.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Randall",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Randall.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Shane",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Shane.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Wendy",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Wendy.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Philip",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Philip.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Philip",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Philip.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Wendy",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Wendy.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Philip",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Philip.png",
        password: "222",
      });
      server.create("user", {
        firstName: "Philip",
        lastName: "Robert",
        description: "I have experince 1 year UI/UX Design",
        image: "images/Philip.png",
        password: "222",
      });
    },
  });

  return server;
}
