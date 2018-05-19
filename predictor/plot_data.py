# Scatterplot Matrix
from helpers import load_obj
import matplotlib.pyplot as plt
import pandas
from pandas.plotting import scatter_matrix
import pandas
import numpy as np


x = load_obj('x-50000-samples-14:16')[0:1000, 0:11]
y = load_obj('y-50000-samples-14:16')[0:1000, None]

names = ['queue' ,'doc1', 'doc2', 'doc3', 'doc4', 'doc5', 'doc6', 'doc7', 'doc8', 'doc9', 'doc10', 'res']
o = ['sym1', 'sym2', 'sym3', 'sym4', 'sym5', 'sym6', 'sym7', 'sym8', 'sym9', 'sym10', 'sym11', 'sym12', 'hp1', 'hp2', 'hp3']

fm = np.concatenate((x, y), axis=1)

data = pandas.DataFrame(fm, columns=names)
scatter_matrix(data)
plt.show()