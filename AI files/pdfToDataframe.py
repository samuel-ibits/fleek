import imp
import tabula
import pandas as pd


pdf = "archive/AnthonyStatementOfAccount.pdf"

data = tabula.read_pdf(pdf, pages='1')
dataFrame= data[0].to_csv("archive/userDataTable.csv")
