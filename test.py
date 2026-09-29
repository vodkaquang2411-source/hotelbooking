with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()
    if '<meta charset="UTF-8">' in text:
        print('Has UTF-8 meta tag')
    else:
        print('MISSING META TAG')
