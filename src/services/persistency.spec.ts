import { Persistency } from "./persistency";

const createSut = () => new Persistency();

describe("testing persistency class", () => {
  afterEach(() => jest.clearAllMocks());

  it("should return undefined", () => {
    // System under test
    const sut = createSut();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it("should call console.log once", () => {
    // System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should call console.log with 'Pedido salvo com sucesso'", () => {
    // System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido salvo com sucesso");
  });
});
