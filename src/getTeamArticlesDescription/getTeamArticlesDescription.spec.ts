// tslint:disable:no-any
import { getTeamArticlesDescription } from 'getTeamArticlesDescription';

const TEAM_ONE = `Oliver wrote an article 'RxJS and redux-observable'
Jan wrote articles 'RxJS and redux-observable', 'Firebase' and 1 more.
Jakub wrote articles 'MobX in practise', 'RxJS and redux-observable' and 2 more.
Peter wrote 0 articles.
-----
Team 'Webscope 1' co-authored 5 out of 6 articles.
`;

const TEAM_TWO = `Tomas wrote articles 'RxJS and redux-observable' and 'CSS in JS'
Drahoslav wrote an article 'RxJS and redux-observable'
Honza wrote articles 'RxJS and redux-observable' and 'Firebase'
-----
Team 'Webscope 2' co-authored 3 out of 6 articles.
`;

describe('getTeamArticlesDescription', () => {
  it('empty', () => {
    expect((<any>getTeamArticlesDescription)()).toBe('');
  });

  it('null', () => {
    expect((<any>getTeamArticlesDescription)(null)).toBe('');
  });

  it('string argument', () => {
    expect((<any>getTeamArticlesDescription)('two')).toBe('');
  });

  it('teamID 1', () => {
    expect(getTeamArticlesDescription(1)).toBe(TEAM_ONE);
  });

  it('teamID 2', () => {
    expect(getTeamArticlesDescription(2)).toBe(TEAM_TWO);
  });
});
