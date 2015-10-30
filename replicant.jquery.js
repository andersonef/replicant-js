$.fn.replicant = function(initialData){
    var model = $(this);
    model = $(model);
    var self = this;
    this.totalItems = 0;
    this.model = $(".replicant-base", model).prop('outerHTML');
    this.container = model;


    //hidding remove button from the original content:
    $(".replicant-remove", model).hide();

    //action for add button
    model.delegate(".replicant-add", "click", function(){
        self.replicate();
    });

    //action for remove button
    model.delegate(".replicant-remove", "click", function(){
        $(this).closest(".replicant-base").remove();
    });
    if(initialData && initialData.onRender) initialData.onRender();

    this.replicate = function(value, ignoreAppend){
        console.log('base: ',this.model);
        if(!ignoreAppend) {
            this.container.append(this.model);
        }
        //when I replicate a new object, all remove buttons must be showed (except the last one):
        $(".replicant-remove", this.container).show();
        $(".replicant-remove:last", this.container).hide();
        $(".replicant-add", this.container).not(':last').hide();

        //setting data
        if(value){
            for(var field in value){
                $('[name="' + field +'"]', $(".replicant-base:last", this.container)).val(value[field]);
                console.log('campo: ', field, value[field], $('[name="' + field +'"]', $(".replicant-base", this.container)), $('[name="' + field +'"]', $(".replicant-base", this.container)).length);
            }
        }

        if(initialData && initialData.onRender) initialData.onRender();
    };

    //Do I need to put initial data here?
    if(initialData && initialData.values){
        for(var x = 0; x < initialData.values.length; x++) {
            this.replicate(initialData.values[x], (x == 0));
        }
    }
}