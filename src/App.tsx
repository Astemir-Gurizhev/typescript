function App() {
  //===============================================================================

  // Структура объектов
  type TypeUser = {
    name: string;
    age: number;
    address: string;
  };

  let Astemir: TypeUser;

  Astemir = {
    name: "Astemir",
    age: 23,
    address: "KBR",
  };

  // Объединение объектов в один объект

  type TypeHobbi = {
    hobbi: string;
  };
  type TypeJob = {
    job: string;
  };
  const hobbi: TypeHobbi = {
    hobbi: "sport",
  };
  const job: TypeJob = {
    job: "programming",
  };

  let Astik: TypeHobbi & TypeJob;

  Astik = {
    ...hobbi,
    ...job,
  };

  //===============================================================================

  // Типизация Массивов

  let array: string[];

  array = ["one", "two"];

  //ReadonlyArray

  const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];

  // numbers[0]  получим число
  // numbers[0] = '11'  меняться не будет ОШИБКА - ТОЛЬКО ДЛЯ ЧТЕНИЯ

  //Кортежи (точно знаем количество элементов)

  type TypeArray = [number, string, null];

  const newArray: TypeArray = [23, "Астемир", null]; // обязательно должно быть 3 элемента нужной типизации

  //===============================================================================

  //Функции и их типы

  type TypeChannelReturn = {
    name: string;
  };

  //типизация function declaration, парамметры типизируем, после указываем тип возвращаемого
  function getChannel(name: string): TypeChannelReturn {
    return { name };
  }

  // типизация стрелочной функции с выносом типизации (возможно только с function expression)

  type TypeChannelFunction = (name: string) => TypeChannelReturn;

  const getChannelName: TypeChannelFunction = (name) => {
    return { name };
  };

  // REST в аргументе

  const getNumbers = (...numbers: number[]) => {
    return numbers;
  };

  // Функциональные перегрузки

  // сигнатуры функции
  function getCar(name: string): string;
  function getCar(name: string, price: number): string;

  // реализации функции
  function getCar(name: string, price?: number): string {
    return price ? `Название ${name}, Цена ${price} ` : `Название ${name}`;
  }

  const car1 = getCar("bmw");
  const car2 = getCar("bmw", 10000000);
  // const car3 = getCar('bmw', 10000000, 'm5') - 3го не существует, принимается 1 или 2 аргумента (так работает перегрузка)

  //===============================================================================
  // Классы и типы

  class Car {
    name: string;
    price: number;

    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }

    getInfo(): string {
      return `${this.name} - ${this.price}`
    }
  }

  new Car('tesla', 10000).getInfo()

  //===============================================================================
  return <></>;
}

export default App;
