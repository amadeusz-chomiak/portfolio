import S from '@sanity/desk-tool/structure-builder';
import { showPage } from './page';
import { showGroup } from './group';
import { GrDocumentConfig } from 'react-icons/gr';

export default () =>
  S.list()
    .title('content')
    .items([     
      showPage('site', 'Main site structure', GrDocumentConfig),
      showPage('pagePrivacy', 'Privacy policy page'),
      showPage('pageHero', 'Hero page'),
      showPage('pageSolution', 'Solutions page'),
      showGroup('solution', 'Solutions'),
      showPage('pagePromotion', 'Promotions page'),
      showGroup('promotion', 'Promotions'),
      showPage('pageContact', 'Contact form page'),
      showPage('pageAbout', 'About Me page'),
    ]);
