$.fn.replicant = function(){
    var model = $(this);
    model = $(model);
    this.totalItems = 0;
    this.model = $(".replicant-base", model).prop('outerHTML');
    this.container = model;


    //hidding remove button from the original content:
    $(".replicant-remove", model).hide();

    //action for add button
    model.delegate(".replicant-add", "click", function(){
        console.log('base: ',this.model);
        this.container.append(this.model);
        //when I replicate a new object, all remove buttons must be showed (except the last one):
        $(".replicant-remove", this.container).show();
        $(".replicant-remove:last", this.container).hide();
        $(".replicant-add", this.container).not(':last').hide();
    });

    //action for remove button
    model.delegate(".replicant-remove", "click", function(){
        $(this).closest(".replicant-base").remove();
    });
}