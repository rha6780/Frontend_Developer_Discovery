# Frontend Developer Discovery
- [Backend 프로젝트](https://github.com/rha6780/Backend_Developer_Discovery) 의 API를 받아 프론트를 구성합니다.
- AWS Amplify 에 배포를 진행하고, API는 EC2 또는 Lambda에 배포하여서 연결합니다.
- 참고하는 책 '풀스택 서버리스'에 따라서 리액트로 구성합니다.

<br>

## 환경 구성
- `npm ci` package-lock.json 에 따라 의존성 패키지까지 설치합니다.
- `npm install aws-amplify` 를 통해 amplify 배포 설정을 초기화 하거나 수정할 수 있습니다.
- 새로운 브랜치에 배포 설정을 하려면 aws amplify 서비스에 접속해 해당 브랜치를 선택해 빌드 배포 설정을 합니다.
  ```
  cli를 이용해 프로젝트 설정 시
  git checkout 브랜치
  amplify init :amplify 초기화
  프로젝트 이름, env, editor, build, framwork를 선택하라는 문구에 맞추어서 설정한다.
  amplify status :amplify 상태 확인
  ```
