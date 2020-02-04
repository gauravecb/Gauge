sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/gauge/gaugeExample/src/GoogleChartGauge"

], function (Controller, gauge) {
	"use strict";

	return Controller.extend("com.gauge.gaugeExample.controller.View1", {
		onInit: function () {
			var oPage = this.getView().byId("page")
			var chart = new com.gauge.gaugeExample.src.GoogleChartGauge({
				label: 'Memory',
				value: 80,
				redFrom: 90, // optional
				redTo: 100, // optional
				yellowFrom: 75, // optional
				yellowTo: 90, // optional
				minorTicks: 5 // optional
			});
			oPage.addContent(chart);

			setInterval(function () {
				chart.setValue(Math.round(Math.random() * 100));
			}, 1000)
		}
	});
});