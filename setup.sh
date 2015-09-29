git clone git@github.com:wildfish/django-isomorphic-example.git
cd django-isomorphic-example/isodemo/static/js/
npm install
./node_modules/browserify/bin/cmd.js -t reactify -r react ./src/index.js -o ./dist/dist.js
./node_modules/react-tools/bin/jsx ./src ./dist
cd ../../
./manage.py migrate
./manage.py runserver

