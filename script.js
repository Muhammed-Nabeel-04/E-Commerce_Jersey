let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  const toast = document.getElementById("toast");
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2000);
}



