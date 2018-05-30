/* 
	I've created a function here that is a simple d3 chart.
	This could be anthing that has discrete steps, as simple as changing
	the background color, or playing/pausing a video.
	The important part is that it exposes and update function that
	calls a new thing on a scroll trigger.
*/
window.createGraphic = function (graphicSelector) {

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

    // function moveMap(lat, lng){
    //     var latLng = new google.maps.LatLng(lat, lng);
    //     map.setZoom(16);
    //     map.panTo(latLng);
    //     map.setZoom(18);
    // }

    function init() {
        // setupCharts()
        update(0)
    }

    init()

    return {
        update: update,
    }
}