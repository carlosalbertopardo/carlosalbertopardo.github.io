/**
* This file handles the initialization of the App object and it's modules,
* should also contain any common variables required by the system
*
* This is required for the usage of components in case we want to add more in the future,
* and must be combined with a component dispatcher to call from the html
**/

;(function (App, undefined) {

    // Initialize App Objects
    App.SetCarousel = App.SetCarousel === undefined ? {} : App.SetCarousel;

    //Fires App initialization
    App.Initialize = (function () {}());

}(window.App = window.App === undefined ? {} : window.App));