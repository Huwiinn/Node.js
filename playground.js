const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 성공!");
    }, 1500);
  });

  return promise;
};

setTimeout(() => {
  console.log("타이머 종료!!");
  fetchData().then((text) => console.log(text));
}, 2000);

// console.log("Hello");
// console.log("Hi");
