var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------    
    var x_dist_squared = Math.pow((p1.x - p2.x),2);
    var y_dist_squared = Math.pow((p1.y - p2.y),2);
    var dist = Math.sqrt(x_dist_squared + y_dist_squared);
    
    return dist;    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------

    for (i=0;i<data.length;i++){
        var new_x_dist_squared = Math.pow((data[i].x-newPoint.x),2);
        var new_y_dist_squared = Math.pow((data[i].y-newPoint.y),2);
        var new_dist = Math.sqrt(new_x_dist_squared + new_y_dist_squared);
        data[i].distance = new_dist;
    }
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //------------------- 
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data.slice(0,k); 
};

module.exports = exercise;
