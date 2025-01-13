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

  type TypeArray = [number, string, null]

  const newArray: TypeArray = [23, 'Астемир', null] // обязательно должно быть 3 элемента нужной типизации

  //===============================================================================

  return <></>;
}

export default App;
