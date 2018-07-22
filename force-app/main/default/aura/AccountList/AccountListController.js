({
    doInit: function (component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function (a) {
            component.set("v.accounts", a.getReturnValue());
            var event = $A.get("e.c:accountsLoaded");
            event.setParams({ "accounts": a.getReturnValue() });
            event.fire();
            alert('Event Fired');
        });
        $A.enqueueAction(action);
    }
})