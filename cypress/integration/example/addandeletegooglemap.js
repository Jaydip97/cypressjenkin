


describe('add google map', () => {
    let id;
    it('add body', () => {
        cy.request({
            method: "POST",
            url: "http://216.10.245.166/maps/api/place/add/json?key= qaclick123",
            headers: {
                accept: "application/json"
            },
            body: {


                "location": {

                    "lat": -38.383494,

                    "lng": 33.427362

                },

                "accuracy": 50,

                "name": "Frontline house",

                "phone_number": "(+91) 983 893 3937",

                "address": "29, side layout, cohen 09",

                "types": ["shoe park", "shop"],

                "website": "http://google.com",

                "language": "French-IN"


            }
        }).then((response) => {
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            //  cy.log(JSON.stringify(body))
            id = body.place_id
        })
    });

    it('delete', () => {
        it('delete method', () => {
            cy.request({
                method: "DELETE",
                url: "http://216.10.245.166/maps/api/place/delete/json?key=qaclick123",
                body: {
                    "place_id": id
                }
            }).then((response) => {
                expect(response.status).to.eql(200)

            })
        });
    });
});