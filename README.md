#ng-bs-animated-button

Angular/Bootstrap animated submit button directive.

[View demo](http://plnkr.co/edit/3nlNi9oTRiRZND5rqTpR?p=info)


## Usage
1. `bower install jeremypeters/ng-bs-animated-button`
2. Include `ng-bs-animated-button.js` and `ng-bs-animated-button.css` in your app. They should be located at `bower_components/ng-bs-animated-button/`.
3. Insert the `jp-ng-bs-animated-button` directive into your template:

```html
<jp-ng-bs-animated-button progress-is-submit="" progress-is-complete="" animation-complete-time="" button-class="" button-text="" form-is-invalid=""></jp-ng-bs-animated-button>
```

### Attributes
* `progress-is-submit`: scope variable that is set to 'true' on form submission
* `progress-is-complete`: scope variable that is set to 'true' on form submission success
* `animation-complete-time`: the time in milliseconds that the success section of the animation displays
* `button-class`: the required Bootstrap button class, e.g. 'btn-default'
* `button-text`: the text to appear on the button
* `form-is-invalid`: to pass '$invalid' in order to disable to the button whilst the form is invalid/submitting
