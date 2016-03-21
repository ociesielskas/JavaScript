(function (global) {

	var Animal = {
		type: 'Animal',
		eat: function (animal) {
			if (this.type === 'Cat') {
				if(animal.type === 'Bird')
					return 'Mniam!';
				else 
					return 'Blee!';
			} else if (this.type === 'Bird') {
				if(animal.type === 'Worm')
					return 'Mniam!'; 
				else 
					return 'Blee!';
			} else {
				return 'Blee!';
			}
		}
	}
	
	/*var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"*/
	
	
	var cat = Object.create(Animal);
	cat.type = 'Cat';
	var bird = Object.create(Animal);
	bird.type = 'Bird';
	var worm = Object.create(Animal);
	worm.type = 'Worm';
	
	if (!global.UAM) {
		global.UAM = {};
	}
	global.UAM.Cat = cat;
	global.UAM.Bird = bird;
	global.UAM.Worm = worm;

	
}(window));

/*
	W zadaniu mamy 3 rodzaje zwierząt: koty, ptaki i robaki. Respektując prawa natury koty jedzą ptaki, a ptaki robaki.
	Zaimplementuj obiekty Cat, Bird i Worm tak, aby poniższy kod zwracał prawidłowe rezultaty:

	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"

	Dodatkowo wszystkie obiekty mają korzystać ze wspólnej metody eat.
*/

	
