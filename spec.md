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

### 📝 컨텐츠 관리 및 비밀 포털

웹사이트의 컨텐츠는 Markdown 시스템을 기반으로 하며, 기술적인 지식 없이도 글을 작성할 수 있는 비밀 도구를 제공합니다.

- **비밀 관리자 포털**: `/admin-write-secret`
  - 브라우저 상에서 제목, 태그, 요약, 본문을 입력하여 마크다운 파일을 즉시 생성/다운로드할 수 있습니다.
  - 한글 제목에 최적화된 파일명(Slug) 처리가 자동으로 이루어집니다.

- **컨텐츠 컬렉션 가이드**:
  - **Blog (`src/content/blog/`)**:
    - `author`: 작성자 (기본값: HELFLAB Team)
    - `readTime`: 예상 읽기 시간 (예: 10 min)
  - **Portfolio (`src/content/portfolio/`)**:
    - `client`: 고객사 명칭 (필수)
  - **공통 필드**: `title`, `pubDate`, `description`, `tag`, `icon`, `featured`

### 🔗 패밀리 사이트

- 푸터 하단 드롭다운 메뉴를 통해 운영:
  - 유통스타트 (연결 가능)
  - 깨어나는돌봄 (연결 가능)
  - (주)한아아이앤티
  - 메가엠
  - 티원글로벌

## 6. 개발 및 커밋 컨벤션

### 디자인 가이드라인

Tailwind utility-first를 사용하며, 모든 색상은 하드코딩 대신 `globals.css`에서 정의된 테마 변수나 컴포넌트 클래스 활용을 권장합니다.

### 커밋 컨벤션

디자인 변경은 `Design:`, 기능 추가는 `Feat:`, 구조 변경은 `Refactor:` 등 명확한 접두사 사용을 권장합니다.

---
*Last Updated: 2026-03-01*
