# RAPPSWAPI: May the front be with you

## A React Application prepared to consume SWAPI data.
### Compatible with IE11+.
### [ [ https://new-rappswapi.herokuapp.com/ ] ](https://new-rappswapi.herokuapp.com//#/)
<img src="./src/common/images/svg/yoda.svg" alt="Yoda" width="200px">

### Abstract
RA-SWAPI has been designed from scratch as a SPA based on the following stack:
* **webpack** as module bundler 
* **yarn** as dependency manager
* **React** as a JS library builder for user-interface
* **jest** as a JS test framework
* **enzyme** as a JS testing utility
* **git** as version control system
* **SWAPI** as consuming API for StarWars data [ (SWAPI) ](https://www.swapi.tech/)

### About React implementation
Components have been implemented using both React approaches:
* **class components** have been defined as stateful components, using lifecycle methods to control own render
* **functional components** have been defined as stateful components taking advantadge of useState and useEffect hooks.

### About styles
BEM (Block__Element--Modifier) has been used as CSS implementation pattern. No framework or library has been used, but CSSModules and corresponding loaders in order to avoid rules collision. 

### About testing
Jest and Enzyme have been used with testing purpose in both sides:
* unit test for business logic
* component test for React components

### Local Setup
* **Installation:** for project installation it has been user _Yarn_. To install package dependencies please run the following command : `yarn install --pure-lockfile`.
* **Run:** to run project locally please run the following command: `yarn start:dev-server`.
* **Test:** to run test suites please run following command: `yarn test`.
