import { ProMeetPage } from './app.po';

describe('pro-meet App', () => {
  let page: ProMeetPage;

  beforeEach(() => {
    page = new ProMeetPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
