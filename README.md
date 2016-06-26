<h1>seVen</h1>

<p>seVen is an self destructing to-do list that uses the Firebase API and AngularJS. Tasks are created with an expiration date of 7 days. If a task is not completed in one week, its not important enough.</p>

<p>Typically, to-do lists can get out of hand very quickly. To solve this problem, seVen manages your tasks automatically by separating them into active, complete and expired lists. Tasks are defined by their description. Also, they can be labeled as high, medium or low priority.</p>

<h3>User Stories</h3>

1. As a user, I want my tasks synced with a persistent backend (Firebase)
2. As a user, I want to see my active, complete and expired tasks in separate lists in my home view
3. As a user, I want tasks that are completed and older than seven days to be hidden from my active tasks view automatically
4. As a user, I want to submit new tasks with a description and priority level (high, medium, or low)
5. As a user, I want to mark tasks as complete

<h3>Built With</h3>

<ul>
    <li><a href="http://gruntjs.com/">Grunt (Javascript task runner)</a></li>
    <li><a href="https://angularjs.org/">AngularJS (Javascript MVW framework)</a></li>
    <li><a href="https://www.firebase.com/">Firebase (Realtime database, backend as a service)</a></li>
    <li><a href="https://www.firebase.com/docs/web/libraries/angular/">AngularFire (AngularJS bindings for Firebase)</a></li>
</ul>