import { Test, TestingModule } from "@nestjs/testing";
import { VirtualClassesService } from "./virtual-classes.service";

describe("VirtualClassesService", () => {
  let service: VirtualClassesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VirtualClassesService],
    }).compile();

    service = module.get<VirtualClassesService>(VirtualClassesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
