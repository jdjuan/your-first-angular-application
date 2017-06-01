import { YourFirstAngularApplicationPage } from './app.po';

describe('your-first-angular-application App', () => {
  let page: YourFirstAngularApplicationPage;

  beforeEach(() => {
    page = new YourFirstAngularApplicationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
