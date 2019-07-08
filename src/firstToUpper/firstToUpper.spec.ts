// tslint:disable:no-any
import { firstToUpper } from 'firstToUpper';

describe('firstToUpper', () => {
  it('empty', () => {
    expect(firstToUpper('')).toBe('');
  });

  it('null', () => {
    expect(firstToUpper(null)).toBe('');
  });

  it('not string', () => {
    expect(firstToUpper(<any>1)).toBe('');
  });

  it('One word', () => {
    expect(firstToUpper('word')).toBe('Word');
  });

  it('One word, space in the begging', () => {
    expect(firstToUpper(' word')).toBe(' Word');
  });

  it('One word, already done', () => {
    expect(firstToUpper('Word')).toBe('Word');
  });

  it('Two words', () => {
    expect(firstToUpper('hello world')).toBe('Hello World');
  });

  it('Two words, already done', () => {
    expect(firstToUpper('Hello World')).toBe('Hello World');
  });

  it('Multiline', () => {
    const text = `random
    multiline
    text`;
    const result = `Random
    Multiline
    Text`;
    expect(firstToUpper(text)).toBe(result);
  });

  it('special characters in begining', () => {
    expect(firstToUpper(';trap')).toBe(';trap');
  });

  it('special characters in the middle', () => {
    expect(firstToUpper('tr;ap')).toBe('Tr;ap');
  });

  it('original string should be intacted', () => {
    const text = 'text';
    const result = 'Text';
    expect(firstToUpper(text)).toBe(result);
    expect(text).toBe('text');
  });
});
