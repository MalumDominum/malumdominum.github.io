'use strict';

const router = document.getElementById('router');

function getHashDetails() {
  let splitedHash = window.location.hash.replace('#', '').split('/', 2);
  switch (splitedHash.length) {
      case 1: return [ splitedHash[0] ];  //cart

      case 2: return [ splitedHash[0],    //categories | products
                       splitedHash[1] ];

      case 4: return [ splitedHash[2],    // products
                       splitedHash[3],    // product name
                       splitedHash[1] ];  // category
  }
}

function routePage() {
  switch (getHashDetails()[0]) {
    case 'categories':
      import('./categories.js');
      break;
    case 'products':
      import('./products.js');
      break;
    case 'cart':
      import('./cart.js');
      break;
    default:
      import('./main.js')
      .then(module => {
        router.appendChild(module.pageWidth);
        module.appendEvents();
      })
      break;
  }
}

routePage();


// function routeLogic(routeElement) {
//     history.pushState(null, null, routeElement.dataset.route);
//     OnRoute();
// };

// function initiateRoutes() {
//   let routeElements = document.querySelectorAll('[data-route]');
//   routeElements.forEach(function(routeElement) {
//     routeElement.addEventListener('click', routeLogic(routeElement))
//   });
// };

// initiateRoutes();

// function OnRoute() {
//   router.innerHTML = "";
// }