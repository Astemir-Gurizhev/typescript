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


   

  <b> Классы и типы </b> <br/>

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