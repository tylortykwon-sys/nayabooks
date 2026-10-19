const CONFIG = {
  // 1. 프로필 (좌측 사이드바 고정 노출)
  profile: {
    name: "나야북스연구소",
    image: "/avatar.svg", // 로고 이미지가 생기면 public 폴더에 올리고 파일명으로 교체
    role: "Author · Researcher · Coach",
    bio: "철학·경제·법률의 본질을 탐구하고, 삶의 무기가 되는 실전 지식을 출판합니다.",
    email: "", // TODO: 공개용 연락 이메일
    linkedin: "",
    github: "",
    instagram: "",
  },

  // 2. 좌측 고정 배너 (외부 판매 연계 CTA)
  projects: [
    {
      name: `📘 전자책·교재 스토어 (BOOKS)`,
      href: "/books", // 노션 DB의 type: Page, slug: books 페이지
    },
  ],

  // 3. 사이트 기본 정보
  blog: {
    title: "NAYABOOKS | 지식 아카이브 & 디지털 서재",
    description:
      "지식의 파편을 엮어 사유의 체계를 세웁니다. 철학·인문, 경제·법률, 논술·탐구, 시험 전략, 마인드셋 코칭 전자책 플랫폼.",
    scheme: "light", // 'light' | 'dark' | 'system' (구버전 포크라면 키 이름이 theme)
  },

  // 4. 사이트 설정
  link: "https://nayabooks.vercel.app", // TODO: Vercel 배포 후 실제 주소로 교체
  since: 2026,
  lang: "ko-KR",
  ogImageGenerateURL: "https://og-image-korean.vercel.app",

  // 5. 노션 연결 (Vercel 환경변수 NOTION_PAGE_ID로 입력 권장)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // 6. 방문자 통계 (선택)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },

  // 7. 검색엔진 등록 (배포 후 인증코드 받으면 enable: true)
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },

  // 8. 댓글 (사용 안 함)
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "",
    },
  },

  isProd: process.env.VERCEL_ENV === "production",
  revalidateTime: 600, // 노션 수정 후 사이트 반영 주기 (10분)
}

module.exports = { CONFIG }
