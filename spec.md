# HELFLAB Website Project Specification

본 문서는 **한아아이앤티(HELFLAB)** 공식 웹사이트의 기술 스택, 디자인 가이드라인 및 프로젝트 구조를 정의하는 사양서입니다.

## 1. 프로젝트 개요

- **프로젝트 명**: HELFLAB Official Website
- **목적**: 기업 브랜드 아이덴티티 강화, 서비스 및 포트폴리오 소개, 블로그를 통한 기술 인사이트 공유 및 파트너십 구축.
- **디자인 컨셉**: 마켓컬리(Market Kurly) 스타일의 프리미엄 퍼플 테마 (미니멀, 전문성, 신뢰감).

## 2. 기술 스택 (Tech Stack)

- **Framework**: [Astro](https://astro.build/) (v4.x)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Pretendard Variable](https://github.com/orioncactus/pretendard)
- **Content Management**: Astro Content Collections (Markdown 기반)
- **Deployment**: Node.js 기반 (Vite 빌드 엔진)

## 3. 디자인 시스템 (Design System)

### 🎨 Color Palette

- **Primary**: `#5f0080` (Helf Purple / Market Kurly Purple)
- **Secondary**: `#4a0063` (Darker Purple for Hover)
- **Background (Base)**: `#ffffff` (Pure White)
- **Background (Sub)**: `#f7f7f7`, `#fbfbfb`, `#fcfcfc` (Levels of Gray)
- **Text (Main)**: `#0f172a` (Slate 900)
- **Text (Muted)**: `#64748b` (Slate 500)

### ✨ Interactions

- **Reveal Animation**: `IntersectionObserver`를 활용한 순차적 등장 효과 (`.reveal`, `.reveal-delay-1~3`).
- **Mobile Navigation**: 터치 기반 햄버거 메뉴 및 슬라이드 오버 레이아웃.

## 4. 정보 구조 (Information Architecture)

- **Home (`/`)**: 서비스 요약, 인프라 소개, 최신 블로그 인사이트.
- **About (`/about`)**: 기업 미션, 비전, 핵심 가치, AI 에이전트 팀 소개.
- **Blog (`/blog`)**: 기술 및 비즈니스 마크다운 컨텐츠 포털.
- **Portfolio (`/portfolio`)**: 주요 프로젝트 케이스 스터디 및 통계.
- **Partnership (`/partnership`)**: 협업 모델 소개 및 입점 문의 폼.
- **Contact (`/contact`)**: 오피스 위치 정보(Google Maps) 및 다이렉트 컨택.

## 5. 핵심 기능 가이드

### 📝 블로그 운영

- 모든 글은 `src/content/blog/` 폴더 내 마크다운(`.md`) 파일로 관리됩니다.
- **Frontmatter 필수 필드**:
  - `title`: 제목
  - `pubDate`: 발행일 (YYYY-MM-DD)
  - `description`: 요약문
  - `tag`: 카테고리 (Tech, Biz, Culture 등)
  - `icon`: 게시물 아이콘 (Emoji)
  - `featured`: boolean (참이면 블로그 상단 하이라이트)

### 🔗 패밀리 사이트

- 푸터 하단 드롭다운 메뉴를 통해 운영:
  - 유통스타트 (연결 가능)
  - 깨어나는돌봄 (연결 가능)
  - (주)한아아이앤티
  - 메가엠
  - 티원글로벌

## 6. 개발 및 커밋 컨벤션

- **Style**: Tailwind utility-first 사용. 모든 색상은 하드코딩 대신 `globals.css`의 컴포넌트 클래스(`btn-primary` 등) 활용 권장.
- **Commit Message**: 디자인 변경은 `Design:`, 기능 추가는 `Feat:`, 구조 변경은 `Refactor:` 등 명확한 접두사 사용.

---
*Last Updated: 2026-03-01*
