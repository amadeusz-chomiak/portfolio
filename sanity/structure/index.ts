import S from '@sanity/desk-tool/structure-builder';
import { showPage } from './page';
import { showGroup } from './group';

export default () =>
  S.list()
    .title('Content')
    .items([     
      showPage('PagePrivacy', 'Privacy policy page'),
      showPage('PageHero', 'Hero page'),
      showPage('PageSolution', 'Solutions page'),
      showGroup('Solution', 'Solutions'),
      showPage('PagePromotion', 'Promotions page'),
      showGroup('Promotion', 'Promotions'),
      showPage('PageContact', 'Contact form page'),
      showPage('PageAbout', 'About Me page'),
    ]);
