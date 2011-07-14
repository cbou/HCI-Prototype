import os, shutil, operator, re

try:
  shutil.rmtree('css/')
except Exception:
  None

try:
  shutil.rmtree('js/')
except Exception:
  None

try:
  shutil.rmtree('images/')
except Exception:
  None

shutil.copytree('src/images', 'images')

os.mkdir('css')
os.mkdir('js')

jsDir = 'src/js/';
js = [
  'jquery-1.6.1.js',
  'jquery.mobile-1.0b1.js',
  'jquery.swipegallery.js',
  'jquery.alerts.js',
  'jquery.url.js',

  'hci.js',
  'hci.offers.js',
  'hci.page.form.js',
  'hci.page.index.js',
  'hci.page.list.js',
  'hci.page.show.js',
  'hci.flash.js',
    'hci.dialog.image.js'
]

cssDir = 'src/css/';
css = [
  'reset.css',
  'jquery.mobile-1.0b1.css',
  'jquery.swipegallery.css',
  'jquery.alerts.css',
  'hci-offer.css'
]

jsContent = '';
for jsPath in map(lambda x: jsDir + x, js):
  jsContent += '\n\n' + open(jsPath).read()

f = open('js/script.min.js',"w")
f.write(jsContent)
f.close()

cssContent = '';
for cssPath in map(lambda x: cssDir + x, css):
  cssContent += '\n\n' + open(cssPath).read()

f = open('css/style.min.css',"w")
f.write(cssContent)
f.close()

headerContent = open('src/header/header.html').read()

pageList = os.listdir('src/')

for fileName in pageList:
  path = 'src/' + fileName;
  if os.path.isfile(path) == True:
    content = re.sub('<head>.*</head>', headerContent, open(path).read(), 1, re.DOTALL)
    
    f = open(fileName,"w")
    f.write(content)
    f.close()
    
