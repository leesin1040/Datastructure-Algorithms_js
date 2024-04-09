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

// 시간 측정을 통한 코드 성능 비교
