# Lenest
The internship was done at Le Nest Hospital for an online business module  
This repo contains 3 projects which are:
Auto Emailer,Invoice generator,Routine maker with disease prediction,Chatbot

# Auto-Emailer
The application provides a service to the patients with which emails are sent automatically by the provider with weekly Do's and don'ts weekwise.
The application is written in apps scripts with javascript as the base language.
The application fetches information through a google form response given by the patient which is stored in a google sheet.
The application calculates the week number and sends documents and reminders accordingly through Gmail.
The content for the week is taken from the google drive and google sheet linked.

# Invoice Generator
The application is used to create digital format of bills for ease of storage and creation of the document.
The application is built with openpyxl,docxtpl and tkinter with python as the base language.
The docxtpl file is fetched from a word template.
The contents for the bill are taken from the excel file.

# Routine Maker
This application helps with giving a weekwise schedule to the patient according to their disease.
It is built with openpyxl,tkinter and docxtpl with python as the base language.
It also provides a second opinion to doctors by predicting the disease when symptoms are put in.


# Chatbot
This application is providing video suggestions to patients made by Lenest.
The application is made on streamlit and gspread with python and css as base languages.
Gspread is called via google sheets API.
The chatbot is hosted on streamlit cloud.
