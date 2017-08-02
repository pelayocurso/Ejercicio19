import { Ejercicio19Page } from './app.po';

describe('ejercicio19 App', () => {
  let page: Ejercicio19Page;

  beforeEach(() => {
    page = new Ejercicio19Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
