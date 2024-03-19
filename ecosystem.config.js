module.exports = {
    apps: [{
        name: "dgraph-docker",
        script: "sudo docker compose up",
        watch: false,
        autorestart: false,
    }]
}
