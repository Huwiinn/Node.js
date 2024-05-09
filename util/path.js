const path = require("path");

// 헬퍼 함수
// 정적 파일을 제공하는 경우에는 헬퍼 함수를 사용할 필요가 없다.
module.exports = path.dirname(require.main.filename);
