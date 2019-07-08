import { memoizeWith, min } from 'ramda';

type Article = {
  id: number;
  text: string;
  authors?: number[];
};

type Author = {
  id: number;
  name: string;
};

type Team = {
  id: number;
  name: string;
  members: number[];
};

const ARTICLES: Article[] = [
  { id: 1, text: 'MobX in practise', authors: [3] },
  { id: 33, text: 'RxJS and redux-observable', authors: [1, 2, 3, 5, 6, 7] },
  { id: 23, text: 'Firebase', authors: [7, 2, 3] },
  { id: 333, text: 'Really cool article' },
  { id: 1234, text: 'Ramda.js and Redux combined', authors: [2] },
  { id: 2, text: 'CSS in JS', authors: [3, 5] }
];

const AUTHORS: Author[] = [
  { id: 1, name: 'Oliver' },
  { id: 2, name: 'Jan' },
  { id: 3, name: 'Jakub' },
  { id: 4, name: 'Peter' },
  { id: 5, name: 'Tomas' },
  { id: 6, name: 'Drahoslav' },
  { id: 7, name: 'Honza' }
];

const TEAMS: Team[] = [
  { id: 1, name: 'Webscope 1', members: [1, 2, 3, 4] },
  { id: 2, name: 'Webscope 2', members: [5, 6, 7] }
];

function cacheMethod(id: number): string {
  return `${id}`;
}

const getAuthorsById = memoizeWith(cacheMethod, (authodID: number): Author => {
  return AUTHORS.find(({ id }) => id === authodID);
});

const getTeamById = memoizeWith(cacheMethod, (teamID: number): Team => {
  return TEAMS.find(({ id }) => id === teamID);
});

const getAuthorArticles = memoizeWith(cacheMethod, (authorID: number): Article[] => {
  return ARTICLES.reduce(
    (result, article) => {
      const { authors } = article;
      if (authors && authors.indexOf(authorID) !== -1) {
        result.push(article);
      }

      return result;
    },
    []
  );
});

const AUTHOR_ARTICLES_AMOUNT = 2;

function authorString({ name }: Author, articleNames: string[]): string {
  const text = `${name} wrote`;
  const { length } = articleNames;
  if (length === 0) {
    return `${text} 0 articles.`;
  }
  if (length === 1) {
    return `${text} an article '${articleNames[0]}'`;
  }
  const amount = min(AUTHOR_ARTICLES_AMOUNT, length);
  if (length === 2) {
    return `${text} articles '${articleNames[0]}' and '${articleNames[1]}'`;
  }
  let result = '';
  for (let i = 0; i < amount; i += 1) {
    if (i === 0) {
      result += ' articles';
    }
    const separator = i !== amount - 1 ? ',' : '';
    result += ` '${articleNames[i]}'${separator}`;
  }
  if (length > 2) {
    result += ` and ${length - 2} more.`;
  }

  return `${text}${result}`;
}

export function getTeamArticlesDescription(teamID: number): string {
  if (!teamID) { return ''; }
  if (typeof teamID !== 'number') { return ''; }
  const team = getTeamById(teamID);
  const article_map: { [key: number]: Article } = {};
  const result = team.members.map((authorID) => (
    authorString(
      getAuthorsById(authorID),
      getAuthorArticles(authorID).map((article) => {
        article_map[article.id] = article;

        return article.text;
      })
    )
  )).join('\n');

  return `${result}
-----
Team '${team.name}' co-authored ${Object.keys(article_map).length} out of ${ARTICLES.length} articles.
`;
}
