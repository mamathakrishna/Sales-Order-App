sap.ui.controller("sorderapp.SalesOrderCreationNext", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf salesorderapp.SalesOrderCreationNext
*/
//	onInit: function() {
//
//	},

	handleTableSelectDialogPress: function(oEvent)
	{
		
		
		if (! this._oDialog) {
			this._oDialog = sap.ui.xmlfragment("sorderapp.Dialog", this);
		}
		this._oDialog.open();
		
	},
	
	
	handleNextPress: function()
	{
		app.to(page4);
	},
	
	handleBackPress: function()
	{
		app.to(page2);
	},
	
	handlePressConfiguration: function(oEvent) {
		
		var oButton = oEvent.getSource();

		// create action sheet only once
		if (!this._actionSheet) {
			this._actionSheet = sap.ui.xmlfragment(
				"sorderapp.ActionSheet",
				this
			);
			this.getView().addDependent(this._actionSheet);
		}

		this._actionSheet.openBy(oButton);
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
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf salesorderapp.SalesOrderCreationNext
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf salesorderapp.SalesOrderCreationNext
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf salesorderapp.SalesOrderCreationNext
*/
//	onExit: function() {
//
//	}


	
});