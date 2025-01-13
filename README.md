  Структура объектов<br/>

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

  Объединение объектов в один объект<br/>

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

  Типизация Массивов<br/>

  let array: string[];<br/>

  array = ["one", "two"];<br/>

  ReadonlyArray <br/>

  const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];<br/>

  numbers[0]  получим число<br/>
  numbers[0] = '11'  меняться не будет ОШИБКА - ТОЛЬКО ДЛЯ ЧТЕНИЯ<br/>


  Кортежи (точно знаем количество элементов)<br/>

  type TypeArray = [number, string, null]<br/>

  const newArray: TypeArray = [23, 'Астемир', null] // обязательно должно быть 3 элемента нужной типизации<br/>