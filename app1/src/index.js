import React from 'react'

// You can write your own logic here to determine the actual url
window.app2Url = "http://localhost:3002"

setTimeout(() => {
    import("app2/component")
}, 3000)


