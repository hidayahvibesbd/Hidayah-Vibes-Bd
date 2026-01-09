// সাধারণ স্ক্রোল অ্যানিমেশন
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// আপনি এখানে ভবিষ্যতে আরও ফিচার যোগ করতে পারবেন
console.log("Hidayah Vibes Bd ওয়েবসাইট লোড হয়েছে।");
