import { MeanConntactlistAngular2Page } from './app.po';

describe('mean-conntactlist-angular2 App', function() {
  let page: MeanConntactlistAngular2Page;

  beforeEach(() => {
    page = new MeanConntactlistAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
