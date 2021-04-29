let a = 50;
let b = a;

a = 10;

console.log(b);

// > 50

//이건 Value!

// ------------------------------------------------

const arr = ["me", "llamo"];
const mimi = arr;

arr.push("Song");
mimi.push("!");

console.log(mimi);

// > ["me", "llamo", "Song"]

//This is Reference

// ------------------------------------------------

console.log([10] === [10]);

// > false

// 이 둘은 각각 메모리에 위치한 다른 오브젝트이기 때문.

const x = {
    a: "Hola"
};

const b = x;

b.a = "안녕";

console.log(x);

// > 안녕

// b를 통해 x를 업데이트 할 수 있다.