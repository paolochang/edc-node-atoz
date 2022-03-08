# 5. NPM 알아보기

## 5.2 NPM 시작하기

### Initialize default `package.json`

```
bash
$ npm init --yes
```

### Initialize `package.json` with definitions

```bash
$ npm init
# package name:
# version:
# description:
# entry point:
# test command:
# git repository:
# keywords:
# author:
# license: ISC
```

### Edit in `package.json`

파일 생성후 언제든지 `package.json`에서 수정 가능하다.

```json
{
  "name": "edc-node-atoz",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/paolochang/edc-node-atoz.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/paolochang/edc-node-atoz/issues"
  },
  "homepage": "https://github.com/paolochang/edc-node-atoz#readme"
}
```
