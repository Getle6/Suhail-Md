const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4efaa08d0f3fcbdde5208.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚸𝚯𝐖𝚵𝚪 𝚩𝐘 𝚩𝚰𝚴 𝚫𝐋𝚰 𝚩𝚯𝚻𝐒" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163717090";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/4efaa08d0f3fcbdde5208.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_26_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwienBZUTJCdld5aDc1VE1qSklEZFcwaklXOE1rU3hOSDhRek11RUJQTkpJdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDY0MDMxODA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MkJFRDY3QkVBNDNEOTA0NzgxNUZGRjYzRjQ3NDI0NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwNzYwMDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTWdjN05pVHNTbk9xRllVSDhidXZCd1wiLFxuICBcInBob25lSWRcIjogXCI3MzdiMmNjNi0wYTM0LTQ5NDQtOGUxNy0wN2NhY2E5MjMxYzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICA4LFxuICAgICAgMjMxLFxuICAgICAgODYsXG4gICAgICA1NixcbiAgICAgIDE3OCxcbiAgICAgIDEwMyxcbiAgICAgIDI0NSxcbiAgICAgIDIwMSxcbiAgICAgIDEyNCxcbiAgICAgIDY0LFxuICAgICAgMTA0LFxuICAgICAgMTg0LFxuICAgICAgMTg5LFxuICAgICAgNzUsXG4gICAgICAxNDIsXG4gICAgICAyMjcsXG4gICAgICAxOTQsXG4gICAgICAzMyxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDE1OCxcbiAgICAgIDE1MCxcbiAgICAgIDE2NixcbiAgICAgIDE2MixcbiAgICAgIDgwLFxuICAgICAgMTksXG4gICAgICAxNjAsXG4gICAgICAyNTQsXG4gICAgICA5NSxcbiAgICAgIDQ1LFxuICAgICAgOTIsXG4gICAgICA4MyxcbiAgICAgIDE5NSxcbiAgICAgIDQzLFxuICAgICAgMTAxLFxuICAgICAgOTEsXG4gICAgICAzMSxcbiAgICAgIDExMCxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFTEs0OUxDNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NDAzMTgwNzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzODQyNzg5MDM2Mjg0OjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0svTS80Z0NFTnFXazdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQlFzVFcxOG5MalFySkd5ZnllRkx5Nm52YkU4YjRqZWlwZVRFR1pTd3RSRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKOTJqRFRCczVENkx2Z0xJc3dyYWxYWHJNM2JKSE5jM01KUTFLVXpRY2dIUTJ5c2l5R2xtd3QxZHR3cy9TRzNBd3NrTktPSkZaYXg5TWFqZ2ZjbWRDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5MG9HbFB3WjB5bXhXdWdhUEFqalpoRVlNV05Za1ZIYUNHQXpaU3ZWeitQdWNORXVJRFQ2bCsrUXltMm9RQkQxTXk2VE84bERyMjdLQTFScjB4aGNnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0MDMxODA3OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA3NTk5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUw1cVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDVxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZVBEZFAwM00rT2NMTFJIa0pPcEVjL09WdWQxOG9LbTQwY2lrK1NyRk1zWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTU3Mzg2NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA3NjAwNDAwM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝗕𝗜𝗡𝗔𝗟𝗜-𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "𝐘𝚯 𝚩𝚰𝚴𝚫𝐋𝚰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
