const inputOne = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}

  
const inputTwo = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}	
  

function requestValidator(request){
    const ERROR_MESSAGE = 'Invalid request header: Invalid';
    const ALLOWED_VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const ALLOWED_METHODS = ['GET', 'POST', 'DELETE', 'CONNNECT'];
    let { method, uri, version, message } = request;
    const uriRegex = /^[\w.]+$/;
    const messageRegex = /^[^<>\\&\'\"]*$/

    if (!(method && ALLOWED_METHODS.includes(method))) {
        throw new Error(`${ERROR_MESSAGE} Method`)
    }

    if (!(uri && (uri == '' || uriRegex.test(uri)))) {
        throw new Error(`${ERROR_MESSAGE} URI`)
    }

    if (!(version && ALLOWED_VERSIONS.includes(version))) {
        throw new Error(`${ERROR_MESSAGE} Version`)

    }

    if(!(request.hasOwnProperty(message) && (message == '' || messageRegex.test(message)))) {
        throw new Error(`${ERROR_MESSAGE} Message`);
    }

    return request;
}

requestValidator(inputOne)