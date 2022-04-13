/**              MODULE              **/

const { resolve } = require("path/posix");

const car = {
    brand: "BMW",
    model: "Z4"
}


exports.mine = car



/**               NPM                   **/

 console.log("KEEP THE FIRE BURNING")


/*                NPX             */

const_=require('lodash')


/**         Event Loop        **/

const bar = () => console.log('BAR')
const baz = () => console.log('BAZ')

const foo = () => {
    console.log('Foo')
    bar()
    baz()
}

foo()

const foo = () => {
    console.log('Foo')
    setTimeout(bar, 1000)
    baz()
}

foo()



/**                 Callback     **/

function getMessage(){
console.log('Get Message')
}

function DisplayMessage(){
console.log('Display Message')
}

getMessage()
DisplayMessage()


function getMessage(){
   setTimeout(()=> {
    console.log('Get Message')
   }, 1000)
}
    
function DisplayMessage(){
    console.log('Display Message')
}
    
getMessage()
DisplayMessage()


function getMessage(msg, callback){
    setTimeout(()=> {
     console.log(msg)
     callback()
    }, 1000)
 }
     
 function DisplayMessage(){
     console.log('Display Message')
 }
     
 getMessage('Get Message', DisplayMessage)




 function getMessage(msg, callback){
    setTimeout(()=> {
     console.log(msg)
     callback()
    }, 1000)
 }
     
 function DisplayMessage(){
     console.log('Display Message')
 }
     
 getMessage('Get Message', () => console.log('Keep it up, Rash!!!'))



 /**         Promises            **/


 let promise = new Promise(function(resolve, reject){
     setTimeout(() => {
         resolve('Run Before')
     }, 1000);
 })

promise.then(
    result => {
        console.log(result)
    },
    error => console.log(error)
)



let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(new Error("Whoops"))
    }, 1000);
})

promise.then(
   result => {
       console.log(result)
   },
   error => console.log(error)
)



let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('Run Before')
    }, 1000);
})

promise.then(
   result => {
       console.log(result)
       GetAfter()
   },
   error => console.log(error)
)


function GetAfter(){
    console.log("Print After")
}



/**         Async and Await      **/

function Clown(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("sugar")
        }, 1000);
    })
}

async function msg(){
    const msg = await Clown()
    console.log("Message:", msg)
}

msg()



function Clown(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("sugar")
        }, 1000);
    })
}

async function msg(callback){
    const msg = await Clown()
    console.log("Message:", msg)
    callback()
}

msg(getResult)

function getResult(){
    console.log('Execute After')
}




/**          HTTP Server       **/

const http = require('http')

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome to HTTP SERVER')
})

server.listen(port, hostname, ()=> {
    console.log(`Server is running on http://${hostname}:${port}/`)
})



const http = require('http')

const hostname = '127.0.0.1'
const port = 3000;

http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome to HTTP SERVER')
}).listen(port, hostname, ()=> {
    console.log(`Server is running on http://${hostname}:${port}/`)
})


const http = require('http')

const hostname = '127.0.0.1'
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Welcome to HTTP SERVER')
}).listen(port, hostname, ()=> {
    console.log(`Server is running on http://${hostname}:${port}/`)
})



const http = require('http')

const hostname = '127.0.0.1'
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Welcome to HTTP SERVER')
    res.end()
}).listen(port, hostname, ()=> {
    console.log(`Server is running on http://${hostname}:${port}/`)
})




 /**     Making HTTP Request     **/

// HTTP GET REQUEST
const http = require('http')

 http.get('http://api.open-notify.org/astros.json', resp => {
     let data = ''
     resp.on('data', chunk => {
         data += chunk
     })
     resp.on('end', () => {
         console.log(data)
     })
 })


const http = require('http')

 http.get('http://api.open-notify.org/astros.json', resp => {
     let data = ''
     resp.on('data', chunk => {
         data += chunk
     })
     resp.on('end', () => {
         let jsondata = JSON.parse(data)
         console.log(jsondata)
     })
 })


// HTTP POST REQUEST
const http = require('https')

const data = JSON.stringify({
name:"John Doe",
Job:"Content Writer"
});


const options = {
    hostname:'reqres.in',
    path:'/api/users',
    method:'POST',
    header:{
        'Content-Type':'application/json'
    }
}

// request
const req = http.request(options, (res) => {
    let body ='';
    console.log("Status Code:", res.statusCode)

    res.on('data',(chunk)=>{
        body += chunk;
    })
    res.on('end',()=> {
        console.log("Body:",JSON.parse(body))
    })
})

req.write(data);
req.end();



const axios = require('axios')

const data = JSON.stringify({
name:"John Doe",
Job:"Content Writer"
});

axios.post('https://reqres.in/api/users', data).then(res => {
    console.log(`Status Code:${res.status}`)
    console.log(`Body:${res.data}`)
}).catch(err => {
    console.log(err)
});



const axios = require('axios')

const data = JSON.stringify({
name:"John Doe",
Job:"Content Writer"
});

axios.post('https://reqres.in/api/users', data).then(res => {
    console.log(`Status Code:${res.status}`)
    console.log(`Body:${JSON.stringify(res.data)}`)
}).catch(err => {
    console.log(err)
});


/**         WORKING WITH FILES   **/

const fs = require("fs");
const { Stats } = require("webpack");

fs.readFile("coment.txt", 'utf8', (err, data) => {
    if(err)throw err;
    console.log(data)
    })


const data = fs.readFileSync('coment.txt', {encoding:'utf-8', flag:'r'})
console.log(data)


fs.stat('coment.txt', (err, stats) => {
    if(err){
        console.error(err);
        return
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
    
})


/**          WRITE AND UPDATE FILE      **/

const fs = require('fs')


const content = [{
    type: "Node Application"
}];
fs.writeFileSync("test.json", JSON.stringify(content));




const content = "Node.js";
fs.writeFile('coment.txt', content, {flag: 'w+'}, err => {
    if(err){
        console.log(err);
        return
    }
    console.log("Successfully Done")
})





const content = "Node.js"
fs.unlink('coment.txt', err => {
    if(err){
        console.log(err)
        return
    }
    console.log("File Removed")
})
 


/**             ROUTING            **/

if(request.url == "example/path/here"){
    response()
}


const http = require("http");

function index(request, response) {
    response.writeHead(200)
    response.end("Node Routing")
}

function mystory(request, response) {
    response.end("This is About Me!!!"); 
}

http.createServer(function(req, res) {
    if (req.url == '/') {
        return index(req, res);
    }

    if (req.url == '/mystory') {
        return mystory(req, res);
    } 
}).listen(7000)


// better way
const http = require("http");

const routes = {
    '/': function index(request, response) {
        response.writeHead(200)
        response.end("Node Routing")
    },
    '/mystory': function mystory(request, response) {
        response.end("This is About Me!!!"); 
    }
}

http.createServer(function(req, res) {
    if (req.url in routes) {
    return routes[req.url](req,res);
 }
}).listen(7000)




/**                  PATH MODULE                    **/

const path = require("path")
file = path.basename('Tutirial/test.json')
console.log(file)



const path = require("path")

file = path.dirname('Tutirial/test.json')

console.log(file)



const path = require("path")
file = path.isAbsolute('/home/rashidi/dev/Tutirial/index.js')
console.log(file)




const path = require("path")
let dir = "Tutirial"
file = path.join('home', 'rashidi/dev', dir, 'test.json')
// file = path.isAbsolute('/home/rashidi/dev/Tutirial/index.js')

console.log(file)




const path = require('path');
file = path.parse('Tutirial/Magic.js')
console.log(file)


const path = require('path');
file = path.resolve('Tutirial/Magic.js')
console.log(file)



const path = require('path');
file = path.resolve('/Tutirial', 'Magic.js')
console.log(file)



/**                     EVENT MODULE                **/

const events = require('events');

let ev = new events.EventEmitter()

ev.on('my_event', function(data){
    console.log("Event:", data)
})

ev.emit('my_event', "Call emit() method to fire my_event")


const events = require('events');

let ev = new events.EventEmitter()

ev.once('eventOnce', () => {
    console.log("EventOnes once fired")
})

ev.emit("eventOnce")



const events = require('events');

let ev = new events.EventEmitter()

ev.once('eventOnce', () => {
    console.log("EventOnes once fired")
})

ev.emit("eventOnce")


const events = require('events');

let ev = new events.EventEmitter()

ev.once('eventOnce', (code, msg) => {
    console.log(`Got ${code} and ${msg}`)
})

ev.emit("eventOnce", 200, 'ok') 



const events = require('events');

let ev = new events.EventEmitter()
 
let c1 = (code, msg) => console.log(`Got ${code} and ${msg}`)

ev.once('eventOnce', c1)
ev.off('eventOnce', c1)

ev.emit("eventOnce", 200, 'ok')



/**                 STREAMS                            **/

const http = require("http")
const fs = require("fs")

const server = http.createServer(function(req, res){
  fs.readFile('test.json', (err, data) => {
      res.end(data)
  })
})

server.listen(3000, () => {console.log('Application started on Port 3000')})



const http = require("http")
const fs = require("fs")

const server = http.createServer(function(req, res){
  const stream = fs.createReadStream('test.json');
  stream.pipe(res)
})

server.listen(3000, () => {console.log('Application started on Port 3000')})



/**                   BUFFER                   **/

 const buf = Buffer.from('Hey')
console.log(buf.toString())
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])



const buf = Buffer.from('Hey')
console.log(buf.toString())
console.log(buf.toString()[0])
console.log(buf[1])
console.log(buf[2])



const buf = Buffer.alloc(4)

buf.write("Hey!")

console.log(buf.toString())
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])

buf[1] = 111
console.log(buf.toString())



/**                 EXCEPTION HANDLING               **/
// 1
throw new Error(`error message`)

// 2
try{
// lines of code
}catch (e){}

// 3
doSomething1()
 .then(doSomething2)
 .then(doSomething3)
 .catch(function(error){
     console.log(error)
 });

 examples of the 3 methods
throw new Error('error message')

try{
    console.log('Start try block')
    lalala;
}catch (err) {
    console.log('Error Message')
}


try{
    console.log('Start try block')
    lalala;
    console.log('End try block')

}catch (err) {
    console.log('Error Message')
}


try{
         console.log('Start try block')
         lalala;
        console.log('End try block')
    
     }catch (err) {
        console.log('Error Message', err)
     }
    


try{
    console.log('Start try block')
    throw new Error('error')
   console.log('End try block')

}catch (err) {
   console.log('Error Message', err)
}



doSomething1().then(() => {
    return doSomething2().catch(err => {
        // handle error
        throw err // break the chain
    })
}).then(() => {
    return doSomething2().catch(err => {
        // handle error
        throw error // break the chain
    })
}).catch(err => console.error(err))




async function someFunction(){
    try {
        await someOtherFunction()
    }catch(err){
        console.error(err.message)
    }
}