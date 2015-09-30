# replicant-js
A jQuery plugin to help to create replicating dom (with add and remove button, when you click add it get cloned under the original dom)

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
