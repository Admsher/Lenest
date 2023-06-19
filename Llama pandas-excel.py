import os
os.environ['OPENAI_API_KEY']='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'

from llama_index import GPTSimpleVectorIndex,SimpleDirectoryReader
from llama_index import download_loader
from pathlib import Path
import streamlit as st
import config 


PandasExcelReader=download_loader("PandasExcelReader")
loader=PandasExcelReader()
documents=loader.load_data(file=Path('C:\BITS\PS 1\Data\videos.xlsx'),pandas_config={"title":1})
index_excel=GPTSimpleVectorIndex.from_documents(documents)
index_excel.save_to_disk('index_excel.json')


def load_indexes():
    index_excel=GPTSimpleVectorIndex.load_from_disk('index_excel.json')
    return index_excel
def main():
    index_excel=load_indexes()
    st.header('Lenest Chatbot')    
    index=index_excel
    query=st.text_input('Enter your Query')
    button=st.button(f'Response')   
    if button:
        st.write(index.query(query))
    
if __name__ == '__main__':
    main()