import { NavigationBarModule } from './navigation-bar.module';

describe('NavigationBarModule', () => {
  let navigationBarModule: NavigationBarModule;

  beforeEach(() => {
    navigationBarModule = new NavigationBarModule();
  });

  it('should create an instance', () => {
    expect(navigationBarModule).toBeTruthy();
  });
});
