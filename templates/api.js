/* API youtube (grâce à chat-gpt 😔) */
fetch("https://www.googleapis.com/youtube/v3/videos?part=statistics&id=VIDEO_ID&key=AIzaSyB0ZvjtVe-f3o7NSXcH2xLXZnM8tH5Mn50")
    .then(r => r.json())
    .then(console.log)
