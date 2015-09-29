#!/usr/bin/env bash

echo "================================="
echo "The following commands will run:"
echo "---------------------------------"
echo "* virtualenv -p `which python3` django-isomorphic-demo-env"
echo "* source django-isomorphic-demo-env/bin/activate"
echo "* git clone git@github.com:wildfish/django-isomorphic-example.git"
echo "* pip install django"
echo "* pip install https://github.com/wildfish/django-isomorphic/archive/master.tar.gz#egg=django-isomorphic"
echo "* cd django-isomorphic-example/isodemo/static/js/"
echo "* npm install"
echo "* ./node_modules/browserify/bin/cmd.js -t reactify -r react ./src/index.js -o ./dist/dist.js"
echo "* ./node_modules/react-tools/bin/jsx ./src ./dist"
echo "* cd ../../"
echo "* ./manage.py migrate"
echo "* ./manage.py runserver"
echo "================================="


read -p "Do you wish to continue? (y/n) " yn
case $yn in
    [Yy]* ) ;;
    [Nn]* ) exit;;
    * ) echo "Please answer yes or no.";;
esac


virtualenv -p `which python3` django-isomorphic-demo-env
source django-isomorphic-demo-env/bin/activate
git clone git@github.com:wildfish/django-isomorphic-example.git
pip install django
pip install https://github.com/wildfish/django-isomorphic/archive/master.tar.gz#egg=django-isomorphic
cd django-isomorphic-example/isodemo/static/js/
npm install
./node_modules/browserify/bin/cmd.js -t reactify -r react ./src/index.js -o ./dist/dist.js
./node_modules/react-tools/bin/jsx ./src ./dist
cd ../../
./manage.py migrate
./manage.py runserver
