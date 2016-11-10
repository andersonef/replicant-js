# replicant-js
A jQuery plugin to help to create replicating dom (with add and remove button, when you click add it get cloned under the original dom)
![Example gif](https://raw.githubusercontent.com/andersonef/replicant-js/master/example.gif)

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
            <a href="javascript: void(0)" class="replicant-clear">Clear All</a>
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
            Email: <input type="email" name="emailAdrress[]">
            Full Name: <input type="text" name="fullName[]">
            <a href="javascript: void(0)" class="replicant-clear">Clear All</a>
            <a href="javascript: void(0)" class="replicant-add">Add Another Email</a>
            <a href="javascript: void(0)" class="replicant-remove">Remove</a>
        </div>
    </div>
    <script type="text/javascript">
        $("#my-replicant").replicant({
            values : [
                {'emailAdrress[]' : 'myfirstemail@gmail.com', 'fullName[]' : 'Anderson Nunes'},
                {'emailAdrress[]' : 'mysecondemail@gmail.com', 'fullName[]' : 'Celia Nunes'},
                {'emailAdrress[]' : 'mythird@gmail.com', 'fullName[]' : 'Calebe Nunes'}
            ]
        });
    </script>
```

#Replicant with onRender event

If you need to execute some javascript each time you replicate, just do it:

```html
    <script type="text/javascript">
        $("#my-replicant").replicant({
            onRender : function(replicatedElement, buttonWasClicked){
                /**
                *  replicatedElement: A jquery element representing the element which was replicated right before this method was triggered
                *  buttonWasClicked: A boolean which indicates if this method was triggered by a user action (via click on add button) or via code (initial data) 
                */
                console.log("I'm replicated!");
            }
        });
    </script>
```

#Replicant with onBeforeRender event:

Sometimes you must execute something before render your UI. The onBeforeRender event allows you to do it AND prevent the replication. You can prevent replicant just returning false on this event. This way:


```html
    <div id="my-replicant">
        <div class="replicant-base">
            Email: <input type="email" name="emailAddress[]">
            Full Name: <input type="text" name="fullName[]">
            <a href="javascript: void(0)" class="replicant-clear">Clear All</a>
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
            ],
            onBeforeRender : function(rowDataObject, index, buttonWasClicked){
                /**
                *  buttonWasClicked: A boolean which indicates if this method was triggered by a user action (via click on add button) or via code (initial data) 
                */
                //if you want to prevent replicant to do his job when the email is forbidden@email.com or its replicated 5 times, you can do it:
                if(rowDataObject['emailAddress[]'] == 'forbidden@email.com' || index >= 5) return false;
                return true;
            }
        });

    </script>
```

#Replicate programatically


```html
    <div id="my-replicant">
        <div class="replicant-base">
            Email: <input type="email" name="emailAddress[]">
            Full Name: <input type="text" name="fullName[]">
            <a href="javascript: void(0)" class="replicant-clear">Clear All</a>
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
        //you can add more values at anytime using this:
        $("#my-replicant").replicant('replicate', {'emailAddress[]' : 'myNewEmail@gmail.com', 'fullName[]' : 'New Name'});
    </script>
```

#Clear your replicant


```html
    <div id="my-replicant">
        <div class="replicant-base">
            Email: <input type="email" name="emailAddress[]">
            Full Name: <input type="text" name="fullName[]">
            <a href="javascript: void(0)" class="replicant-clear">Clear All</a>
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

        setTimeout(function(){
            //you can clear everything just using this:
            $("#my-replicant").replicant('clear');
        }, 5000);

    </script>
```


