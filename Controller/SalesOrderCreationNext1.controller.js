sap.ui.controller("sorderapp.SalesOrderCreationNext1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sorderapp.SalesOrderCreationNext1
*/
//	onInit: function() {
//
//	},

	onSubmit: function(){
		  var newValue= "Sales Order Created"; 
		  sap.m.MessageToast.show(newValue);
	},
	
	handleUserItemPressed:function(oEvent) {
		var oButton = oEvent.getSource();

		// create action sheet only once
		if (!this._actionSheet1) {
			this._actionSheet1 = sap.ui.xmlfragment(
				"sorderapp.SR",
				this
			);
			this.getView().addDependent(this._actionSheet1);
		}

		this._actionSheet1.openBy(oButton);

		},
		
		onPressMyHome:function()
		{
			app.to(page);
		},
		handlePressHome:function()
		{
			app.to(page1);
		},
		
		onCSPress:function()
		{
			app.to(page2);
		},
		
		onESPress:function()
		{
			app.to(page5);
		},
		
		onTSPress:function()
		{
			app.to(page6);
		},
		
		onASPress: function()
		{
			app.to(page7);
		},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sorderapp.SalesOrderCreationNext1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sorderapp.SalesOrderCreationNext1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sorderapp.SalesOrderCreationNext1
*/
//	onExit: function() {
//
//	}

});