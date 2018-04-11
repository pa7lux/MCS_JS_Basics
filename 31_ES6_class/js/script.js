class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi() {
		return 'Hello '+this.name;
	}
}

class Female extends User {
	sayHi() {
		return 'Привет, '+this.name+'! ты зарегистрирована';
	}
}

const Man = new User('someone', '123@yu.com', '123456')
console.log(Man)
console.log(Man.sayHi())

const Anya = new Female('Аня', '8687@lol.com', 'qwerty')
console.log(Anya)
console.log(Anya.sayHi())