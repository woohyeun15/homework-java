// 1. 1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
let name = "고우현";

// 2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const ABSOLUTE_ZERO_CELSIUS = -273.15;

// 3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
let isLoggedIN = false;

// 4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
let userAge = 28;

// 5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
let productPrice = 39900;

// 6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
const BACKGROUND_COLOR = "#d5d5d5";

// 7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
let commentCount = 12;

// 8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let pageNumber = 3;

// 9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
let membershipLevel = "VIP";

// 10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isButtonClicked = false;

// # 함수 작성 과제

// ## 1. 인사말 메시지

// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greeting(username) {
  return "안녕하세요" + username + "님 좋은 아침입니다^^";
}

// ## 2. 원가 계산

// 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
const calculateOriginalPrice = function (priceWithTax) {
  const taxRate = 0.033; // 3.3%
  const originalPrice = priceWithTax / (1 + taxRate);
  return originalPrice;
};

// ## 3. 주류 판매 가능 여부

// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
function canBuyAlcohol(age) {
  if (age >= 19) {
    return "구매 가능";
  } else {
    return "구매 불가";
  }
}

// ## 4. 할인가 계산

// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다.
function calculateDiscountPrice(price, discountPercent) {
  const discountRate = discountPercent / 100;
  const discountedPrice = price * (1 - discountRate);
  return Math.round(discountedPrice);
}

// ## 5. 등급 판단

// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
function evaluateGrade(score) {
  let grade;
  let description;

  if (score >= 90 && score <= 100) {
    grade = "A";
    description = "매우 우수";
  } else if (score >= 80) {
    grade = "B";
    description = "우수";
  } else if (score >= 70) {
    grade = "C";
    description = "보통";
  } else if (score >= 60) {
    grade = "D";
    description = "미달, 통과 기준 근접";
  } else {
    grade = "F";
    description = "낙제";
  }

  return {
    score: score,
    grade: grade,
    description: description,
  };
}
