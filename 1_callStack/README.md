# Call Stack example(MDN)

------------------------------
``` javascript
function greeting() {
   // [1] Some code here
   sayHi();
   // [2] Some code here
}

function sayHi() {
   return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here
```
------------------------------

1. function greeting() 을 읽어 greeting()이 선언된 곳을 찾아간다.(다른 함수 무시하고 내려감)

2. greeting() 호출, 스택 리스트에 추가된다.

3. greeting 내부 코드 실행, sayHi() 선언을 보고 sayHi()를 실행하기 위해 스택 리스트에 추가

4. sayHi()를 끝까지 실행한다.

5. sayHi()가 끝나면 greeting()으로 돌아간다.

6. sayHi()를 스택 리스트에서 빼낸다.

7. greeting()을 끝까지 읽은 후 남은 JS코드([3] Some code here)를 읽으러 온다.

8. 스택 리스트에서 greeting()을 제거한다.

<div style="text-align:center">
<img src="https://nakjunizm.github.io/2017/02/24/Queue_And_Deque/queue1.png">
<h5>https://www.nakjunizm.com/2017/02/24/Queue_And_Deque/</h5></div>