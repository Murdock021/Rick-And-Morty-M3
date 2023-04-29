const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const obj = {
  id: 999,
  name: "Diogo",
  species: "Machado",
  origin: {
    name: "Mars",
  },
  image: "image.jpg",
  gender: "Male",
  status: "Alive",
};
describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Respode cons status: 200", async () => {
      await request.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const resp = await request.get("/rickandmorty/character/1");

      for (const prop in obj) {
        expect(resp.body).toHaveProperty(prop);
      }
    });

    it("Si hay un error responde con status: 500", async () => {
      const resp = await request.get("/rickandmorty/character/9999A");
      expect(resp.statusCode).toBe(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    const access = { access: true };
    it("Responde con un objeto con la propiedad 'access' en true si la informacion del usuario es válida", async () => {
      const resp = await request.get(
        "/rickandmorty/login?email=diogomachadocmb@gmail.com&password=123abc"
      );
      expect(resp.body).toEqual(access);
    });

    it("Responde con un objeto con la propiedad 'access' en false si la informacion del usuario NO es válida", async () => {
      const resp = await request.get(
        "/rickandmorty/login?email=diogomachadocmb@gmail.com&&password=123abc"
      );
      access.access = false;
      expect(resp.body).toEqual(access);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Debe guardar el personaje en favoritos", async () => {
      const resp = await request.post("/rickandmorty/fav").send(obj);
      expect(resp.body).toContainEqual(obj);
    });

    it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
      obj.id = 1000;
      obj.name = "StrikeRaptor";
      const resp = await request.post("/rickandmorty/fav").send(obj);
      expect(resp.body.length).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("En caso de no propiorcionar un ID inexistente, debe retornar un array con todos los favoritos", async () => {
      const resp = await request.delete("/rickandmorty/fav/1");
      expect(resp.body.length).toBe(2);
    });

    it("Si el ID enviado existre, deberia eliminarlo de favoritos", async () => {
      const resp = await request.delete("/rickandmorty/fav/1000");
      expect(resp.body.length).toBe(1);
    });
  });
});
