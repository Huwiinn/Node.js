const http = require("http");

// const reListener = (req, res) => {
//   console.log(req, res);
// };

// 서버를 생성할 때 꼭 필요한 메서드
// 첫 번째 인수로 requestListener를 받음. 들어오는 모든 요청을 실행하는 기능임.
// 정리 : 첫 번째 인수에는 요청에 대한 데이터가 있고, 두 번째 인수에는 응답 데이터가 있음.
// reListener 함수는 서버에 도달하는 모든 요청에 따라 실행될 것이고, createServer로 부터 시작된다.
// 요청이 들어오면 해당 함수를 실행하라.
const server = http.createServer((req, res) => {
  console.log(req);
  // 서버를 중지하려면 process.exit()를 사용. 하지만 호출할 일이 대게 없음.
  // process.exit()는 이벤트 루프를 정리하기 때문에 프로그램이 종료된다.
  // process.exit();
});

// Node.js가 스크립트를 바로 종료하지 않고 계속 실행되면서 들어오는 요청을 계속 듣도록 함.
// 첫 번째 인수로 포트가 들어온다. 하지만 실무에서는 대게 포트 인자를 입력하지 않음.
server.listen(3100);

// 브라우저에서 localhost:3050을 입력하면 터미널에서 다음과 같은 출력결과가 보임 (상수 server에 적용해놓은 console.log).
