//fetch data from an API
//get sanas
function fetchDataAuthor(){
    fetch('https://rchmong.com/api/author.php')
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error('Request failed!');
    })
    .then(data => {
      console.log(data);
      const author = document.querySelector('#author');
      for(let i = 0; i < data.length; i++){
        author.innerHTML += `
        <div class="box">
          <div class="icons">
                    <a class="fas fa-heart"></a>
                    <a class="fas fa-share"></a>
                    <a class="fas fa-eye"></a>
                </div>
                <img src="adminrc/public/uploads/products/${data[i].image}" alt="rchmong">
                <div class="content">
                    <h3>${data[i].name}</h3>
                    <div class="price">$${data[i].sell}</div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <a href="https://wa.me/8562058782577?text=ສະບາຍດີອ້າຍRc ຂ້ອຍຕ້ອງການສັ່ງຊື້ສິນຄ້າ %28${data[i].name}%29 ຂ້ອຍຈະໂອນເງິນເຂົ້າບັນຊີຂອງເຈົ້າແລະແຈ້ງສະຖານທີສົ່ງລາຍລະອຽດໃຫ້ເດີ້." class="btn">ຊື້ເລີຍ</a>
            </div>
          <div class="box">
        `;
      }
      if(data.length == 0){
        author.innerHTML += `
            <div class="box">
                <div class="content">
                    <h4>ສິນຄ້າຈະມີໄວໆນີ້...</h4>
                </div>
          <div class="box">
        `;
      }
    })
  }
  fetchDataAuthor();

    