const fs = require("fs");

const requestHandler = (req, res) => {
  // url 라우팅
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node.js enter the message</title></head>");
    res.write(
      "<body><main><form action='/message' method='POST'><input type='text' placeholder='typing message.' name='message'/><button type='submit'>Send!</button></input></form></main></body>"
    );
    res.write("</main>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = []; // chuck를 담을 때는 빈 배열이어야 함
    req.on("data", (chunk) => {
      console.log("chunk : ", chunk);
      console.log("body : ", body);
      body.push(chunk);
    }); // 요청에 대한 모든 데이터를 얻을 때 까지 콜백 함수가 실행될 것임
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      console.log("message : ", message);
      // console.log("parsedBody : ", parsedBody);
      // console.log("body : ", body);
      res.statusCode = 302; // 경로 재지정을 의미하는 상태코드 302
      res.setHeader("Location", "/");
      return res.end();
    }); // 들어오는 요청 데이터 혹은 들어오는 전박적인 요청을 분석한 후에 발생함
  }

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
};

module.exports = requestHandler;
