import requests
files = {
    'username': (None, 'myusername'),
    'password': (None, 'mypassword'),
}
response = requests.post('https://fleek-api.herokuapp.com/post/', files=files)