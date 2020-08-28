import { createPage } from "../utils/page";
import { create, createObject, createArray } from "../utils/typedSchema";

//* main page landing structure (menu, header)
export default createPage('Site', [
  createArray({
    name: 'Pages',
    description: 'Order of pages on main site',
    of: [
      {
        type: 'PagePromotions'
      }
    ]
  })
]);