with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    with open('found.txt', 'w', encoding='utf-8') as out:
        for i, line in enumerate(lines):
            if 'Flash Sale' in line or 'Săn deal ngay' in line or '⚡' in line:
                out.write(f"Line {i+1}: {line.strip()}\n")
