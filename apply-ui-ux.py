import os
import re

for root, dirs, files in os.walk('.'):
    for file in files:
        path = os.path.join(root, file)
        
        if 'backup' in root or '.git' in root:
            continue
            
        if file.endswith('.css'):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            if file == 'components.css':
                # btn base radius
                if 'border-radius: 8px;' not in content and '.btn {' in content:
                    content = content.replace('.btn {\n', '.btn {\n  border-radius: 8px;\n')
                
                # btn-primary override
                content = re.sub(r'\.btn-primary\s*\{[^\}]+\}', '.btn-primary {\n  background: var(--primary);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(15, 39, 71, 0.3);\n  border-radius: 8px !important;\n}', content)
                
                # Section padding
                content = content.replace('padding: 64px 0;', 'padding: 86px 0;')
                
                # Amenity chip
                content = re.sub(r'\.amenity-chip\s*\{[^\}]+\}', '.amenity-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #1E293B;\n  background: #F1F5F9;\n  padding: 4px 8px;\n  border-radius: 6px;\n  border: 1px solid #E2E8F0;\n}', content)
                content = re.sub(r'\.amenity-chip \.material-symbols-outlined\s*\{[^\}]+\}', '.amenity-chip .material-symbols-outlined {\n  font-size: 13px;\n  color: var(--primary);\n}', content)
                
                # Hero stats glassmorphism
                content = re.sub(r'\.hero-stat-card\s*\{[^\}]+\}', '.hero-stat-card {\n  background: rgba(15, 39, 71, 0.25);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-align: left;\n}', content)
                content = re.sub(r'\.hero-stat-icon\s*\{[^\}]+\}', '.hero-stat-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: rgba(201, 162, 39, 0.15);\n  color: #C9A227;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}', content)
                
                # search button
                content = re.sub(r'\.btn-search-hero-submit\s*\{([^\}]+)background:\s*linear-gradient\([^;]+\);([^\}]+)\}', r'.btn-search-hero-submit {\1background: var(--primary);\2}', content)
                content = re.sub(r'\.btn-search-hero-submit:hover\s*\{([^\}]+)background:\s*linear-gradient\([^;]+\);([^\}]+)\}', r'.btn-search-hero-submit:hover {\1background: #16335B;\2}', content)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

        elif file.endswith('.html'):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            if file == 'index.html':
                # Remove inline styles from Xem phòng button
                content = re.sub(r'class="btn btn-primary btn-sm"\s*style="padding: 8px 18px; border-radius: 9999px;[^"]+"', 'class="btn btn-primary btn-sm"', content)
                # Remove inline styles from any other primary buttons to rely on global CSS
                
            if file == 'detail.html' and 'hotels' in root:
                # Add drop shadow to sticky box
                content = content.replace('class="detail-card" style="padding: 22px; border-top: 4px solid var(--primary); margin-bottom: 18px;"', 'class="detail-card" style="padding: 22px; border-top: 4px solid var(--primary); margin-bottom: 18px; box-shadow: 0 16px 40px rgba(15, 39, 71, 0.15); border: none;"')
                
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

        elif file == 'hotels.js':
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Hide long descriptions on hotel cards
            content = re.sub(r'<p style="font-size: 0\.84rem; color: var\(--text-muted\); line-height: 1\.5; margin-bottom: 12px;">\s*\$\{truncateText\(hotel\.description, 85\)\}\s*</p>', '', content)
            
            # Remove inline styles from Chi tiết button to rely on global CSS
            content = re.sub(r'class="btn btn-primary btn-sm" style="padding: 8px 18px; border-radius: 9999px; font-weight: 700; white-space: nowrap; flex-shrink: 0;"', 'class="btn btn-primary btn-sm"', content)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

        elif file == 'flash-sale.js':
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Remove inline styles from buttons
            content = re.sub(r'class="btn btn-primary btn-sm" style="padding: 8px 18px; border-radius: 9999px;[^"]+"', 'class="btn btn-primary btn-sm"', content)
            
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

print("UI/UX enhancements applied!")
