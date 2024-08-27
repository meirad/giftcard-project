
const giftCards =[
    [{"id":1,"name":"iTunes Gift Card","expirationDate":"07-11-2025","userId":2},
    {"id":2,"name":"Target Gift Card","expirationDate":"02-04-2024","userId":3},
    {"id":3,"name":"Starbucks Gift Card","expirationDate":"20-12-2023","userId":3},
    {"id":4,"name":"Amazon Gift Card","expirationDate":"27-02-2024","userId":3},
    {"id":5,"name":"Starbucks Gift Card","expirationDate":"28-08-2024","userId":2},
    {"id":6,"name":"Starbucks Gift Card","expirationDate":"11-04-2024","userId":3},
    {"id":7,"name":"Amazon Gift Card","expirationDate":"09-04-2024","userId":1},
    {"id":8,"name":"Starbucks Gift Card","expirationDate":"01-09-2024","userId":2},
    {"id":9,"name":"iTunes Gift Card","expirationDate":"10-06-2024","userId":2},
    {"id":10,"name":"Target Gift Card","expirationDate":"29-03-2024","userId":2},
    {"id":11,"name":"Starbucks Gift Card","expirationDate":"27-06-2024","userId":3},
    {"id":12,"name":"iTunes Gift Card","expirationDate":"22-01-2024","userId":3},
    {"id":13,"name":"Amazon Gift Card","expirationDate":"28-08-2024","userId":2},
    {"id":14,"name":"Starbucks Gift Card","expirationDate":"25-01-2024","userId":3},
    {"id":15,"name":"Amazon Gift Card","expirationDate":"29-08-2024","userId":1}]
]

const users = [
    [
        {"firstName":"Maggee","lastName":"Derham","email":"mderham0@si.edu","id":1, "NotificationTime":"3"},
        {"firstName":"Iseabal","lastName":"Cotilard","email":"icotilard1@msn.com","id":2, "NotificationTime":""},
        {"firstName":"Mel","lastName":"Sloat","email":"msloat2@howstuffworks.com","id":3, "NotificationTime":""}
    ]
]


const expirationGiftCard = [
    [{"id":1,"userId":1,"giftId":1,"date":"7-6-2024","Notification":"Gift card will expire in two days"},
{"id":2,"userId":2,"giftId":2,"date":"4-13-2024","Notification":"Gift card will expire in two days"},
{"id":3,"userId":3,"giftId":3,"date":"6-14-2024","Notification":"Gift card will expire in two days"},
{"id":1,"userId":1,"giftId":1,"date":"2-27-2024","Notification":"Gift card will expire in two days"},
{"id":2,"userId":3,"giftId":2,"date":"10-12-2023","Notification":"Gift card will expire in two days"}]
]




export { giftCards, users, expirationGiftCard };