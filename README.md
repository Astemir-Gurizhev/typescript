  Структура объектов

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

  Объединение объектов в один объект

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

  ========================================================================