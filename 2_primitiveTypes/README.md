# JavaScript data types and data structures

+ ## Primitive Data Types : Undefined, Boolean, Number, String, Symbol, Null
    + #### Undefined는 "정의되지 않았다" 이고 Null(존재하지 않음 이라는 값을 가짐)이랑은 다르다.
    + #### Null 의도적 비어있음. 불리언 연산에서는 거짓으로 취급한다.
    + #### Boolean은 true, false 이고 True나 False, "true", "false"로 쓰면 안된다.
    + #### String
    + #### Number, ECMAScript는 number type으로 Number와 BigInt로 구분한다. 
        + #### Number type은 3가지 symbolic values를 갖는다. +Infinity, -Infinity, NaN(Not a Number)

+ ## Structural Data : Object(array, map, set, weakmap, weakse, date...), Function
    + #### JSON(Java Script Object Notation)

+ ## Structural Root Primitive : Null 




* ### 동등 연산자(==)와 일치 연산자(===)의 차이점
    * #### 동등 연산자(==)는 비교 전에 두 피연산자를 동일한 자료형으로 변환한 뒤에 비교를 수행한다.
    * #### 일치(엄격) 연산자(===)는 두 피연산자가 같은 자료형에, 그 내용도 일치해야만 참을 반환한다.