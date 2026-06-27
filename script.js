// 1. كود تشغيل العداد (بيشتغل تلقائي لو لقى العداد في الصفحة)
function updateCounter() {
    const counterContainer = document.getElementById("counter");
    if (!counterContainer) return; // لو مش في صفحة العداد اخرج عشان الكود ما يعلقش

    const startDate = new Date("August 1, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// تشغيل العداد كل ثانية وفوراً
setInterval(updateCounter, 1000);
updateCounter();


// 2. كود التحقق من الباسوورد (بيشتغل فقط لو البوابة موجودة في الصفحة)
const passwordInputEl = document.getElementById("password-input");
if (passwordInputEl) {
    // تشغيل الدخول عند الضغط على Enter
    passwordInputEl.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });
}

function checkPassword() {
    const passwordInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
    const loginGate = document.getElementById("login-gate");
    const mainContent = document.getElementById("main-content");

    if (passwordInput === "2742006") {
        errorMessage.innerText = ""; 
        loginGate.style.opacity = "0";
        loginGate.style.pointerEvents = "none";

        setTimeout(() => {
            loginGate.classList.add("hidden"); 
            mainContent.classList.remove("hidden"); 
        }, 800);

    } else {
        errorMessage.innerText = "تؤ تؤ.. المكان دا مش لأي حد يا قمر! جربي تاني 💖";
        document.getElementById("password-input").value = "";
    }
}

// 3. تأثير الانتقال الاحترافي بين الصفحات
document.addEventListener("DOMContentLoaded", function() {
    // أ. كود الصفحة الأولى: النقلة الناعمة عند الضغط على الزرار
    const nextBtn = document.getElementById("next-page-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", function(e) {
            e.preventDefault(); // نمنع النقلة المفاجئة السريعة
            
            // نعمل تأثير الاختفاء التدريجي لجسم الصفحة كله
            document.body.classList.add("fade-out");
            
            // نستنى 600 مللي ثانية (لحد ما الاختفاء يخلص) وبعدين ننقلها للصفحة التانية
            setTimeout(function() {
                window.location.href = "photos.html";
            }, 600);
        });
    }

    // ب. كود الصفحة الثانية: الظهور الناعم أول ما الصفحة تفتح
    if (window.location.pathname.includes("photos.html")) {
        document.body.classList.add("fade-in-start");
        
        setTimeout(function() {
            document.body.classList.remove("fade-in-start");
        }, 50);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    
    // 1. كود العداد (لو موجود في الصفحة)
    const counterContainer = document.getElementById("counter");
    if (counterContainer) {
        function updateCounter() {
            const startDate = new Date("August 1, 2022 00:00:00").getTime();
            const now = new Date().getTime();
            const diff = now - startDate;
            document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
        }
        setInterval(updateCounter, 1000);
        updateCounter();
    }

    // 2. كود التحقق من الباسوورد
    const passwordInputEl = document.getElementById("password-input");
    if (passwordInputEl) {
        passwordInputEl.addEventListener("keypress", function(event) {
            if (event.key === "Enter") checkPassword();
        });
    }

    // 3. كود الظهور الناعم والانتقال
    setTimeout(function() {
        if (document.body) document.body.classList.remove("fade-in-start");
    }, 100);

    const returnBtn = document.querySelector(".transition-trigger");
    if (returnBtn) {
        returnBtn.addEventListener("click", function(e) {
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => { window.location.href = this.getAttribute("href"); }, 600);
        });
    }

    // 4. 🎯 التركاية البرنس: قفل الفيديوهات (باستخدام الكلاس my-video)
    const videos = document.querySelectorAll('.my-video');
    videos.forEach(function(video) {
        video.addEventListener('play', function() {
            videos.forEach(function(otherVideo) {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
});