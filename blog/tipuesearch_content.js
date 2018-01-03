var tipuesearch = {"pages":[{"title":"About","text":"2017Fall 機械設計工程系 CADP & CP 課程倉儲: https://mde1a1.kmol.info/2017fall 課程投影片: https://mde1a1.kmol.info/2017fall/doc/trunk/index.html 課程網誌: https://mde1a1.kmol.info/2017fall/doc/trunk/blog/","tags":"misc","url":"https://40623115.github.io/W16/blog/pages/about/"},{"title":"2017 Fall CP 第十七週","text":"期末網誌 簡述 任務一： 請每位學員依照計算機配置, 以 PyQt5 建立一個計算機程式, 並從啟動可攜程式系統開始, 利用文字輔助說明, 以 ShareX 拍攝完整的程式建構過程影片, 完成後請將影片上傳至個人 Youtube 帳號。 任務二： 請在第十八週上課之前, 完成個人兩分鐘版的課程期末簡報影片, 上傳到個人 Youtube 帳號。 學習心得： 影片： 兩分鐘版課程期末簡報 eric6_計算機程式","tags":"Course","url":"https://40623115.github.io/W16/blog/40623115-w17.html"},{"title":"2017 Fall CP 第八週－期中考","text":"W8期中考 Python迴圈與eric6程式 簡述： 學習Python邏輯與用eric6程式設計圖形介面並轉成程式。 學習心得： 可以利用更多電腦功能，並瞭解如何設計程式。 自評期中成績：７５ 影片 eric6：簡易計算機 Python迴圈：","tags":"Course","url":"https://40623115.github.io/W16/blog/40623115-w8.html"},{"title":"2017 Fall CP 第七週 計算機程式第七週學習心得","text":"學習心得： 經過本次考試，還好考試前有先複習，不然在時間內要做完，有些困難阿！ 自評期中成績：８０ 影片： 期中考試： W7-40623115-正在考試","tags":"Course","url":"https://40623115.github.io/W16/blog/40623115-w7-exam.html"},{"title":"2017 Fall CP 第七週(2)","text":"PyQt5 W7心得： 學習使用Python程式叫出計算機。 !/usr/bin/env python import math from PyQt5.QtCore import Qt from PyQt5.QtWidgets import (QApplication, QGridLayout, QLayout, QLineEdit, QSizePolicy, QToolButton, QWidget) class Button(QToolButton): ''' def __init__(self, text, parent=None): super(Button, self).__init__(parent) ''' # for Python 3 def __init__(self, text): super().__init__() self.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Preferred) self.setText(text) def sizeHint(self): size = super(Button, self).sizeHint() size.setHeight(size.height() + 20) size.setWidth(max(size.width(), size.height())) return size class Calculator(QWidget): NumDigitButtons = 10 ''' def __init__(self, parent=None): super(Calculator, self).__init__(parent) ''' def __init__(self): super().__init__() self.pendingAdditiveOperator = '' self.pendingMultiplicativeOperator = '' self.sumInMemory = 0.0 self.sumSoFar = 0.0 self.factorSoFar = 0.0 self.waitingForOperand = True self.display = QLineEdit('0') self.display.setReadOnly(True) self.display.setAlignment(Qt.AlignRight) self.display.setMaxLength(15) font = self.display.font() font.setPointSize(font.pointSize() + 8) self.display.setFont(font) self.digitButtons = [] for i in range(Calculator.NumDigitButtons): self.digitButtons.append(self.createButton(str(i), self.digitClicked)) self.pointButton = self.createButton(\".\", self.pointClicked) self.changeSignButton = self.createButton(u\"\\N{PLUS-MINUS SIGN}\", self.changeSignClicked) self.backspaceButton = self.createButton(\"Backspace\", self.backspaceClicked) self.clearButton = self.createButton(\"Clear\", self.clear) self.clearAllButton = self.createButton(\"Clear All\", self.clearAll) self.clearMemoryButton = self.createButton(\"MC\", self.clearMemory) self.readMemoryButton = self.createButton(\"MR\", self.readMemory) self.setMemoryButton = self.createButton(\"MS\", self.setMemory) self.addToMemoryButton = self.createButton(\"M+\", self.addToMemory) self.divisionButton = self.createButton(u\"\\N{DIVISION SIGN}\", self.multiplicativeOperatorClicked) self.timesButton = self.createButton(u\"\\N{MULTIPLICATION SIGN}\", self.multiplicativeOperatorClicked) self.minusButton = self.createButton(\"-\", self.additiveOperatorClicked) self.plusButton = self.createButton(\"+\", self.additiveOperatorClicked) self.squareRootButton = self.createButton(\"Sqrt\", self.unaryOperatorClicked) self.powerButton = self.createButton(u\"x\\N{SUPERSCRIPT TWO}\", self.unaryOperatorClicked) self.reciprocalButton = self.createButton(\"1/x\", self.unaryOperatorClicked) self.equalButton = self.createButton(\"=\", self.equalClicked) mainLayout = QGridLayout() mainLayout.setSizeConstraint(QLayout.SetFixedSize) mainLayout.addWidget(self.display, 0, 0, 1, 6) mainLayout.addWidget(self.backspaceButton, 1, 0, 1, 2) mainLayout.addWidget(self.clearButton, 1, 2, 1, 2) mainLayout.addWidget(self.clearAllButton, 1, 4, 1, 2) mainLayout.addWidget(self.clearMemoryButton, 2, 0) mainLayout.addWidget(self.readMemoryButton, 3, 0) mainLayout.addWidget(self.setMemoryButton, 4, 0) mainLayout.addWidget(self.addToMemoryButton, 5, 0) for i in range(1, Calculator.NumDigitButtons): row = ((9 - i) / 3) + 2 column = ((i - 1) % 3) + 1 mainLayout.addWidget(self.digitButtons[i], row, column) mainLayout.addWidget(self.digitButtons[0], 5, 1) mainLayout.addWidget(self.pointButton, 5, 2) mainLayout.addWidget(self.changeSignButton, 5, 3) mainLayout.addWidget(self.divisionButton, 2, 4) mainLayout.addWidget(self.timesButton, 3, 4) mainLayout.addWidget(self.minusButton, 4, 4) mainLayout.addWidget(self.plusButton, 5, 4) mainLayout.addWidget(self.squareRootButton, 2, 5) mainLayout.addWidget(self.powerButton, 3, 5) mainLayout.addWidget(self.reciprocalButton, 4, 5) mainLayout.addWidget(self.equalButton, 5, 5) self.setLayout(mainLayout) self.setWindowTitle(\"Calculator\") def digitClicked(self): clickedButton = self.sender() digitValue = int(clickedButton.text()) if self.display.text() == '0' and digitValue == 0.0: return if self.waitingForOperand: self.display.clear() self.waitingForOperand = False self.display.setText(self.display.text() + str(digitValue)) def unaryOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if clickedOperator == \"Sqrt\": if operand < 0.0: self.abortOperation() return result = math.sqrt(operand) elif clickedOperator == u\"x\\N{SUPERSCRIPT TWO}\": result = math.pow(operand, 2.0) elif clickedOperator == \"1/x\": if operand == 0.0: self.abortOperation() return result = 1.0 / operand self.display.setText(str(result)) self.waitingForOperand = True def additiveOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return self.display.setText(str(self.factorSoFar)) operand = self.factorSoFar self.factorSoFar = 0.0 self.pendingMultiplicativeOperator = '' if self.pendingAdditiveOperator: if not self.calculate(operand, self.pendingAdditiveOperator): self.abortOperation() return self.display.setText(str(self.sumSoFar)) else: self.sumSoFar = operand self.pendingAdditiveOperator = clickedOperator self.waitingForOperand = True def multiplicativeOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return self.display.setText(str(self.factorSoFar)) else: self.factorSoFar = operand self.pendingMultiplicativeOperator = clickedOperator self.waitingForOperand = True def equalClicked(self): operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return operand = self.factorSoFar self.factorSoFar = 0.0 self.pendingMultiplicativeOperator = '' if self.pendingAdditiveOperator: if not self.calculate(operand, self.pendingAdditiveOperator): self.abortOperation() return self.pendingAdditiveOperator = '' else: self.sumSoFar = operand self.display.setText(str(self.sumSoFar)) self.sumSoFar = 0.0 self.waitingForOperand = True def pointClicked(self): if self.waitingForOperand: self.display.setText('0') if \".\" not in self.display.text(): self.display.setText(self.display.text() + \".\") self.waitingForOperand = False def changeSignClicked(self): text = self.display.text() value = float(text) if value > 0.0: text = \"-\" + text elif value < 0.0: text = text[1:] self.display.setText(text) def backspaceClicked(self): if self.waitingForOperand: return text = self.display.text()[:-1] if not text: text = '0' self.waitingForOperand = True self.display.setText(text) def clear(self): if self.waitingForOperand: return self.display.setText('0') self.waitingForOperand = True def clearAll(self): self.sumSoFar = 0.0 self.factorSoFar = 0.0 self.pendingAdditiveOperator = '' self.pendingMultiplicativeOperator = '' self.display.setText('0') self.waitingForOperand = True def clearMemory(self): self.sumInMemory = 0.0 def readMemory(self): self.display.setText(str(self.sumInMemory)) self.waitingForOperand = True def setMemory(self): self.equalClicked() self.sumInMemory = float(self.display.text()) def addToMemory(self): self.equalClicked() self.sumInMemory += float(self.display.text()) def createButton(self, text, member): button = Button(text) button.clicked.connect(member) return button def abortOperation(self): self.clearAll() self.display.setText(\"####\") def calculate(self, rightOperand, pendingOperator): if pendingOperator == \"+\": self.sumSoFar += rightOperand elif pendingOperator == \"-\": self.sumSoFar -= rightOperand elif pendingOperator == u\"\\N{MULTIPLICATION SIGN}\": self.factorSoFar *= rightOperand elif pendingOperator == u\"\\N{DIVISION SIGN}\": if rightOperand == 0.0: return False self.factorSoFar /= rightOperand return True if __name__ == '__main__': import sys app = QApplication(sys.argv) calc = Calculator() calc.show() sys.exit(app.exec_())","tags":"Course","url":"https://40623115.github.io/W16/blog/40623115-2017-fall-cp-w7-1.html"},{"title":"2017 Fall CP 第六週","text":"複習中～ mde W6心得： 重新複習使用leo修改blog內容","tags":"Course","url":"https://40623115.github.io/W16/blog/40623115-2017-fall-cp-w6.html"},{"title":"2017 Fall CP 第五週","text":"Brython 程式環境可以用來練習許多 Python3 的簡單語法, 也可以納入 Javascript 程式庫, 利用 Ajax 模式結合網際瀏覽器與伺服器上的資源解決協同產品設計流程上的問題. window.onload=function(){ brython({debug:1, pythonpath:['./../data/py']}); } 利用以下的編輯器執行 Python3 程式 在 Firefox 中, 以 Preferences - General - Downloads 選擇 \"Always ask me where to save files\" 在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading function doSave(){ var blob = new Blob([localStorage[\"py_src\"]], {type: \"text/plain;charset=utf-8\"}); filename = document.getElementById('filename').value saveAs(blob, filename+\".py\"); } import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" def clear_container(ev): doc[\"container\"].clear() doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) doc['clear_container'].bind('click',clear_container) Filename: .py Run Output 清除 清除畫布 Title: 2017 Fall CP 第六週 Date: 2017-10-19 8:50 Category: Course Tags: 2017fall, CP Slug: 2017-fall-cp-w6 Author: 40623115 from browser import document as doc import script1 def ex1(ev): script1.editor.setValue('''#ex1 簡單的 for 迴圈範例 for i in range(10): print(i) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex1'].bind('click',ex1) ex1 -for 迴圈 from browser import document as doc import script1 def ex2(ev): script1.editor.setValue('''#溫度轉換程式 from browser import document as doc # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" # 利用 print() 將轉換結果送到 console 區 print(output_string) #直接呼叫 convTemp() 執行 convTemp() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex2'].bind('click',ex2) ex2 -溫度換算 from browser import document as doc import script1 def ex3(ev): script1.editor.setValue('''#jansen 多連桿機構驗算 from math import pi, cos, sin, sqrt, acos radian = 180/pi degree = pi/180 #PLAP def plap(ax, ay, ac, bac, bx, by, ccw): if ccw == 1: cx= ac*cos(bac - acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ax cy= ac*sin(bac - acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ay else: cx= ac*cos(bac + acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ax cy= ac*sin(bac + acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ay return cx, cy #PLLP def pllp(ax, ay, ac, cb, bx, by, cw): if cw == 1: cx = -((ay - by)*(-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 - sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx)) + (ac**2 - ax**2 - ay**2 + bx**2 + by**2 - cb**2)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))/(2*(ax - bx)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)) cy = (-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(-ax + bx))/(2*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)) else: cx = -((ay - by)*(-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx)) + (ac**2 - ax**2 - ay**2 + bx**2 + by**2 - cb**2)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))/(2*(ax - bx)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)) cy = (-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx))/(2*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)) return cx, cy ax = -38 ay = 0 # b 為原點 bx = 0 by = 0 cx = 0 cy = 7.8 # m 為配合 PLAP 新增固定點 mx = 30 my = 7.8 # dcm ccw 方向角度 dcm = 30*degree cd = 15 # 三角形 dcm 為 ccw plap d=(a, cd, dcm, m) dx, dy = plap(cx, cy, cd, dcm, mx, my, ccw=1) print(\"dx=\", dx, \"dy=\", dy) # 三角形 aed 為 cw pllp e=(a, ae, ed, d) ae = 41.5 ed = 50 ex, ey = pllp(ax, ay, ae, ed, dx, dy, cw=1) print(\"ex=\", ex, \"ey=\", ey) # 三角形 afe 為 cw pllp f=(a, af, fe, e) af = 40.1 fe = 55.8 fx, fy = pllp(ax, ay, af, fe, ex, ey, cw=1) print(\"fx=\", fx, \"fy=\", fy) # 三角形 dha 為 cw pllp h=(d, dh, ha, a) dh = 61.9 ha = 39.3 hx, hy = pllp(dx, dy, dh, ha, ax, ay, cw=1) print(\"hx=\", hx, \"hy=\", hy) # 三角形 hgf 為 cw pllp g=(h, hg, gf, f) hg = 36.7 gf = 39.4 gx, gy = pllp(hx, hy, hg, gf, fx, fy, cw=1) print(\"gx=\", gx, \"gy=\", gy) # 三角形 hkg 為 cw pllp k=(h, hk, kg, g) hk = 49 kg = 65.7 kx, ky = pllp(hx, hy, hk, kg, gx, gy, cw=1) print(\"kx=\", kx, \"ky=\", ky) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex3'].bind('click',ex3) ex3 -多連桿機構 from browser import document as doc import script1 def ex4(ev): script1.editor.setValue('''#ex4 turtle 網際繪圖 import turtle t=turtle.Turtle() t.penup() t.left(45) t.backward(125) t.right(45) t.pendown() for c in ['red', 'green', 'yellow', 'blue']: t.color(c) t.forward(75) t.left(90) t1=turtle.Turtle(\"turtle\") t1.penup() t1.pendown() t1.width(3) for c in ['red', 'blue', 'yellow', 'green', 'purple', 'brown']: t1.color(c) t1.forward(50) t1.left(60) t1.penup() t1.left(60) t1.backward(120) t1.pendown() t1.color('red') t1.write(\"I love Brython!!\") turtle._Screen().end() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex4'].bind('click',ex4) ex4 -turtle 網際繪圖 from browser import document import script1 def get_file(e): data = open(\"./../python_ex/for1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get\"].bind(\"click\", get_file) from browser import document import script1 def get_temp1(e): data = open(\"./../python_ex/temp1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_temp1\"].bind(\"click\", get_temp1) from browser import document import script1 def get_ver_and_kw(e): data = open(\"./../python_ex/ver_and_kw.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_ver_and_kw\"].bind(\"click\", get_ver_and_kw) from browser import document import script1 def jansen(e): data = open(\"./../python_ex/jansen.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"jansen\"].bind(\"click\", jansen) from browser import document import script1 def tutorial1(e): data = open(\"./../python_ex/python3_tutorial1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"tutorial1\"].bind(\"click\", tutorial1) from browser import document import script1 def tutorial2(e): data = open(\"./../python_ex/python3_tutorial2.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"tutorial2\"].bind(\"click\", tutorial2) from browser import document import script1 def tutorial3(e): data = open(\"./../python_ex/python3_tutorial3.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"tutorial3\"].bind(\"click\", tutorial3) from browser import document import script1 def tutorial4(e): data = open(\"./../python_ex/python3_tutorial4.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"tutorial4\"].bind(\"click\", tutorial4) from browser import document import script1 def tutorial5(e): data = open(\"./../python_ex/python3_tutorial5.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"tutorial5\"].bind(\"click\", tutorial5) from browser import document import script1 def tutorial6(e): data = open(\"./../python_ex/python3_tutorial6.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"tutorial6\"].bind(\"click\", tutorial6) from browser import document import script1 def tutorial7(e): data = open(\"./../python_ex/python3_tutorial7.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"tutorial7\"].bind(\"click\", tutorial7) for1.py temp1.py ver_and_kw.py jansen.py tutorial1 tutorial2 tutorial3 tutorial4 tutorial5 tutorial6 tutorial7 Jansen 多連桿機構尺寸圖:","tags":"Course","url":"https://40623115.github.io/W16/blog/40623115-brython-editor-334.html"},{"title":"2017 Fall CP 第四週","text":"本學期起各班透過一台 Ubuntu 16.04 主機, 建立 Fossil SCM 伺服器, 且每一學員發放一個 Fossil SCM 倉儲, 其中各學員可以利用 Wiki 與 Technote 紀錄學習資料外, 還可以將靜態網誌與簡報檔案放入 Files 資料區. 測試沒有綁定帳號後, 指定帳號新增提交推送版本. 測試 commit 時沒有 --user-override 4062 configuration - 組成內容與狀態 scm - software configuration management batch - 批次 remark - 註解 default - 內定, 默認 fossil clone - 克隆 fossil add - 新增 fossil commit - 提交 fossil push - 推送 fossil remote-url off fossil ui - user interface url - uniform resource locator https - secure hypertext transfer protocol protocol - 協定 certification - 簽章 - public key server certify - 認證 vacuum - 吸塵 fossil clone https://mde1a1.kmol.info/pymcadp pymcadp.fossil IDE - Integrated Development Environment 希望為每位學員建立倉儲的設想流程如下: 各學員可以獨立維護倉儲內容, 也可以在總管理員的權限下, 為分組學員建立帳號, 逐步導入協同設計 各學員的倉儲以修課班級命名伺服器, 以學號命名倉儲, 方便依照此一規律擷取各學員的倉儲頁面. 各學員能以電子郵件收到與新建倉儲相關的連結, 以及帳號密碼. 必須擴增 Ubuntu ulimits -n 同時開檔的設限範圍 (內定只允許同時開啟 1024 個檔案) 解決方案: 主機名稱可以透過 domain dns 中的 CNAME 別名方式處理, 因為目前所能提供出來的 IPv4/IPv6 雙支援主機, 之前已經都設定了符號名稱. fossil init 雖然提供指定管理者的 -A 選項功能, 但是無法直接指定管理者對應密碼, 因此必須建立倉儲之後, 再利用 fossil user 修改密碼, 之後再利用 Gmail 寄出通知信, 其中提供倉儲連結, 登入帳號與密碼等資訊. 建立各學員倉儲檔案的程式如下, 如前所述, 主要透過兩個 Fossil SCM 指令完成, 在 Windows 採用 Fossil SCM 2.3 版建立所有 .fossil 倉儲時, 將同時以 email 通知各學員. 各學員的 .fossil 檔案再以 sftp 送到伺服主機對應帳號所屬的目錄下. 必須要特別注意的是, 採用 Fossil SCM 2.3 版所建立的 .fossil 倉儲檔案, 在 Ubuntu 操作系統上也必須採用相同版本的 fossil, 否則舊版 fossil 可能無法開啟新版 fossil 程式所建立的倉儲檔. import os import string import random # 使用 Gmail 寄信必須導入下列模組 import smtplib import re from email.mime.text import MIMEText from email.header import Header # 用來以亂數建立密碼的韓式 def id_generator(size=6, chars=string.ascii_uppercase + string.digits): ''' source: https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits-in-python ''' return ''.join(random.choice(chars) for _ in range(size)) # 讀取學員名單, 逐一取得學員學號, 學員名單, 檢查點 1/7 student_data = open(\"2017fall_list/1b.txt\").read() student_list = student_data.splitlines() # 利用 gmail smtp 功能寄信 server = smtplib.SMTP('smtp.gmail.com:587') server.ehlo() server.starttls() # 以下必須準備好對應郵件帳號與密碼的外部檔案, 所提供的寄信帳號, 是否可以寄信, 檢查點 2/7 ''' 寄信之前必須到 https://www.google.com/settings/security/lesssecureapps 修改權限, 改為較低安全權限 否則無法使用程式寄信! ''' # 從外部檔案讀取要用來寄信的 gmail 帳號與密碼 # mail.txt 格式為: 電子郵箱,對應密碼, 以逗點隔開, 檢查點 3/7 email_data = open(\"z:/2017fall/mail.txt\").read() email, email_password= email_data.split(\",\") print(email, email_password) # 是否登入所提供寄信的電子郵箱, 4/7 server.login(email, email_password) # 不同課程名稱, 與對應主機名稱, 必須配合修改 5/7 course_title = \"計算機程式\" fossil_server = \"cpb.kmol.info\" for student_num in student_list: username = student_num repository = username + '.fossil' # 利用所提供的字串, 以亂數組成六個字元的密碼 password = id_generator(6, \"23456789abcdef\") print(student_num, \", \" , password) # 執行 dos command 指令, 建立倉儲 os.system(\"fossil init -A \" +username + \" \" + repository) print(\"已經建立倉儲 \" + repository) # 執行 dos command 指令, 修改使用者密碼 os.system(\"fossil user password \" + username + \" \" + password + \" -R \" + repository) print(\"已經修改密碼\") # 利用 Gmail 寄信, 告知各學員倉儲連結與帳號密碼 # 每一位學員收到的 output 都從這裡 reset output = \"\" # 若學號欄為空, 則不寄信 if student_num != \"\": # output 為寄給每一位學員的資料表格 mail_content = student_num+' 您好: 您在 '+course_title+' 課程中的區域網路倉儲: https://'+fossil_server+'/'+student_num+' ' mail_content += '管理帳號為:'+ student_num + ' 管理密碼為: '+ password+' ' print(student_num) print(mail_content) # 至此 mail_content 已經確定 # 在測試與實際寄送資料, 也必須配合修改, 檢查點 6/7 receiver_email = student_num + \"@gm.nfu.edu.tw\" # 測試用 #receiver_email = student_num+\"@mde.tw\" # 列出收信人 email 位址 #print(receiver_email) #message= MIMEText(mail_content,'plain','UTF-8') # 以 html 格式寄信 message= MIMEText(mail_content,'html','UTF-8') message['Subject'] = Header(course_title+\" Fossil SCM 帳號通知\", 'UTF-8') # 可以先不寄信, 確定格式正確後再開啟, 是否實際寄出信件, 檢查點 7/7 server.sendmail(\"gmail_address\", receiver_email, message.as_string()) server.quit() 各班所完成的主機: 二甲電腦輔助設計實習: https://cadpa.kmol.info 二乙電腦輔助設計實習: https://cadpb.kmol.info 一甲計算機程式: https://cpa.kmol.info 一乙計算機程式: https://cpb.kmol.info","tags":"Course","url":"https://40623115.github.io/W16/blog/2017-fall-cp-w4.html"}]};