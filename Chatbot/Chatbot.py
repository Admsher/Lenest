

import streamlit as st
from streamlit_chat import message
import gspread
from oauth2client.service_account import ServiceAccountCredentials


scope=['https://www.googleapis.com/auth/spreadsheets','https://www.googleapis.com/auth/drive'] 
creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
gc = gspread.authorize(creds)

worksheet=gc.open('videos').sheet1 

if "history" not in st.session_state:
    st.session_state.history = []


def generate_answer():    
    user_message = st.session_state.input_text1
    message(user_message,is_user=True)
    st.session_state.input_text1=""     
    if(user_message==str(1)):
        message_bot=("Please type in the Week No.(1-38)")
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text2", on_change=weekChart)
        message(message_bot,is_user=False)
    elif(user_message==str(2)):
        message_bot=("Please select the topic you are intersted in \n1.Post pregnancy. \n2.Newborn Care. \n 3.Diseases. \n 4.Tests and Vaccinations.\n 5.Health and Lifestyle During Pregnancy. ")
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text2", on_change=Healthinfo)
        message(message_bot,is_user=False)
    elif(user_message==str(3)):
        message_bot=("Please select one of the topics \n1.For Women. \n2.For Men.")
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text2", on_change=OtherIssues)
        message(message_bot,is_user=False)
    else:
        message_bot="Sorry I could not understand that."
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text1", on_change=generate_answer)
        message(message_bot,is_user=False) 

def weekChart():
     user_message = st.session_state.input_text2
     message(user_message,is_user=True)

     if user_message.isnumeric():
        message_bot=(worksheet.cell(int(user_message),15).value)+" - "+(worksheet.cell(int(user_message),16).value)    
        message(message_bot,is_user=False) 
        st.session_state.history.append(message_bot)     
     else:
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text2", on_change=weekChart)
        message_bot=('Sorry I could not understand that.')
        message(message_bot,is_user=False) 
    
def Healthinfo():
     user_message = st.session_state.input_text2
     message(user_message,is_user=True)
     if(user_message==str(1)):
        message_bot=("Please select on of the following \n1.Cesearian \n2.Body changes and care \n3.Bleeding \n4.Miscarriage and abortion \n5.Contraception")
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text3", on_change=Postpregnancy)
        message(message_bot,is_user=False)   
     elif(user_message==str(2)):
        message("Here are some videos you asked for:")
        for i in range (0,(int(worksheet.cell(3,40).value+2))):
            if(worksheet.cell(int(i+2),30).value==None or worksheet.cell(int(i+2),31).value==None):
                continue
            message_bot=((worksheet.cell(int(i+2),30).value)+" - "+(worksheet.cell(int(i+2),31).value))
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)   
            st.session_state.history.append(message_bot)
     elif(user_message==str(3)):
        message_bot=("Please type in the disease no.: \n1.Cervical Cancer \n2.Diabetes \n3.Down's Syndrome \n4.PCOS \n5.Thalassemia \n6.Thyroid \n7.Vaginitis \n8.Blood Pressure \n9.Backache \n10.Morning sickness \n11.Constipation")  
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text3", on_change=Diseaseanswer) 
        message(message_bot,is_user=False)
     elif(user_message==str(4)):
        message("Here are some videos you asked for:")
        for i in range (0,(int(worksheet.cell(2,40).value))+2):
            if(worksheet.cell(int(i+2),28).value==None or worksheet.cell(int(i+2),29).value==None):
                continue
            message_bot=((worksheet.cell(int(i+2),28).value)+" - "+(worksheet.cell(int(i+2),29).value))
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)   
            st.session_state.history.append(message_bot)
     elif(user_message==str(5)):
        message_bot=("Please select from the following: \n1.Nutrition \n2.Stress Management \n3.Genaral Doubts \n4.Relationship \n5.Pregnancy Issues \n6.Investigation of pregnancy")  
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text3", on_change=HealthEtLifestyle) 
        message(message_bot,is_user=False)    
     else:
        st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text2", on_change=Healthinfo)
        message_bot=('Sorry I could not understand that.')   
        message(message_bot,is_user=False) 

def OtherIssues():
    user_message = st.session_state.input_text2
    if(user_message==str(1)):
            message("Here are some videos you asked for:")
            for i in range (0,(int(worksheet.cell(5,40).value+1))):
                if(worksheet.cell(int(i+2),10).value==None or worksheet.cell(int(i+2),11).value==None):
                    continue
                message_bot=((worksheet.cell(int(i+2),10).value)+" - "+(worksheet.cell(int(i+2),11).value))
                if(message_bot==""):
                    message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
                message(message_bot,is_user=False)   
                st.session_state.history.append(message_bot)
    elif(user_message==str(2)):
        message("Here are some videos you asked for:")
        for i in range (0,int(worksheet.cell(4,40).value)): 
            if(worksheet.cell(int(i+2),8).value==None or worksheet.cell(int(i+2),9).value==None):
                continue
            message_bot=((worksheet.cell(int(i+2),8).value)+" - "+(worksheet.cell(int(i+2),9).value))
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)   
            st.session_state.history.append(message_bot)

def Diseaseanswer():
    user_message=st.session_state.input_text3
    if(str(user_message)==str(1)):
        for i in range(0,3):
            if(worksheet.cell(int(i+2),22).value==None or worksheet.cell(int(i+2),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+2),22).value)+" - "+(worksheet.cell(int(i+2),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)
    elif(str(user_message)==str(2)):
        for i in range(0,2):
            if(worksheet.cell(int(i+4),22).value==None or worksheet.cell(int(i+4),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+4),22).value)+" - "+(worksheet.cell(int(i+4),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(3)):
        for i in range(0,2):
            if(worksheet.cell(int(i+6),22).value==None or worksheet.cell(int(i+6),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+6),22).value)+" - "+(worksheet.cell(int(i+6),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)   
    elif(str(user_message)==str(4)):
        for i in range(0,3):
            if(worksheet.cell(int(i+10),22).value==None or worksheet.cell(int(i+10),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+10),22).value)+" - "+(worksheet.cell(int(i+10),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(5)):
        for i in range(0,2):
            if(worksheet.cell(int(i+12),22).value==None or worksheet.cell(int(i+12),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+12),22).value)+" - "+(worksheet.cell(int(i+12),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(7)):
        for i in range(0,2):
            if(worksheet.cell(int(i+16),22).value==None or worksheet.cell(int(i+16),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+2),22).value)+" - "+(worksheet.cell(int(i+2),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)
    elif(str(user_message)==str(8)):
        for i in range(0,2):
            if(worksheet.cell(int(i+18),22).value==None or worksheet.cell(int(i+18),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+18),22).value)+" - "+(worksheet.cell(int(i+18),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(9)):
        for i in range(0,2):
            if(worksheet.cell(int(i+20),22).value==None or worksheet.cell(int(i+20),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+20),22).value)+" - "+(worksheet.cell(int(i+20),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(10)):
        for i in range(0,2):
            if(worksheet.cell(int(i+21),22).value==None or worksheet.cell(int(i+21),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+21),22).value)+" - "+(worksheet.cell(int(i+21),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)  
    elif(str(user_message)==str(11)):
        for i in range(0,2):
            if(worksheet.cell(int(i+23),22).value==None or worksheet.cell(int(i+23),23).value==None):
                continue
            message_bot=((worksheet.cell(int(i+23),22).value)+" - "+(worksheet.cell(int(i+23),23).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)                                      

def  Postpregnancy():
    user_message=st.session_state.input_text3
    if(str(user_message)==str(1)):
        for i in range(0,2):
            if(worksheet.cell(int(i+2),25).value==None or worksheet.cell(int(i+2),26).value==None):
                continue
            message_bot=((worksheet.cell(int(i+2),25).value)+" - "+(worksheet.cell(int(i+2),26).value))
            st.session_state.history.append(message_bot)

            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)
        for i in range(0,7):
            if(worksheet.cell(int(i+4),25).value==None or worksheet.cell(int(i+4),26).value==None):
                continue
            message_bot=((worksheet.cell(int(i+4),25).value)+" - "+(worksheet.cell(int(i+4),26).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(3)):
        for i in range(0,2):
            if(worksheet.cell(int(i+11),25).value==None or worksheet.cell(int(i+11),26).value==None):
                continue
            message_bot=((worksheet.cell(int(i+11),25).value)+" - "+(worksheet.cell(int(i+11),26).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)   
    elif(str(user_message)==str(4)):
        for i in range(0,3):
            if(worksheet.cell(int(i+14),25).value==None or worksheet.cell(int(i+14),26).value==None):
                continue
            message_bot=((worksheet.cell(int(i+14),25).value)+" - "+(worksheet.cell(int(i+14),26).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(5)):
        for i in range(0,2):
            if(worksheet.cell(int(i+17),25).value==None or worksheet.cell(int(i+17),26).value==None):
                continue
            message_bot=((worksheet.cell(int(i+17),25).value)+" - "+(worksheet.cell(int(i+17),26).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 

def HealthEtLifestyle():
    user_message=st.session_state.input_text3
    if(str(user_message)==str(1)):
        for i in range(0,10):
            if(worksheet.cell(int(i+2),32).value==None or worksheet.cell(int(i+2),33).value==None):
                continue
            message_bot=((worksheet.cell(int(i+2),32).value)+" - "+(worksheet.cell(int(i+2),33).value))
            st.session_state.history.append(message_bot)
        
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)
    elif(str(user_message)==str(2)):
        for i in range(0,10):
            if(worksheet.cell(int(i+13),32).value==None or worksheet.cell(int(i+13),33).value==None):
                continue
            message_bot=((worksheet.cell(int(i+13),32).value)+" - "+(worksheet.cell(int(i+13),33).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(3)):
        for i in range(0,9):
            if(worksheet.cell(int(i+24),32).value==None or worksheet.cell(int(i+24),33).value==None):
                continue
            message_bot=((worksheet.cell(int(i+24),32).value)+" - "+(worksheet.cell(int(i+24),33).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False)   
    elif(str(user_message)==str(4)):
        for i in range(0,5):
            if(worksheet.cell(int(i+34),32).value==None or worksheet.cell(int(i+34),33).value==None):
                continue
            message_bot=((worksheet.cell(int(i+34),32).value)+" - "+(worksheet.cell(int(i+34),33).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(5)):
        for i in range(0,7):
            if(worksheet.cell(int(i+40),32).value==None or worksheet.cell(int(i+40),33).value==None):
                continue
            message_bot=((worksheet.cell(int(i+40),32).value)+" - "+(worksheet.cell(int(i+40),33).value))
            st.session_state.history.append(message_bot)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
            message(message_bot,is_user=False) 
    elif(str(user_message)==str(6)):
        for i in range(0,8):
            if(worksheet.cell(int(i+48),32).value==None or worksheet.cell(int(i+48),33).value==None):
                continue
            message_bot=((worksheet.cell(int(i+48),32).value)+" - "+(worksheet.cell(int(i+48),33).value))
            st.session_state.history.append(message_bot)
            message(message_bot,is_user=False)
            if(message_bot==""):
                message_bot("Sorry I could not find anything on that, you might need to contact doctor for consultation.Sorry for the inconvenience.") 
    

def Hotstart(): 
    st.text_input("Ask the bot here.Write stop to end the chat.", key="input_text1", on_change=generate_answer)
    message("Hi this is a chatbot brought to you by Lenest,please enter one of the option number to continue.\n1.Weekly tips for Pregnancy. \n2.Information Regarding Pregnancy and More \n3. Other Issues",is_user=False)

###Start Sidebar###
st.sidebar.markdown("""
<style>
.big-font {
    font-size:50px !important;
}
</style>
""", unsafe_allow_html=True)
st.sidebar.markdown('<p class="big-font">Le-Nest Chatbot</p>', unsafe_allow_html=True)
st.sidebar.write("This bot provides you with suggestions from the vast amount of videos Le NEST has curated for their patients based on your query.Please note that this is an automated service and does not mean to provide you with wrong or hurtful information.We would love to hear your review on this. ")
st.sidebar.button('Initiate/Restart chat',on_click=Hotstart)
c=st.sidebar.container()
c.write("See your previous answers here:")
for repeat in range(0,len(st.session_state.history)):
            c.write(st.session_state.history[len(st.session_state.history)-repeat-1])  






