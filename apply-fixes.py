import os
import re

firebase_scripts = '''
  <!-- Firebase App (the core Firebase SDK) -->
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <!-- Firebase Auth -->
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
  <!-- Firebase Firestore -->
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
'''

for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 1. Fonts
            content = re.sub(r'<link href="https://fonts\.googleapis\.com/css2\?family=Plus\+Jakarta\+Sans[^"]*"\s*rel="stylesheet">', '', content)
            content = re.sub(r'<link href="https://fonts\.googleapis\.com/css2\?family=Be\+Vietnam\+Pro[^"]*"\s*rel="stylesheet">', '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">', content)
            
            # 2. Firebase SDKs (insert before </head>)
            if 'firebase-app-compat' not in content:
                content = content.replace('</head>', firebase_scripts + '\n</head>')
            
            # Specific fixes
            if file == 'index.html':
                content = content.replace('<span class="material-symbols-outlined icon-md">bolt</span>', '')
                content = content.replace('<script src="js/data/db.js"></script>', '<script src="js/data/db.js"></script>\n  <script src="js/data/seeder.js"></script>')
                # Fix duplicate ID
                content = content.replace('<section class="section promotions-section" id="promotions-section"', '<section class="section promotions-section" id="promotions-section"') # This is the first one
                # The second one was: <section class="section flash-sale-section" id="promotions-section" data-section-title="Flash Sale">
                content = content.replace('<section class="section flash-sale-section" id="promotions-section"', '<section class="section flash-sale-section" id="flash-sale-section"')
                # SEO
                if '<meta name="description"' not in content:
                    content = content.replace('<title>', '<meta name="description" content="HotelBooking - Đặt phòng khách sạn và trải nghiệm kỳ nghỉ dễ dàng.">\n  <title>')

            if file == 'login.html':
                content = content.replace("form.addEventListener('submit', (e) => {", "form.addEventListener('submit', async (e) => {")
                content = content.replace("const res = Auth.login", "const res = await Auth.login")
                
            if file == 'register.html':
                content = content.replace("form.addEventListener('submit', (e) => {", "form.addEventListener('submit', async (e) => {")
                content = content.replace("const res = Auth.register", "const res = await Auth.register")
                
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

        elif file.endswith('.css'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            content = content.replace("'Plus Jakarta Sans'", "'Inter'").replace("'Be Vietnam Pro'", "'Inter'")
            
            if file == 'components.css':
                content = content.replace("font-weight: 900;\n  font-size: 0.85rem;\n  padding: 4px 11px;", "font-weight: 800;\n  font-size: 0.7rem;\n  padding: 3px 8px;")
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
                
        elif file == 'booking.js':
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            content = content.replace('<span class="material-symbols-outlined" style="font-size: 24px; color: #F59E0B;">local_offer</span>', '')
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

        elif file == 'room-detail.js':
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            content = re.sub(r'<span class="material-symbols-outlined">lock</span>\s*\$\{isFlashSale \? \'Săn deal ngay\' : \'Đặt phòng ngay\'\}', '', content)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

print("All changes applied successfully!")
