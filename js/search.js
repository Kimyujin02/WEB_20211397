document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수
var MAX_SEARCH_COUNT = 10;
var forbidden_words = ["시발", "개새끼", "미친년"]; // 검색 제한 단어

function search_message() {
  let search_str = document.querySelector("#search_txt");

  if (search_str.value.length === 0) {
    alert("검색어가 비었습니다. 입력해주세요");
  } else {
    if (forbidden_words.includes(search_str.value)) {
      alert("검색어로 적절하지 않습니다.");
    } else {
      alert("검색을 수행합니다!");
      search_array.push(search_str.value); // 배열에 검색어 추가
      if (search_array.length > MAX_SEARCH_COUNT) {
        search_array.shift(); // 맨 앞의 값을 삭제
      }
      let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
      document.querySelector("#form_main").submit();
    }
  }
}

