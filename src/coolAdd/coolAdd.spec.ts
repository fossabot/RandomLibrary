// tslint:disable:no-any
import { coolAdd } from 'coolAdd';

describe('coolAdd', () => {
  it('empty', () => {
    expect((<any>coolAdd)()).toBe(0);
  });

  it('null', () => {
    expect(coolAdd(null, null)).toBe(0);
  });

  it('not number', () => {
    expect(coolAdd(<any>'one', <any>'two')).toBe(0);
  });

  it('second not number', () => {
    expect(coolAdd(1, <any>'two')).toBe(0);
  });

  it('second empty string', () => {
    expect(coolAdd(1, <any>'')).toBe(0);
  });

  it('second null', () => {
    expect(coolAdd(1, <any>'')).toBe(0);
  });

  it('normal two arguments', () => {
    expect(coolAdd(1, 2)).toBe(3);
  });

  it('only one argument', () => {
    expect(typeof coolAdd(1) === 'function').toBeTruthy();
  });

  it('only one argument, result', () => {
    expect((<any>coolAdd)(1)(2)).toBe(3);
  });
});
