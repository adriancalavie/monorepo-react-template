const server = Bun.serve({
  port: 3001,
  routes: {
    "/api/hello": () => Response.json({ message: "Hello from Bun!" }),
  },
});

console.log(`Server running on ${server.url}`);
