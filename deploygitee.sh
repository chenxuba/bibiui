rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@gitee.com:chenruisheng/bibi-ui.git &&
git push -f -u origin main &&
cd -
echo https://chenruisheng.gitee.io/bibi-ui