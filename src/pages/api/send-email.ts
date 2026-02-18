import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
    });
  }

  try {
    const data = await request.formData();
    
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;
    const company = data.get('company') as string;
    const partnershipType = data.get('partnershipType') as string;
    const productCategory = data.get('productCategory') as string;

    // 간단한 유효성 검사
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: '필수 항목을 입력해주세요.' }),
        { status: 400 }
      );
    }

    // 이메일 본문 작성
    const emailBody = `
새로운 문의가 접수되었습니다.

==== 기본 정보 ====
이름: ${name}
이메일: ${email}
전화: ${phone || '미입력'}
${company ? `회사명: ${company}` : ''}

==== 문의 내용 ====
제목: ${subject || '(제목 없음)'}

메시지:
${message}

${partnershipType ? `\n관심 파트너십: ${partnershipType}` : ''}
${productCategory ? `상품 분류: ${productCategory}` : ''}

==== 요청 정보 ====
요청 시간: ${new Date().toLocaleString('ko-KR')}
`;

    // 간단한 로그 (실제 환경에서는 이메일 서비스 사용)
    console.log('📧 이메일 전송 준비:', {
      to: 'm1@helflab.co.kr',
      from: email,
      subject: `[HELFLAB 문의] ${subject || '새로운 문의'}`,
      body: emailBody
    });

    // 현재는 이메일 전송 대신 success 반환
    // 실제 배포 시 Resend API 또는 다른 이메일 서비스 사용
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: '문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.' 
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: '문의 접수 중 오류가 발생했습니다.' }),
      { status: 500 }
    );
  }
};
