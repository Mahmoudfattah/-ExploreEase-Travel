




    let navbar = document.querySelector('.header .navbar');
    let menu = document.getElementById('menu-btn');

    

    menu.addEventListener('click', function () {
        console.log("Button Clicked!");
        navbar.classList.toggle('active');
    });



 
// this way is easy 
// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('control-btn1') || 
//         e.target.classList.contains('control-btn2') || 
//         e.target.classList.contains('control-btn3')) {
        
//         document.querySelector('.video').src = e.target.getAttribute('data-src');
//     }
// });





// تحديد الفيديو
let video = document.querySelector('.video');

// تحديد جميع الأزرار التي تحتوي على class يبدأ بـ "control-btn"
let buttons = document.querySelectorAll('[class^="control-btn"]');

// إضافة حدث "click" لكل زر
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // جلب الرابط الموجود داخل "data-src"
        let videoSrc = this.getAttribute('data-src');

        // تغيير مصدر الفيديو
        video.src = videoSrc;

        // تشغيل الفيديو بعد تغييره
        video.play();
    });
});

const container = document.querySelector('.box-container'); // اختر العنصر الأب الذي سيتم إضافة العناصر داخله

for (let i = 1; i <= 8; i++) {
    let delay = 150 * i; // مضاعفة 150 في كل تكرار

    let box = `
        <div class="box" data-aos="fade-up" data-aos-delay="${delay}" >
            <div class="image">
                <img src="./images/des${i}.jpg" alt="">
            </div>
            <div class="content">
                <h3>tours & travels</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <a href="">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
    `;

    container.innerHTML += box; // إضافة العنصر الجديد إلى الـ container
}




// document.addEventListener("DOMContentLoaded", function () {
//     const gallery = document.querySelector('.box-container2');
//     let boxes = '';

//     for (let i = 1; i <= 9; i++) {
//         boxes += `
//             <div class="box">
                
//                     <img src="./images/gallery${i}.jpg" alt="">
//                     <span>travel spot</span>
//                      <h3>iclane</h3>
               
//             </div>
//         `;
//     }

//     gallery.innerHTML = boxes; // إضافة جميع العناصر دفعة واحدة
// });
