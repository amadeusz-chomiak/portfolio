import S from '@sanity/desk-tool/structure-builder';
import { showPage } from './page';

export default () =>
  S.list()
    .title('Content')
    .items([     
      showPage('PagePrivacy', 'Privacy policy page'),
      showPage('PageHero', 'Hero page'),
      showPage('PageSolution', 'Solutions page'),
      showPage('PagePromotions', 'Promotions page'),
      showPage('PageContact', 'Contact form page'),
      showPage('PageAbout', 'About Me page'),
     
    ]);
