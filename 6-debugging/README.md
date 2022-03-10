# Debugging

Defining the problem

## Goal

현재 작동하는 Application 에서 우리가 기대하는/원하는 작업을 이행하는지, 그렇지 않다면 두 사이의 결함을 보완하는 작업을 `Debugging`이라고 한다.

`Debugging`은 `Bug`를 잡는 것 뿐만 아니라, UX/UI, login/flow, performance, costs 등 보완하는 작업 또한 포함한다.

## Types

`Debugging` 작업으로는 아래와 같은 작업들이 있다.

- unit testing,
- integration testing,
- control flow analysis,
- log file analysis/print logs,
- interactive debugging,
- memory dumps,
- profiling

## Interactive Debugging

1. Add `Breakpoint`

2. Click `Debug` tap (⇧⌘D)

3. Clcik `Run and Debug`

<img src="/assets/debugging-icons.png" width="200px" title="Debugging Icons" alt="Debugging Icons"></img><br/>

- Continue (F5): 다음 `Breakpoint`로 이동
- Step Over (F10): 다음줄로 이동 (함수 수행 O 호출 X)
- Step Into (F11): 함수 호출
- Step Out (⇧F11): 함수 나오기
- Restart (⇧⌘F5): `Debugger` 다시시작
- Stop (⇧F5): `Debuger` 끝내기

4. `CALL STACK`

어느 위치에서 함수가 호출되는지 연쇠적으로 보여준다.

5. `VARIABLES`

현재 실행하는 코드에서의 변수값을 보여준다.

6. `WATCH`

내가 확인하고자 하는 값을 지정 할 수 있다.

## Debugging Tips

1. 실시간으로 변수의 값을 바꾸면서 테스트 조건을 맞출수 있다. 불필요한 단계를 건너뛸수 있다.

2. `Breakpoint`에 조건을 부여하여 원할 때만 멈출 수 있도록 설정 할 수 있다.
