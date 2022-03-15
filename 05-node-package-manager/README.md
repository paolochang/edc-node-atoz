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

Note: 보안, 안전상의 이유로 global package 설치시 `sudo` (관리자권한)으로 설치하지 않는것이 좋다.
만약 package 설치시 권한으로 인한 문제가 생기면 아래와 같이 시도해 볼 수 있다.

```
$ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

## 5.6 Manage libraries

Check package information and install package

```bash
$ npm view underscore
$ npm install underscore
```

`package.json`파일의 `dependencies`에 `underscore`가 생긴것을 볼 수 있다. `package-lock.json`은 개발자가 어떤 버젼을 사용했는지 기록되있는 파일로 개발자가 임의로 수정할 일은 없다.

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
  "homepage": "https://github.com/paolochang/edc-node-atoz#readme",
  "dependencies": {
    "underscore": "^1.13.2"
  }
}
```

Delete node package

```bash
# aliases: uninstall, un
$ npm uninstall underscore
```

## 5.7 Update libraries

```bash
# check any outdated libraries
$ npm outdated
# update <package>
$ npm update <package>
```

## 5.8 Development dependencies

개발할때 필요한 `library`의 경우 일반 `library`와 혼합되는 것을 방지하고자 `devDependencies`라는 곳에 따로 정리하여 사용하는데 `devDependencies`를 지정하고 사용하는 방법을 알아보자.

```bash
$ npm install nodemon --save-dev
```

```json
{
  "name": "edc-node-atoz",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app"
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
  "homepage": "https://github.com/paolochang/edc-node-atoz#readme",
  "dependencies": {
    "underscore": "^1.13.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

### Reference

- [SPDX License List](https://spdx.org/licenses/)
- [OLIS 오픈소스 SW 라이선스 종합정보시스템](https://www.olis.or.kr/license/Detailselect.do?lType=spdx&lId=1074)
