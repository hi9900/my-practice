const generateBtn = document.querySelector("#generateBtn");
const gridContainer = document.querySelector("#gridContainer");

generateBtn.addEventListener("click", () => {
  const currentImages = gridContainer.querySelectorAll("img");

  // 이미지가 30개 이상인 경우 경고 메시지 표시
  if (currentImages.length >= 30) {
    const confirmReset = window.confirm(
      "30개의 이미지가 이미 만들어져 있습니다. 모든 이미지를 지우시겠습니까?"
    );

    if (confirmReset) {
      // 사용자가 확인을 선택한 경우, 모든 이미지 삭제
      currentImages.forEach((image) => {
        gridContainer.removeChild(image);
      });
    }
    // 사용자가 취소를 선택한 경우, 아무 작업 없이 종료
    return;
  }

  // 30개 미만인 경우 새 이미지 추가
  const randomNum = Math.floor(Math.random() * 1000) + 1;
  const imageUrl = `https://picsum.photos/500?random=${randomNum}`;
  const image = document.createElement("img");
  image.src = imageUrl;

  gridContainer.appendChild(image);
});
