[English README](./README.md)

# 뭐 찾으려고 했더라?

검색창을 열었는데, 왜 열었는지 바로 잊어버린 순간을 위한 작은 인터넷 미아 안내소입니다.

## 페이지

<https://threelightstudio.github.io/what-was-i-searching-for/>

## 기술 스택

- Astro
- Node.js 22 이상
- pnpm 11

## 로컬에서 실행하기

```bash
pnpm install
pnpm dev
```

개발 서버는 기본적으로 <http://localhost:4321/what-was-i-searching-for/>에서 실행됩니다.

## 검사 및 빌드

```bash
pnpm validate
```

Astro 타입 검사, 정적 빌드, 메타데이터, canonical URL, Open Graph, sitemap, robots, 링크 검증을 한 번에 실행합니다.

## GitHub Pages 배포

이 프로젝트는 [ThreeLightStudio/what-was-i-searching-for](https://github.com/ThreeLightStudio/what-was-i-searching-for)에서 관리합니다.

- `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 배포를 시작합니다.
- 저장소 설정에서 Pages source를 `GitHub Actions`로 지정해야 합니다.
- 배포 주소는 <https://threelightstudio.github.io/what-was-i-searching-for/>입니다.

사이트 주소나 프로젝트 경로를 바꿔야 한다면 `.env.example`을 참고해 `SITE_ORIGIN`과 `BASE_PATH`를 설정하세요.

## 라이선스

MIT License를 따릅니다. 자세한 내용은 [LICENSE](./LICENSE)를 확인하세요.
