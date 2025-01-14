  <b>Структура объектов</b><br/>

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

  <b>Объединение объектов в один объект</b><br/>

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

    

  <b>Типизация Массивов</b><br/>

    let array: string[];

    array = ["one", "two"];

  <b>ReadonlyArray</b>

    const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];

    numbers[0]  получим число
    numbers[0] = '11'  меняться не будет ОШИБКА - ТОЛЬКО ДЛЯ ЧТЕНИЯ


  <b>Кортежи (точно знаем количество элементов)</b><br/>

    type TypeArray = [number, string, null]

    const newArray: TypeArray = [23, 'Астемир', null] // обязательно должно быть 3 элемента нужной типизации

   

  <b>Функции и их типы</b><br/>

    type TypeChannelReturn = {
      name: string;
    }; 

  <b>типизация function declaration, парамметры типизируем, после указываем тип возвращаемого</b><br/>

    function getChannel(name: string) : TypeChannelReturn {
      return { name };
    }

  <b>типизация стрелочной функции с выносом типизации (возможно только с function expression)</b><br/>

    type TypeChannelFunction = (name:string) => TypeChannelReturn

    const getChannelName:TypeChannelFunction = (name) => {
      return { name }
    }

  <b>REST в аргументе</b><br/>

    const getNumbers = (...numbers: number[])  => {
      return numbers
    }

  <b>Функциональные перегрузки</b><br/>

  <b>сигнатуры функции</b><br/>

    function getCar(name:string):string
    function getCar(name:string, price: number):string

  <b>реализации функции</b><br/>

    function getCar(name:string, price?: number):string {
      return price ? `Название ${name}, Цена ${price} ` : `Название ${name}`
    }

    const car1 = getCar('bmw')
    const car2 = getCar('bmw', 10000000)
    const car3 = getCar('bmw', 10000000, 'm5') - 3го не существует, принимается 1 или 2 аргумента (так работает перегрузка)


   

  

  <b>Классы и типы</b> <br/>

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


  <b>Интерфейсы. Типы или Интерфейсы?</b> <br/>

  <b>Выбор субъективен или в зависимости что требуют в команде </b> <br/>

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

  <b>РАЗНИЦА </b> <br/>

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

  <b>через type можно описывать функции type TypeChannel = (name:string) => TypeChannelReturn, в отличии от интерфейсов </b> <br/>

  <b>Когда надо описать что-то глобальное (интерфейс юзера, товара )</b> <br/>
  <b>Когда надо описать что-то маленькое (функции, аргументы) использую типы , хотя пропсы описываю также через интерфейсы</b> <br/>

  

  <b>Enum и его типы (это как константы, но лучше)</b> <br/>

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

  

  <b>Утверждения (Assertions) </b> <br/>
  <b>Например, когда тип переменной неизвестен, и мы задаем принудительно (есть 2 варианта) </b> <br/>

    const inputElement = document.querySelector("input");
    const value1 = (inputElement as HTMLInputElement).value;
    const value2 = (<HTMLInputElement>inputElement).value;



  <b>Generic  </b> <br/>

  <b>функции и дженерик</b> <br/>
  
    function entity<T>(args: T):T {
      return args
    }
    entity<number>(1)
    entity<string>('test')
    //  entity<string>(3) Argument of type 'number' is not assignable to parameter of type 'string'.

  <b>стрелочная функция дженерик</b> <br/>

    const entity2 = <T>(args: T):T => {  
      return args
    }


  <b>интерфейс и дженерики</b> <br/>
  в интерфейсе мы можем принимать дженерики, а в type - нет<br/>

    interface iPair<K,V> { 
      key: K
      value: V
    }

    const pair1: iPair<string, number> = {
      key: 'test',
      value: 23
    }

  
  <b>задать тип дженерика по умолчанию</b> <br/>

    type TypeLength = {
      length: number
    }

    function getNameLength<T extends TypeLength>(entity:T):number {
      return entity.length
    } 
    getNameLength('wrersdsf')
    getNameLength([0,1,2])


  <b>Классы и дженерик</b> <br/>

    class Channel<T> {
      private name: T

      constructor(name:T) {
        this.name = name
      }

      getName():T {
        return this.name
      }
    }

    new Channel<string>('test')
    new Channel<number>(0.7)