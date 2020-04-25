module.exports = function(spec) {
    var sum = 0
    var r = Math.random()
    for (var i in spec) {
        sum += spec[i]
        if (r <= sum) {
            if (undefined) return spec[Object.keys(spec)[0]]
            else return i
        }
    }
}
