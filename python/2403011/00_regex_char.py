from regex_check import match_check as mc

mc('[abc]', 'alphabet')
#[abc]: alphabet is ok
mc('[a-c]', 'liberty')
#[abc]: liberty is ok
mc('[abc]', 'digit')
#[abc]:digitis  not  ok

mc("[0-9]", '1234')
#[0-9]: 1234 is ok
mc("[\d]", '1234')
#[\d]: 1234 is ok
mc("[0-9]", 'number')
#[0-9]:numberis  not  ok
mc("[^0-9]", '123')
#[^0-9]:123is  not  ok
mc("[\D]", '1234')

mc("[a-z]", 'Alphabet')
#[a-z]: Alphabet is ok
mc("[a-zA-Z]", 'number')
#a-zA-Z]: number is ok

mc("[^a-zA-Z]", 'number')
#[^a-zA-Z]:numberis  not  ok

mc("[^a-zA-Z-9]","GILINDONG123")
#[a-zA0-9]: GIldong123 is ok

mc("\W","GILINDONG123")

mc("\s", "hello world")
mc("\s", "helloworld")

mc("[가-힣]","길동홍")