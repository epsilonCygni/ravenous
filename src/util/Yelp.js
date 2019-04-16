const apiKey = 'vuoNSYa8nLq_bO4spUOoJMkHEPQBVwwlQrFwT_Euo6DFM9HRcGokNwBTSBuDP3BSl4lVd9pfpsFVLoxzqtSWT3QyEcxMCJ8JfFERjGaa9kwE_7neo42MA7qhowWyXHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.postal_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        coordinates: business.coordinates,
                        country: business.location.country
                    }
                });
            }
        });
    }
};

export default Yelp;