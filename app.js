const wrapper=document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem");



const products = [
    {
      id: 1,
      title: "Air Force",
      price: 500,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 699,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 2000,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 2500,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 1000,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  
  // ✅ Update Product on Menu Click
  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
      choosenProduct = products[index];
  
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      // ✅ Update Colors
      currentProductColors.forEach((color, i) => {
        if (choosenProduct.colors[i]) {
          color.style.backgroundColor = choosenProduct.colors[i].code;
        }
      });
    });
  });
  
  // ✅ Change Product Image on Color Click
  currentProductColors.forEach((color, i) => {
    color.addEventListener("click", () => {
      if (choosenProduct.colors[i]) {
        currentProductImg.src = choosenProduct.colors[i].img;
      }
    });
  });
  
  // ✅ Update Selected Size
  currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((s) => {
        s.style.backgroundColor = "white";
        s.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  
  // ✅ Payment Modal Controls
  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
  