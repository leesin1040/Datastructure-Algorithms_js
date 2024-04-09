// 첫번째 예시
let addUpto = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

let tt1 = performance.now();
addUpto(1000000000);
let tt2 = performance.now();

console.log(`시간소요1: ${(tt2 - tt1) / 1000} seconds`);

// 두번째 예시

let addUpto2 = (n) => {
  return (n * (n + 1)) / 2;
};

let t1 = performance.now();
addUpto2(1000000000);
let t2 = performance.now();

console.log(`시간소요2: ${(t2 - t1) / 1000} seconds`);

// 연산이 몇개 있는지에 대한 비교
/**
첫번째 예시에서는 for 반복문 안에서 돌기 때문에 n번의 연산이 존재하게 된다.
=> 5n+2개가 있음, N의 값에 따라 연산 갯수가 늘어남
두번째 연산은 3개의 연산 뿐임
=> 연산의 갯수는 변하지 않음. 압도적으로 갯수 차이가 나게 됨.
 */
