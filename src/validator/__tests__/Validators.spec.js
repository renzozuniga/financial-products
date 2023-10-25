import * as ValidatorsFunc from "../Validators";

describe("Validators", () => {
  it.each(["testid", "12345", "test1234"])(
    "id validator success",
    async (id) => {
      expect(ValidatorsFunc.idValidator(id, false)).toBe("");
    }
  );

  it("id validator fails when is empty", async () => {
    expect(ValidatorsFunc.idValidator("", false)).toBe("ID es requerido");
  });

  it("id validator fails when length is lower than 3", async () => {
    expect(ValidatorsFunc.idValidator("id", false)).toBe(
      "ID debe tener mínimo 3 caracteres"
    );
  });

  it("id validator fails when length is greater than 10", async () => {
    expect(ValidatorsFunc.idValidator("idtestexample", false)).toBe(
      "ID debe tener máximo 10 caracteres"
    );
  });

  it("id validator fails when it already exists", async () => {
    expect(ValidatorsFunc.idValidator("idtest", true)).toBe(
      "ID no puede repetirse"
    );
  });

  it.each(["testname", "name1234"])("name validator success", async (name) => {
    expect(ValidatorsFunc.nameValidator(name)).toBe("");
  });

  it("name validator fails when is empty", async () => {
    expect(ValidatorsFunc.nameValidator("")).toBe("Nombre es requerido");
  });

  it("name validator fails when length is lower than 5", async () => {
    expect(ValidatorsFunc.nameValidator("name")).toBe(
      "Nombre debe tener mínimo 5 caracteres"
    );
  });

  it("name validator fails when length is greater than 100", async () => {
    expect(
      ValidatorsFunc.nameValidator(
        "nametestexamplenametestexamplenametestexamplenametestexamplenametestexamplenametestexamplenametestexample",
        false
      )
    ).toBe("Nombre debe tener máximo 100 caracteres");
  });

  it.each(["testdescription", "description1234"])(
    "description validator success",
    async (description) => {
      expect(ValidatorsFunc.descriptionValidator(description)).toBe("");
    }
  );

  it("description validator fails when is empty", async () => {
    expect(ValidatorsFunc.descriptionValidator("")).toBe(
      "Descripción es requerido"
    );
  });

  it("description validator fails when length is lower than 10", async () => {
    expect(ValidatorsFunc.descriptionValidator("name")).toBe(
      "Descripción debe tener mínimo 10 caracteres"
    );
  });

  it("description validator fails when length is greater than 200", async () => {
    expect(
      ValidatorsFunc.descriptionValidator(
        "descriptiontestexampledescriptiontestexampledescriptiontestexampledescriptiontestexampledescriptiontestexampledescriptiontestexampledescriptiontestexampledescriptiontestexampledescriptiontestexampledescriptiontestexample",
        false
      )
    ).toBe("Descripción debe tener máximo 200 caracteres");
  });

  it.each(["testlogo", "logo1234"])("logo validator success", async (logo) => {
    expect(ValidatorsFunc.logoValidator(logo)).toBe("");
  });

  it("logo validator fails when is empty", async () => {
    expect(ValidatorsFunc.logoValidator("")).toBe("Logo es requerido");
  });

  it.each(["2023-11-02", "2023-12-01", "2024-01-10"])(
    "date release validator success",
    async (date_release) => {
      expect(ValidatorsFunc.dateReleaseValidator(date_release)).toBe("");
    }
  );

  it("date release validator fails when is empty", async () => {
    expect(ValidatorsFunc.dateReleaseValidator("")).toBe(
      "Fecha de liberación es requerido"
    );
  });

  it("date release validator fails when is lower than today", async () => {
    expect(ValidatorsFunc.dateReleaseValidator("2023-10-01")).toBe(
      "Fecha de liberación debe ser igual o mayor que hoy"
    );
  });

  const form = {
    date_release: {
        value: '2023-11-02'
    }
  }
  it.each(["2024-11-01"])(
    "date revision validator success",
    async (date_revision) => {
      expect(ValidatorsFunc.dateRevisionValidator(date_revision, form)).toBe("");
    }
  );

  it("date revision validator fails when is empty", async () => {
    expect(ValidatorsFunc.dateRevisionValidator("")).toBe(
      "Fecha de revisión es requerido"
    );
  });

  it("date revision validator fails when is lower than today", async () => {
    expect(ValidatorsFunc.dateRevisionValidator("2023-10-01", form)).toBe(
      "Fecha de revisión debe ser un año después de liberación"
    );
  });
});
