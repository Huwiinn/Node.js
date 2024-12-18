## express Router

```
const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
res.send(
"<form action='/product' method='POST' ><input type='text' name='title'><button type='submit'>Add Product</button></input></form>"
);
});

router.post("/product", (req, res, next) => {
console.log(req.body);
res.redirect("/");
});

module.exports = router;
```

해당 코드에서 `router.use.. === app.use..`와 같은 기능을 수행하게 된다.
차이점은 각 기능 및 용도별 코드를 `module.exports`로 밖으로 내보내는 것인데, module로 내보내어 필요할 때에만 가져와서 사용할 수 있기 때문에 관리하기 용이하다.

### router.use와 app.use의 차이점

`router.use`와 `app.use`는 기본적으로 동일한 동작을 수행합니다. 하지만 `router.use`는 해당 라우터에만 적용되는 미들웨어를 등록하는 데 사용됩니다. 즉, 해당 라우터의 하위 경로에 대해 미들웨어가 호출됩니다. 반면에 `app.use`는 **애플리케이션의 모든 경로에 대해 미들웨어를 등록하는 데 사용됩니다.**

<hr>

public 폴더에 있는 파일은 사용자들이 접근가능하다.
그 외에는 접근 불가능함.

'정적'의 의미 : `express.Router()`나 다른 미들웨어에서 처리되지 않고 파일 시스템으로 직접 포워딩된다는 뜻임.

**정적 파일을 제공하는 경우에는 헬퍼 함수를 사용할 필요가 없다.**
