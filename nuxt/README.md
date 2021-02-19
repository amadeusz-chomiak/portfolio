# nuxt frontend app

If You have more questions please contact Me directly at [job@amadeo.dev](mailto:job@amadeo.dev)

## How to create a new component?

Use globally installed *Hygen* to generate new components from \_templates directory

``` bash
hygen component new [name]
```

**Naming convencions** <span class="colour" style="color:rgb(212, 212, 212)">— use </span>[Vue.js style guide](https://v3.vuejs.org/style-guide):

* Use *PascalCase*
* Base components (atoms from atomic design) prefix with *Base...*
* Single instance components prefix with *The...*

Write component based on [TDD approach](https://en.wikipedia.org/wiki/Test-driven_development)

## How to publish the frontend?

To publish the frontend run these commands:

``` bash
yarn run dev
yarn run publish
```
