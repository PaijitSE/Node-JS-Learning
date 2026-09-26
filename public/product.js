document.addEventListener("DOMContentLoaded", () => {
  // Elements Reference
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const productModal = document.getElementById("productModal");
  const productForm = document.getElementById("productForm");
  const imageInput = document.getElementById("imageInput");
  const avatarPreview = document.getElementById("avatarPreview");

  // Toggle Modal
  const toggleModal = (show) => {
    if (show) {
      productModal.classList.remove("hidden");
    } else {
      productModal.classList.add("hidden");
      productForm.reset();
      avatarPreview.style.backgroundImage = "none";
    }
  };

  openModalBtn.addEventListener("click", () => toggleModal(true));
  closeModalBtn.addEventListener("click", () => toggleModal(false));

  // Handle Image Upload Preview
  imageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        avatarPreview.style.backgroundImage = `url(${evt.target.result})`;
      };
      reader.readAsDataURL(file);
    }
  });

  // Handle Form Submission
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // ดึงค่าจากฟอร์มเพื่อนำไปประมวลผลต่อ (เช่น ส่ง API)
    const formData = new FormData(productForm);
    const data = Object.fromEntries(formData.entries());

    console.log("ข้อมูลสินค้าที่บันทึก:", data);

    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
    toggleModal(false);
  });
});
