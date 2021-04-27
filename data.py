import csv
import json
import datetime


#oldes and youngest
#highest unemployeement
#highest education and lowest
#densist and least dense
#most dropout
dateStartString = "1_1_2016"
dateStart =  datetime.datetime.strptime(dateStartString,'%m_%d_%Y')

def filterByDate(inputFileName,outputFileName):
    count = 0
    csvReader = csv.reader(open(inputFileName, "rb"))
    csvWriter = csv.writer(open(outputFileName, "wb"))

    for row in csvReader:
        keys = row
        print row
        csvWriter.writerow(row)
        break
    for row in csvReader:
        date_time_str = row[1]
        date_time_obj = datetime.datetime.strptime(date_time_str, '%m/%d/%Y %H:%M:%S %p')
                #
        # print dateStart.date()
        #
        # print date_time_obj.date()
        
        if dateStart.date()<=date_time_obj.date():
            csvWriter.writerow(row)
            count+=1
        if count%10000==1:
            print count
    print count

#filterByDate("EMS_Incident_Dispatch_Data.csv","on_after_"+dateStartString+".csv")
def histogram(inputFileName,column):
    csvReader = csv.reader(open(inputFileName, "rb"))
    
    columnCount = {}
    for row in csvReader:
        keys = row
        print keys
        columnIndex = keys.index(column)
        break
    for row in csvReader:
        value = row[columnIndex]
        columnCount[value]=columnCount.get(value,0)+1
    print columnCount
  #  print columnCount["DRUG"]
        
        #97025
        #102122
        
#histogram("EMS_Incident_Dispatch_Data.csv",'INCIDENT_DISPOSITION_CODE')


def dateHistogram(inputFileName,outputFileName):
    csvReader = csv.reader(open(inputFileName, "rb"))
    csvWriter = csv.writer(open(outputFileName, "wb"))
    columnCount = {}
    for row in csvReader:
        keys = row
        keys.append("week")
        print keys
        csvWriter.writerow(keys)
        
       # columnIndex = keys.index(column)
        break
        
    for row in csvReader:
       # print row
        date_time_str = row[1]
        date_time_obj = datetime.datetime.strptime(date_time_str, '%m/%d/%Y %H:%M:%S %p')
        date = str(date_time_obj.date()).split("-")
        
        week = datetime.date(int(date[0]), int(date[1]), int(date[2])).isocalendar()[1]
        row.append(week)
        csvWriter.writerow(row)
        #print row
    

#dateHistogram("DRUG.csv","DRUG_week.csv")

def drugHistogram(inputFileName):
    csvReader = csv.reader(open(inputFileName, "rb"))
    columnCount = {}
    for row in csvReader:
        keys = row
        print keys
        iniIndex = keys.index("INITIAL_CALL_TYPE")
        finIndex = keys.index("FINAL_CALL_TYPE")
        break
    for row in csvReader:
        iniV = row[iniIndex]
        finV = row[finIndex]
        
        if iniV=="DRUG":
            columnCount[finV]=columnCount.get(finV,0)+1
    print columnCount
    
#drugHistogram("on_after_1_1_2016.csv")    

def filterByType(inputFileName,columnFilter,outputFileName):
    csvReader = csv.reader(open(inputFileName, "rb"))
    csvWriter = csv.writer(open(outputFileName, "wb"))
    
    for row in csvReader:
        keys = row
        columnIndex = keys.index(columnFilter[0])
        print row
        print columnIndex
        csvWriter.writerow(row)
        break
    for row in csvReader:
       # print row
        if columnFilter[1] in row[columnIndex]:
            #print row
            csvWriter.writerow(row)
        

def reduceColumns(inputFileName,columnFilter,outputFileName):
    csvReader = csv.reader(open(inputFileName, "rb"))
    csvWriter = csv.writer(open(outputFileName, "wb"))
    indexes = []
    for row in csvReader:
        keys = row
        for c in columnFilter:
            #print c
            columnIndex = keys.index(c)
            indexes.append(columnIndex)
        #print row
        print indexes
        csvWriter.writerow(columnFilter)
        break
    for row in csvReader:
        # print row
        newRow = []
        for i in indexes:
             #print i
             #print row[i]
             newRow.append(row[i])
             #print newRow
        csvWriter.writerow(newRow)
             #break
        #break
        
columnsInUse = ["CAD_INCIDENT_ID","INCIDENT_DATETIME","FINAL_CALL_TYPE","ZIPCODE"]
reduceColumns("EMS_Incident_Dispatch_Data.csv",columnsInUse,"drug_reduced.csv")        
    #for row in csvReader:        

#columnFilter = ["FINAL_CALL_TYPE","DRUG"]
#filterByType("EMS_Incident_Dispatch_Data_all.csv",columnFilter,"DRUG.csv")