import { create } from './typedSchema';

//* [value, title]
const routes: [string, string][] = [
  ['privacy', 'privacy policy'],
  ['home', 'main landing page'],
  ['about', 'about me'],
];

export const createRouteLink = (name = 'to', title = 'Route to') =>
  create({
    title,
    name,
    type: 'string',
    options: {
      list: routes.map((route) => ({ value: route[0], title: route[1] })),
      layout: 'radio',
    },
    required: 'error',
  });
