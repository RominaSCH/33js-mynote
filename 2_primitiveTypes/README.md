# JavaScript data types and data structures

+ ## Primitive Data Types : Undefined, Null, Boolean, String, Number, Symbol
    + ### Undefined는 "정의되지 않았다" 이고 Null(존재하지 않음 이라는 값을 가짐)이랑은 다르다.
    + ### Null은 의도적 비어있음. 불리언 연산에서는 거짓으로 취급한다.
    + ### Boolean은 true, false 가 있고 True나 False, "true", "false"로 쓰면 안된다.
    + ### String, 자바스크립트의 문자열은 immutable(변경 불가능) 하다. 
        + ##### String.substr()를 써서 부분 문자열을 만들거나 접합 연산자 (+), String.concat()을 써서 두 문자열을 합친 문자열은 만들 수 있다.
    + ### Number, 숫자의 자료형은 -(2⁵³ - 1) ~ 2⁵³ - 1  사이의 숫자값으로 소수점을 표기할 수 있는 것 외에 +Infinity, -Infinity, NaN(Not a Number)로도 표현할 수 있다. 
        + ##### 0은 -0과 +0으로 표기할 수 있지만(0은 +0이다) 사실상의 효력은 거의 없다.(42 / +0 > Infinity, 42 / -0 > -Infinity)
        + ##### Infinity 확인 용도로 Number.MAX_VALUE와 Number.MIN_VALUE를 쓸 수 있다.
    + #### Symbol은 ES6 에서 추가되었다. Symbol은 유일하고 변경 불가능(immutable)한 기본값(Primitive Value)이다. 값으로 익명의 객체 속성(Object property)을 만들 수 있는 특성을 가진 원시 데이터 형식(primitive data type)이다.(?) 이 데이터 형식은 클래스나 객체 형식(Object type)의 내부에서만 접근할 수 있도록 전용(private) 객체 속성의 키로 사용됩니다.(??) 심볼 데이터 형식은 고도로 특화된 용도로 쓰리며, 범용성은 현저히 떨어집니다.....

+ ## Structural Data : Object(array, map, set, weakmap, weakse, date...), Function
    + #### JSON(Java Script Object Notation)


* ### 동등 연산자(==)와 일치 연산자(===)의 차이점
    * #### 동등 연산자(==)는 비교 전에 두 피연산자를 동일한 자료형으로 변환한 뒤에 비교를 수행한다.
    * #### 일치(엄격) 연산자(===)는 두 피연산자가 같은 자료형에, 그 내용도 일치해야만 참을 반환한다.