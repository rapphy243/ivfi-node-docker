/** Import IVFi */
const ivfi = require('ivfi');

/** Variables */
const port = 4000,
    directory = '/home/node/files', // Do not this change directory. Mount this through Docker.
    options = {
        
    };

(async () =>
{
    /** Start server */
    const server = await ivfi.run(port, directory, options);
})();