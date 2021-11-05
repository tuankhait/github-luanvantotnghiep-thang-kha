# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#

from typing import Any, Text, Dict, List, Union
from rasa_sdk import Action, Tracker
from rasa_sdk.events import FollowupAction
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.forms import FormAction
import requests
from datetime import datetime
import locale


class kqdau(Action):

    def name(self) -> Text:
        return "kqdau"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        MSV = tracker.get_slot('MSV')
        url1 = "http://192.168.1.46/hotroxettn/api_server.php?function=getMonHocCuaSinhVienByMSSV"
        r = requests.post(url1, json={"mssv": MSV})
        Data = r.json()
        name = '------------------------'
        if not Data['data']:
            name += "\n" + "không tìm thấy môn học nào" + " \n------------------------"
            dispatcher.utter_message(text=name)
            return []
        i = 0
        for b in Data['data']:

            TEN = b['MH_TEN']
            if TEN is None:
                TEN = "null"
            urlGetApi = "http://192.168.1.46/hotroxettn/api_server.php?function=getDataTotNghiepCuaSinhVienTheoMon"
            res = requests.post(urlGetApi, json={'mssv': MSV,
                                                 'idMon': b['MH_ID'],
                                                 'checkbox': '1', })
            DataGetPoint = res.json()
            if not DataGetPoint['data']:
                i = i
            for c in DataGetPoint['data']:
                i = i + 1
                THIDIEM = c['THI_DIEM']
                if THIDIEM is None:
                    THIDIEM = 'null'
                elif i < 3:
                    ngaykt = c['KT_NGAY']
                    ngaykt1 = ngaykt['date']
                    stringDate = datetime.strptime(
                        ngaykt1, '%Y-%m-%d %H:%M:%S.%f')
                    convertDate = stringDate.strftime("%d/%m/%Y")
                    name += "\n" + "Môn: " + c['MH_TEN'] + " (" + c['LOAITHI_TEN'] + ") \n \n" + \
                        "Điểm: " + THIDIEM + "\n \n" + "Ngày: " + \
                            convertDate + " \n------------------------"
                elif i == 3:
                    name += "\n" + "Xem chi tiết tại Điểm thi đậu" + " \n------------------------"
        if i == 0:
            name += "\n" + "Chưa có môn nào đậu" + " \n------------------------"

        dispatcher.utter_message(text=name)

        return []


class kqrot(Action):

    def name(self) -> Text:
        return "kqrot"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        MSV = tracker.get_slot('MSV')
        url1 = "http://192.168.1.46/hotroxettn/api_server.php?function=getMonHocCuaSinhVienByMSSV"
        r = requests.post(url1, json={"mssv": MSV})
        name = '------------------------'
        Data = r.json()
        if not Data['data']:
            name += "\n" + "không tìm thấy môn học nào" + " \n------------------------"
            dispatcher.utter_message(text=name)
            return []
        i = 0
        for b in Data['data']:
            TEN = b['MH_TEN']
            if TEN is None:
                TEN = "null"
            urlGetApi = "http://192.168.1.46/hotroxettn/api_server.php?function=getDataTotNghiepCuaSinhVienTheoMon"
            res = requests.post(urlGetApi, json={'mssv': MSV,
                                                 'idMon': b['MH_ID'],
                                                 'checkbox': '0', })
            DataGetPoint = res.json()
            if not DataGetPoint['data']:
                i = i
            for c in DataGetPoint['data']:
                i = i + 1
                THIDIEM = c['THI_DIEM']
                if THIDIEM is None:
                    THIDIEM = 'null'
                if i < 3:
                    ngaykt = c['KT_NGAY']
                    ngaykt1 = ngaykt['date']
                    stringDate = datetime.strptime(
                        ngaykt1, '%Y-%m-%d %H:%M:%S.%f')
                    convertDate = stringDate.strftime("%d/%m/%Y")
                    name += "\n" + "Môn: " + c['MH_TEN'] + " (" + c['LOAITHI_TEN'] + ") \n \n" + \
                        "Điểm: " + THIDIEM + "\n \n" + "Ngày: " + \
                            convertDate + " \n------------------------"
                elif i == 3:
                    name += "\n" + "Xem chi tiết tại Điểm thi đậu" + " \n------------------------"
        if i == 0:
            name += "\n" + "Chưa có môn nào đậu" + " \n------------------------"

        dispatcher.utter_message(text=name)

        return []
