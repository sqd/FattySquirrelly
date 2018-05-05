var curPos = 'middle';

var colorTracker = new tracking.ColorTracker('magenta');
tracking.track('#video', colorTracker, { camera: true });

onTrackChanged = undefined;

colorTracker.on('track', function(event) {
    if(event.data.length > 0){
        var x = event.data[0].x;
        var newState = 'right'
        if(x > 70) newState = 'middle';
        if(x > 130) newState = 'left';
        if(newState != curPos){
            curPos = newState;
            console.log('detecting '+newState);
            if(typeof(onTrackChanged) == 'function')
                onTrackChanged(newState);
        }

    }
});

    onTrackChanged = function(track){
        if(sqStatus != 'toChangeLane' && sqStatus != 'changingLane'){
            sqStatus = 'toChangeLane';
            sqDes = track;
        }
    }
