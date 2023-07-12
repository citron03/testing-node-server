# testing-node-server

test and learn node server

- 세션 인증
- 시퀄라이저
- 소켓 통신
- TCP/IP 통신
- swagger
- static 폴더 정적 파일 접근 허용
- express 템플릿 엔진 ejs

---

## babel 설정

1. npm i -D babel-cli
   - npx babel index.js 사용 가능
2. npm i -D babel-preset-env
   - 바벨 설정
   - npx babel --presets env index.js 사용 가능
   - npx babel --presets env index.js | node 노드로 실행하기
3. .babelrc & babel.config.json
   - 바벨 설정 파일

- Project-wide configuration
  <br/>
  node_modules를 컴파일하고 싶습니까?
  <br/>
  babel.config.json은 당신을 위한 것입니다!

- File-relative configuration
  <br/>
  프로젝트의 한 부분에만 적용되는 구성이 있습니까?
  <br/>
  .babelrc.json은 당신을 위한 것입니다!

```json
{
  "presets": ["env"]
}
```

- https://babeljs.io/docs/configuration
- https://babeljs.io/docs/options

1. script 설정

```json
"scripts": {
  "test-babel": "babel-node babel_test/index"
},
```

### branches

- main (ejs)
- @typescript_apply
- @pug_use
