import React from 'react';
import ReactDOM from 'react-dom/client';
import "./master.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * Befor any full length application building, we need to plan our application.
 * planning in the sense of what we want to build, what are the features we want to add, what are the technologies we want to use, etc.
 * Also create an mockup of the application, so that we can have a clear idea of what we are going to build.
 * 
 * Now plan for code, such as what components are require in our application and what are the functionalities of each component.
 * In this food order example, we have 3 major components:
 * 
 * 1. Header
 *  - Logo
 *  - Nav Items Components
 * 
 * 2. Body
 *  - search inpute Component
 *  - card container
 *      - multiple resto card
 *          - A card has [ Restro  Image,  Name, Ratting, Cuisines, Delivery Time]
 * 
 * 3. Footer
 *  - Copyright Text
 *  - Links
 *  - Contact Information
 * 
 * Now we will start building our application step by step.
 */

/**
 * For dynamic data, we can use props in functional components.
 * props are the arguments passed to the functional components.
 * passing props to the functional component is similar to passing arguments to the function.
 * 
 * TODO: Config driven ui
 * Config driven ui means the ui is driven by the configured data.
 * For example, in our food app, the restaurant card is driven by the geo location and the restaurant data.
 * Geo location, like in some cities resturent offers are different, then we config our ui accordingly.
 * 
 * TODO: Optional Chaning
 */

const restaurantData = [
    {
        "type": "restaurant",
        "info": {
            "resId": 20429935,
            "name": "Cheesy Pizza Cafe",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/20429935\/8a0e42331d930b04b3a11ce95dea7fa7_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/20429935\/8a0e42331d930b04b3a11ce95dea7fa7_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.4",
                "rating_text": "3.4",
                "rating_subtitle": "Average",
                "rating_color": "CDD614",
                "votes": "431",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.4",
                        "reviewCount": "431",
                        "reviewTextSmall": "431 Reviews",
                        "subtext": "431 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9250 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Hadapsar, Pune",
                "address": "Sevkarwasti, Opposite Dons Garage, Hadapsar, Pune",
                "localityUrl": "pune\/hadapsar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/burger\/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "40 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/cheesy-pizza-cafe-hadapsar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/cheesy-pizza-cafe-hadapsar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20429935\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20208806,
            "name": "Cheat Treats by Eatfit",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20208806\/ecc1a12c0d069008509b4c39533a675a_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/20208806\/ecc1a12c0d069008509b4c39533a675a_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "400",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "400",
                        "reviewTextSmall": "400 Reviews",
                        "subtext": "400 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9400 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "JM Road, Pune",
                "address": "1187\/69-2, Ghole Road, Office 2, Shivajinagar, Ghole Road, Pune, JM Road, Pune",
                "localityUrl": "pune\/jm-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pasta\/",
                    "name": "Pasta"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/burger\/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "29 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/cheat-treats-by-eatfit-jm-road\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/cheat-treats-by-eatfit-jm-road\/order",
            "clickActionDeeplink": ""
        },
        "distance": "994 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20208806\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20855154,
            "name": "Hotel Saravana Bhavan",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/20853561\/7c57ae24e43e43829596da52182507b2_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/20853561\/7c57ae24e43e43829596da52182507b2_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "89",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.6",
                        "reviewCount": "89",
                        "reviewTextSmall": "89 Reviews",
                        "subtext": "89 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.6",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Karve Nagar, Pune",
                "address": "Shop 10, Ground Floor, Le Skylark, Hingane Budruk, Karve Nagar, Pune",
                "localityUrl": "pune\/karve-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/street-food\/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "50 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/hotel-saravana-bhavan-karve-nagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/hotel-saravana-bhavan-karve-nagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "6.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20855154\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20526931,
            "name": "Healthy Bee",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20526931\/9b7ab9f2a298b73d23c5aae102460cc4_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20526931\/9b7ab9f2a298b73d23c5aae102460cc4_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "435",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "432",
                        "reviewTextSmall": "432 Reviews",
                        "subtext": "432 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9500 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Kothrud, Pune",
                "address": "Shop 4, Royal Chambers, Siddhi Prasad Society, Paud Road, Kothrud, Pune",
                "localityUrl": "pune\/kothrud-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/health-food\/",
                    "name": "Healthy Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/salad\/",
                    "name": "Salad"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/wraps\/",
                    "name": "Wraps"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/juices\/",
                    "name": "Juices"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "33 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/healthy-bee-kothrud\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/healthy-bee-kothrud\/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20526931\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 11038,
            "name": "Abhishek Veg Restaurant",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/11038\/058272c21529e4adf0002ec0abebbd1d_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/11038\/058272c21529e4adf0002ec0abebbd1d_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "15.9K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "1,298",
                        "reviewTextSmall": "1,298 Reviews",
                        "subtext": "1,298 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "14.6K",
                        "reviewTextSmall": "14.6K Reviews",
                        "subtext": "14.6K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b91,200 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Erandwane, Pune",
                "address": "CTS 1175\/1, Survey 28\/1, Nirmati Eminence, Erandwane, Pune",
                "localityUrl": "pune\/erandwane-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/juices\/",
                    "name": "Juices"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "30 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/abhishek-veg-restaurant-erandwane\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/abhishek-veg-restaurant-erandwane\/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"11038\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20189159,
            "name": "Pizza Hot",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/20189159\/33d86bcffc824ed629089afa69c72515_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/20189159\/33d86bcffc824ed629089afa69c72515_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "327",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "324",
                        "reviewTextSmall": "324 Reviews",
                        "subtext": "324 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9350 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Swargate, Pune",
                "address": "Survey 90\/713, Maharishi Nagar, Swargate, Pune",
                "localityUrl": "pune\/swargate-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "45 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/pizza-hot-swargate\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/pizza-hot-swargate\/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20189159\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20169936,
            "name": "Merwans Cake Stop",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/19991216\/f2918cddc01becfa1c51d374951b1811_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/19991216\/f2918cddc01becfa1c51d374951b1811_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "937",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "1",
                        "reviewTextSmall": "1 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "936",
                        "reviewTextSmall": "936 Reviews",
                        "subtext": "936 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9450 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Kalyani Nagar, Pune",
                "address": "Shop F\/129, CTS 210, FP 72, Vitoria Premises, Kalyani Nagar, Pune",
                "localityUrl": "pune\/kalyani-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bakery\/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "41 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/merwans-cake-stop-kalyani-nagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/merwans-cake-stop-kalyani-nagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20169936\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 12777,
            "name": "Baker's Basket",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/12771\/a58ff4f8c7a47e578ce18100d9d387eb_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/12771\/a58ff4f8c7a47e578ce18100d9d387eb_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,552",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.7",
                        "reviewCount": "45",
                        "reviewTextSmall": "45 Reviews",
                        "subtext": "45 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.7",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "1,507",
                        "reviewTextSmall": "1,507 Reviews",
                        "subtext": "1,507 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9450 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Wanowrie, Pune",
                "address": "Sacred Heart Town, Wanowrie, Pune",
                "localityUrl": "pune\/wanowrie-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bakery\/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "28 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/bakers-basket-wanowrie\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/bakers-basket-wanowrie\/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"12777\",\"element_type\":\"listing\",\"rank\":8}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19122787,
            "name": "Cafe Bun Maska",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/19122787\/cd968cccdd1702621596b5fe85cac850_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/19122787\/cd968cccdd1702621596b5fe85cac850_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "2,847",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.2",
                        "reviewCount": "21",
                        "reviewTextSmall": "21 Reviews",
                        "subtext": "21 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "2,826",
                        "reviewTextSmall": "2,826 Reviews",
                        "subtext": "2,826 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Kondhwa, Pune",
                "address": "Shop 4, Kausarbaug, Kondhwa, Pune",
                "localityUrl": "pune\/kondhwa-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bakery\/",
                    "name": "Bakery"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "45 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/cafe-bun-maska-kondhwa\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/cafe-bun-maska-kondhwa\/order",
            "clickActionDeeplink": ""
        },
        "distance": "6.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19122787\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20380317,
            "name": "Blue Tokai Coffee Roasters",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/20380317\/da04a4d6988ce4e3c2f1f360cfe770fb_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/20380317\/da04a4d6988ce4e3c2f1f360cfe770fb_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "905",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "209",
                        "reviewTextSmall": "209 Reviews",
                        "subtext": "209 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "696",
                        "reviewTextSmall": "696 Reviews",
                        "subtext": "696 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9600 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Shivaji Nagar, Pune",
                "address": "Plot 567\/315, CTS 1202\/5, Shalini Sky I, Bhamburda, Ghole Road, Shivaji Nagar, Pune",
                "localityUrl": "pune\/shivaji-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/cafes\/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/coffee\/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "28 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/blue-tokai-coffee-roasters-shivaji-nagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/blue-tokai-coffee-roasters-shivaji-nagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20380317\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19795409,
            "name": "Fakkad Foods",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/19795409\/6daa1207bb23fc2b30afb0368b2727a3_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/19795409\/6daa1207bb23fc2b30afb0368b2727a3_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "4,065",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "214",
                        "reviewTextSmall": "214 Reviews",
                        "subtext": "214 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "3,851",
                        "reviewTextSmall": "3,851 Reviews",
                        "subtext": "3,851 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Karve Nagar, Pune",
                "address": "Shop B-15A, Serial 38\/2, Plot 314, Ground Floor, Madhuban Apartment, Hingane Bk, Karve Nagar, Pune",
                "localityUrl": "pune\/karve-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/south-indian\/",
                    "name": "South Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "29 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/fakkad-foods-karve-nagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/fakkad-foods-karve-nagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "4.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19795409\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20350327,
            "name": "We Idliwale",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/7\/20350327\/ab6b6c3a4f1e7912fcd0d8c1bba6d106_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/7\/20350327\/ab6b6c3a4f1e7912fcd0d8c1bba6d106_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,303",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "46",
                        "reviewTextSmall": "46 Reviews",
                        "subtext": "46 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "1,257",
                        "reviewTextSmall": "1,257 Reviews",
                        "subtext": "1,257 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9600 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "NIBM Road, Pune",
                "address": "Shop 3 & 4, Survey 22\/2A, Ground Floor, La Ventana, NIBM Road, Pune",
                "localityUrl": "pune\/nibm-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "42 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/pune\/we-idliwale-nibm-road\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/pune\/we-idliwale-nibm-road\/order",
            "clickActionDeeplink": ""
        },
        "distance": "7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e1b3ed71-88b1-45f2-9d7e-decb9a56d191\",\"location_type\":\"delivery_cell\",\"location_id\":\"4306215736965070848\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20350327\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    }
];

const HeaderComponent = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <span>🍔</span>
                <h1>0xFoodApp</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestroCard = ({ data }) => {
    const { info, order: { deliveryTime } } = data;
    const { o2FeaturedImage, name, rating: { rating_text }, cuisine, costText: { text } } = info;

    return (<div className='restro-card'>
        <img src={o2FeaturedImage.url} alt='restro-image' />
        <div className='restro-detail'>
            <div className='flex-box'>
                <h2 className='name'>{name}</h2>
                <h5 className='rating'>{rating_text} ⭐️</h5>
            </div>
            <div className='flex-box'>
                <div className='cusine'>
                    {cuisine.map(
                        (cusine, index) => <h5 key={index} >{cusine.name},{" "}</h5>
                    )}
                </div>
                <h5 className='avg-price'>{text}</h5>
            </div>
            <div className='flex-box time'>
                <h5>{deliveryTime}</h5>
            </div>
        </div>
    </div>)
}

/**
 * we pass key prop to RestroCard component to avoid warning in console, lets understand why key require??
 * TODO: Never use INDEX as a key, it will cause performance issue, always use unique key. 
 * not using key (not acceptable) <<<< index as a key <<<<<<<< unique key (best practice)
 */
const BodyComponent = () => {
    return (
        <div className='body'>
            <div className='searchbox'>
                <input placeholder='Search for resturnt' />
            </div>
            <div className='res-container'>
                {restaurantData.map(restaurant => <RestroCard data={restaurant} key={restaurant.info.resId} />)}
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className='app'>
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}

root.render(<App />);