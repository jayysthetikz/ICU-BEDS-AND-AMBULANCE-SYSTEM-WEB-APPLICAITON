# ICU-BEDS-AND-AMBULANCE-SYSTEM-WEB-APPLICAITO

App Overview
RapidAid is a Progressive Web App (PWA) designed for emergency situations, featuring OTP-based phone verification, medical profile storage, QR code generation/scanning for medical IDs, an SOS button with ambulance dispatch simulation, and a nearby hospitals map using Leaflet.js.

It simulates a full backend with localStorage for user data, OTPs, and profiles, while including realistic hospital data for the Pune/Pimpri area in India.

The app supports offline use, push notifications via FCM (in production), and integrates libraries like QRCode.js, jsQR, and Leaflet.

Key Features
Authentication: 6-digit OTP verification with rate limiting and retry attempts.

Emergency Tools: Hold-to-activate SOS button, ambulance ETA tracker, quick calls to 112/108.

Medical ID: Generate scannable QR codes with profile data (name, blood group, allergies, meds).

Mapping: Real-time nearest hospitals list with sorting by distance, using Haversine formula.

Scanner: Live QR scanner for viewing others' medical info in emergencies.

Profile: Editable medical details, saved locally and embedded in QR.
