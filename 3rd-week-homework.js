const cards = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=thumb&w=300&q=80",
    title: "모험가 키우기",
    desc: "끝없는 모험과 성장의 쾌감! 방치형 RPG의 정수",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=thumb&w=300&q=80",
    title: "신의 타워",
    desc: "전략과 운, 두 마리 토끼를 잡는 명작 퍼즐",
  },
  {
    img: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=thumb&w=300&q=80",
    title: "치킨런",
    desc: "치킨보다 빠르게! 친구들과 달리기 한판",
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=thumb&w=300&q=80",
    title: "고양이 마을",
    desc: "아기자기한 고양이와 느긋한 마을 생활",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=thumb&w=300&q=80",
    title: "카드마스터",
    desc: "한 방울의 집중! 짜릿한 카드 배틀",
  },
  {
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=thumb&w=300&q=80",
    title: "방탈출 서바이벌",
    desc: "IQ, 순발력 모두 도전! 짜릿한 탈출 퍼즐",
  },
];

const pageSize = 2;
const totalPage = Math.ceil(cards.length / pageSize);
let currentPage = 0;

const track = document.getElementById("carousel-track");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderPage(page) {
  const start = page * pageSize;
  const pageCards = cards.slice(start, start + pageSize);

  track.innerHTML = pageCards
    .map(
      (card) => `
    <div class="game-card">
      <div class="game-img-wrap">
        <img src="${card.img}" alt="${card.title}">
      </div>
      <div class="game-title">${card.title}</div>
      <div class="game-desc">${card.desc}</div>
    </div>
  `
    )
    .join("");

  pageInfo.textContent = `${page + 1} / ${totalPage}`;
  prevBtn.disabled = page === 0;
  nextBtn.disabled = page === totalPage - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderPage(currentPage);
  }
});
nextBtn.addEventListener("click", () => {
  if (currentPage < totalPage - 1) {
    currentPage++;
    renderPage(currentPage);
  }
});

renderPage(currentPage);
