// Anything exported from this file is importable by other in-browser modules.
export function getCurrentUser() {
    return new Promise(function(resolve, reject) {
        resolve({name: 'Another user'});
    });
    // return {name: 'Another user'};
}
