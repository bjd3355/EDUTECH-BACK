import { Test, TestingModule } from "@nestjs/testing";
import { VirtualClassesController } from "./virtual-classes.controller";

describe("VirtualClassesController", () => {
  let controller: VirtualClassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VirtualClassesController],
    }).compile();

    controller = module.get<VirtualClassesController>(VirtualClassesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
