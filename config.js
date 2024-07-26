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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_40_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDksXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOGpicEV4VFhRL1FZT2RES1l6WGJYRUp0Z2I4ZUF5SHpITlJTamF4WkhwST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDY0MDMxODA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMzE2M0VDMzlFQTlDNDhFRjVGOUZCNjE2RDUxN0M5RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwMjY0NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWFFyT1I0N0FTeGU4VGNad0d2dS16UVwiLFxuICBcInBob25lSWRcIjogXCJmNzAyYjcyOC03OGNjLTQ5YzYtYjFlMC05MjhlZjk3ZDRhMjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICA0LFxuICAgICAgMjgsXG4gICAgICAxMDgsXG4gICAgICAxNjQsXG4gICAgICAxMDgsXG4gICAgICA4MCxcbiAgICAgIDExMCxcbiAgICAgIDI0NCxcbiAgICAgIDY0LFxuICAgICAgMTg2LFxuICAgICAgMjQsXG4gICAgICAyNTUsXG4gICAgICAxMDAsXG4gICAgICA3MixcbiAgICAgIDgyLFxuICAgICAgMTcyLFxuICAgICAgMTQ2LFxuICAgICAgMTc2LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAxOTIsXG4gICAgICAxMjEsXG4gICAgICA0OCxcbiAgICAgIDI0NCxcbiAgICAgIDcsXG4gICAgICA5NixcbiAgICAgIDEzNSxcbiAgICAgIDM2LFxuICAgICAgMTQ5LFxuICAgICAgMjA0LFxuICAgICAgNDEsXG4gICAgICAxMjEsXG4gICAgICAxNTEsXG4gICAgICAyMDYsXG4gICAgICAxMzEsXG4gICAgICAyNTEsXG4gICAgICAzNSxcbiAgICAgIDE0MyxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUEVLMVdHUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NDAzMTgwNzozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzODQyNzg5MDM2Mjg0OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3TS80Z0NFTXVUa0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQlFzVFcxOG5MalFySkd5ZnllRkx5Nm52YkU4YjRqZWlwZVRFR1pTd3RSRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvOWN5RzU2eWpMeGhhQWdEZmxGbEtCZXlPb2RoSDF0bE1EOXYvRmpIRk5SdzRFN0piOXFFUmljbHE2T3p1anZDVE0rM2d1VWpENUZoVTZmalNRRGFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyeW5XQXp0Z3pCTU00QTVDTzREaXpmZ3EwN0pFWVhJY1JZOUlXbm1idFJpejhtMEVpenJ2YStWcU4vbFF3N3pERUV0b3NTZGw5WTBYSEpzcVVBSTlCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0MDMxODA3OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjAyNjQ0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVlUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWVQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVG5sUzRZTG00SGFTaHo4Y3FrQW16UXh5cDNabVhnK0xZbXpRWXJzM1VUOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTU3Mzg2NjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExNzUyMDYxODJcIn0iCn0="  // PUT your SESSION_ID 


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
