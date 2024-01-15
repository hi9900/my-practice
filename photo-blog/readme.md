# 랜덤 이미지 생성 사이트

✍🏻 programmers의 [AI서비스와 함께 누구나 만드는 웹 프로젝트! feat. ChatGPT](https://school.programmers.co.kr/learn/courses/17122/17122-ai%EC%84%9C%EB%B9%84%EC%8A%A4%EC%99%80-%ED%95%A8%EA%BB%98-%EB%88%84%EA%B5%AC%EB%82%98-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%9B%B9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-feat-chatgpt) 강의를 바탕으로 작성된 코드입니다.

---

### "이미지 만들기" 버튼을 클릭하면, 이미지를 보여준다.

1. 이벤트 대상을 선택

   html의 button 요소를 JavaScript로 가져온다. id값으로 가져올 수 있다.

   ```html
   <button id="generateBtn">이미지 만들기!</button>
   ```

   ```javascript
   const generateBtn = document.querySelector("#generateBtn");
   ```

2. 선택한 대상으로부터 발생한 이벤트 감지.

   여기서는 클릭 이벤트를 감지한다.

   [chatGPT 구조화 된 질문 해보기](https://chat.openai.com/share/eba04376-e586-4992-befc-6c7e90407fe1)

   > 이벤트 리스너: 특정 이벤트가 발생 했을 때, 이에 대한 반응을 정의하는 함수

   ```javascript
   const generateBtn = document.querySelector("#generateBtn");

   generateBtn.addEventListener("click", () => {
     // 실행 할 코드
     console.log("버튼을 누르면 이 함수가 실행됩니다.");
   });
   ```

3. 발생한 이벤트에 대한 액션으로 이미지를 보여준다.

   - 이미지 가져오기: API 활용하기

     [chatGPT에게 질문](https://chat.openai.com/share/0a34729e-0ae7-4ad7-889c-5993d1070266)

     [Lorem Picsum 바로가기](https://picsum.photos/)

   - 이미지를 보여주기 위한 태그 작성 & 생성한 이미지를 화면에 보여주기

     [chatGPT에게 질문](https://chat.openai.com/share/0edf3fdd-7e6e-4476-81e4-3853847c3c12)

   ```javascript
   const generateBtn = document.querySelector("#generateBtn");
   const gridContainer = document.querySelector("#gridContainer");

   generateBtn.addEventListener("click", () => {
     // 랜덤한 숫자 생성
     const randomNum = Math.floor(Math.random() * 1000) + 1;

     // 이미지 URL을 생성
     const imageUrl = `https://picsum.photos/500?random=${randomNum}`;

     // 이미지 태그를 직접 생성하고 속성을 설정하여 화면에 추가
     const image = document.createElement("img");
     image.src = imageUrl;

     // 화면에 이미지를 추가
     gridContainer.appendChild(image);
   });
   ```

- 30개로 이미지 제한 및 초기화

  30개의 이미지가 생성되면, 확인 창이 표시된다. 사용자의 응답에 따라 이미지가 추가로 생성되지 않거나, 생성된 모든 이미지가 삭제된다.

  [chatGPT에게 질문](https://chat.openai.com/share/546f67eb-ddaf-4d99-9dbb-c50e82de13f2)

  ```javascript
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
  ```

---

## 배포

[Netlify](https://www.netlify.com/)로 간단한 정적 사이트 배포

1. Netlify 로그인

2. 프로젝트가 담긴 폴더를 압축 후 업로드

3. [배포 URL](https://regal-manatee-b01bec.netlify.app/) 확인
