rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:chenxuba/bibi-ui.git &&
git push -f -u origin main &&
cd -
echo https://chenxuba.github.io/bibi-ui