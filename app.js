const http = require("http");
const { restart } = require("nodemon");

// const reListener = (req, res) => {
//   console.log(req, res);
// };

// 서버를 생성할 때 꼭 필요한 메서드
// 첫 번째 인수로 requestListener를 받음. 들어오는 모든 요청을 실행하는 기능임.
// 정리 : 첫 번째 인수에는 요청에 대한 데이터가 있고, 두 번째 인수에는 응답 데이터가 있음.
// reListener 함수는 서버에 도달하는 모든 요청에 따라 실행될 것이고, createServer로 부터 시작된다.
// 요청이 들어오면 해당 함수를 실행하라.
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // 서버를 중지하려면 process.exit()를 사용. 하지만 호출할 일이 대게 없음.
  // process.exit()는 이벤트 루프를 정리하기 때문에 프로그램이 종료된다.
  // process.exit();

  // url 라우팅
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node.js enter the message</title></head>");
    res.write(
      "<body><main><form action='/message' method='POST'><input type='text' placeholder='메세지를 입력하세요.'/><button type='submit'>Send!</button></input></form></main></body>"
    );
    res.write("</main>");
    return res.end();
  }

  if (url === "/message") {
    res.write("<html>");
    res.write("<head><title>Node.js response html</title></head>");
    res.write("<body><main><h1>message page</h1></main></body>");
    res.write("</html>");
    return res.end();
  }

  console.log(111111111, url);
  console.log(2222222, req.url);

  // --------------------------------------- res 부분
  // res.setHeader()로 새로운 헤더를 설정할 수 있다. Content-Type은 브라우저가 알고 이해하며 받아들이는 기본 헤더. / 두 번째 인수로는 첫 번째 인수에 대응하는 값을 넣어준다.
  // 브라우저에게 html 코드라는 것을 알려주지 않으면 에러가 발생한다.
  res.setHeader("Content-Type", "text/html");
  // res.write()는 response에 데이터를 기록할 수 있음. 여러 라인에 걸처 데이터를 기록한다.
  res.write("<html>");
  res.write("<head><title>Node.js response html</title></head>");
  res.write("<body><main><h1>Hello, Node.js</h1></main></body>");
  res.write("</html>");
  // res.end();를 하지 않으면 응답이 끝나지 않은 것으로 간주하여 계속 응답을 보내게 되는 상황이 온다.
  res.end();
});

// Node.js가 스크립트를 바로 종료하지 않고 계속 실행되면서 들어오는 요청을 계속 듣도록 함.
// 첫 번째 인수로 포트가 들어온다. 하지만 실무에서는 대게 포트 인자를 입력하지 않음.
server.listen(3100);

// 브라우저에서 localhost:3050을 입력하면 터미널에서 다음과 같은 출력결과가 보임 (상수 server에 적용해놓은 console.log).
