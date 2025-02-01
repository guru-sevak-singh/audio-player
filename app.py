import requests

# Firebase Cloud Messaging Server Key
SERVER_KEY = "nH0CkgsISz00_T5BUVk3F--AsrG_F6p9v8LYVhqCbZ8"

# FCM Token from Web Page (Copy & Paste from browser)
FCM_TOKEN = "USER_FCM_DEVICE_TOKEN"

def send_push_notification():
    url = "https://fcm.googleapis.com/fcm/send"
    
    headers = {
        "Authorization": f"key={SERVER_KEY}",
        "Content-Type": "application/json"
    }
    
    data = {
        "to": FCM_TOKEN,
        "notification": {
            "title": "Hello from Python!",
            "body": "This is a push notification sent using Python!"
        }
    }
    
    response = requests.post(url, json=data, headers=headers)
    print("Response:", response.json())

# Run the function
send_push_notification()
