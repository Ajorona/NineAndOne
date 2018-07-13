FSND Neighborhood Map

Hello! This is a single-page application (SPA) designed to deliver a user experience similar to the common desktop application. It is initialized on a single page load and relies upon API calls to retrieve data that is used to update the view.

Following Knockout JS, the Model - View - ViewModel software archictecture pattern is used and organized as such:

View) the markup languages HTML/CSS provide the page structure

ViewModel) back-end logic in JavaScript is used to enact the changes selected in the client View

Model) A small database of JavaScript objects is used to store the required parameters for different API queries.

====================Starting the App====================

NOTE: The JS for this app is partitioned into several files to improve readability. data.js (model), vm.js (ViewModel) ajax.js (API calls). local files are used for library / frameworks jQuery, BootStrap, and KnockOut. In production, the source code would be minified and CDNs used in place of serverSide files sent to the client.

1) Download the project

2) Launch the application by opening index.html from the base relative file tree