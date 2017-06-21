import { HotelWebServicePage } from './app.po';

describe('hotel-web-service App', () => {
  let page: HotelWebServicePage;

  beforeEach(() => {
    page = new HotelWebServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
