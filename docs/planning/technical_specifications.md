# التقنيات المستخدمة وهيكل قاعدة البيانات لموقع Glanzpunkt للتنظيف

## 1. التقنيات المقترحة للمشروع

### 1.1 تقنيات الواجهة الأمامية (Frontend)
- **HTML5/CSS3/JavaScript**: لبناء واجهة المستخدم الأساسية
- **React.js**: إطار عمل JavaScript لبناء واجهة مستخدم تفاعلية وديناميكية
- **Bootstrap 5**: لتصميم متجاوب وسريع التطوير
- **SASS/SCSS**: لكتابة أنماط CSS متقدمة وقابلة للصيانة
- **Three.js**: لتطوير العناصر ثلاثية الأبعاد والواجهات التفاعلية
- **Chart.js/D3.js**: لعرض البيانات والإحصائيات بشكل مرئي
- **Socket.io**: للاتصال المباشر بين العميل والخادم (للشات والإشعارات)
- **React Router**: لإدارة التنقل بين صفحات التطبيق
- **Redux**: لإدارة حالة التطبيق بشكل مركزي

### 1.2 تقنيات الخادم الخلفي (Backend)
- **Node.js**: بيئة تشغيل JavaScript على الخادم
- **Express.js**: إطار عمل لبناء واجهات برمجة التطبيقات (APIs)
- **MongoDB**: قاعدة بيانات NoSQL لتخزين البيانات بمرونة
- **Mongoose**: مكتبة لنمذجة بيانات MongoDB
- **JWT (JSON Web Tokens)**: لإدارة المصادقة والتفويض
- **Passport.js**: لإدارة المصادقة بطرق متعددة
- **Multer**: لرفع الملفات والصور
- **Nodemailer**: لإرسال رسائل البريد الإلكتروني
- **Socket.io**: للاتصال المباشر بين العميل والخادم (للشات والإشعارات)

### 1.3 تقنيات الذكاء الاصطناعي والشات بوت
- **Dialogflow**: لبناء واجهة محادثة ذكية للشات بوت
- **TensorFlow.js**: لتنفيذ نماذج التعلم الآلي على المتصفح
- **Natural Language Processing (NLP)**: لفهم وتحليل استفسارات المستخدمين

### 1.4 تقنيات الواقع المعزز/الافتراضي
- **AR.js**: لتطبيقات الواقع المعزز على المتصفح
- **A-Frame**: لتطوير تجارب الواقع الافتراضي

### 1.5 أدوات التطوير والنشر
- **Git**: لإدارة نسخ الكود
- **Webpack**: لحزم وتجميع ملفات المشروع
- **Babel**: لتحويل JavaScript الحديث إلى إصدارات متوافقة
- **ESLint**: للتحقق من جودة الكود
- **Jest/Mocha**: لاختبار الكود
- **Docker**: لتوحيد بيئة التطوير والإنتاج
- **CI/CD**: للنشر المستمر والتكامل المستمر

## 2. هيكل قاعدة البيانات المقترح

### 2.1 مجموعات البيانات (Collections)

#### 2.1.1 مجموعة المستخدمين (Users)
```
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  role: String (admin, staff),
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.2 مجموعة العملاء (Customers)
```
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  address: {
    street: String,
    city: String,
    postalCode: String,
    country: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.3 مجموعة الخدمات (Services)
```
{
  _id: ObjectId,
  name: String,
  description: String,
  shortDescription: String,
  price: Number,
  priceUnit: String (per hour, per square meter, etc.),
  imageUrl: String,
  isActive: Boolean,
  category: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.4 مجموعة الطلبات (Orders)
```
{
  _id: ObjectId,
  customerId: ObjectId (ref: Customers),
  services: [
    {
      serviceId: ObjectId (ref: Services),
      quantity: Number,
      price: Number
    }
  ],
  totalPrice: Number,
  status: String (pending, confirmed, in-progress, completed, cancelled),
  scheduledDate: Date,
  scheduledTime: String,
  address: {
    street: String,
    city: String,
    postalCode: String,
    country: String
  },
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.5 مجموعة آراء العملاء (Testimonials)
```
{
  _id: ObjectId,
  customerId: ObjectId (ref: Customers),
  customerName: String,
  rating: Number (1-5),
  comment: String,
  imageUrl: String,
  isApproved: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.6 مجموعة الأسئلة الشائعة (FAQs)
```
{
  _id: ObjectId,
  question: String,
  answer: String,
  category: String,
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.7 مجموعة المقالات (Blog Posts)
```
{
  _id: ObjectId,
  title: String,
  content: String,
  summary: String,
  author: String,
  imageUrl: String,
  tags: [String],
  isPublished: Boolean,
  publishDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.8 مجموعة العروض الخاصة (Special Offers)
```
{
  _id: ObjectId,
  title: String,
  description: String,
  discountType: String (percentage, fixed),
  discountValue: Number,
  serviceIds: [ObjectId] (ref: Services),
  startDate: Date,
  endDate: Date,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.9 مجموعة المناطق المخدومة (Service Areas)
```
{
  _id: ObjectId,
  name: String,
  city: String,
  postalCodes: [String],
  coordinates: {
    lat: Number,
    lng: Number
  },
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.10 مجموعة محادثات الشات بوت (ChatSessions)
```
{
  _id: ObjectId,
  visitorId: String,
  messages: [
    {
      sender: String (bot, user),
      content: String,
      timestamp: Date
    }
  ],
  leadInfo: {
    name: String,
    email: String,
    phone: String,
    interest: String
  },
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2.1.11 مجموعة إعدادات الموقع (SiteSettings)
```
{
  _id: ObjectId,
  siteName: String,
  logo: String,
  contactInfo: {
    phone: String,
    email: String,
    address: String,
    workingHours: String
  },
  socialMedia: {
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String
  },
  heroSection: {
    title: String,
    subtitle: String,
    imageUrl: String
  },
  aboutSection: {
    content: String,
    features: [String]
  },
  statistics: {
    projectsCompleted: Number,
    satisfiedCustomers: Number,
    teamSize: Number,
    yearsOfExperience: Number
  },
  languages: [
    {
      code: String,
      name: String,
      isActive: Boolean
    }
  ],
  updatedAt: Date
}
```

#### 2.1.12 مجموعة الإشعارات (Notifications)
```
{
  _id: ObjectId,
  userId: ObjectId (ref: Users or Customers),
  title: String,
  message: String,
  type: String (order, system, promotion),
  isRead: Boolean,
  relatedId: ObjectId,
  createdAt: Date
}
```

## 3. العلاقات بين الكيانات

1. **العملاء والطلبات**: علاقة واحد إلى متعدد (عميل واحد يمكنه إنشاء عدة طلبات)
2. **الخدمات والطلبات**: علاقة متعدد إلى متعدد (طلب واحد يمكن أن يحتوي على عدة خدمات، وخدمة واحدة يمكن أن تكون في عدة طلبات)
3. **العملاء وآراء العملاء**: علاقة واحد إلى متعدد (عميل واحد يمكنه كتابة عدة آراء)
4. **الخدمات والعروض الخاصة**: علاقة متعدد إلى متعدد (عرض خاص يمكن أن يشمل عدة خدمات، وخدمة واحدة يمكن أن تكون في عدة عروض)

## 4. اعتبارات أمان قاعدة البيانات

1. **تشفير البيانات الحساسة**: تشفير كلمات المرور وبيانات الدفع
2. **التحقق من الصلاحيات**: التأكد من أن المستخدمين يمكنهم الوصول فقط إلى البيانات المصرح بها
3. **النسخ الاحتياطي**: إنشاء نسخ احتياطية منتظمة لقاعدة البيانات
4. **سجلات الأنشطة**: تسجيل جميع العمليات الحساسة للمراجعة والتدقيق
5. **الحماية من هجمات حقن SQL**: استخدام الاستعلامات المعدة مسبقًا والتحقق من المدخلات



## 5. تقنيات الترجمة والتعريب

### 5.1 مكتبات وأدوات الترجمة
- **React-i18next**: مكتبة لدعم تعدد اللغات في تطبيقات React
- **i18next**: إطار عمل شامل للترجمة والتعريب
- **i18next-browser-languageDetector**: للكشف التلقائي عن لغة المتصفح
- **i18next-http-backend**: لتحميل ملفات الترجمة بشكل ديناميكي
- **rtl-detect**: للكشف عن اللغات التي تُكتب من اليمين إلى اليسار
- **moment.js** مع **moment-timezone**: لتنسيق التواريخ والأوقات حسب اللغة

### 5.2 تقنيات دعم اتجاه النص
- **CSS Logical Properties**: لدعم اتجاهات النص المختلفة
- **styled-components** مع **stylis-plugin-rtl**: لدعم CSS للغات RTL
- **material-ui/core** مع **jss-rtl**: لدعم اتجاه RTL في مكونات Material-UI

### 5.3 خطوط وأنماط
- **Google Fonts** مع دعم للخطوط الألمانية والعربية
- **Font Awesome** لدعم الأيقونات بغض النظر عن اتجاه النص
- **CSS Variables**: لتبديل الأنماط بسهولة حسب اللغة المستخدمة

### 5.4 أدوات إدارة الترجمة
- **POEditor** أو **Lokalise**: لإدارة ملفات الترجمة
- **i18next-parser**: لاستخراج مفاتيح الترجمة من الكود
- **Excel/CSV Import/Export**: لتسهيل عملية الترجمة الخارجية

