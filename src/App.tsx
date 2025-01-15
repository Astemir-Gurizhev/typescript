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
      return `${this.name} - ${this.price}`;
    }
  }

  new Car("tesla", 10000).getInfo();

  //===============================================================================

  // Интерфейсы. Типы или Интерфейсы?

  //Выбор субъективен или в зависимости что требуют в команде

  interface iUserAge {
    age: number;
  }

  interface iUser extends iUserAge {
    //здесь надо наследовать через extends
    name: string;
    email: string;
  }

  const userrr: iUser = {
    email: "dsijfsjdi@sfdkgj.ru",
    name: "Astemir",
    age: 23,
  };

  //РАЗНИЦА

  type TypePerson = {
    age: number;
  };

  type TypeUserr = {
    name: string;
    email: string;
  } & TypePerson; // здесь можно добавлять типы &(И) |(ИЛИ)

  const userr: TypeUserr = {
    email: "dsijfsjdi@sfdkgj.ru",
    name: "Astemir",
    age: 23,
  };

  // через type можно описывать функции type TypeChannel = (name:string) => TypeChannelReturn, в отличии от интерфейсов

  //Когда надо описать что-то глобальное (интерфейс юзера, товара )
  //Когда надо описать что-то маленькое (функции, аргументы) использую типы , хотя пропсы описываю также через интерфейсы

  //===============================================================================

  // Enum и его типы (это как константы, но лучше)

  enum EnumRoles {
    ADMIN,
    GUEST,
    USER,
  }

  const enum EnumColors { // использовать const лучше для оптимизации
    black,
    pink,
    green,
  }

  interface iUserr {
    role: EnumRoles;
    color: EnumColors;
  }

  const user1: iUserr = {
    // role: "ADMIN" НЕВОЗМОЖНО НАПИСАТЬ
    role: EnumRoles.ADMIN, //Так работает и нельзя допустить случайную ошибку
    color: EnumColors.black,
  };

  //===============================================================================

  // Утверждения (Assertions)
  //Например, когда тип переменной неизвестен, и мы задаем принудительно (есть 2 варианта)

  const inputElement = document.querySelector("input");
  const value1 = (inputElement as HTMLInputElement).value;
  // const value2 = (<HTMLInputElement>inputElement).value (2 вариант)

  //===============================================================================

  // Generic

  // функции и дженерик
  function entity<T>(args: T): T {
    return args;
  }
  entity<number>(1);
  entity<string>("test");
  //  entity<string>(3) Argument of type 'number' is not assignable to parameter of type 'string'.

  // стрелочная функция дженерик
  // const entity2 = <T>(args: T):T => {
  //   return args
  // }

  // интерфейс и дженерики
  interface iPair<K, V> {
    // в интерфейсе мы можем принимать дженерики, а в type - нет
    key: K;
    value: V;
  }

  const pair1: iPair<string, number> = {
    key: "test",
    value: 23,
  };

  // задать тип дженерика по умолчанию

  type TypeLength = {
    length: number;
  };

  function getNameLength<T extends TypeLength>(entity: T): number {
    return entity.length;
  }
  getNameLength("wrersdsf");
  getNameLength([0, 1, 2]);

  // Классы и дженерик
  class Channel<T> {
    private name: T;

    constructor(name: T) {
      this.name = name;
    }

    getName(): T {
      return this.name;
    }
  }

  new Channel<string>("test");
  new Channel<number>(0.7);

  // Утилиты типов

  interface ICar {
    id: number;
    name: string;
    price: number;
    yearBuilt: number;
  }

  // Omit

  interface ICarCreate extends Omit<ICar, "id"> {} //наследовались от ICar и исключили ключ id с помощью Omit

  // const car: ICarCreate = {

  // }

  // Pick

  interface ICarId extends Pick<ICar, "id"> {} //наследовались от ICar и оставили только ключ id с помощью Pick

  // const car: ICarId = {

  // }

  // Partial
  interface IOptionalCar extends Partial<ICar> {} //наследовались от ICar и сделали все ключи необязательными с помощью  Partial

  // const car: IOptionalCar = {

  // }

  // Required

  interface iRequiredCar extends Required<ICar> {} // обратное свойство optional. делает все ключи обязательными (редко используется)

  // Readonly

  interface IReadonlyCar extends Readonly<ICar> {} //наследовались от ICar и сделали все ключи только доступными для чтения с помощью Readonly

  // const car: IReadonlyCar = {

  // }

  // Record

  type TypeCarRecord = Record<"name" | "price", string | number>; // name и прайс могут быть либо string либо number (часто используют)

  // const car: TypeCarRecord = {

  // }

  // ReturnType

  type TypeGetName = () => number;
  type Return = ReturnType<TypeGetName>; // с помощью ReturnType можем узнать, какой тип возвращает функция

  // Extract

  type Any = Extract<"max" | "andrey", "andrey" | "misha">; // Extract возвращает совпадение параметров (очень редко используется) - andrey

  // Exclude
  type Anyy = Exclude<"max" | "andrey", "andrey" | "misha">; // Exclude исключает все, кроме первого параметра и возвращает его

  // NonNullable

  type NotNull = NonNullable<string | number | null | undefined>; //NonNullable удаляет параметры null и undefined и возвращает все остальное

  //===============================================================================

  // Декораторы

  // Декораторы добавляют какой-то дополнительный функционал вашим функциям, классам и т.д.

  // в tsconfig в "compilerOptions" обязательно нужно добавить "experimentalDecorators": true


  function LogClass(constructor: Function) {
    console.log(constructor.name)
  }

  @LogClass

  class Plane {
    constructor(id: number) {}
  }

  //===============================================================================
  return <></>;
}

export default App;
