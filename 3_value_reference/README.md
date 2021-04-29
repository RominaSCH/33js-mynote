# Value Types and Reference Types

## Value는 string, number, boolean, NaN, undefined, null 가능
## Reference는 array, object, function 에서 사용될 수 있다.

#### 이거 그거네 메모리에 저장된 값을 참조하는거랑 데이터 자체의 값을 복사하는거 deep copy랑 shallow copy 방법 정리하기

```
let a = 50;
let b = a;

a = 10;

console.log(b);

// > 50

// This is Value!

// ------------------------------------------------

const arr = ["me", "llamo"];
const mimi = arr;

arr.push("Song");

console.log(mimi);

// > ["me", "llamo", "Song"]

// This is Reference
// mimi는 arr를 따라해! arr의 값(배열)은 메모리 어딘가에 있고 mimi는 그 메모리 안에 있는 값을 따라할 뿐이다.

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
```