# Frontend Developer Discovery
- Developer Discovery의 프론트 화면을 설계하고 개발합니다.
- SSR 방식으로 구성되고 Vercel에 배포하고 있습니다.

<br>

### 연계 프로젝트

- 백엔드 
  - [BackendDeveloperDiscovery](https://github.com/rha6780/Backend_Developer_Discovery)
  - Python, Django

- 인프라
  - [InfraDeveloperDiscovery](https://github.com/rha6780/Infra_Developer_Discovery) 
  - Terraform, AWS


<br>

## Getting Started

- Backend 프로젝트에서 docker-compose 를 통해 로컬 개발이 가능합니다.
- `npm ci` package-lock.json 에 따라 의존성 패키지까지 설치합니다.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



<details>
<summary>amplify(deprecated)</summary>

- amplify가 비용이 너무 많이 들어서 제거합니다.
- `npm install aws-amplify` 를 통해 amplify 배포 설정을 초기화 하거나 수정할 수 있습니다.
- 새로운 브랜치에 배포 설정을 하려면 aws amplify 서비스에 접속해 해당 브랜치를 선택해 빌드 배포 설정을 합니다.
  ```
  cli를 이용해 프로젝트 설정 시
  git checkout 브랜치
  amplify init :amplify 초기화
  프로젝트 이름, env, editor, build, framwork를 선택하라는 문구에 맞추어서 설정한다.
  amplify status :amplify 상태 확인
  ```

</details>
