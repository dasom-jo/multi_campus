fileName = input('파일명 입력바람')

f = open(f'{fileName}.html', "w", encoding='utf-8')
f.write(''' 
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
        ''')
f.close()

#index.html 만들어냄