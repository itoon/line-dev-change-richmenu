Steps to change customize richmenu
## Preparation
1. Prepare json and image for Default Richmenu  //richmenu-e308fd043895d73fd62a95133c249c46
2. Prepare json and image for Richmenu after register //richmenu-873a1168295cbc15896240b8f6a0020f
3. Liff for register event

## Steps
1. Create 2 Richmenus (Default and Richmenu after registation) from Postman then remember all richMenuId
2. Setting Default Richmenu from Postman
3. Create Liff for register view

4. Create Backend APIs for register users
    (fields)
    - Firstname
    - Lastname    
    - DOB
5. Install @line/sdk
6. Try to get lineID

Create Liff Register View

#Line
get list richmenus
GET https://api.line.me/v2/bot/richmenu/list

get richmenu
GET https://api.line.me/v2/bot/richmenu/${richMenuId}

upload image richmenu
POST https://api-data.line.me/v2/bot/richmenu/${richMenuId}/content

create richmenu
POST https://api.line.me/v2/bot/richmenu

delete richmenu
DELETE https://api.line.me/v2/bot/richmenu/${richMenuId}

set Default richmenu
POST https://api.line.me/v2/bot/user/all/richmenu/${richMenuId}