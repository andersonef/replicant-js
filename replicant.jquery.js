$.fn.replicant = function(initialData, secondData){

    var instance = $(this).data('replicantInstance');
    if(instance) {
        switch (initialData) {
            case 'replicate':
                return instance.replicate(secondData, false);
            case 'clear' :
                return instance.clear();
            case 'setModel' :
                return instance.setModel(secondData);
        }
        //console.log('verificando instance', instance, $(this));
        if (initialData && initialData.values) {
            instance.clear();
            for (var x = 0; x < initialData.values.length; x++) {
                instance.replicate(initialData.values[x], (x == 0));
            }
        }
        //console.log('nao vou fazer naada.. saindo');
        return instance;
    }
    var model = $(this);
    model = $(model);
    var self = this;
    this.totalItems = 0;
    this.model = $(".replicant-base", model).prop('outerHTML');
    this.container = model;
    this.qtd = 1;
    this.constructorParams = initialData;


    this.setModel       = function(m){
        this.model = m;
        return this;
    }

    this.clear          = function(buttonWasClicked){
        this.container.html(this.model);
        $(".replicant-remove", this.container).hide();
        this.qtd = 1;
        if(this.constructorParams && this.constructorParams.onRender) this.constructorParams.onRender($(".replicant-base:last", $(this)), buttonWasClicked);
        if(this.constructorParams && this.constructorParams.onClear) this.constructorParams.onClear(buttonWasClicked);
        return this;
    };

    //hidding remove button from the original content:
    $(".replicant-remove", model).hide();

    //action for add button
    model.delegate(".replicant-add", "click", function(){
        self.replicate(null, false, true);
    });
    model.delegate(".replicant-clear", "click", function(){
        self.clear(true);
    })

    //action for remove button
    model.delegate(".replicant-remove", "click", function(){
        self.qtd--;
        var pai = $(this).closest(".replicant-base");

        if(pai.is(':last-child')) {
            var anterior = pai.prev(".replicant-base");
            $(".replicant-add", anterior).show();
            $(".replicant-clear", anterior).show();
        }
        var avo = pai.parent();
        pai.remove();
        if($(".replicant-base", avo).length == 1){
            $(".replicant-remove", avo).hide();
        }
        if(self.constructorParams && self.constructorParams.onRemove) self.constructorParams.onRemove();
    });
    if(self.constructorParams && self.constructorParams.onRender) self.constructorParams.onRender($(".replicant-base:last", $(this)));
    model.data('replicantInstance', this);

    this.replicate = function(value, ignoreAppend, buttonWasClicked){
        if(this.constructorParams && this.constructorParams.onBeforeRender && !this.constructorParams.onBeforeRender(value, self.qtd, buttonWasClicked)) return;

        self.qtd++;
        if(!ignoreAppend) {
            this.container.append(this.model);
        }

        //when I replicate a new object, all remove buttons must be showed (except the last one):
        $(".replicant-remove", this.container).show();
        //$(".replicant-remove:last", this.container).hide();
        $(".replicant-add", this.container).not(':last').hide();
        $(".replicant-clear", this.container).not(':last').hide();



        //setting data
        if (value) {

            for(var field in value){

                if(typeof value[field] === 'object') {
                    $('[name="' + field +'"]', $(".replicant-base:last", this.container)).attr(value[field]['propriedade'], value[field]['value']);
                }

                $('[name="' + field +'"]', $(".replicant-base:last", this.container)).val(value[field]);
                //console.log('campo: ', field, value[field], $('[name="' + field +'"]', $(".replicant-base", this.container)), $('[name="' + field +'"]', $(".replicant-base", this.container)).length);
            }
        }

        if(self.constructorParams && self.constructorParams.onRender) self.constructorParams.onRender($(".replicant-base:last", $(this)), buttonWasClicked);
    };

    //Do I need to put initial data here?
    if(initialData && initialData.values){
        for(var x = 0; x < initialData.values.length; x++) {
            this.replicate(initialData.values[x], (x == 0));
        }
    }
}
