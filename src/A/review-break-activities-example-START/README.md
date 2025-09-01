# Review Example Part 1 - What did you do over break?

# Steps
1. Select both of the topic list and the new topic form.
2. Add an event listener on the form and stop the event from propogating.
3. Get the value of the input from the "form.elements" in the event handler callback.
4. Validate the inputs to make sure the topic is not empty. We're using bootstrap in this project (the css is included in the html) and we're going to use the [Server side validation technique to validate](https://getbootstrap.com/docs/5.2/forms/validation/#server-side), this might seem complicated but let's break it down.
    - if the input value is empty we add the "is-invalid" class on the input. This is going to show the element with the "invalid-feedback" (see in the html)
    - the input is NOT empty then we remove the class "is-invalid" on the input. This hides the element with the "invalid-feedback" (see in the html)
5. Create a function named "addTopicToPage" that will take the topic name and the topic list element as a parameter.
6. In the "addTopicToPage" function use a template string to create a new list item and add it to the page.
7. Add some topics and test your application!
