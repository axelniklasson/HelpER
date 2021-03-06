import matplotlib.pyplot as plt
from pandas.plotting import scatter_matrix
import pandas
import numpy as np
from helpers import load_obj


def plot():
	x = load_obj('x-50000-samples-14:00')[0:1000, 0:11]
	y = load_obj('y-50000-samples-14:00')[0:1000, None]

	# Plot correlation between
	names = ['queue', 'doc1', 'doc2', 'doc3', 'doc4', 'doc5', 'doc6', 'doc7', 'doc8', 'doc9', 'doc10', 'time']

	fm = np.concatenate((x, y), axis=1)

	data = pandas.DataFrame(fm, columns=names)
	scatter_matrix(data)
	plt.show()

