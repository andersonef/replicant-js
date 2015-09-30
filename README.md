# replicant-js
A jQuery plugin to help to create replicating dom (with add and remove button, when you click add it get cloned under the original dom)
![alt tag](http://g.recordit.co/r7sypMHcv2.gif)

#Usage
You should include the jQuery library on your project

```html
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="replicant.jquery.min.js"></script>
```

After that, you must create your HTML as the following:

```html
    <div id="my-replicant">
        <div class="replicant-base">
            Email: <input type="email" name="emailAdrress[]">
            <a href="javascript: void(0)" class="replicant-add">Add Another Email</a>
            <a href="javascript: void(0)" class="replicant-remove">Remove</a>
        </div>
    </div>
    <script type="text/javascript">
        $("#my-replicant").replicant();
    </script>
```

#Replicant with initial data

```html
    <div id="my-replicant">
        <div class="replicant-base">
            Email: <input type="email" name="emailAdrress[]"><br>
            Full Name: <input type="text" name="fullName[]">
            <a href="javascript: void(0)" class="replicant-add">Add Another Email</a>
            <a href="javascript: void(0)" class="replicant-remove">Remove</a>
        </div>
    </div>
    <script type="text/javascript">
        $("#my-replicant").replicant({
            values : [
                {'emailAddress[]' : 'myfirstemail@gmail.com', 'fullName[]' : 'Anderson Nunes'},
                {'emailAddress[]' : 'mysecondemail@gmail.com', 'fullName[]' : 'Celia Nunes'},
                {'emailAddress[]' : 'mythird@gmail.com', 'fullName[]' : 'Calebe Nunes'}
            ]
        });
    </script>
```