sap.ui.define(['sap/ui/core/Control'], function(Control) {
  Control.extend('com.gauge.gaugeExample.src.GoogleChartGauge', {
    metadata: {
      properties: {
        width: {
          type: 'sap.ui.core.CSSSize',
          defaultValue: '400px'
        },
        height: {
          type: 'sap.ui.core.CSSSize',
          defaultValue: '120px'
        },
        label: {
          type: 'string',
          defaultValue: 'label'
        },
        value: {
          type: 'integr',
          defaultValue: 0
        },
        redFrom: {
          type: 'integr',
          defaultValue: 90
        },
        redTo: {
          type: 'integr',
          defaultValue: 100
        },
        yellowFrom: {
          type: 'integr',
          defaultValue: 75
        },
        yellowTo: {
          type: 'integr',
          defaultValue: 90
        },
        minorTicks: {
          type: 'integr',
          defaultValue: 5
        }
      }
    },
    renderer: function(oRm, oControl) {
      oRm.write('<div');
      oRm.writeControlData(oControl);
      oRm.writeClasses();
      oRm.addStyle('width', oControl.getWidth());
      oRm.addStyle('height', oControl.getHeight());
      oRm.writeStyles();
      oRm.write('>');
      oRm.write('</div>'); 
    },
    onAfterRendering: function() {
      var that = this;
      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(function() {
        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          [that.getLabel(), that.getValue()]
        ]);

        var options = {
          redFrom: that.getRedFrom(),
          redTo: that.getRedTo(),
          yellowFrom: that.getYellowFrom(),
          yellowTo: that.getYellowTo(),
          minorTicks: that.getMinorTicks()
        };

        var chart = new google.visualization.Gauge(that.$()[0]);
        chart.draw(data, options);        
      });
    }
  });

  
  
});