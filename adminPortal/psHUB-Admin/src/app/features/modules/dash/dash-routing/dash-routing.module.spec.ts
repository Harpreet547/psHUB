import { DashRoutingModule } from './dash-routing.module';

describe('DashRoutingModule', () => {
  let dashRoutingModule: DashRoutingModule;

  beforeEach(() => {
    dashRoutingModule = new DashRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashRoutingModule).toBeTruthy();
  });
});
