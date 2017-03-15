#!/usr/bin/python3

index_html = open('index.html', 'r', encoding='utf-8')

html = index_html.read()

php = html.replace('src="', 'src="<?php bloginfo(\'template_directory\');?>/')
php = php.replace('<link rel="stylesheet" href="', '<link rel="stylesheet" href="<?php bloginfo(\'template_directory\');?>/')

with open('page-o-mnie.php', 'w') as page_o_mnie_php:
    page_o_mnie_php.write(php)
