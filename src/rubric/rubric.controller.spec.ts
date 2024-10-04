import { Test, TestingModule } from '@nestjs/testing';
import { RubricController } from './rubric.controller';
import { RubricService } from './rubric.service';

describe('RubricController', () => {
  let controller: RubricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RubricController],
      providers: [RubricService],
    }).compile();

    controller = module.get<RubricController>(RubricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
