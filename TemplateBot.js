const io = require("socket.io-client");
const socket = io("https://rmtrollbox.xd4y.zip", {
	forceNew: true,
	transportOptions: {
		polling: {
			extraHeaders: {
				"Accept": "*/*",
				"Accept-Encoding": "identity",
				"Accept-Language": "*",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "",
				"Host": "rmtrollbox.xd4y.zip",
				"Origin": "https://rmtrollbox.xd4y.zip",
				"Pragma": "no-cache",
				"Referer": 'https://rmtrollbox.xd4y.zip',
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
			}
		}
	}
});

        socket.emit("user joined", "BotTemplate", "lime", "bot", "");

        socket.on("message", function(data) {

            if (data.msg == "t!hello") {
                socket.send("Hello, "+data.nick+"!")
            }

            })

