const firebaseConfig = {
  apiKey: "AIzaSyC2T9LdO_HP7Q0hkgokOWWo-wPsBRMvMsc",
  authDomain: "fee-union.firebaseapp.com",
  databaseURL: "https://fee-union-default-rtdb.firebaseio.com/",
  projectId: "fee-union",
  storageBucket: "fee-union.firebasestorage.app",
  messagingSenderId: "96677093224",
  appId: "1:96677093224:web:5538c35947db42f62740dd",
  measurementId: "G-DM9JK6D159"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function showSection(id) {
    document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.querySelectorAll('.side-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// حفظ الخبر
document.getElementById('news-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const item = {
        title: document.getElementById('news-title').value,
        category: document.getElementById('news-category').value,
        desc: document.getElementById('news-desc').value,
        img: document.getElementById('news-img').value || './assets/news-college.jpg'
    };
    database.ref('news').push(item).then(() => {
        alert('✅ تم النشر!');
        this.reset();
    });
});

// حفظ الفعالية
document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const item = {
        name: document.getElementById('event-name').value,
        date: document.getElementById('event-date').value,
        desc: document.getElementById('event-desc').value,
        link: document.getElementById('event-link').value || '#',
        img: document.getElementById('event-img').value || './assets/event1.jpg'
    };
    database.ref('events').push(item).then(() => {
        alert('📅 تم الإضافة!');
        this.reset();
    });
});
// --- وظيفة جلب البيانات وعرضها في لوحة التحكم مع زر الحذف ---

// 1. عرض الأخبار للحذف
database.ref('news').on('value', (snapshot) => {
    const data = snapshot.val();
    const list = document.getElementById('admin-news-list');
    list.innerHTML = '';
    if (!data) return;

    Object.keys(data).forEach(id => {
        const item = data[id];
        list.innerHTML += `
            <div class="admin-item-card">
                <span>${item.title}</span>
                <button onclick="deleteItem('news', '${id}')" class="del-btn">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </div>
        `;
    });
});

// 2. عرض الفعاليات للحذف
database.ref('events').on('value', (snapshot) => {
    const data = snapshot.val();
    const list = document.getElementById('admin-events-list');
    list.innerHTML = '';
    if (!data) return;

    Object.keys(data).forEach(id => {
        const item = data[id];
        list.innerHTML += `
            <div class="admin-item-card">
                <span>${item.name}</span>
                <button onclick="deleteItem('events', '${id}')" class="del-btn">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </div>
        `;
    });
});

// 3. الوظيفة السحرية للحذف من Firebase
function deleteItem(path, id) {
    if (confirm("هل أنت متأكد من حذف هذا العنصر نهائياً؟")) {
        database.ref(`${path}/${id}`).remove()
            .then(() => alert("تم الحذف بنجاح!"))
            .catch(err => alert("خطأ في الحذف: " + err.message));
    }
}

