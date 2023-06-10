const a = {
  name: '',
};

// ||=
a.name ||= 'ljk';

console.log(a); // {name: "ljk"}

const b = {
  name: null,
  age: 18,
};

b.name ??= 'test';
b.age ??= 20;

// {name: "test", age: 18}

const c = {
  name: '',
  age: 18,
};

c.name &&= 'ljk';
c.age &&= 20;

// {name: "", age: 20}
