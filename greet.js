module.exports = function greet(name) {

    if (typeof (name) == 'string') {
        var name = name.replace(name.charAt(0), name.charAt(0).toUpperCase());
        var helloName = ('Hello, ' + name);
        return helloName;

    } else {
        console.log('Please enter a string');
        return false;
    }

}