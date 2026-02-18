import type { APIRoute } from 'astro';

// Google Apps Script 웹 앱 배포 URL (환경 변수 또는 여기에 직접 입력)
// 사용 예: https://script.google.com/macros/d/{SCRIPT_ID}/usercopy
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';

export const POST: APIRoute = async ({ request }) => {
  try {
    // 요청 본문 파싱
    const data = await request.json();
    const { email } = data;

    // 필드 검증
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ message: '유효한 이메일을 입력해주세요' }),
        { status: 400 }
      );
    }

    // Google Apps Script로 데이터 전송
    if (GOOGLE_SCRIPT_URL) {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subscribedAt: new Date().toISOString(),
          source: 'newsletter'
        }),
        signal: AbortSignal.timeout(5000)
      });

      if (!response.ok) {
        console.error('Google Apps Script 오류:', response.statusText);
        return new Response(
          JSON.stringify({ message: '구독 저장에 실패했습니다' }),
          { status: 500 }
        );
      }
    } else {
      // 개발 환경: 콘솔에 로그
      console.log('📧 뉴스레터 구독:', {
        email,
        timestamp: new Date().toISOString()
      });
    }

    return new Response(
      JSON.stringify({ 
        message: '구독해주셔서 감사합니다!',
        email 
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe API 오류:', error);
    return new Response(
      JSON.stringify({ message: '서버 오류가 발생했습니다' }),
      { status: 500 }
    );
  }
};
