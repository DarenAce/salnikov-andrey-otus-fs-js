const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;
const description = `Wrong arguments.
Possible arguments:
-n NUMBER - required, amount of requests to send;
-p        - optional, indicates, that requests should be sent in parallel, if omitted, requests will be sent consequentially.`;

const sendRequests = (options) => {
    if (options.quantity === 0) {
        return Promise.reject(description);
    }
    const requests = new Array(options.quantity).fill(0).map(buildRequest);
    if (options.parallelMode) {
        return Promise.all(requests)
            .then(responses => responses.forEach(response => console.log(response)))
            .catch(console.error);
    } else {
        return requests.reduce(async (accumulator, current) => {
            try {
                const result = await current;
                console.log(result);
                return Promise.resolve(result);
            } catch (error) {
                console.error(result);
                return Promise.reject(error);
            }
        }, Promise.resolve());
    }
};

const getOptions = () => {
    const args = process.argv.slice(2);
    let requestAmount = 0;
    const i = args.indexOf("-n");
    if (i > -1 && args.length > i + 1) {
        requestAmount = parseInt(args[i + 1]);
    }
    const parallel = args.indexOf("-p") > -1;
    return {
        "quantity": requestAmount,
        "parallelMode": parallel
    };
};

const buildRequest = () => {
    return new Promise((resolve, reject) => {
        return http.get(`http://${hostname}:${port}`, response => {
            let data = "";
            response.on("data", d => data += d);
            response.on("end", () => resolve(data));
        }).on("error", reject);
    })
};

const options = getOptions();
const startTime = Date.now();

sendRequests(options)
    .then(() => {
        const timeElapsed = Date.now() - startTime;
        console.log(`${options.quantity} request${options.quantity > 1 ? "s were" : " was"} sent in ${options.parallelMode ? "parallel" : "consequent"} mode. Time elapsed: ${timeElapsed} ms.`);
    })
    .catch(console.log);