(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        // function should return new aircraft object
		var newObj = {
			code: newAircraftCode,
			services: []
		};

		global.UAM.aircrafts.push(newObj);
		return newObj;
	
    };

    global.UAM.removeAircraft = function (aircraftObj) {
		if (aircraftObj.code !== undefined) {
			for (var i=0; i < global.UAM.aircrafts.length; i++) {
			  var eq = JSON.stringify(aircraftObj) === JSON.stringify(global.UAM.aircrafts[i]);
			  if (eq) {
				  global.UAM.aircrafts.splice(i, 1);
			  }
			}
		}
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name1, timeToExxecute) {
        aircraftObj.services.push({
			name: name1,
			timeToExecute: timeToExxecute
		});
    };
        
    global.UAM.reduceTimeToExecute = function(aircraftObj, time) {

    	if (aircraftObj.services !== undefined && Array.isArray(aircraftObj.services)) {
			for (var i=0; i < aircraftObj.services.length; i++) {
				aircraftObj.services[i].timeToExecute = aircraftObj.services[i].timeToExecute - time;
			}
    	}
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        if (maxTimeToExecute === undefined || maxTimeToExecute === null) {
        	return [];
        }

		var arrayToReturn = [];
		for (var i = 0; i <global.UAM.aircrafts.length; i++) {
			var aircraftObj = global.UAM.aircrafts[i];
			var services = aircraftObj.services;
			
			if (services === undefined || !Array.isArray(services) || services.length === 0) {
				continue;
			}
			
			for (var j = 0; j < aircraftObj.services.length; j++) {
			
				if (aircraftObj.services[j].timeToExecute <= maxTimeToExecute) {
					arrayToReturn.push(aircraftObj);
					break;
				}
			}
		}
        return arrayToReturn;
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
