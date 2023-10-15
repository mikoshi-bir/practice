function hello() {
    console.log('Я учу JS!');
}
const images = ["https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80", "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"]; // Список изображений
    let currentIndex = 0; // Текущий индекс изображения

    function showImage() {
      const imageElement = document.getElementById("image");
      imageElement.src = images[currentIndex];
    }

    function previousImage() {
      currentIndex = currentIndex - 1;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      showImage();
    }

    function nextImage() {
      currentIndex = currentIndex + 1;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showImage();
    }

    showImage();