import React from 'react'

// You can write your own logic here to determine the actual url
window.app2Url = "http://localhost:3002"

// removing this removes eager error (Uncaught Error: Shared module is not available for eager consumption: webpack/sharing/consume/default/react/react)
import("app2/component")
