window.createGraphic = function () {

    // actions to take on each step of our scroll-driven story
    var steps = [
        function step0() {
            map.flyTo({
                center: [
                    -73.226732, 44.455984
                ],
                zoom: 16
            })
            console.log("step0")

        },

        function step1() {
            map.flyTo({
                center: [
                    -73.224055,
                    44.482168
                ]
            })
            console.log("step1")
        },

        function step2() {
            map.flyTo({
                center: [
                    -73.240330,
                    44.492861
                ]
            })
            console.log("step2")
        },
    ]

    // update our chart
    function update(step) {
        steps[step].call()
    }


    function init() {
        update(0)
    }

    init()

    return {
        update: update,
    }
}