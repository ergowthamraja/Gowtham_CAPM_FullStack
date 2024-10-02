sap.ui.define([], function () {
	"use strict";
	return {
		
		formatDate: function (sDate) {
			// debugger;
			if (sDate) {
				var oDateFormat;
				oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
					// pattern: "dd.MM.yyyy"
					pattern: "MMM dd,yyyy"
				});
				return oDateFormat.format(sDate);
			} else {
				return " ";
			}
		}
	};
});