# random-genarator
## Genataing-random-values from start and end number 
 send input using url param
example url GET :http://localhost:4000/api/GetRandomNumber?start=10&end=20

expected response :
{
    "result": 12 or any random number within 10-20
}

## Counting numbers, characters and special characters from a string 
send input using url param
example url GET : http://localhost:4000/api/StringCount?countString=test123@@@$$%^*()_-+=

expected response : {
    "result": {
        "characterCount": 4,
        "numberCount": 3,
        "specialCharacterCount": 14
    }
}

## Genarating random user based on provided values 
send input using req.body

input data format : {
    "data": [
        "firstname",
        "phone",
        "email"
    ]
}

example url POST :http://localhost:4000/api/GetPerson

expected response : {
    "person": {
        "firstName": "Ashton",
        "email": "Lucas_Tremblay@hotmail.com",
        "phone": "476-462-4029 x68018"
    }
} 