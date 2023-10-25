$(function () {
  //금액 포멧
  function formatKRW(n) {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(n);
  }
  //url parameter 가져오기 함수 참조:https://velog.io/@nnakki/Javascript-URL-Query-String-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
  const navCategory = new URLSearchParams(location.search).get("navCategory");
  const category = new URLSearchParams(location.search).get("category");

  //헤더 메인메뉴 보여주기
  function showMainMenu() {
    $(".nav-Menu").removeClass("selected");
    $('.' + navCategory).find('a').addClass('selected');
    console.log(navCategory)
  } 
  showMainMenu();

  //서브메뉴 보여주기
  function showButtonList() {
    console.log(category)
    $('.submenu').removeClass('active');
    $('#' + category).parent().parent().addClass('active');
    console.log($('#' + category).parent('.submenu'))
  }
  showButtonList();

  //상품리스트 가져오기
  function showItemList() {

    $('.category-button').removeClass('selected');
    $('#' + category).addClass("selected");

    fetch(`/src/data/${category}.json`)
      .then((response) => response.json()) //json을 객체로 변환
      .then((responseObejct) => {
        //객체로 출력
        let { items } = responseObejct; //비구조화 할당
        let itemElems = "";
      
        for (let item of items) {
          let { id, title, price, productImg } = item;
          $("#subMenuImage").attr("src", productImg);
          itemElems += `
          <a href="itemSpec.html?category=${category}&itemId=${item.id}">
            <div class="item">
              <div class="itemImage">
                <img src="${productImg}" alt="" class="listPage_Image">
              </div>
              <div class="listPage_detail">
                <h3 class="listPage_title">${title}</h3>
                <h4 class="listPage_Price">${formatKRW(price)}</h4>
              </div>
            </div>
          </a>
        `;
        }
        $("#itemListArea").html(itemElems);
      });
  }

  showItemList();

});
