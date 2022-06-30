bigyeong_server

babel-plugin-module-resolver 가 작동하지가 않아서

module-alias 로 변경 -> 잘 작동한다.

주의할점

tsconfig.json 설정과 package.json의 \_moduleAliases의 차이점을 정확히 숙지하고 있어야한다.

220619

graphql-upload가 문제가 많다.

graphql이 이미지를 업로드 하는데 너무 까다롭고 비효율적이다.

그리고 나의 라이브러리 최소화의 정신에 위배된다.

graphql이 설치할 라이브러리가 너무 많다.

multer에서 body 데이터 보낼때는 formData 순서를 주위해야 한다.
formData에서 multer가 가지는 키값을 맨마지막에 formData에 넣어줘야한다. (공식문서에 작게 나와있어서 못찾았다.)

router 건드리면 dist 삭제하고 다시 빌드하고 돌려야지 ts 작동한다.

typescript에서 router는 module.exports = router 하면 문제가 없다.
자, 여기서 의문이 존재한다.
export default router 하면 throw new TypeError('Router.use() requires a middleware function 요런 에러가 난다.
export = router 로 하면 import 해서 받아 쓸 수 있다.
참고로 app - router(index) - router(photoRouter) 이 있으면 맨 끝 router(photoRouter)에만 export = router 해주면 된다.
정확히 뭐때문인지 찾아봐야한다. 일단은 미들웨어 타입 에러로 보인다.
