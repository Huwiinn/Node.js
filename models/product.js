const fs = require("fs"); // 파일 시스템 모듈
const path = require("path"); // OS 운영체제 파일 경로 통합 모듈

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return callback([]);
    }

    return callback(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  // 생성자 : 모든 class에는 constructor가 꼭 있어야함.
  // 이것은 생성자 함수를 만들 때, 필요한 매개변수를 정의하는 곳과 같다고 생각하면 된다.
  // constructor : new 키워드로 객체를 생성할 때 호출되는 함수임.
  // ex : function Product(name, title) { console.log(name, title)}
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("save err : ", err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
