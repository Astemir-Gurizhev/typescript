  <b>Структура объектов</b><br/>

  type TypeUser = { <br/>
    name: string; <br/>
    age: number; <br/>
    address: string; <br/>
  }; <br/>

  let Astemir: TypeUser; <br/>

  Astemir = { <br/>
    name: "Astemir", <br/>
    age: 23, <br/>
    address: "KBR", <br/>
  }; <br/>

  <b>Объединение объектов в один объект</b><br/>

  type TypeHobbi = { <br/>
    hobbi: string; <br/>
  }; <br/>
  type TypeJob = {<br/>
    job: string;<br/>
  };<br/>
  const hobbi: TypeHobbi = {<br/>
    hobbi: "sport",<br/>
  };<br/>
  const job: TypeJob = {<br/>
    job: "programming",<br/>
  };<br/>

  let Astik: TypeHobbi & TypeJob;<br/>

  Astik = {<br/>
    ...hobbi,<br/>
    ...job,<br/>
  };<br/>

  ========================================================================

  <b>Типизация Массивов</b><br/>

  let array: string[];<br/>

  array = ["one", "two"];<br/>

  <b>ReadonlyArray</b> <br/>

  const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];<br/>

  numbers[0]  получим число<br/>
  numbers[0] = '11'  меняться не будет ОШИБКА - ТОЛЬКО ДЛЯ ЧТЕНИЯ<br/>


  <b>Кортежи (точно знаем количество элементов)</b><br/>

  type TypeArray = [number, string, null]<br/>

  const newArray: TypeArray = [23, 'Астемир', null] // обязательно должно быть 3 элемента нужной типизации<br/>

  ========================================================================

  <b>Функции и их типы</b><br/>

  type TypeChannelReturn = {<br/>
    name: string;<br/>
  }; <br/>

  <b>типизация function declaration, парамметры типизируем, после указываем тип возвращаемого</b><br/>

  function getChannel(name: string) : TypeChannelReturn {<br/>
    return { name };<br/>
  }<br/>

  <b>типизация стрелочной функции с выносом типизации (возможно только с function expression)</b><br/>

  type TypeChannelFunction = (name:string) => TypeChannelReturn<br/>

  const getChannelName:TypeChannelFunction = (name) => {<br/>
    return { name }<br/>
  }<br/>

  <b>REST в аргументе</b><br/>

  const getNumbers = (...numbers: number[])  => {<br/>
    return numbers<br/>
  }<br/>

  <b>Функциональные перегрузки</b><br/>

  <b>сигнатуры функции</b><br/>
  function getCar(name:string):string<br/>
  function getCar(name:string, price: number):string<br/>

  <b>реализации функции</b><br/>
  function getCar(name:string, price?: number):string {<br/>
    return price ? `Название ${name}, Цена ${price} ` : `Название ${name}`<br/>
  }<br/>

  const car1 = getCar('bmw')<br/>
  const car2 = getCar('bmw', 10000000)<br/>
  const car3 = getCar('bmw', 10000000, 'm5') - 3го не существует, принимается 1 или 2 аргумента (так работает перегрузка)<br/>


  ========================================================================

  <b> Классы и типы </b> <br/>

  class Car { <br/>
    name: string; <br/>
    price: number; <br/>

    constructor(name: string, price: number) { <br/>
      this.name = name;<br/>
      this.price = price; <br/>
    }

    getInfo(): string { <br/>
      return `${this.name} - ${this.price}` <br/>
    }<br/>
  } <br/>

  new Car('tesla', 10000).getInfo()<br/>