const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;

beforeAll((done) => {
  queryInterface
    .bulkInsert(
      "todo",
      [
        {
          title: "Bangun Tidur",
          status: active,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "breakfast",
          status: active,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "kuliah",
          status: active,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Daily Makan",
          status: active,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tidur",
          status: active,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
    .then((_) => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });

  console.log(">>>>>>>> BEFORE ALL <<<<<<<<<<");
});

afterAll((done) => {
  queryInterface
    .bulkDelete("todo", null, {})
    .then((_) => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });
});

describe("testing todo", () => {
  it("find all todo", (done) => {
    request(app)
      .get("/todos")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body, status } = response;

        expect(status).toEqual(200);
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("find todo by id", (done) => {
    request(app)
      .get("/todos/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { status } = response;

        expect(status).toEqual(200);
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("create todo", (done) => {
    request(app)
      .post("/todos")
      .send({
        title: "Ngopi pagi",
        status: active,
      })
      .set("Accept", "application/json")
      .expect(201)
      .then((response) => {
        const { body } = response;

        expect(body.message).toEqual("todo created successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("update todo", (done) => {
    request(app)
      .put("/todos/1")
      .send({
        title: "Ngeteh Pagi",
        status: true,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;

        expect(body.message).toEqual("todo Upadated successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("delete todo", (done) => {
    request(app)
      .delete("/todos/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const body = response;
        expect(body.message).toEqual("todo deleted successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });
});