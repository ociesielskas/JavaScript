(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	var result = {};
	function newObject(objClass, arg1) {
		result = new objClass();
		result.name = arg1;
		
		return result;
	}

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


