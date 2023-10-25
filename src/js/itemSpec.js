$(function () {
  let globalItem;
  let clickedCount = 1; //초기값
  const $quantity = $("#quantity");
  let quantity = $quantity.text();
  let chosenSize = "S";
  let cartItems = []; //장바구니

  //url parameter 가져오기 함수
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get("itemId");
  const category = searchParams.get("category");

  //금액 포멧
  function formatKRW(n) {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(n);
  }

  //상세 페이지
  function showItemSpec() {
    fetch(`/src/data/${category}.json`)
      .then((response) => response.json()) //json을 객체로 변환
      .then((responseObejct) => {
        //객체로 출력
        let { items } = responseObejct; //비구조화 할당
        const item = items.find((item) => item.id == itemId);
        globalItem = item;
        let { title, price, productImg, thumbnails } = item;
        $("#itemTitle").text(title);
        $("#itemPrice").text(formatKRW(price));
        $("#mainImage").attr("src", productImg);
        $("#thumbnail1").attr("src", productImg);
        $("#thumbnail2").attr("src", thumbnails[0]);
        $("#thumbnail3").attr("src", thumbnails[1]);
        $("#thumbnail4").attr("src", thumbnails[2]);
        $("#specPage_totalPrice").text(formatKRW(price * parseInt(quantity)));
      });
    // fetch("/src/data/men_bottoms.json")
    //   .then((response) => response.json()) //json을 객체로 변환
    //   .then((responseObejct) => {
    //     //객체로 출력
    //     let { items } = responseObejct; //비구조화 할당
    //     const item = items.find((item) => item.id == itemId);
    //     globalItem = item;
    //     let { title, price, productImg, thumbnails } = item;
    //     $("#itemTitle").text(title);
    //     $("#itemPrice").text(formatKRW(price));
    //     $("#mainImage").attr("src", productImg);
    //     $("#thumbnail1").attr("src", productImg);
    //     $("#thumbnail2").attr("src", thumbnails[0]);
    //     $("#thumbnail3").attr("src", thumbnails[1]);
    //     $("#thumbnail4").attr("src", thumbnails[2]);
    //     $("#specPage_totalPrice").text(formatKRW(price * parseInt(quantity)));
    //   });
    // fetch("/src/data/men_acc.json")
    //   .then((response) => response.json()) //json을 객체로 변환
    //   .then((responseObejct) => {
    //     //객체로 출력
    //     let { items } = responseObejct; //비구조화 할당
    //     const item = items.find((item) => item.id == itemId);
    //     globalItem = item;
    //     let { title, price, productImg, thumbnails } = item;
    //     $("#itemTitle").text(title);
    //     $("#itemPrice").text(formatKRW(price));
    //     $("#mainImage").attr("src", productImg);
    //     $("#thumbnail1").attr("src", productImg);
    //     $("#thumbnail2").attr("src", thumbnails[0]);
    //     $("#thumbnail3").attr("src", thumbnails[1]);
    //     $("#thumbnail4").attr("src", thumbnails[2]);
    //     $("#specPage_totalPrice").text(formatKRW(price * parseInt(quantity)));
    //     $(".sizeBtnArea").hide();
    //   });
  }
  showItemSpec();

  //수량 조정 함수
  $(".deduct").click(() => {
    clickedCount -= 1;
    if (clickedCount < 1) {
      clickedCount = 1;
    }
    $quantity.text(clickedCount);
    $("#specPage_totalPrice").text(
      formatKRW(globalItem.price * parseInt(clickedCount))
    );
  });
  $(".add").click(() => {
    clickedCount += 1;
    if (clickedCount > 10) {
      clickedCount = 10;
    }
    $quantity.text(clickedCount);
    $("#specPage_totalPrice").text(
      formatKRW(globalItem.price * parseInt(clickedCount))
    );
  });

  //썸네일 보는 함수
  $(".thumbnail").on("mouseover", (e) => {
    $("#mainImage").attr("src", $(e.target).attr("src"));
  });

  //사이즈 선택
  $(".sizeBtn").on("click", (e) => {
    $(".sizeBtn").removeClass("selectedButton");
    $(e.target).addClass("selectedButton");
    chosenSize = $(e.target).text();
    //console.log(chosenSize)
  });

  //장바구니 담기는 함수
  //if문 걸어야 됨!
  $(".addToCart").on("click", () => {
    let chosenItem = {
      title: $("#itemTitle").text(),
      productImg: $("#mainImage").attr("src"),
      price: globalItem.price * clickedCount,
      quantity: $("#quantity").text(),
      size: chosenSize,
    };

    cartItems.push(chosenItem);

    let message = "";

    for (let cartItem of cartItems) {
      message += ` 상품명:  ${cartItem.title} "\n"
       가격:  ${cartItem.price} 
       수량:  ${cartItem.quantity} 
      "\n"  ${cartItem.productImg} "\n"
     ${cartItem.size}
      `;
    }
    alert(message);

    saveToLocal(chosenItem);
  });

  //선택한 localStorage에 담기는 함수
  function saveToLocal(chosenItem) {
    if (localStorage.getItem("cartItems") === null) {
      cartItems = []; //배열초기화
    } else {
      cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
    cartItems.push(chosenItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
});
