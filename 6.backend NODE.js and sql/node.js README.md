
it's javaScript    Runtime Environment

it is used for server side programming


*Node .js is not a language,library or framework.




just like "broswer"  give environment to "javascript" run inside broswer

similarly like "node.js" give  environment to "javascript" run outside.


vscode made of node.js






























//Node REPEL(READ EVALUTE PRINT lOOP):

helps give us commands:


node :  now we are js enivornment.







//noded.js cannot maniplulate DOM objects or elements





golbal  --> get all golbal function


.help  --> get help for commonds

























run file in node.js:

touch filename.js (create a new js file)

node filename.js








































process in node:


process:  this " OBJECT "provides information about and control over ,the current node.js 
//            process.


process.agrv:return an array containing the command-line arugments passed when the Nodejs   
//               process was launched



example:

by deafult if no argumnet pass through    "file name"  :

console.log(process.argv);



o/p: 2 array values return

  '/usr/bin/node',   (executable path for NODE.js)

  '/home/loka/Downloads/web developement/6.backend NODE.js and sql/script.js' 
  
  (current file we running path)




  
  by if  argumnets(hello bye) is pass through " file name ":


node script.js hello  bye

o/p:
4 array value it return
  '/usr/bin/node',
  '/home/loka/Downloads/web developement/6.backend NODE.js and sql/script.js',
  'hello',
  'bye'













  if we want to use arugments(hello ,bye) in node,js then:


 node script.js lokajay jayta sabita jayanta


 code: code is script.js

o/p:
hello to lokajay
hello to jayta
hello to sabita
hello to jayanta










































exporting files:


" module.exports "   : requring files 

require():  a built-in function to include external modules that exist in separate files.

module.exports: a special object

Rest info export in scrpit.js and math.js














































exporting from directories:

requring directories

require() : a built-in  function to include external modules that exist in separate files.

module.exports: a special object



example : in script.js and folder fruits and index.js(entry point)















































Npm:Node package manger  for NODE.js

--> it similar to library of packages of codes

used to avail new code devloped by coders into package so other people can use those package.


used in:
  express.js-->server side coding.
  react.js--> front end coding.

 many packages
  etc....

this are package in node.this are written someone but used by many



-->command line tools.

























-->install packages develop by other developers:

npm install "package name"





packagename:


-->figliet (print something in command line ) in  www.npmjs.com

inside figlet-
node modules:  the node_modules folder contains every installed dependency for your project.

package-lock.json:  it records the exact version of every installed dependency,
                      including it's sub-dependencies and their versions.


but,if we want use figlet model then: inside figlet we need to create 
  " index.js   "



  package.json:
  the package .json file contains descriptive and functional metadata about a project ,such as a name, version and dependencies.



  








we want create my project :

if in MyProject we want to create our Project file then 

Inside the MyProject we want to use NODE then we sould have that packaqge.json file  inside the folder MyProject by using command:

" npm init "  



now  inside our project we want to install new packages like: figlet

" npm install figlet" 
figlet dependices is added  it added to package.json file
 rest other packages(like: give me-a-joke) depeencies will be added to the package.json file


























































 local vs golbal installation:

 //script.js is outside of figlet dirtecory which contain "figlet module" it is called local installtion.

//when run it by"node script.js"we get error  "MODULE_NOT_FOUND"

//So, we can do golbal installation of module 
// "sudo chown -R $USER /usr/local/lib/node_modules" treated as admin
// " npm install -g "package name"

sudo chown -R $USER /usr/local/lib/node_modules
npm install -g "package name".
 npm link "package name".


code: in script.js

























































//reqiure  v/s import

//eariler (old) use  "reqiure  the  package"

//nowdays (new) due to ES6--> we have arrow function  we used " import the package "

example: in math.js (export)  --->  scrpit.js(import)



->we cannot selectively load only the pieces we need with require but with import ,we can 
   selectivly load only the pieces we need ,which can save memory



->loading is synchronous  for 'require',but can be asynchronous  for 'import'.









-->
like we  "reqiure"   file and package/directory

we also can "import" file (we seen already) or package

example:-> in scrpit.js 

let "import" package   "random words"
 



































































-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


















