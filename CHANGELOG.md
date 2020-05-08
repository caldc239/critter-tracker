# Changelog
A place to document changes to the project

## [Unreleased]
- Add photos to lists
- Add values to lists
- Add ability to sort lists
- Fish!
- Multiple entries (1 completed, 1 in progress)
- Move 1 instance to completed and leave remainder if quantity is higher than 3


## [0.0.4] - 2020-05-07
### Added
- Array of objects to store id, quantity, and completed in one place
- local storage
- reset button

## [0.0.3] - 2020-05-06
### Added
- This CHANGELOG file to document changes in versions
- Array to hold quantities of critters
- Support for buttons and functions to manipulate quantities
- Finished "moveToCompleted" function
- Added icons to manipulate quantities

## [0.0.2] 2020-05-05
### Added
- Added event listener to submit entry to list upon the "enter" button
- Added focus to the textbox upon page load and updateList
- Built table for user input to support each creature, its quantity, and a check upon completion
- Line break between text box and table
- Column to delete entry
- Focus returns to textbox anytime the list is updated
- Images of all bugs and fish saved to files
- Added check and delete icons to files
- Organized files
- Updated references to new file locations in HTML
- Image button to "Delete"
- Image buttons to class "imgBtn" for CSS properties
- Contingency for duplicate critters (add to list if unique, alert if duplicate)
- "Check" image to completed Column
- Support for completed button function

## [0.0.1] - 2020-05-04
### Added
- Created "Add" icon
- Fixed JQuery links
- Added JS variable for bugs autocomplete
- Added "add" button and image
- Comments
- Areas for lists
- Created JS file
- Added onload function to add event listener to "add" button after page loads
- Moved JS file back to head
- Created function to add selected critters to list upon clicking "add" button
- Added "clear text box" to event listener for add button
- Added function to lookup bug information by bug name
- Changed function to lookup bug info to return only the bug ID
- Moved addToList and updateList functions out of addButton function
- Created updateList function to write user selection to page
- Put "completed list" in it's own div element
## Removed
- Removed quotes from JSON bug data


## [0.0.10] - 2020-05-03
### Added
- Created logo in Word
- Saved logo as image
- Made CSS Stylesheet
- Added support for autocomplete JQuery script
- Added bug data
- Created an array of JUST bug names for autocomplete textbox
