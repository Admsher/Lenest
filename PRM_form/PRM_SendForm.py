import tkinter
from tkinter import ttk
import smtplib,ssl




def sendEmail():
    
    receiver_email_id=email_entry.get()
    Firts_name=first_name_entry.get()
    Last_name=Last_name_entry.get()
  

    port = 465  # For SSL
    smtp_server = "smtp.gmail.com"
    sender_email = "lenest.india@gmail.com"  # Enter your address
    receiver_email = receiver_email_id # Enter receiver address
    password = "rxxd nfnr jgii gsdy"
    SUBJECT ="Your feedback matters to us"
    TEXT="Greetings " +Firts_name+" "+Last_name+",\n Thank you for visiting our hospital. We would love to hear about your experience.\n Please take a few minutes to leave a review on this google form: https://forms.gle/uLLcGV7iSVrumEjEA. Your feedback can help other patients and us improve our services.\n \
        Thanks and Regards,\n \
            Team Lenest"
    message = 'Subject: {}\n\n{}'.format(SUBJECT, TEXT)

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)




window =tkinter.Tk()
window.title("PRM Form send")
frame1=tkinter.Frame(window)
style=ttk.Style(window)
style.theme_use('alt')
frame1.pack(padx=20,pady=10)

First_name_label=tkinter.Label(frame1,text="First Name")
First_name_label.grid(row=0,column=0)
first_name_entry=tkinter.Entry(frame1)
first_name_entry.grid(row=1,column=0)
Last_name_label=tkinter.Label(frame1,text="Last Name")
Last_name_entry=tkinter.Entry(frame1)
Last_name_entry.grid(row=1,column=1)
Last_name_label.grid(row=0,column=1)
email = tkinter.Label(frame1, text="Enter Email")
email.grid(row=2, column=0)
email_entry = tkinter.Entry(frame1)
email_entry.grid(row=2, column=1)
switch_button_1=tkinter.Button(frame1,text="Send Email",command=sendEmail)
switch_button_1.grid(row=3,column=1)

window.mainloop()


