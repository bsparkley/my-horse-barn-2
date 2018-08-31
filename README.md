# MyHorseBarnTwo

Welcome to My Horse Barn!

This app was built with on the MEAN stack: MongoDB, Express, Angular 5 & Node.

Stack: MongoDB, Express, Angular 5, Node

Problems & Solutions:

P: Completed first half of tour of heroes & found that they simulate a database through in-memory Web API.
S: Update app to include Express for routing, MongoDB, & Mongoose for data schemas.

P: The 2nd version of the app was rendering all components in their own view.  I wanted to have Horse Details appear over the list of horses when selected.
S: Figure out parent / child routing.  Updated the Horse Details Component to be a child of the Horse Component.

P: Function for editing a Horse's Details was not working.
S: Determine bug in tutorial's function and implemented fix: change parameters data to horse and data to this.horse in updateHorse().  When calling parameter in the function needed "this".

P: Horses could be deleted by Horse Detail Component, but this change was not updated in the Horse Component unless you refreshed the view.
S: Updated this.router.navigate to "/" in deleteHorse()

P: After the Horse Detail component was initialized, route would not update with new details data after clicking get details on other Horses.  Only the data from the first horse selected would show, even though the URL was updated with new IDs when you clicked on other horses.
S: Set up a Observable.subscribe function in the constructor of Horse Component that listened to a change in value to the route and then performed the callback function to get data from the selected horse

P: No way to go back after loading a component (beyond pressing back in the browser) when on Horse Edit or Horse Create views.
S: Import Location class to Horse Edit and Horse Create component and add to each component's constructor.  Add goBack() to each component class and call from click on "Cancel" button.  Next step would be to set up goBack as a service that would be available to multiple components.