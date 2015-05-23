#ng-bs-animated-button

Angular/Bootstrap animated submit button directive.

## Demo

http://jeremypeters.github.io/ng-bs-animated-button/

## Usage
1. Install via Bower:
 
  ```console
  bower install ng-bs-animated-button
  ```

2. Include `ng-bs-animated-button.js` and `ng-bs-animated-button.css` in your app. They should be located at `bower_components/ng-bs-animated-button/`.

3. Add `jp.ng-bs-animated-button` as a module dependency to your app:

  ```JavaScript
  angular.module('yourApp', ['jp.ng-bs-animated-button']);
  ```

4. Add the directive with the required attributes to your template:

  ```html
  <jp-ng-bs-animated-button is-submitting="isSubmitting" result="result" options="options"></jp-ng-bs-animated-button>
  ```

5. Add the required scope variables and any options to your controller:

  ```JavaScript
  app.controller('yourCtrl', function($scope) {
  
    // Required - set to true on submission
    $scope.isSubmitting = null;
  
    // Required - set to 'success' or 'error' on success/failure
    $scope.result = null;
  
    // Optional
    $scope.options = {
      buttonDefaultText: 'Lorem ipsum',
      ...
    };
  
  });
  ```

### Options

| Option                  | Default                       |
| :---------------------- | :---------------------------- |
| `buttonDefaultClass`    | 'btn-primary'                 |
| `buttonSubmittingClass` | 'btn-primary'                 |
| `buttonSuccessClass`    | 'btn-primary'                 |
| `buttonErrorClass`      | 'btn-danger'                  |
| `buttonDefaultText`     | 'Submit'                      |
| `buttonSubmittingText`  | 'Submitting...'               |
| `buttonSuccessText`     | 'Completed'                   |
| `buttonErrorText`       | 'There was an error'          |
| `buttonInitialIcon`     | 'glyphicon glyphicon-plus'    |
| `buttonSubmittingIcon`  | 'glyphicon glyphicon-refresh' |
| `buttonSuccessIcon`     | 'glyphicon glyphicon-ok'      |
| `buttonErrorIcon`       | 'glyphicon glyphicon-remove'  |
| `formIsInvalid`         | ''               |
| `animationCompleteTime` | '2000'                        |
| `iconsPosition`         | 'left'                        |
| `onlyIcons`             | false                         |
