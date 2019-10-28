function findOne(collection) {
    collection.findOne({}, (err,item)=>{
        console.log(item)
    })
}

function aggegate(collection) {
    collection.aggregate([
        {
            $unwind: { path: "$TripList.Trips" }
        },
        {
            '$match': {"TripList.Trips.TripID":"R9833833A"}
        }
    ], {
            cursor: {
                batchSize: 500
            },
            allowDiskUse: true,
            explain: false
        }
        ).toArray(            
            function(err, data){
                console.log(JSON.stringify(data, null, 4));
        });
}


exports.query = findOne //select function to execute