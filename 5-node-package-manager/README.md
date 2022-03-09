# 5. NPM 알아보기

## 5.2 NPM 시작하기

### Initialize default `package.json`

```bash
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

## 5.3 Software License

각 License에 따라 복제, 배포, 수정의 권한 및 저작권, 법적 책임 등을 내포하고있다.

## 5.5 Install Node Module

1. Install node package

```bash
# aliases: install, i, add
# options: -g: install global
$ npm install <package>
$ npm install <package>@<tag>
$ npm install <package>@<version>
$ npm install <package>@<version range>
$ npm install <github url>
```

2. Check list

```bash
# aliases: list, la, ll
$ npm list -h
$ npm list -g
$ npm list -g --dept=0
```

### Reference

- [SPDX License List](https://spdx.org/licenses/)
- [OLIS 오픈소스 SW 라이선스 종합정보시스템](https://www.olis.or.kr/license/Detailselect.do?lType=spdx&lId=1074)
